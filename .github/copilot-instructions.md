# Conplexus Site - GitHub Copilot Instructions

## Project Overview

This is the official website for **Conplexus LLC**, a software and innovation firm focused on simplifying complex systems with tailored digital tools for informatics, operations, and healthcare technology.

**Mission**: Create scalable, meaningful technologies that improve quality, alignment, and outcomes for large institutions and smaller organizations.

## Tech Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **React**: 19.1.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **Deployment**: Vercel (optimized for production)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── conplexus-edu/page.tsx  # ConplexusEdu product page
│   ├── contact/page.tsx   # Contact page
│   └── layout.tsx         # Root layout with global styles
├── components/            # Reusable React components
│   ├── Footer.tsx         # Site footer
│   ├── Header.tsx         # Site header/navigation
│   └── DarkModeToggle.tsx # Dark mode switch
└── lib/                   # Utility functions and constants
    └── nav.ts             # Navigation configuration
```

## Development Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Run ESLint checks
```

## Code Style & Conventions

### TypeScript

- Use TypeScript for all `.tsx` and `.ts` files
- Prefer explicit types for function parameters and return values
- Use `interface` for object shapes, `type` for unions/intersections

### React Components

- Use functional components with React hooks
- Export metadata for each page using `export const metadata = {...}`
- Use `"use client"` directive only when client-side features are required (e.g., hooks, interactivity)
- Keep components focused and single-responsibility

### Styling with Tailwind CSS

- Use Tailwind utility classes for all styling
- Follow the custom color palette defined in `tailwind.config.js`:
  - `conx-navy`: #0b1530 (primary dark blue)
  - `conx-blue`: #273469 (secondary blue)
  - `conx-green`: #6BFFB3 (accent green)
  - `conx-yellow`: #F4C87A (accent yellow)
- Support dark mode using the `dark:` prefix
- Use CSS custom properties via `var(--bg)`, `var(--fg)`, etc. for theme-aware colors
- Prefer responsive classes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### File Naming

- Components: PascalCase (e.g., `DarkModeToggle.tsx`)
- Pages: lowercase with dashes (e.g., `conplexus-edu/page.tsx`)
- Utilities: camelCase (e.g., `nav.ts`)

### Component Structure

Follow this pattern for pages:

```tsx
// src/app/example/page.tsx
export const metadata = {
  title: "Page Title | Conplexus",
  description: "Page description for SEO",
};

export default function ExamplePage() {
  return (
    <div className="container py-10 sm:py-14 lg:py-20 space-y-16">
      {/* Page content */}
    </div>
  );
}
```

## Brand & Design Guidelines

- **Brand Name**: Conplexus™ (use trademark symbol)
- **Tagline**: "Connecting the Complexities between Us"
- **Products**: ConplexusEdu™, CurricuLogic™
- **Tone**: Professional, approachable, innovation-focused
- **Design**: Modern, clean, accessible, responsive-first

### Layout Patterns

- Use `container` class for max-width content with responsive padding
- Consistent spacing: `space-y-16 lg:space-y-20` for sections
- Section max-widths: `max-w-3xl` or `max-w-4xl` for readability
- Card components: `bg-card border border-default rounded-2xl p-6`

## Key Features

- **Dark Mode**: Persistent theme switching with system preference fallback
- **Responsive Design**: Mobile-first approach with breakpoints at sm, md, lg, xl, 2xl
- **SEO**: Metadata exported from each page for Next.js optimization
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation

## Navigation Structure

Current routes (defined in `src/lib/nav.ts`):
- `/` - Home
- `/about` - About Conplexus
- `/conplexus-edu` - ConplexusEdu products and services
- `/contact` - Contact information

## Best Practices

1. **Performance**: Use Next.js Image component for images, minimize client-side JavaScript
2. **Accessibility**: Include `aria-label` and proper semantic HTML
3. **SEO**: Always export metadata for pages, use descriptive titles and descriptions
4. **Code Quality**: Run `npm run lint` before committing
5. **Responsiveness**: Test layouts at multiple breakpoints (mobile, tablet, desktop)
6. **Dark Mode**: Always provide both light and dark mode styles using Tailwind's `dark:` prefix

## Common Tasks

### Adding a New Page

1. Create file in `src/app/[route]/page.tsx`
2. Export metadata object with title and description
3. Create default export function component
4. Add route to `src/lib/nav.ts` if it should appear in navigation
5. Update Footer links in `src/components/Footer.tsx` if needed

### Adding a New Component

1. Create file in `src/components/[ComponentName].tsx`
2. Use PascalCase for component and file names
3. Add `"use client"` directive if using React hooks or browser APIs
4. Follow existing component patterns for styling and structure

### Modifying Styles

1. Prefer Tailwind utilities over custom CSS
2. Update `tailwind.config.js` for new design tokens
3. Use CSS custom properties in `src/app/globals.css` for theme-aware colors
4. Test changes in both light and dark modes

## Important Notes

- The site uses Next.js App Router (not Pages Router)
- All pages are Server Components by default unless marked with `"use client"`
- Contact email: conplexus.llc@gmail.com
- Company: Conplexus LLC (MIT Licensed)
