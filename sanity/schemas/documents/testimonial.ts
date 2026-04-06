import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "quote", type: "text", validation: (r) => r.required() }),
    defineField({ name: "avatar", type: "image", options: { hotspot: true } })
  ]
});
