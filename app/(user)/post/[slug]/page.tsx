import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import { PortableText } from "@portabletext/react";
import urlFor from "@/lib/urlFor";

import BlogAuthor from "@/components/App/Blog/BlogAuthor/BlogAuthor.component";
import BlogHeader from "@/components/App/Blog/BlogHeader/BlogHeader.component";
import PostBanner from "@/components/App/PostBanner/PostBanner.component";
import PostComments from "@/components/App/PostComments/PostComments.component";
import { RichTextComponents } from "@/components/App/RichTextComponents/RichTextComponents.component";
import SharePosts from "@/components/App/SharePosts/SharePosts.component";

import styles from "./post.module.scss";

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`
    *[_type=="post"] {
      slug
    }
  `

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug
  }))
}

export default async function Post({ params: {slug} }: Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->,
      tags[]->
    }
  `

  const post: Post = await client.fetch(query, { slug });

  const commentsQuery = groq`
    *[_type == "comment" && post._ref == $postId && approved == true] {
      comment,
      name
    }
  `

  const comments = await client.fetch(commentsQuery, { postId: post._id });

  return (
    <article>
      <PostBanner
        imageAltText={post.title}
        imageSrc={urlFor(post.mainImage).url()}
      />
      <div className={`relative ${styles.container}`}>
        <div className={`flex ${styles.wrapper}`}>
          <div className={styles.left}>
            <BlogHeader post={post} />
            <SharePosts post={post} />
            <BlogAuthor displayDesktop={false} post={post} />
            <PortableText
              value={post.body}
              components={RichTextComponents}
            />
            <PostComments
              comments={comments}
              post={post}
            />
          </div>
          <div className={styles.right}>
            <BlogAuthor displayDesktop post={post} />
          </div>
        </div>
      </div>
    </article>
  )
}
