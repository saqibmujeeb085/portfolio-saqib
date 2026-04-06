import { services } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return <main className="section-padding container-wide"><h1 className="text-5xl font-semibold">{service.title}</h1><p className="mt-4 max-w-2xl text-zinc-300">Production-focused {service.category.toLowerCase()} service delivering measurable growth.</p></main>;
}
