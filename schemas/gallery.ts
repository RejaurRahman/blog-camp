import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "array",
  icon: ImagesIcon,
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
        }
      ]
    })
  ],
  options: {
    layout: "grid",
    sortable: true
  }
})
