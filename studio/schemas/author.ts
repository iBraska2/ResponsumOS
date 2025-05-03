// studio/schemas/author.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name",  title: "Name",  type: "string" }),
  ],
});
