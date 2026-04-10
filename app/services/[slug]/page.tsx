import { getServiceBySlug, getServices } from "@/lib/cms";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="section-padding container-wide">
      <p className="text-xs uppercase tracking-[0.2em] text-violet-400">{service.category}</p>
      <h1 className="text-5xl font-semibold">{service.title}</h1>
      <p className="mt-4 max-w-2xl text-zinc-300">{service.description || service.excerpt}</p>
      {!!service.features?.length && (
        <ul className="mt-6 grid gap-2 text-zinc-400 md:grid-cols-2">
          {service.features.map((feature) => (
            <li key={feature} className="rounded-lg border border-white/10 p-3">{feature}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
