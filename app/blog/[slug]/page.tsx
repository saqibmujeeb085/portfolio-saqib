import { posts } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return <main className="section-padding container-wide"><h1 className="text-5xl font-semibold">{post.title}</h1><p className="mt-4 max-w-3xl text-zinc-300">Long-form insights around development, SEO, and growth strategy.</p></main>;
}
