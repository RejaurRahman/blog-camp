import { defineField, defineType } from "sanity";
import { MobileDeviceIcon } from "@sanity/icons";

export default defineType({
  name: "formBuilder",
  title: "Form Builder",
  type: "object",
  icon: MobileDeviceIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "contactContent",
      title: "Content",
      type: "text"
    }),
    defineField({
      name: "formFields",
      title: "Form Fields",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              initialValue: false,
              name: "required",
              title: "Required",
              type: "boolean"
            }),
            defineField({
              name: "fieldName",
              title: "Field Name",
              type: "string",
              validation: Rule => Rule.required()
            }),
            defineField({
              name: "placeholder",
              title: "Placeholder",
              type: "string",
              validation: Rule => Rule.required()
            }),
            defineField({
              initialValue: "text",
              name: "inputType",
              options: {
                layout: "dropdown",
                list: [
                  { value: "email", title: "Email" },
                  { value: "phone", title: "Phone Number" },
                  { value: "text", title: "Text" },
                  { value: "textArea", title: "Text Area" }
                ]
              },
              title: "Input Type",
              type: "string",
              validation: Rule => Rule.required()
            })
          ]
        }
      ]
    })
  ],
  preview: {
    prepare() {
      return {
        media: MobileDeviceIcon,
        subtitle: "Form Builder",
        title: "Custom form setup"
      }
    }
  }
})
