import { defineField, defineType } from "sanity";

export default defineType({
  name: "globalSettings",
  title: "Global Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "contactEmail", type: "string" }),
    defineField({ name: "whatsApp", type: "string" }),
    defineField({ name: "bookingUrl", type: "url" })
  ]
});
