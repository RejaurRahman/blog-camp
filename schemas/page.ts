import { defineField, defineType } from "sanity";
import { PresentationIcon } from "@sanity/icons"

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: PresentationIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200
      }
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text"
        }
      ]
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent"
    })
  ],
  preview: {
    select: {
      title: "title"
    }
  }
})
