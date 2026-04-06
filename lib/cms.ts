import { client } from "@/sanity/lib/client";
import { allServicesQuery, postsQuery, projectsQuery, projectBySlugQuery, serviceBySlugQuery, postBySlugQuery } from "@/sanity/lib/queries";
import { posts as fallbackPosts, projects as fallbackProjects, services as fallbackServices } from "@/lib/mock-data";
import type { BlogPost, Project, Service } from "@/lib/types";

function toService(item: any): Service {
  return {
    _id: item._id,
    title: item.title,
    slug: item.slug?.current ?? item.slug,
    category: item.category,
    excerpt: item.excerpt,
    description: item.description,
    features: item.features
  };
}

function toProject(item: any): Project {
  return {
    _id: item._id,
    title: item.title,
    slug: item.slug?.current ?? item.slug,
    description: item.description,
    role: item.role,
    techStack: item.techStack || [],
    challenges: item.challenges,
    solution: item.solution,
    liveLink: item.liveLink
  };
}

function toPost(item: any): BlogPost {
  return {
    _id: item._id,
    title: item.title,
    slug: item.slug?.current ?? item.slug,
    excerpt: item.excerpt,
    publishedAt: item.publishedAt
  };
}

export async function getServices(): Promise<Service[]> {
  try {
    const data = await client.fetch(allServicesQuery);
    if (!data?.length) return fallbackServices as Service[];
    return data.map(toService);
  } catch {
    return fallbackServices as Service[];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const data = await client.fetch(serviceBySlugQuery, { slug });
    if (!data) return (fallbackServices as Service[]).find((s) => s.slug === slug) || null;
    return toService(data);
  } catch {
    return (fallbackServices as Service[]).find((s) => s.slug === slug) || null;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await client.fetch(projectsQuery);
    if (!data?.length) return fallbackProjects as Project[];
    return data.map(toProject);
  } catch {
    return fallbackProjects as Project[];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const data = await client.fetch(projectBySlugQuery, { slug });
    if (!data) return (fallbackProjects as Project[]).find((p) => p.slug === slug) || null;
    return toProject(data);
  } catch {
    return (fallbackProjects as Project[]).find((p) => p.slug === slug) || null;
  }
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const data = await client.fetch(postsQuery);
    if (!data?.length) return fallbackPosts as BlogPost[];
    return data.map(toPost);
  } catch {
    return fallbackPosts as BlogPost[];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const data = await client.fetch(postBySlugQuery, { slug });
    if (!data) return (fallbackPosts as BlogPost[]).find((p) => p.slug === slug) || null;
    return toPost(data);
  } catch {
    return (fallbackPosts as BlogPost[]).find((p) => p.slug === slug) || null;
  }
}
