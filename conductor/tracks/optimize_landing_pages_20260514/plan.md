# Implementation Plan: Optimize landing pages for SEO and conversion

## Phase 1: Meta Tags and Semantic HTML Audit
- [ ] Task: Audit existing Next.js metadata configurations.
    - [ ] Review `src/app/layout.tsx` for global metadata.
    - [ ] Review individual page metadata (e.g., `src/app/page.tsx`, `src/app/amp/page.jsx`, etc.).
- [ ] Task: Implement improved semantic HTML and Meta Tags.
    - [ ] Update title and description tags to include targeted keywords.
    - [ ] Add Open Graph tags for better social sharing.
    - [ ] Ensure proper heading hierarchy (H1, H2, H3) on the main landing pages.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Meta Tags and Semantic HTML Audit' (Protocol in workflow.md)

## Phase 2: Call to Action (CTA) and Conversion Optimization
- [ ] Task: Audit current CTA buttons and forms.
    - [ ] Identify primary conversion points (e.g., newsletter signup, contact form, ICO participation).
- [ ] Task: Refine CTA positioning and styling.
    - [ ] Update Tailwind CSS classes to make primary CTAs stand out.
    - [ ] Ensure forms have clear validation messages and accessible labels.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Call to Action (CTA) and Conversion Optimization' (Protocol in workflow.md)

## Phase 3: Performance and Asset Optimization
- [ ] Task: Audit current asset loading (Images, Spline 3D).
    - [ ] Verify `next/image` is used for all static images.
    - [ ] Ensure 3D Spline components are loaded efficiently (e.g., lazy loading if below the fold).
- [ ] Task: Implement performance improvements.
    - [ ] Apply `priority` tags to hero images/LCP elements.
    - [ ] Refactor any overly heavy client-side components to React Server Components where possible.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Performance and Asset Optimization' (Protocol in workflow.md)