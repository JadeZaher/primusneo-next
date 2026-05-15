# Robust Contact Form

Enhance the current basic contact form (`src/app/contact/page.jsx`) into a comprehensive, multi-step lead capture form. The goal is to collect more detailed information about the user's intent, company, and budget, while keeping the user experience engaging through a step-by-step process.

## Key Enhancements

1.  **Multi-Step Layout**: Break down the form into logical steps to reduce cognitive load and improve completion rates.
    *   **Step 1: Basic Info** (First Name, Last Name, Work Email)
    *   **Step 2: Professional Details** (Company Name, Job Title)
    *   **Step 3: Intent & Budget** (Primary Interest Dropdown, Project Stage/Budget Dropdown)
    *   **Step 4: Final Details** (How did you hear about us?, Message, Submit)
2.  **Robust Fields & Dropdowns**: Replace generic text inputs with structured dropdowns for better data qualification.
3.  **TypeScript Migration**: Convert the existing `page.jsx` to `page.tsx` to leverage TypeScript for robust state management and form validation.
4.  **Progress Indicators**: Add visual cues (e.g., step 1 of 4, or a progress bar) to show users their current position in the flow.
5.  **Validation**: Implement client-side validation for required fields before allowing users to proceed to the next step.
