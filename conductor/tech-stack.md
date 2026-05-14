# Technology Stack

## 1. Core Language
- **TypeScript**: The primary programming language, providing static type safety and enhanced developer experience across both frontend and backend.

## 2. Frontend
- **Framework:** **Next.js** (App Router) for server-side rendering, static site generation, and optimized client-side routing.
- **UI Library:** **React**.
- **Styling:** **Tailwind CSS** for utility-first styling, along with **Radix UI** primitives and **styled-components**.
- **3D Graphics:** **Spline** (`@splinetool/react-spline`) for integrating interactive 3D elements and scenes.

## 3. Backend & API
- **API Layer:** **tRPC** for building end-to-end typesafe APIs, alongside Next.js Server Actions/Routes.
- **Authentication:** **NextAuth.js** for handling user authentication and secure sessions.

## 4. Database & ORM
- **Database:** **PostgreSQL**.
- **ORM:** **Drizzle ORM** for typesafe database queries and schema management.

## 5. Content Management & AI
- **CMS:** **Sanity CMS** for headless content management (News, Dev Docs), integrated via `next-sanity`.
- **AI Integration:** **OpenRouter API** for generating content using various LLMs.
- **Automation:** **GitHub Actions** or **Vercel Cron** for scheduling news-fetching and generation tasks.
- **Web Fetching:** Node.js-based fetching (e.g., `fetch` API, `cheerio` or `playwright` if needed for scraping).