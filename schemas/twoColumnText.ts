import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "twoColumnText",
  title: "Two Column Text",
  type: "document",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "leftColumn",
      title: "Left Column",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }),
    defineField({
      name: "rightColumn",
      title: "Right Column",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    })
  ],
  options: {
    layout: "grid",
    sortable: true
  }
})
