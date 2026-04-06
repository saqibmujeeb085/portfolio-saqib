import { projects } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="section-padding container-wide">
      <h1 className="text-5xl font-semibold">{project.title}</h1>
      <p className="mt-4 text-zinc-300">{project.description}</p>
      <ul className="mt-6 list-disc pl-6 text-zinc-400">{project.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
    </main>
  );
}
