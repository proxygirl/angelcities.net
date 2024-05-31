// ./sanity.config.ts|js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./schemas/schemas";

import { colorInput } from "@sanity/color-input";

import {CogIcon} from '@sanity/icons'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["settings"])

export default defineConfig({
  title: "angelcities.net",
  projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list().title("Content").items([
            S.listItem().title("Site Settings").id("settings").icon(CogIcon).child(
                S.document().schemaType("settings").documentId("settings")
            ),           
            S.divider(),
            S.documentTypeListItem("artist").title("Artists"),              
            S.documentTypeListItem("post").title("Posts"),    
        ])
    }),
    colorInput(),
],
schema: {
  types: schemas,
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),    
},

document: {
  // For singleton types, filter out actions that are not explicitly included
  // in the `singletonActions` list defined above
  actions: (input, context) =>
    singletonTypes.has(context.schemaType)
      ? input.filter(({ action }) => action && singletonActions.has(action))
      : input,
},
    
});