# Implementation Plan: Build Sanity-Backed Developer Documentation

## Phase 1: Sanity Schema for Documentation
- [ ] Task: Design and implement documentation schemas.
    - [ ] Create a `docArticle` schema with fields for title, slug, content (Portable Text), and category.
    - [ ] Create a `docCategory` schema to organize articles into sections (e.g., "Getting Started", "API Reference").
- [ ] Task: Configure Portable Text for technical content.
    - [ ] Ensure the editor supports code blocks with language selection and image uploads.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Sanity Schema for Documentation' (Protocol in workflow.md)

## Phase 2: Documentation Frontend Scaffolding
- [ ] Task: Create the base `/docs` route and layout.
    - [ ] Implement a dynamic sidebar that fetches categories and articles from Sanity.
- [ ] Task: Build the dynamic article page (`/docs/[slug]`).
    - [ ] Fetch article content by slug and render using `PortableTextComponents.tsx`.
    - [ ] Implement syntax highlighting for code blocks using a library like `prismjs` or `shiki`.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Documentation Frontend Scaffolding' (Protocol in workflow.md)

## Phase 3: Navigation and Search Refinement
- [ ] Task: Implement breadcrumbs and "Previous/Next" article links.
- [ ] Task: (Optional) Implement a simple search functionality using Sanity's `GROQ` search across doc titles and content.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Navigation and Search Refinement' (Protocol in workflow.md)