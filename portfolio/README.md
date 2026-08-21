# Mehak Khan — Portfolio

A production-quality, recruiter-focused portfolio built with **React + Vite**, **Tailwind CSS v4**, **Framer Motion**, and **React Router**.

## What's inside

- Dark/light theme with persistence (`localStorage`)
- Ambient animated background: canvas particle network, gradient orbs, grid, mouse-follow glow — all respecting `prefers-reduced-motion`
- Glassmorphism navbar with mobile hamburger menu
- Loading screen, scroll reveals, page transitions, Back-to-Top, custom 404
- 9 pages: Home, About, Skills, Projects, Project detail (×8), Experience, Certifications, Achievements, Resume, Contact
- Every main page has **← Previous | Home | Next →** navigation
- Projects page with live search + category filters (All / Full Stack / AI / ML / Data Science / Python / Computer Vision)
- Every project card has **Live Demo**, **GitHub**, and **View Case Study →** — Live Demo is auto-hidden/disabled when no deployment exists (currently: Employee Attrition Prediction)
- Dedicated case-study page per project: Overview, Problem, Solution, Features, Tech Stack, Architecture, Workflow, Screenshots (placeholder), Challenges, Results, Future Improvements
- Contact form with client-side validation, loading/success/error states (opens the visitor's email client via `mailto:` — there's no backend wired up)
- Resume page with **View Resume** / **Download Resume**, both pointing at `/public/resume/Mehak_Khan_Resume.pdf` (the uploaded resume)
- SEO meta tags, Open Graph/Twitter cards, semantic HTML, keyboard focus states

All project data (name, tech, URLs, category) lives in one place: `src/data/projects.js` — nothing else needs to change to add/edit a project.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Deploying

The app uses client-side routing (React Router). Two ready-made configs are included so deep links (e.g. `/projects/pulseboard`) work after a refresh:

- **Netlify** — `public/_redirects` is already set up
- **Vercel** — `vercel.json` is already set up

For either, just connect the repo (or drag-and-drop the `dist/` folder after `npm run build`) and it works out of the box.

## Adding real content later

A few things were deliberately left as clearly-marked placeholders rather than invented, per the original brief:

- **Profile photo** — `src/pages/About.jsx`, swap the `MK` monogram `<span>` for an `<img>`
- **Project screenshots** — `src/pages/ProjectDetail.jsx`, replace the placeholder block with real images
- **Certificate images/links + certificate IDs** — `src/data/certifications.js`
- **og-image** — `public/og-image.svg` is a generated placeholder; swap for a real 1200×630 image if you want a custom social preview

## Tech stack

React 19 · Vite · Tailwind CSS v4 · Framer Motion · React Router v7 · lucide-react
