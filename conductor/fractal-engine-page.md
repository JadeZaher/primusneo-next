# Objective
Create a dedicated page for Fractal Engine, detailing its role as the analytics and intelligence layer, its use of the Hexon standard, and its integration with AMP. Update site navigation to link to the new page.

# Key Files
* `src/app/fractal-engine/page.jsx` (New)
* `src/app/_components/navigation/navbar.jsx`
* `src/app/_components/navigation/footer.jsx`
* `src/app/_data/ecosystem.js`

# Implementation Steps
1.  **Create `src/app/fractal-engine/page.jsx`**:
    *   Build a page layout similar to `/amp` and `/oasis`.
    *   Include a Hero section defining Fractal Engine as the intelligence layer.
    *   Add a "Capabilities" section (Spatial analytics, historical warehousing, automated insights, operational forecasting).
    *   Add a "The Hexon Standard" section detailing interoperability with AMP (Hexon v1.0.0, WASM extensions).
    *   Add an "Integration Pattern" section showing how it fits into the broader stack (ingesting data via OASIS/AMP, processing, and feeding back to governance/dashboards).
2.  **Update `navbar.jsx`**:
    *   Add `{ href: '/fractal-engine', label: 'Fractal Engine', desc: 'Analytics and spatial intelligence' }` to the `platformItems` list.
    *   Add `<MobileLink href="/fractal-engine">Fractal Engine</MobileLink>` to the mobile menu.
3.  **Update `footer.jsx`**:
    *   Add `<li><a href="/fractal-engine" ...>Fractal Engine</a></li>` to the Platform section.
4.  **Update `ecosystem.js`** (Optional but good practice):
    *   If there's an entry that needs a direct link to the new page, add it. The current `platformLayers` doesn't have internal links, but we can ensure consistency.

# Verification
*   Verify the new page renders correctly and matches the site's styling.
*   Verify navigation links in the header, mobile menu, and footer work correctly.