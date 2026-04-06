import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", type: "string", options: { list: ["Development", "SEO", "Digital Marketing", "Consultation"] }, validation: (r) => r.required() }),
    defineField({ name: "orderRank", type: "number" }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "features", type: "array", of: [{ type: "string" }] })
  ]
});
