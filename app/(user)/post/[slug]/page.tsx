import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import urlFor from "@/lib/urlFor";

import PostBanner from "@/components/App/PostBanner/PostBanner.component";

type Props = {
  params: {
    slug: string
  }
}

const query = groq`
  *[_type=="post" && slug.current == $slug][0] {
    ...,
    author->,
    categories[]->
  }
`

export default async function Post({ params: {slug} }: Props) {
  const post: Post = await client.fetch(query, { slug })

  return (
    <article>
      <PostBanner
        imageAltText={post.title}
        imageSrc={urlFor(post.mainImage).url()}
      />
    </article>
  )
}
