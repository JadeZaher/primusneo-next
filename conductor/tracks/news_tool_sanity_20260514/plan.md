# Implementation Plan: Enhance news tool with Sanity CMS

## Phase 1: Schema Refinement and CMS Configuration
- [ ] Task: Audit and refine Sanity schemas.
    - [ ] Review `schemas/post.ts` for necessary fields (title, slug, mainImage, publishedAt, body).
    - [ ] Add a "Category" or "Tag" schema and link it to posts.
- [ ] Task: Verify Sanity Studio configuration.
    - [ ] Run `npm run sanity:start` and verify the studio is functional.
    - [ ] Ensure `sanity.config.ts` and `sanity.cli.ts` are correctly set up.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Schema Refinement and CMS Configuration' (Protocol in workflow.md)

## Phase 2: Frontend Integration and Styling
- [ ] Task: Optimize the blog listing page (`src/app/blog/page.tsx`).
    - [ ] Fetch posts using GROQ/Sanity client.
    - [ ] Implement a clean, responsive layout for news summaries.
- [ ] Task: Refine the individual post page (`src/app/blog/[slug]/page.tsx`).
    - [ ] Ensure `PortableTextComponents.tsx` handles all block types correctly (images, links, code blocks).
    - [ ] Style the post body for maximum readability.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Frontend Integration and Styling' (Protocol in workflow.md)

## Phase 3: Advanced News Features
- [ ] Task: Implement category filtering on the blog page.
- [ ] Task: Add a "Latest News" section to the marketing landing page.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Advanced News Features' (Protocol in workflow.md)