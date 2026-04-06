import { defineField, defineType } from "sanity";

export default defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", type: "string" }),
    defineField({ name: "siteDescription", type: "text" }),
    defineField({ name: "ogImage", type: "image", options: { hotspot: true } })
  ]
});
