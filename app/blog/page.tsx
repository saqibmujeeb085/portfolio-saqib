import Link from "next/link";
import { getPosts } from "@/lib/cms";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="section-padding container-wide">
      <h1 className="text-5xl font-semibold">Blog</h1>
      <div className="mt-10 grid gap-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-xl border border-white/10 p-5 transition hover:border-violet-400/60">
            <h2 className="text-2xl">{post.title}</h2>
            <p className="text-zinc-400">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
