import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import schemas from "./schemas"

export default defineConfig({
  projectId: "7l3kj0fo",
  dataset: "production",
  title: "Responsum Studio",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
})
