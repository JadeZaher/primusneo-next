# Implementation Plan: Optimize landing pages for SEO and conversion

## Phase 1: Meta Tags and Semantic HTML Audit
- [x] Task: Audit existing Next.js metadata configurations. [audit: Only layout.tsx has basic metadata. Individual pages lack specific metadata.]
    - [x] Review `src/app/layout.tsx` for global metadata.
    - [x] Review individual page metadata (e.g., `src/app/page.tsx`, `src/app/amp/page.jsx`, etc.).
- [x] Task: Implement improved semantic HTML and Meta Tags.
    - [x] Update title and description tags to include targeted keywords.
    - [x] Add Open Graph tags for better social sharing.
    - [x] Ensure proper heading hierarchy (H1, H2, H3) on the main landing pages.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Meta Tags and Semantic HTML Audit' (Protocol in workflow.md)

## Phase 2: Call to Action (CTA) and Conversion Optimization
- [x] Task: Audit current CTA buttons and forms. [audit: Primary CTAs are GradientButtons leading to other pages. Contact form is basic. Identified need for clearer primary action in navbar and more prominent contact CTA.]
    - [x] Identify primary conversion points (e.g., newsletter signup, contact form, ICO participation).
- [x] Task: Refine CTA positioning and styling. [refinement: Added 'Get Started' button to navbar. Added prominent CTA section to the bottom of the Home page.]
    - [x] Update Tailwind CSS classes to make primary CTAs stand out.
    - [x] Ensure forms have clear validation messages and accessible labels.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Call to Action (CTA) and Conversion Optimization' (Protocol in workflow.md)

## Phase 3: Performance and Asset Optimization
- [x] Task: Audit current asset loading (Images, Spline 3D). [audit: Many <img> tags found that should be replaced with <Image />. Hero images need priority tags. Spline scenes are client-side but could be lazy loaded or optimized for mobile.]
    - [x] Verify `next/image` is used for all static images.
    - [x] Ensure 3D Spline components are loaded efficiently (e.g., lazy loading if below the fold).
- [x] Task: Implement performance improvements. [improvements: Replaced <img> with <Image /> in Home and AMP pages. Optimized hero asset imports.]
    - [x] Apply `priority` tags to hero images/LCP elements.
    - [x] Refactor any overly heavy client-side components to React Server Components where possible.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Performance and Asset Optimization' (Protocol in workflow.md)