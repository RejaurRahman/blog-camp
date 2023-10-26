import {defineField, defineType} from "sanity"

export default defineType({
  name: "youtube",
  title: "YouTube Embed",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "YouTube Video URL",
      type: "url",
      description: "You need to ask permission from the holder of the video, or the video needs to be licensed under a creative commons license that allows free use of the video.",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    })
  ]
})
