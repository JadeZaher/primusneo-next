import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";
import net from "node:net";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function runMigration(databaseUrl) {
  return new Promise((resolve, reject) => {
    const env = { ...process.env };
    if (databaseUrl === undefined) delete env.DATABASE_URL;
    else env.DATABASE_URL = databaseUrl;
    const child = spawn(
      process.execPath,
      ["scripts/migrate-site-submissions.mjs"],
      { cwd: root, env },
    );
    let stdout = "";
    let stderr = "";
    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("exit", (code) => resolve({ code, stdout, stderr }));
  });
}

function assertNoLeak(text, secret) {
  assert.equal(text.includes(secret), false);
  assert.equal(text.includes("primusneo"), false);
  assert.equal(text.includes("postgresql://"), false);
  assert.equal(text.includes("127.0.0.1"), false);
  assert.equal(text.includes("PostgresError"), false);
  assert.equal(text.includes("Unhandled"), false);
  assert.equal(/^\s+at\s/m.test(text), false);
}

function authError() {
  const fields = Buffer.concat([
    Buffer.from("SFATAL\0"),
    Buffer.from("VFATAL\0"),
    Buffer.from("C28P01\0"),
    Buffer.from('Mpassword authentication failed for user "primusneo"\0'),
    Buffer.from("\0"),
  ]);
  const len = Buffer.alloc(4);
  len.writeInt32BE(fields.length + 4);
  return Buffer.concat([Buffer.from("E"), len, fields]);
}

function listen(onConnection) {
  const sockets = new Set();
  const server = net.createServer((socket) => {
    sockets.add(socket);
    socket.on("close", () => sockets.delete(socket));
    onConnection(socket);
  });
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      resolve({
        port: typeof address === "object" && address ? address.port : 0,
        close() {
          for (const socket of sockets) socket.destroy();
          server.unref();
          server.close();
        },
      });
    });
  });
}

void test("migration skips cleanly when DATABASE_URL is unset", async () => {
  const result = await runMigration(undefined);
  assert.equal(result.code, 0);
  assert.match(result.stdout, /DATABASE_URL is unset/);
  assert.equal(result.stderr, "");
});

void test("migration exits 0 when postgres rejects the password", async () => {
  const server = await listen((socket) => {
    socket.on("error", () => {});
    let answered = false;
    socket.on("data", () => {
      if (answered || socket.writableEnded) return;
      answered = true;
      socket.write(authError());
      socket.end();
    });
  });
  const secret = "wrong-password";
  try {
    const result = await runMigration(
      `postgresql://primusneo:${secret}@127.0.0.1:${server.port}/primusneo`,
    );
    assert.equal(result.code, 0);
    assert.match(
      result.stderr,
      /site_submissions migration failed \(28P01\); the site will start without it/,
    );
    assertNoLeak(`${result.stdout}\n${result.stderr}`, secret);
  } finally {
    server.close();
  }
});

void test("migration exits 0 when the database port is closed", async () => {
  const secret = "wrong-password";
  const result = await runMigration(
    `postgresql://primusneo:${secret}@127.0.0.1:1/primusneo`,
  );
  assert.equal(result.code, 0);
  assert.match(
    result.stderr,
    /site_submissions migration failed \(ECONNREFUSED\); the site will start without it/,
  );
  assertNoLeak(`${result.stdout}\n${result.stderr}`, secret);
});

void test(
  "migration exits 0 when the server accepts and drops the socket",
  { timeout: 20_000 },
  async () => {
    const server = await listen((socket) => {
      socket.on("error", () => {});
      socket.on("data", () => socket.destroy());
    });
    const secret = "wrong-password";
    const started = Date.now();
    try {
      const result = await runMigration(
        `postgresql://primusneo:${secret}@127.0.0.1:${server.port}/primusneo`,
      );
      assert.equal(result.code, 0);
      assert.ok(Date.now() - started < 15_000);
      assert.match(
        result.stderr,
        /site_submissions migration failed \(CONNECT_TIMEOUT\); the site will start without it/,
      );
      assertNoLeak(`${result.stdout}\n${result.stderr}`, secret);
    } finally {
      server.close();
    }
  },
);

void test("npm start does not gate next on the migration", () => {
  const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
  assert.equal(
    pkg.scripts.start,
    "node scripts/migrate-site-submissions.mjs; next start",
  );
});
