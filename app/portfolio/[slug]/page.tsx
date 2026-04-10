import { getProjectBySlug, getProjects } from "@/lib/cms";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="section-padding container-wide">
      <h1 className="text-5xl font-semibold">{project.title}</h1>
      <p className="mt-4 text-zinc-300">{project.description}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 p-5"><h2 className="text-lg">Role</h2><p className="text-zinc-400">{project.role}</p></div>
        <div className="rounded-xl border border-white/10 p-5"><h2 className="text-lg">Tech Stack</h2><p className="text-zinc-400">{project.techStack.join(" • ")}</p></div>
        <div className="rounded-xl border border-white/10 p-5"><h2 className="text-lg">Challenges</h2><p className="text-zinc-400">{project.challenges}</p></div>
        <div className="rounded-xl border border-white/10 p-5"><h2 className="text-lg">Solution</h2><p className="text-zinc-400">{project.solution}</p></div>
      </div>
      {project.liveLink && <a href={project.liveLink} className="mt-6 inline-flex rounded-full bg-violet-600 px-5 py-3">View Live Project</a>}
    </main>
  );
}
