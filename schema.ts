import { type SchemaTypeDefinition } from "sanity"

import author from "./schemas/author"
import blockContent from "./schemas/blockContent"
import category from "./schemas/category"
import comment from "./schemas/comment"
import post from "./schemas/post"
import tag from "./schemas/tag"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, tag, blockContent, comment],
}
