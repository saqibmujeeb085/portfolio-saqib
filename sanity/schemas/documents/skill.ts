import { defineField, defineType } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "level", type: "number", validation: (r) => r.min(0).max(100) }),
    defineField({ name: "group", type: "string" })
  ]
});
