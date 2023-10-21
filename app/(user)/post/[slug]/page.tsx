import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import urlFor from "@/lib/urlFor";

import BlogHeader from "@/components/App/Blog/BlogHeader/BlogHeader.component";
import PostBanner from "@/components/App/PostBanner/PostBanner.component";
import { RichTextComponents } from "@/components/App/RichTextComponents/RichTextComponents.component"
import SharePosts from "@/components/App/SharePosts/SharePosts.component";

import styles from "./post.module.scss";
import { PortableText } from "@portabletext/react";

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
      <div className={styles.container}>
        <BlogHeader post={post} />
        <div className="flex">
          <div className={styles.left}>
            <PortableText
              value={post.body}
              components={RichTextComponents}
            />
            <SharePosts post={post} />
          </div>
          <div className={styles.right} />
        </div>
      </div>
    </article>
  )
}
