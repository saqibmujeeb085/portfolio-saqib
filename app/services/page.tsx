import Link from "next/link";
import { services } from "@/lib/mock-data";

export default function ServicesPage() {
  return <main className="section-padding container-wide"><h1 className="text-5xl font-semibold">Services</h1><div className="mt-10 grid gap-4 md:grid-cols-2">{services.map(service=><Link key={service.slug} href={`/services/${service.slug}`} className="rounded-xl border border-white/10 p-5"><p className="text-xs text-violet-400">{service.category}</p><h2 className="text-2xl">{service.title}</h2><p className="text-zinc-400">{service.excerpt}</p></Link>)}</div></main>;
}
