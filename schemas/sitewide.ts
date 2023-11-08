import { defineField, defineType } from "sanity";
import { EarthGlobeIcon } from "@sanity/icons";

export default defineType({
  name: "sitewide",
  title: "Sitewide",
  type: "document",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      description: "Title of the website"
    }),
    defineField({
      name: "headerText",
      title: "Header Text",
      type: "text",
      description: "Text for the website header"
    }),
    defineField({
      name: "footerText",
      title: "Footer Text",
      type: "text",
      description: "Text for the website footer"
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "menuName",
              title: "Menu Name",
              type: "string"
            },
            {
              name: "slug",
              title: "Slug",
              type: "string"
            }
          ]
        }
      ]
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "fbLink",
          title: "Facebook Link",
          type: "url"
        },
        {
          name: "linkedinLink",
          title: "LinkedIn Link",
          type: "url"
        },
        {
          name: "pinterestLink",
          title: "Pinterest Link",
          type: "url"
        },
        {
          name: "redditLink",
          title: "Reddit Link",
          type: "url"
        },
        {
          name: "twitterLink",
          title: "Twitter Link",
          type: "url"
        }
      ]
    })
  ]
})
