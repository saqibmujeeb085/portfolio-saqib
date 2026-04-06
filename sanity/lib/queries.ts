import { groq } from "next-sanity";

export const allServicesQuery = groq`*[_type == "service"] | order(orderRank asc)`;
export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]`;
export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc)`;
export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]`;
export const postsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc)`;
