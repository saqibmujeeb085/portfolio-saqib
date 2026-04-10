import { getPostBySlug, getPosts } from "@/lib/cms";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="section-padding container-wide">
      <h1 className="text-5xl font-semibold">{post.title}</h1>
      <p className="mt-2 text-sm text-zinc-500">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Unpublished"}</p>
      <p className="mt-4 max-w-3xl text-zinc-300">{post.excerpt}</p>
    </main>
  );
}
