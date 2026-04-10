import { defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "challenge", type: "text" }),
    defineField({ name: "approach", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "result", type: "text" }),
    defineField({ name: "kpis", type: "array", of: [{ type: "string" }] })
  ]
});
