import { defineField, defineType } from "sanity";
import { PackageIcon } from "@sanity/icons";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    })
  ]
})
