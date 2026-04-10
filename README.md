# Saqib Portfolio — Premium Personal Brand Website

A production-ready Next.js 16.2.2 portfolio + digital services website with animation-rich storytelling, Sanity CMS integration, and Vercel-ready deployment.

## Tech Stack
- Next.js 16.2.2 + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger animations
- Lenis smooth scrolling
- Framer Motion transitions
- Sanity Headless CMS

## Architecture
- `app/` route handlers, page routes, SEO metadata routes
- `components/` reusable UI and motion primitives
- `sections/` modular homepage storytelling sections
- `animations/` GSAP registration + utility helpers
- `hooks/` smooth-scroll + scroll-progress hooks
- `lib/` typed domain models, CMS fetchers, SEO helpers
- `sanity/` client + GROQ queries + schema definitions
- `styles/` animation utilities and global styles
- `utils/` shared low-level helpers

## Setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=
NEXT_PUBLIC_WHATSAPP_NUMBER=15555555555
NEXT_PUBLIC_BOOKING_URL=https://cal.com/your-handle
CONTACT_RECEIVER_EMAIL=hello@example.com
```

## Sanity Content Types Included
- Projects
- Services
- Blog Posts
- Case Studies
- Testimonials
- Experience
- Skills
- Categories
- Navigation
- Footer
- SEO Settings
- Global Settings

## Key UX Systems Included
- Global Lenis smooth scrolling
- Sticky animated header + animated mobile menu
- Custom cursor
- Animated page intro loader
- Route transitions
- Scroll progress indicator
- Back to top CTA
- Marquee text and horizontal pinned showcase
- Dynamic service/project/blog detail pages
- Validated contact form + API endpoint

## Vercel Deployment
1. Push to GitHub.
2. Import the repository in Vercel.
3. Add env vars from `.env.example` in Project Settings.
4. Deploy.
