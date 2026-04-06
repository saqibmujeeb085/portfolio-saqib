import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime" })
  ]
});
