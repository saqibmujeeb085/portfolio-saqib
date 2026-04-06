import { SectionTitle, MagneticButton } from "@/components/ui";
import Image from "next/image";
import { Marquee } from "@/components/Marquee";
import { HorizontalShowcase } from "@/components/HorizontalShowcase";
import { getPosts, getProjects, getServices } from "@/lib/cms";

function BaseSection({ id, title, children, dark = false }: { id: string; title: string; children?: React.ReactNode; dark?: boolean }) {
  return (
    <section id={id} className={`section-padding ${dark ? "bg-zinc-950" : "bg-black"}`}>
      <div className="container-wide">
        <SectionTitle title={title} />
        {children}
      </div>
    </section>
  );
}

export async function HomeSections() {
  const [services, projects, posts] = await Promise.all([getServices(), getProjects(), getPosts()]);

  return (
    <>
      <BaseSection id="hero" title="Awwwards-level digital experiences for brands that want to lead.">
        <p className="max-w-2xl text-zinc-300">Creative development, SEO intelligence, and growth systems in one partner.</p>
        <div className="mt-8 flex gap-4"><MagneticButton href="/consultation">Book Consultation</MagneticButton></div>
      </BaseSection>
      <BaseSection id="clients" title="Trusted by ambitious teams" dark><p>Google • Shopify • Startup Founders • Agencies</p><div className="mt-6"><Marquee text="Web Development • SEO • Digital Marketing • Consultation" /></div></BaseSection>
      <BaseSection id="about-preview" title="About"><p>Senior creative developer building performant, conversion focused experiences.</p></BaseSection>
      <BaseSection id="services-overview" title="Services Overview" dark><div className="grid gap-4 md:grid-cols-3">{services.slice(0,6).map(s=><article key={s.slug} className="rounded-xl border border-white/10 p-5"><h3>{s.title}</h3><p className="text-sm text-zinc-400">{s.excerpt}</p></article>)}</div></BaseSection>
      <BaseSection id="development-services" title="Development Services"><p>React, Next.js, WordPress, Shopify, e-commerce and animation systems.</p></BaseSection>
      <BaseSection id="seo-services" title="SEO Services" dark><p>Technical SEO, audits, and content architecture to win SERPs.</p></BaseSection>
      <BaseSection id="marketing-services" title="Digital Marketing Services"><p>Campaigns, lead generation funnels, and conversion optimization.</p></BaseSection>
      <BaseSection id="consultation" title="Consultation Section" dark><MagneticButton href="/consultation">Schedule a Strategy Call</MagneticButton></BaseSection>
      <BaseSection id="process" title="Process Section"><p>Discover → Strategize → Design → Build → Optimize.</p><div className="mt-8 overflow-hidden rounded-xl border border-white/10"><HorizontalShowcase /></div></BaseSection>
      <BaseSection id="featured-portfolio" title="Featured Portfolio" dark><div className="grid gap-6 md:grid-cols-2">{projects.map(p=><article key={p.slug}><Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" alt={p.title} width={700} height={500} loading="lazy" className="mb-3 h-56 w-full rounded-xl object-cover"/><h3>{p.title}</h3></article>)}</div></BaseSection>
      <BaseSection id="case-studies" title="Case Studies Preview"><p>Deep dives into strategy, challenges and measurable outcomes.</p></BaseSection>
      <BaseSection id="experience" title="Experience Timeline" dark><p>8+ years crafting digital products and growth engines.</p></BaseSection>
      <BaseSection id="skills" title="Skills & Tools"><p>Next.js, TypeScript, GSAP, Framer Motion, Sanity, SEO, CRO.</p></BaseSection>
      <BaseSection id="testimonials" title="Testimonials" dark><p>“Saqib transformed our conversion rate and site speed.”</p></BaseSection>
      <BaseSection id="blog-preview" title="Blog Preview"><div className="grid gap-4 md:grid-cols-2">{posts.map(p=><article key={p.slug} className="rounded-xl border border-white/10 p-5"><h3>{p.title}</h3><p className="text-zinc-400">{p.excerpt}</p></article>)}</div></BaseSection>
      <BaseSection id="pricing" title="Pricing / Packages" dark><p>Starter, Growth, and Premium custom retainers.</p></BaseSection>
      <BaseSection id="faq" title="FAQ Section"><p>Answers about timelines, process, and engagement models.</p></BaseSection>
      <BaseSection id="cta" title="Hire me to build your next competitive edge." dark><MagneticButton href="/contact">Start Project</MagneticButton></BaseSection>
      <BaseSection id="contact" title="Contact Section"><p>Email hello@example.com or use the contact form.</p></BaseSection>
    </>
  );
}
