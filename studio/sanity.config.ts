// studio/sanity.config.js
import { defineConfig } from "sanity";
import { deskTool }     from "sanity/desk";
import schemas         from "./schemas";

export default defineConfig({
  projectId: "7l3kj0fo",   // in Kleinbuchstaben, Ziffern und Bindestrichen
  dataset:   "production",
  title:     "Responsum Studio",
  basePath:  "/studio",            // falls du es unter /studio mounten willst
  plugins:   [deskTool()],
  schema: {
    types: schemas,
  },
});
