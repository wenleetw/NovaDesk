<div align="center">
  <h1>NovaDesk · AI Workspace Assistant</h1>
  <p>An interactive marketing site that spotlights a fictional AI productivity suite.</p>
</div>


## Feature Highlights

- **Responsive layout** with React + Tailwind-style utility classes.
- **Hero section** with animated badge, layered typography, and dual CTA.
- **Features grid** describing AI assistants, automation, and integrations.
- **Product demo** block for embedding screenshots or Loom videos.
- **Pricing section** with tier cards and feature comparison.
- **Multi-page routing** with React Router (Home, About, Contact, SignUp, Login).
- **Authentication pages** with social login options (Google, Facebook, GitHub).
- **Sticky Navbar** with smooth scroll navigation to page sections.
- **Scroll-to-top button** for user-friendly navigation.

---

## Tech Stack

| Layer        | Details                           |
| ------------ | --------------------------------- |
| Framework    | React 19 + Vite                   |
| Language     | TypeScript                        |
| Styling      | Tailwind-esque utility classes    |
| Icons        | [`lucide-react`](https://lucide.dev) |

All content lives in the front end, making it perfect for rapid prototyping or handing off to no-code hosting.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build
```

- Dev server defaults to `http://localhost:3000`.
- Production assets output to `dist/` and can be deployed to Vercel, Netlify, Render, or any static host.

---

## Project Layout

```
├── App.tsx              # Router setup
├── pages/
│   ├── Home.tsx         # Landing page
│   ├── About.tsx        # About us page
│   ├── Contact.tsx      # Contact form page
│   ├── SignUp.tsx       # Registration page
│   └── Login.tsx        # Login page
├── components/
│   ├── Navbar.tsx       # Navigation with sticky support
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Feature cards
│   ├── ProductDemo.tsx  # Demo section
│   ├── Pricing.tsx      # Pricing tiers
│   ├── Footer.tsx       # Site footer
│   ├── ScrollToTop.tsx  # Route change scroll handler
│   └── ScrollToTopButton.tsx  # Floating scroll button
```

Everything is split into clear, reusable React components.

---

© 2025 NovaDesk (concept project). All product names are fictional and used for demonstration purposes only.
