# Altomik Technologies — Website

Official website for **Altomik Technologies LTD** built with React, Vite, and Tailwind CSS.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| React Router DOM | 6 | Client-side routing |
| Lucide React | latest | Icons |
| clsx | latest | Conditional class names |

## Project Structure

```
altomik-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx       # Root layout wrapper
│   │   │   ├── Navbar.jsx       # Fixed responsive navbar
│   │   │   └── Footer.jsx       # Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.jsx         # Home hero section
│   │   │   ├── ServicesGrid.jsx # Services cards (home preview + full)
│   │   │   ├── WhyUs.jsx        # Why choose Altomik
│   │   │   ├── Process.jsx      # 4-step engagement process
│   │   │   ├── CTABanner.jsx    # Gold call-to-action strip
│   │   │   └── ContactForm.jsx  # Contact form with validation
│   │   └── ui/
│   │       ├── Logo.jsx         # SVG Apex Mark logo
│   │       ├── Badge.jsx        # Reusable badge component
│   │       ├── SectionWrapper.jsx
│   │       └── ServiceIcon.jsx  # Service-specific icons
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── hooks/
│   │   └── useScrollTop.js
│   ├── App.jsx                  # Router + routes
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind directives + global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone or unzip the project
cd altomik-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

### Preview Production Build

```bash
npm run preview
```

## Deployment Options

### Vercel (Recommended — Free)
1. Push code to GitHub
2. Connect repo at [vercel.com](https://vercel.com)
3. Click Deploy — Vercel auto-detects Vite

### Netlify (Free)
1. Push to GitHub
2. Connect at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Hosting
Upload the contents of `dist/` to any static web host.

## Customisation Guide

### Update contact details
Edit `src/components/layout/Footer.jsx` and `src/components/sections/ContactForm.jsx`

### Add/edit services
Edit the `SERVICES_DATA` array in `src/components/sections/ServicesGrid.jsx`

### Change colours
Edit `tailwind.config.js` under `theme.extend.colors`

### Wire up the contact form
In `src/components/sections/ContactForm.jsx`, replace the `handleSubmit` function with your preferred form backend:
- [Formspree](https://formspree.io) (easiest, free tier)
- [Resend](https://resend.com) (email API)
- Your own Node/Express backend

### Add Google Analytics
Add your GA4 script to `index.html` inside the `<head>` tag.

## Brand Colours

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#111827` | Primary background, headers |
| Gold | `#F59E0B` | Accent, CTAs, highlights |
| White | `#FFFFFF` | Content backgrounds |
| Gray 50 | `#F9FAFB` | Section backgrounds |

## Fonts
- **Montserrat** — Headings, buttons, labels (Google Fonts)
- **DM Sans** — Body text, form inputs (Google Fonts)

---

**Altomik Technologies LTD** — Precision in Every Solution.
