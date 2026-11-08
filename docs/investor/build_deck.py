"""Build the investor deck: inline the layer emblems from public/images/stack as data URIs.

Edit deck-src.html, then run `python docs/investor/build_deck.py` from the repo root.
See conductor/ecosystem.md for what each claim in the deck rests on.
"""
import base64
import pathlib
import re
import sys

here = pathlib.Path(__file__).resolve().parent
stack = here.parents[1] / "public" / "images" / "stack"
emblems = {
    "AMP": "amp-spatial-os.svg",
    "NEOS": "neos-governance.svg",
    "AZOA": "azoa.svg",
    "FRACTAL": "fractal-engine.svg",
    "PHYSICAL": "physical-infrastructure.svg",
}

source = (here / "deck-src.html").read_text(encoding="utf-8")
for token, filename in emblems.items():
    encoded = base64.b64encode((stack / filename).read_bytes()).decode("ascii")
    source = source.replace(f"%%{token}%%", f"data:image/svg+xml;base64,{encoded}")

leftover = re.findall(r"%%[A-Z]+%%", source)
if leftover:
    sys.exit(f"unreplaced tokens: {leftover}")

out = here / "primusneo-investor-deck.html"
out.write_text(source, encoding="utf-8")
print(f"wrote {out.relative_to(here.parents[1])}: {len(source):,} bytes")
