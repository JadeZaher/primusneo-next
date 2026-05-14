# Specification: SEO Pillar Pages Vertical Expansion

## Objective
Create a series of high-intent, SEO-optimized landing pages (pillar pages) targeted at specific customer verticals. These pages will not be linked in the main navigation but will serve as entry points for organic search and targeted marketing.

## Target Verticals & Page Slugs
1.  **Real Estate & Property Development** (`/solutions/real-estate`)
2.  **Decentralized Governance (DAOs)** (`/solutions/web3-governance`)
3.  **Smart Infrastructure & IoT** (`/solutions/smart-infrastructure`)
4.  **Institutional Investment & Finance** (`/solutions/institutional-investment`)
5.  **Developer Ecosystems & Open Source** (`/solutions/developer-ecosystems`)
6.  **Supply Chain & Logistics** (`/solutions/supply-chain`)
7.  **Government & Public Sector** (`/solutions/public-governance`)
8.  **Regenerative Finance (ReFi) & Impact** (`/solutions/impact-investing`)
9.  **AI & Organizational Intelligence** (`/solutions/ai-intelligence`)
10. **Community Cooperatives & Local Networks** (`/solutions/community-coops`)

## Page Skeleton Structure
Each page must follow a consistent, high-conversion skeleton:
- **Metadata:** Unique title and description for the specific vertical.
- **Hero Section:** Industry-specific headline and sub-headline emphasizing the USP.
- **Problem/Solution:** Addressing specific pain points of the vertical and how PrimusNeo solves them.
- **Core Layers Integration:** How AMP, OASIS, NEOS, and Fractal Engine specifically benefit this industry.
- **Case Study/Use Case Placeholder:** Concrete examples of application.
- **Vertical-Specific CTA:** Targeted conversion point (e.g., "Request a Demo for Developers").

## Technical Constraints
- Use React Server Components where possible.
- Leverage existing `_components/marketing.jsx` components.
- Ensure unique meta tags for each page.
- No navigation links (orphan pages).