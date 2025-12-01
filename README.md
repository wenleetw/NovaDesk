<div align="center">
  <h1>NovaDesk · AI Workspace Assistant</h1>
  <p>An interactive marketing site that spotlights a fictional AI productivity suite.</p>
</div>


## Feature Highlights

- **Responsive layout** with React + Tailwind-style utility classes (implemented via class names).
- **Hero section** with animated badge, layered typography, and dual CTA (primary + secondary).
- **Features grid** describing AI assistants, automation, and integrations.
- **Product demo** block for embedding screenshots or Loom videos.
- **Pricing section** with tier toggles, most-popular highlight, and included vs. excluded features.
- **Sticky scroll-to-top button** powered by React hooks for user-friendly navigation.

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

- Dev server defaults to `http://localhost:5173`.
- Production assets output to `dist/` and can be deployed to Vercel, Netlify, Render, or any static host.

---

## Project Layout

- `App.tsx` – Page shell, section ordering, scroll-to-top logic.
- `components/Navbar.tsx` – Transparent navigation, logo, CTA.
- `components/Hero.tsx` – Headline, supporting copy, CTA buttons, stat highlights.
- `components/Features.tsx` – Modular feature cards with icons.
- `components/ProductDemo.tsx` – Placeholder for video or carousel embed.
- `components/Pricing.tsx` – Tier cards with feature lists and badges.
- `components/Footer.tsx` – Links, contact, and social proof.

Everything is split into clear, reusable React components so sections can be rearranged or swapped without touching the rest of the page.

---

© 2025 NovaDesk (concept project). All product names are fictional and used for demonstration purposes only.
