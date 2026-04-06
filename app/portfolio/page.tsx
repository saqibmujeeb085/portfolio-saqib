import Link from "next/link";
import { projects } from "@/lib/mock-data";

export default function PortfolioPage() {
  return <main className="section-padding container-wide"><h1 className="text-5xl font-semibold">Portfolio</h1><div className="mt-10 grid gap-4 md:grid-cols-2">{projects.map(project=><Link key={project.slug} href={`/portfolio/${project.slug}`} className="rounded-xl border border-white/10 p-5"><h2 className="text-2xl">{project.title}</h2><p className="text-zinc-400">{project.description}</p></Link>)}</div></main>;
}
