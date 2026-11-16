/** @type {import('next').NextConfig} */
const nextConfig = {
  // The built-in slash redirect is registered ahead of these rules, so a
  // trailing-slash URL would 308 to the bare slug and only then 301 to /blog.
  // Skipping it lets the retired posts 301 in one hop. The catch-all below
  // keeps the same slash strip for every other path.
  skipTrailingSlashRedirect: true,
  images: {
    // Local SVG assets (stack schematics, partner logos) go through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'www.plan-systems.org',
      },
    ],
  },
  async redirects() {
    // Legacy layer name: OASIS became AZOA.
    return [
      {
        source: '/oasis',
        destination: '/azoa',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/newsroom',
        statusCode: 301,
      },
      {
        source: '/news/alpha-is-a-status-not-a-compliment',
        destination: '/newsroom/alpha-is-a-status-not-a-compliment',
        statusCode: 301,
      },
      {
        // Studio status note. The accountability essay is a different piece.
        source: '/blog/alpha-is-a-status-not-a-compliment',
        destination: '/newsroom/alpha-is-a-status-not-a-compliment',
        statusCode: 301,
      },
      {
        source: '/research',
        destination: '/industries',
        statusCode: 301,
      },
      {
        // Retired essay. Nothing else should redirect here.
        source: '/blog/otherwise-its-a-group-chat-with-a-bank-account',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/blog/otherwise-its-a-group-chat-with-a-bank-account/',
        destination: '/blog',
        statusCode: 301,
      },
      {
        // Retired CMS post. The Studio row is left in place.
        source: '/blog/first-among-equals',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/blog/first-among-equals/',
        destination: '/blog',
        statusCode: 301,
      },
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
      {
        source: '/rss.xml',
        destination: '/feed.xml',
        statusCode: 301,
      },
    ];
  },
  typescript: {
    // Set this to false if you want production builds to abort if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set this to false if you want production builds to abort if there are lint errors
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
