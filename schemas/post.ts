import { defineField, defineType } from "sanity";
import { DocumentIcon } from "@sanity/icons"

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string"
    }),
    defineField({
      name: "description",
      title: "Description",
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
      name: "author",
      title: "Author",
      type: "reference",
      to: {
        type: "author"
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" }
        }
      ]
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "tag" }
        }
      ]
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime"
    }),
    defineField({
      name: "relatedPost",
      title: "Related Posts",
      type: "array",
      readOnly: false,
      of: [
        {
          type: "reference",
          to: { type: "post" }
        }
      ],
      validation: (Rule) => Rule.max(4).error(
        "You can select a maximum of 4 recent posts."
      )
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent"
    })
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage"
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    }
  }
})
