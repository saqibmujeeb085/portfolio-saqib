import { type SchemaTypeDefinition } from "sanity";
import { blogPost, caseStudy, category, experience, footer, globalSettings, navigation, project, seoSettings, service, skill, testimonial } from "./documents";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    service,
    blogPost,
    caseStudy,
    testimonial,
    experience,
    skill,
    category,
    navigation,
    footer,
    seoSettings,
    globalSettings
  ]
};
