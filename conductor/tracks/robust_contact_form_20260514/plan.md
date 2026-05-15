# Implementation Plan: Robust Contact Form

## Objective
Convert the existing basic contact form into a multi-step, TypeScript-based lead qualification form with structured data collection via dropdowns.

## Key Files & Context
- **Target File:** `src/app/contact/page.jsx` (will be renamed to `src/app/contact/page.tsx`)
- **Dependencies:** React (`useState`), HTML form elements. No external libraries required unless specified (e.g., Lucide React for icons).

## Implementation Steps

### Phase 1: Setup and State Management
- [x] Rename `src/app/contact/page.jsx` to `src/app/contact/page.tsx`.
- [x] Define TypeScript interfaces for the form state:
  - `firstName`, `lastName`, `workEmail`, `companyName`, `jobTitle`, `interest`, `budget`, `source`, `message`.
- [x] Implement a `currentStep` state variable (number from 1 to 4) to track the active step.
- [x] Create a robust `handleChange` function that handles both input and select elements.

### Phase 2: Form UI Construction
- [x] Create UI for **Step 1: Personal Info** (First Name, Last Name, Work Email).
- [x] Create UI for **Step 2: Professional Info** (Company Name, Job Title).
- [x] Create UI for **Step 3: Intent** (Primary Interest Dropdown, Budget Dropdown).
  - *Interest Options:* Spatial Explorer, Fractal Engine, Fractionalization, Governance Platform, Investment/ICO, General Inquiry, Partnership.
  - *Budget Options:* Exploring/Research, Planning (<$50k budget), Ready to Build ($50k-$200k), Enterprise (>$200k).
- [x] Create UI for **Step 4: Final Details** (Referral Source Dropdown, Message Textarea).
  - *Source Options:* Search Engine, Social Media, Referral, Event, Other.

### Phase 3: Validation and Navigation
- [x] Add "Next" and "Back" buttons to navigate between steps.
- [x] Implement step-specific validation before allowing the user to proceed (e.g., require First Name and Email before proceeding to Step 2).
- [x] Add a visual progress indicator (e.g., "Step 1 of 4" or a simple progress bar) at the top of the form.

### Phase 4: Submission State
- [x] Update the `handleSubmit` function to validate all data one final time.
- [x] Display a successful submission state or handle error gracefully.

## Verification & Testing
- [x] Verify that navigating back and forth preserves form data.
- [x] Ensure that required fields block progression to the next step if empty.
- [x] Confirm the layout aligns with the existing `vite-grid` and black theme aesthetics.
- [x] Validate responsive behavior on mobile (single column layout inside the multi-step form container).
