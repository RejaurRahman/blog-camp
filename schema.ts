import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/author";
import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import comment from "./schemas/comment";
import gallery from "./schemas/gallery";
import page from "./schemas/page";
import post from "./schemas/post";
import tag from "./schemas/tag";
import youtube from "./schemas/youtube";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    author,
    blockContent,
    category,
    comment,
    gallery,
    page,
    post,
    tag,
    youtube
  ]
}
