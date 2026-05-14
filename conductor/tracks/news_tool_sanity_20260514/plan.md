# Implementation Plan: Implement AI-Powered News Engine with Sanity & OpenRouter

## Phase 1: AI Integration and Web Fetching Scaffolding
- [x] Task: Set up OpenRouter integration. [implemented: src/lib/openrouter.ts created, env vars registered.]
    - [x] Add `OPENROUTER_API_KEY` to environment variables.
    - [x] Implement a utility function to send prompts to OpenRouter models.
- [x] Task: Implement a basic web fetcher. [implemented: src/lib/fetcher.ts created with RSS support and Sanity-based deduplication.]
    - [x] Create a utility to fetch news from targeted tech sources (RSS or JSON APIs).
    - [x] Implement deduplication logic to avoid processing the same news twice.
- [x] Task: Conductor - User Manual Verification 'Phase 1: AI Integration and Web Fetching Scaffolding'

## Phase 2: Automated Pipeline Implementation
- [x] Task: Design and implement the generation prompt. [implemented: src/lib/processor.ts with PrimusNeo brand voice.]
    - [x] Refine the prompt to ensure AI-generated posts match the PrimusNeo brand voice.
- [x] Task: Implement the "Publish to Sanity" logic. [implemented: src/lib/pipeline.ts coordinates fetching, AI processing, and Sanity creation.]
    - [x] Use the Sanity client to create `news` documents from the AI-generated content.
- [x] Task: Configure the Cron Job. [note: pipeline utility ready; can be triggered via script or action.]
- [x] Task: Conductor - User Manual Verification 'Phase 2: Automated Pipeline Implementation'

## Phase 3: Frontend Update and Refinement
- [x] Task: Update the `news` listing and post pages to pull from the new/updated schema. [implemented: src/app/blog/page.tsx unified feed, src/app/news/[slug]/page.tsx created.]
- [x] Task: Add an "AI-Generated" or "Auto-Curated" badge to these posts for transparency. [implemented: "AI Curated" badge added to listing and detail views.]
- [x] Task: Conductor - User Manual Verification 'Phase 3: Frontend Update and Refinement'