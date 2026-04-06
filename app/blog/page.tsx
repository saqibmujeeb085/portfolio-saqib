import Link from "next/link";
import { posts } from "@/lib/mock-data";

export default function BlogPage() {
  return <main className="section-padding container-wide"><h1 className="text-5xl font-semibold">Blog</h1><div className="mt-10 grid gap-4">{posts.map(post=><Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-xl border border-white/10 p-5"><h2 className="text-2xl">{post.title}</h2><p className="text-zinc-400">{post.excerpt}</p></Link>)}</div></main>;
}
