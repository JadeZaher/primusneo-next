# Implementation Plan: Implement AI-Powered News Engine with Sanity & OpenRouter

## Phase 1: AI Integration and Web Fetching Scaffolding
- [x] Task: Set up OpenRouter integration. [implemented: src/lib/openrouter.ts created, env vars registered.]
    - [x] Add `OPENROUTER_API_KEY` to environment variables.
    - [x] Implement a utility function to send prompts to OpenRouter models.
- [~] Task: Implement a basic web fetcher. [implemented: src/lib/fetcher.ts created with RSS support.]
    - [x] Create a utility to fetch news from targeted tech sources (RSS or JSON APIs).
    - [ ] Implement deduplication logic to avoid processing the same news twice.
- [ ] Task: Conductor - User Manual Verification 'Phase 1: AI Integration and Web Fetching Scaffolding' (Protocol in workflow.md)

## Phase 2: Automated Pipeline Implementation
- [ ] Task: Design and implement the generation prompt.
    - [ ] Refine the prompt to ensure AI-generated posts match the PrimusNeo brand voice.
- [ ] Task: Implement the "Publish to Sanity" logic.
    - [ ] Use the Sanity client to create `news` documents from the AI-generated content.
- [ ] Task: Configure the Cron Job.
    - [ ] Set up a GitHub Action or Vercel Cron to run the pipeline at specified intervals.
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Automated Pipeline Implementation' (Protocol in workflow.md)

## Phase 3: Frontend Update and Refinement
- [ ] Task: Update the `news` listing and post pages to pull from the new/updated schema.
- [ ] Task: Add an "AI-Generated" or "Auto-Curated" badge to these posts for transparency.
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Frontend Update and Refinement' (Protocol in workflow.md)