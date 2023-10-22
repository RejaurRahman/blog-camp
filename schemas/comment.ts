import {defineField, defineType} from "sanity"

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Comments will not show on the site without approval",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.email(),
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{title: "Normal", value: "normal"}],
          lists: [],
        },
      ],
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: {type: "post"},
    }),
  ],
})
