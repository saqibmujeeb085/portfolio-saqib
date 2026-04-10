import { groq } from "next-sanity";

export const allServicesQuery = groq`*[_type == "service"] | order(orderRank asc){..., category, slug}`;
export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{..., category, slug}`;
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){..., slug}`;
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{..., slug}`;
export const postsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc){title, slug, excerpt, publishedAt}`;
export const postBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]{title, slug, excerpt, publishedAt, content}`;
