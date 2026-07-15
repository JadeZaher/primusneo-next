"""Assemble the PrimusNeo Engagement Models document set into a single PDF.

Reads all markdown files in the engagement-models tree in a deterministic
order, renders them through python-markdown with extensions, wraps the result
in a styled HTML shell, then converts to PDF via Chrome / Edge headless
``--print-to-pdf``.

Why Chrome headless instead of WeasyPrint: WeasyPrint depends on Pango / GLib
runtimes that are typically missing on stock Windows machines. Chrome (or
Edge) is already on every Windows dev box, ships its own renderer, and
produces excellent print-grade output via standard CSS print rules.

Run:  python docs/engagement-models/build_pdf.py
Out:  docs/engagement-models/PrimusNeo-Engagement-Models.pdf
"""

from __future__ import annotations

import os
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from urllib.parse import quote

try:
    import markdown
except ImportError:
    sys.exit("python-markdown not installed. Run: pip install markdown")


ROOT = Path(__file__).resolve().parent


MANIFEST: list[tuple[str, str]] = [
    ("00-overview.md", "Front Matter"),
    ("01-pricing-model.md", "Framework"),
    ("02-licensing-model.md", "Framework"),
    ("03-services-catalog.md", "Framework"),
    ("04-community-pilot-pricing.md", "Framework"),
    ("layers/amp.md", "Layer Engagement Models"),
    ("layers/neos.md", "Layer Engagement Models"),
    ("layers/oas.md", "Layer Engagement Models"),
    ("layers/fractal-engine.md", "Layer Engagement Models"),
    ("industries/agriculture.md", "Industry Engagement Models"),
    ("industries/construction.md", "Industry Engagement Models"),
    ("industries/energy.md", "Industry Engagement Models"),
    ("industries/finance.md", "Industry Engagement Models"),
    ("industries/governance.md", "Industry Engagement Models"),
    ("industries/healthcare.md", "Industry Engagement Models"),
    ("industries/logistics.md", "Industry Engagement Models"),
    ("industries/manufacturing.md", "Industry Engagement Models"),
    ("industries/robotics.md", "Industry Engagement Models"),
    ("industries/technology.md", "Industry Engagement Models"),
    ("research/layer-comparables.md", "Research Appendix"),
    ("research/agriculture.md", "Research Appendix"),
    ("research/construction.md", "Research Appendix"),
    ("research/energy.md", "Research Appendix"),
    ("research/finance.md", "Research Appendix"),
    ("research/governance.md", "Research Appendix"),
    ("research/healthcare.md", "Research Appendix"),
    ("research/logistics.md", "Research Appendix"),
    ("research/manufacturing.md", "Research Appendix"),
    ("research/robotics.md", "Research Appendix"),
    ("research/technology.md", "Research Appendix"),
]


MD_EXTENSIONS = [
    "extra",
    "toc",
    "sane_lists",
    "smarty",
    "admonition",
]


PRINT_CSS = """
@page {
    size: Letter;
    margin: 0.85in 0.75in 0.85in 0.75in;
}

html, body {
    font-family: -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 10.5pt;
    line-height: 1.45;
    color: #1a1a1a;
}

.cover {
    page-break-after: always;
    height: 9.0in;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.cover h1 {
    font-size: 42pt;
    margin: 0 0 0.10in 0;
    color: #0a0a0a;
    border: none;
    letter-spacing: -0.02em;
}
.cover .sub {
    font-size: 18pt;
    color: #444;
    margin-bottom: 0.6in;
    font-weight: 300;
}
.cover .meta {
    font-size: 11pt;
    color: #555;
}
.cover .ribbon {
    margin-top: 0.7in;
    padding: 0.18in 0;
    border-top: 2px solid #0a0a0a;
    border-bottom: 2px solid #0a0a0a;
    font-size: 13pt;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    color: #0a0a0a;
}

.toc-section {
    page-break-after: always;
}
.toc-section h1 {
    border-bottom: 2px solid #0a0a0a;
    padding-bottom: 0.08in;
    margin-bottom: 0.20in;
}
.toc-section .toc-group {
    margin: 0.15in 0;
}
.toc-section .toc-group-label {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 10pt;
    color: #555;
    margin: 0.10in 0 0.05in 0;
}
.toc-section .toc-item {
    font-size: 11pt;
    margin: 0.04in 0 0.04in 0.20in;
    color: #1a1a1a;
}

.section-break {
    page-break-before: always;
}

h1, h2, h3, h4, h5, h6 {
    color: #0a0a0a;
    page-break-after: avoid;
}
h1 {
    font-size: 22pt;
    margin: 0 0 0.15in 0;
    padding-bottom: 0.08in;
    border-bottom: 2px solid #0a0a0a;
}
h2 {
    font-size: 15pt;
    margin: 0.30in 0 0.10in 0;
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: 0.04in;
}
h3 { font-size: 12pt; margin: 0.22in 0 0.07in 0; }
h4 { font-size: 10.5pt; margin: 0.18in 0 0.05in 0; font-weight: 700; }

p { margin: 0 0 0.10in 0; orphans: 3; widows: 3; }

blockquote {
    margin: 0.10in 0;
    padding: 0.08in 0.15in;
    background: #f5f5f5;
    border-left: 3px solid #999;
    font-style: italic;
    color: #333;
    page-break-inside: avoid;
}

ul, ol { margin: 0 0 0.10in 0.25in; padding: 0; }
li { margin: 0 0 0.04in 0; }

code {
    font-family: "SFMono-Regular", "Menlo", "Consolas", monospace;
    font-size: 9pt;
    background: #f1f1f1;
    padding: 1px 4px;
    border-radius: 3px;
}
pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    padding: 0.08in 0.12in;
    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-size: 8.5pt;
    line-height: 1.35;
    page-break-inside: avoid;
}
pre code { background: transparent; padding: 0; font-size: 8.5pt; }

table {
    border-collapse: collapse;
    width: 100%;
    margin: 0.10in 0;
    font-size: 9pt;
    page-break-inside: avoid;
}
th, td {
    border: 1px solid #ccc;
    padding: 4px 6px;
    text-align: left;
    vertical-align: top;
}
th { background: #ececec; font-weight: 700; }

a { color: #1a4d80; text-decoration: none; word-wrap: break-word; }
a:hover { text-decoration: underline; }

hr { border: none; border-top: 1px solid #ccc; margin: 0.15in 0; }

table, blockquote, pre { page-break-inside: avoid; }
"""


