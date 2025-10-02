# Conplexus Site 🌐

Official website for **Conplexus LLC** — a forward-thinking informatics, operations, and healthcare technology brand.

Built with [Next.js](https://nextjs.org) + [TypeScript](https://www.typescriptlang.org) + [Tailwind CSS](https://tailwindcss.com) for speed, scalability, and modern design.

---

## 🚀 Getting Started (Local Development)

### Prerequisites

- Node.js 18+ and npm

### Installation

First, install the dependencies:

```bash
npm install
```

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

### Running Production Build

To run the production build locally:

```bash
npm run start
```

### Linting

To check for code style and quality issues:

```bash
npm run lint
```

### Type Checking

To check for TypeScript type errors:

```bash
npm run typecheck
```

---

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

---

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── about/        # About page
│   ├── contact/      # Contact page (wired to Formspree)
│   ├── privacy/      # Privacy policy page
│   ├── services/     # Services page
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # Reusable React components
└── lib/             # Utility functions and constants
public/              # Static assets
```

### Notes

- **Contact Form**: The contact form is wired to a Formspree stub endpoint (`https://formspree.io/f/example`). Replace this with your production Formspree endpoint before deployment.
- **Privacy Page**: A minimal privacy policy page is available at `/privacy` explaining how contact submissions and analytics are handled.
- **Lighthouse CI**: The repository includes a Lighthouse CI workflow that runs performance audits on pull requests with permissive thresholds.

---

## 📝 License

© 2024 Conplexus™ LLC. All rights reserved.

