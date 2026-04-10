import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", initialValue: "Main Navigation" }),
    defineField({
      name: "items",
      type: "array",
      of: [{ type: "object", fields: [defineField({ name: "label", type: "string" }), defineField({ name: "href", type: "string" })] }]
    })
  ]
});
