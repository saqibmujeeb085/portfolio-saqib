# Saqib Portfolio — Premium Personal Brand Website

A production-ready Next.js 16.2.2 portfolio + digital services website with animation-rich storytelling, Sanity CMS, and Vercel deployment support.

## Tech Stack
- Next.js 16.2.2 + TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Framer Motion transitions
- Sanity Headless CMS

## Project Structure
- `app/` routes, metadata, APIs, sitemap, robots
- `components/` reusable UI and global systems
- `sections/` modular homepage sections
- `animations/` GSAP helpers
- `hooks/` scroll and behavior hooks
- `lib/` constants, SEO, mock fallback data
- `sanity/` client, queries, and schemas
- `styles/` animation and global styling
- `utils/` reserved for helpers

## Installation
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Environment Variables
See `.env.example` for required variables:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_BOOKING_URL`
- `CONTACT_RECEIVER_EMAIL`

## Sanity Setup
1. Create a Sanity project.
2. Use schemas from `sanity/schemas`.
3. Configure env vars in `.env.local`.
4. Replace mock-data usage with GROQ fetches from `sanity/lib/queries.ts` and `sanity/lib/client.ts`.

## Vercel Deployment
1. Push repository to GitHub.
2. Import project in Vercel.
3. Add environment variables in Vercel project settings.
4. Deploy with default Next.js settings.

## Included Features
- Animated page loader
- Route transitions
- Sticky animated header + mobile menu
- Custom cursor
- Scroll progress + back-to-top
- Section storytelling homepage (20 sections)
- Dynamic service/project/blog detail routes
- Contact form with validation + API route
- Metadata, JSON-LD, sitemap.xml, robots.txt

