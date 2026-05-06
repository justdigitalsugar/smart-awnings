# Smart Awnings & Canopies - Website Redesign Plan

This plan outlines the scaffolding, design system, and technical approach for the new Next.js website for Smart Awnings & Canopies.

## User Review Required
> [!IMPORTANT]
> Please review the design system choices and the technical scaffolding command below before I proceed. Specifically, let me know if you approve of the exact font pairings and color hex codes!

## Proposed Changes

### 1. Scaffolding & Technical Stack
- **Framework**: Next.js (App Router).
- **Styling**: Vanilla CSS (CSS Modules and a global `index.css`), as TailwindCSS was not explicitly requested.
- **Language**: JavaScript (JSX).
- **SEO**: Next.js built-in metadata API for full SEO readiness, semantic HTML5 structuring, and responsive image loading with `next/image`.
- **Command to run**: `npx create-next-app@latest ./ --js --no-tailwind --eslint --app --src-dir --import-alias "@/*"`

### 2. Design System & Aesthetics
To achieve a "timeless elegance" and "modern feel" that aligns with a high-end, premium item:

**Color Palette**:
- **Backgrounds**: Soft, classic warm tones like Alabaster (`#fcfbf9`) and Cashmere (`#f4efe8`) to feel expensive.
- **Text & Base (Replacing Black)**: A very deep, rich shade of the logo purple (`#1A081A` or `#2A122A`).
- **Call to Actions (Accent)**: The original brand logo color (`#80387F`), used sparingly for buttons and key interactions to draw the eye.

**Typography**:
- **Headings**: *Melodrama* (via Fontshare) - providing a sophisticated, editorial, and timeless look.
- **Body/Text**: *Century Gothic* (system fallback) or *DM Sans* / *Outfit* (Google Fonts) to provide that clean, gothic-style sans-serif readability.

**Layout & Vibe**:
- **Image-Driven**: Full-bleed hero sections, large edge-to-edge imagery with subtle parallax or slow-zoom (Ken Burns effect) micro-animations.
- **Whitespace**: Generous padding and margins to let the typography and imagery breathe, a hallmark of luxury design.
- **Animations**: Smooth, elegant fade-ins on scroll (using Intersection Observer) and subtle hover states (e.g., buttons expanding slightly, images brightening).

### 3. Content & Navigation
Based on the provided website content, the site structure and navigation will be:
- **Navigation Items**: Services, Products, Expertise, Works, Support, FAQs, Contact.
- **Page Structure (Homepage)**:
  1. **Hero**: Large immersive background image, Melodrama heading, and primary CTA.
  2. **About/Intro**: "05+ Years Experienced" with elegant text overlapping a high-quality image.
  3. **Products Grid**: Retractable roofs, Bioclimatic louvres, Awnings, Glass rooms (large cards with hover effects).
  4. **Expertise & Process**: Clean layout explaining the survey and installation process.
  5. **Works/Projects**: Image gallery of completed projects.
  6. **Footer**: Contact details, FAQs, and secondary links.

## Verification Plan
1. Scaffold the application using Next.js.
2. Setup the global CSS with design tokens (CSS variables for the colors and fonts).
3. Import the *Melodrama* font and the sans-serif body font.
4. Build the Homepage layout utilizing the extracted content.
5. Provide a local dev server link or screenshots for review to ensure it matches the premium aesthetic requested.
