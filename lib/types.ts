export type ServiceCategory = "Development" | "SEO" | "Digital Marketing" | "Consultation";

export interface Service {
  _id?: string;
  title: string;
  slug: string;
  category: ServiceCategory;
  excerpt: string;
  description?: string;
  features?: string[];
}

export interface Project {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  role?: string;
  techStack: string[];
  challenges?: string;
  solution?: string;
  liveLink?: string;
}

export interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt?: string;
}
