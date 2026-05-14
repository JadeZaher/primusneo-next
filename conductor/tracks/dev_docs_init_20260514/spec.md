# Specification: Build Sanity-Backed Developer Documentation

## Objective
Establish a centralized hub for developer documentation, managed entirely within Sanity CMS, to provide technical guides, API references, and architecture overviews for the PrimusNeo platform.

## Scope
- **Sanity Schema:** Create dedicated schemas for documentation categories, articles, and technical guides.
- **CMS Management:** Enable content editors to easily manage complex technical content (code snippets, diagrams) within Sanity.
- **Frontend Rendering:** Build a dedicated `/docs` section in the Next.js app that dynamically fetches and renders this content.
- **Features:** Implement a sidebar for navigation, breadcrumbs, and syntax highlighting for code blocks.
- **UX:** Ensure the documentation is easily searchable (via Sanity GROQ) and follows the product's UX guidelines.

## Out of Scope
- Migrating massive amounts of existing legacy documentation.
- Building a custom WYSIWYG editor (use Sanity's Portable Text).
- PDF generation for documentation.