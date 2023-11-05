import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url"

interface ImageSource {
  _type: string;
  asset: {
    _ref: string;
  };
}


// Get a pre-configured url builder from your sanity client
const builder = imageUrlBuilder(client);

export default function urlFor(source: ImageSource) {
  return builder.image(source);
}

