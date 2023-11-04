import { defineField, defineType } from "sanity";
import { CommentIcon } from "@sanity/icons";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Comments will not show on the site without approval"
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: Rule => Rule.email()
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "text"
    }),
    defineField({
      name: "post",
      title: "Post",
      type: "reference",
      to: { type: "post" }
    })
  ]
})
