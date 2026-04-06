import type { BlogPost, Project, Service } from "@/lib/types";

export const services: Service[] = [
  { slug: "website-development", title: "Website Development", category: "Development", excerpt: "Custom, performant websites.", features: ["Architecture", "UI Engineering", "Performance"] },
  { slug: "react-nextjs", title: "React / Next.js", category: "Development", excerpt: "Modern web applications.", features: ["SSR/ISR", "App Router", "Type-safe APIs"] },
  { slug: "wordpress", title: "WordPress Development", category: "Development", excerpt: "Flexible CMS-driven sites.", features: ["Custom Themes", "ACF", "Headless WP"] },
  { slug: "shopify", title: "Shopify Development", category: "Development", excerpt: "Revenue-focused storefronts.", features: ["Theme dev", "Checkout UX", "Apps"] },
  { slug: "ecommerce", title: "E-commerce Development", category: "Development", excerpt: "Scalable commerce experiences.", features: ["Catalog", "Conversion", "Analytics"] },
  { slug: "landing-pages", title: "Landing Pages", category: "Development", excerpt: "Conversion-first campaign pages.", features: ["A/B tests", "Copy layout", "Speed"] },
  { slug: "gsap-animation", title: "Animation (GSAP)", category: "Development", excerpt: "Interactive storytelling motion.", features: ["ScrollTrigger", "Parallax", "Micro-interactions"] },
  { slug: "technical-seo", title: "Technical SEO", category: "SEO", excerpt: "Core Web Vitals and crawlability fixes." },
  { slug: "on-page-seo", title: "On-page SEO", category: "SEO", excerpt: "Semantic structure and metadata optimization." },
  { slug: "seo-audit", title: "SEO Audit", category: "SEO", excerpt: "Comprehensive ranking and technical audits." },
  { slug: "keyword-research", title: "Keyword Research", category: "SEO", excerpt: "Intent-driven topic maps and clustering." },
  { slug: "local-seo", title: "Local SEO", category: "SEO", excerpt: "Visibility for geo-targeted search intent." },
  { slug: "social-media-marketing", title: "Social Media Marketing", category: "Digital Marketing", excerpt: "Consistent, high-performance social growth." },
  { slug: "paid-ads", title: "Paid Ads", category: "Digital Marketing", excerpt: "Google and Meta ad campaign execution." },
  { slug: "lead-generation", title: "Lead Generation", category: "Digital Marketing", excerpt: "Pipeline-focused acquisition funnels." },
  { slug: "funnel-strategy", title: "Funnel Strategy", category: "Digital Marketing", excerpt: "End-to-end conversion architecture." },
  { slug: "conversion-optimization", title: "Conversion Optimization", category: "Digital Marketing", excerpt: "Data-driven CRO experimentation." },
  { slug: "website-planning", title: "Website Planning", category: "Consultation", excerpt: "Roadmapping and technical planning." },
  { slug: "seo-strategy", title: "SEO Strategy", category: "Consultation", excerpt: "Long-term organic growth blueprint." },
  { slug: "tech-consultation", title: "Tech Consultation", category: "Consultation", excerpt: "Architecture and implementation guidance." },
  { slug: "freelancing-guidance", title: "Freelancing Guidance", category: "Consultation", excerpt: "Systems for independent career growth." },
  { slug: "website-audit", title: "Website Audit", category: "Consultation", excerpt: "UX, performance and SEO scoring." }
];

export const projects: Project[] = [
  { slug: "fintech-dashboard", title: "Fintech Dashboard", description: "Enterprise dashboard with high-frequency data rendering.", role: "Lead Frontend Engineer", techStack: ["Next.js", "TypeScript", "GSAP"], challenges: "Real-time performance at scale", solution: "Virtualized rendering with optimized animation loops", liveLink: "https://example.com" },
  { slug: "luxury-ecommerce", title: "Luxury E-commerce", description: "Premium ecommerce with conversion-first flow.", role: "Full-stack Developer", techStack: ["Shopify", "Headless", "Sanity"], challenges: "High bounce from mobile traffic", solution: "Rebuilt experience with lighter payload and clear CTA hierarchy", liveLink: "https://example.com" }
];

export const posts: BlogPost[] = [
  { slug: "awwwards-interaction-patterns", title: "Awwwards Interaction Patterns", excerpt: "Patterns that elevate digital storytelling.", publishedAt: "2026-03-01" },
  { slug: "seo-for-js-sites", title: "SEO for JavaScript-heavy Sites", excerpt: "A practical technical SEO guide.", publishedAt: "2026-02-15" }
];
