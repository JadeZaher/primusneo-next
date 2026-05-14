# Specification: Enhance news tool with Sanity CMS

## Objective
Refine and enhance the existing Sanity CMS integration to create a robust news and blog publishing tool for the PrimusNeo platform.

## Scope
- Review current Sanity schemas (`schemas/index.ts`, `schemas/post.ts`).
- Ensure the blog listing page and individual post pages are fully functional and well-styled.
- Implement categories or tags for news items (e.g., "Company Update", "Market News").
- Optimize image handling from Sanity (`@sanity/image-url`).
- Ensure Sanity Studio is accessible and correctly configured for content editors.

## Out of Scope
- Migrating data from an external news source.
- Implementing complex user commenting systems (unless basic Sanity integration suffices).
- Building a custom CMS from scratch.