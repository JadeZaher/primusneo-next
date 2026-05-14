# Project Workflow

## Guiding Principles

1. **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2. **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
3. **Test-Driven Development (Optional):** Testing is optional for current static/post-based interactions.
4. **Code Coverage (Optional):** High coverage is not required at this stage.
5. **User Experience First:** Every decision should prioritize user experience
6. **Non-Interactive & CI-Aware:** Prefer non-interactive commands.

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1. **Select Task:** Choose the next available task from `plan.md` in sequential order
2. **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`
3. **Write/Update Code:** Implement the required functionality or copy/assets.
4. **Document Deviations:** If implementation differs from tech stack, update `tech-stack.md`.
5. **Stage Code Changes:** Stage all code changes related to the task.
6. **Prepare Task Summary:** Draft a summary for the completed task to be included in the phase commit message.
7. **Update Plan:** Read `plan.md`, find the line for the completed task, update its status from `[~]` to `[x]`.

### Phase Completion Verification and Checkpointing Protocol

**Trigger:** This protocol is executed immediately after a task is completed that also concludes a phase in `plan.md`.

1.  **Announce Protocol Start:** Inform the user that the phase is complete.
2.  **Ensure Test Coverage (Optional):** Verify if any critical files require tests, but skip for static assets.
3.  **Execute Automated Tests (If Applicable):** Run existing tests if they apply to the phase.
4.  **Propose a Manual Verification Plan:** Provide steps for manual verification (e.g., `npm run dev` and checking `localhost:3000`).
5.  **Await Explicit User Feedback:** Ask the user for confirmation.
6.  **Create Checkpoint Commit (Per Phase Commits):**
    - Stage all changes for the phase.
    - Perform the commit. **Include the accumulated task summaries in the commit message body.**
    - Example: `conductor(checkpoint): Checkpoint end of Phase X`
7.  **Get and Record Phase Checkpoint SHA:**
    - Update `plan.md`, appending `[checkpoint: <sha>]` to the phase heading.
8.  **Commit Plan Update:** Stage and commit the `plan.md` modification.
9.  **Announce Completion:** Inform the user.

### Quality Gates

Before marking any task complete, verify:
- [ ] Code follows project's code style guidelines
- [ ] Works correctly on mobile (if applicable)
- [ ] Documentation updated if needed
- [ ] No static/linting errors (`npm run lint`, `tsc --noEmit`)

## Development Commands

### Setup
```bash
npm install
```

### Daily Development
```bash
npm run dev
npm run lint
tsc --noEmit
```

### Before Committing
```bash
npm run check
```

## Definition of Done

A task is complete when:
1. All code implemented to specification
2. Passes linting and type checks
3. Implementation notes added to `plan.md`
4. Changes staged for the phase commit