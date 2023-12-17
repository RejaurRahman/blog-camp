import { defineField, defineType } from "sanity"
import { ImagesIcon } from "@sanity/icons"

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  icon: ImagesIcon,
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text"
            },
            {
              name: "caption",
              type: "string",
              title: "Caption"
            }
          ]
        })
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        media: ImagesIcon,
        title: "Gallery"
      }
    }
  }
})