def render_section(path: Path, section_label: str, is_first: bool) -> str:
    text = path.read_text(encoding="utf-8")
    md = markdown.Markdown(extensions=MD_EXTENSIONS, output_format="html5")
    body = md.convert(text)
    classes = "section-break" if not is_first else ""
    return f'<section class="{classes}" data-section="{section_label}">{body}</section>'


def build_cover() -> str:
    return """
    <section class="cover">
        <h1>PrimusNeo</h1>
        <div class="sub">Commercial Engagement Models &amp; Value-Based Pricing</div>
        <div class="meta">Internal v0.1 &middot; 2026-05-23</div>
        <div class="ribbon">Proof Over Promises</div>
    </section>
    """


def build_toc(manifest: list[tuple[str, str]]) -> str:
    groups: dict[str, list[str]] = {}
    order: list[str] = []
    for rel_path, label in manifest:
        if label not in groups:
            groups[label] = []
            order.append(label)
        title = rel_path.replace(".md", "")
        groups[label].append(title)

    out = ['<section class="toc-section"><h1>Contents</h1>']
    for label in order:
        out.append(f'<div class="toc-group"><div class="toc-group-label">{label}</div>')
        for title in groups[label]:
            out.append(f'<div class="toc-item">{title}</div>')
        out.append("</div>")
    out.append("</section>")
    return "\n".join(out)


def find_browser() -> str:
    candidates = [
        os.environ.get("CHROME_PATH"),
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        shutil.which("chrome"),
        shutil.which("msedge"),
        shutil.which("google-chrome"),
    ]
    for c in candidates:
        if c and Path(c).exists():
            return c
    sys.exit(
        "No Chrome / Edge found. Install one, or set CHROME_PATH env var to the .exe path."
    )


def main() -> int:
    missing = [p for p, _ in MANIFEST if not (ROOT / p).exists()]
    if missing:
        print("ERROR: missing files:")
        for m in missing:
            print(f"  - {m}")
        return 2

    fragments = [build_cover(), build_toc(MANIFEST)]
    for i, (rel_path, label) in enumerate(MANIFEST):
        fragments.append(render_section(ROOT / rel_path, label, is_first=False))

    html_body = "\n".join(fragments)
    html_doc = (
        "<!doctype html><html><head><meta charset='utf-8'>"
        "<title>PrimusNeo Engagement Models</title>"
        f"<style>{PRINT_CSS}</style>"
        "</head><body>" + html_body + "</body></html>"
    )

    # Write HTML next to the PDF so it's inspectable + re-renderable.
    html_path = ROOT / "_build" / "engagement-models.html"
    html_path.parent.mkdir(exist_ok=True)
    html_path.write_text(html_doc, encoding="utf-8")
    print(f"Wrote {html_path}  ({html_path.stat().st_size/1024:.1f} KB)")

    browser = find_browser()
    output = ROOT / "PrimusNeo-Engagement-Models.pdf"

    # Use a fresh user-data-dir so we don't conflict with the user's main browser session.
    with tempfile.TemporaryDirectory(prefix="primusneo-pdf-") as profile:
        url = "file:///" + quote(str(html_path).replace("\\", "/"))
        cmd = [
            browser,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            f"--user-data-dir={profile}",
            "--no-pdf-header-footer",
            f"--print-to-pdf={output}",
            "--print-to-pdf-no-header",
            "--virtual-time-budget=20000",
            url,
        ]
        print("Running:", " ".join(cmd[:1]) + " ... " + url)
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
        if result.returncode != 0:
            print("Chrome stdout:", result.stdout[-2000:])
            print("Chrome stderr:", result.stderr[-2000:])
            return result.returncode or 1

    if not output.exists():
        print("ERROR: Chrome ran but no PDF was produced.")
        return 1

    print(f"Wrote {output}  ({output.stat().st_size/1024:.1f} KB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
