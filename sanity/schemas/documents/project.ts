import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3, validation: (r) => r.required() }),
    defineField({ name: "techStack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "challenges", type: "text" }),
    defineField({ name: "solution", type: "text" }),
    defineField({ name: "liveLink", type: "url" }),
    defineField({ name: "images", type: "array", of: [{ type: "image", options: { hotspot: true } }] })
  ]
});
