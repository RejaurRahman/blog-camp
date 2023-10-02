/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from "@sanity/vision"
import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from "./env"
import {schema} from "./schema"
import { blogCampTheme } from "./theme"
import StudioNavbar from "./components/Sanity/StudioNavbar/StudioNavbar.component"
import Logo from "./components/Sanity/Logo/Logo.component"

export default defineConfig({
  basePath: "/studio",
  dataset,
  name: "BLOGCAMP_Content_Studio",
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
  projectId,
  // Add and edit the content schema in the "./sanity/schema" folder
  schema,
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: blogCampTheme,
  title: "BLOGCAMP Content Studio",
})
