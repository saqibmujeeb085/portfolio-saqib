import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", initialValue: "Footer" }),
    defineField({ name: "copyright", type: "string" }),
    defineField({ name: "socialLinks", type: "array", of: [{ type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "href", type: "url" })] }] })
  ]
});
