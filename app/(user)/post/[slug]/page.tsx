import React from "react"
import { groq } from "next-sanity"
import { client } from "@/lib/client"
import { notFound } from "next/navigation"

import { PortableText } from "@portabletext/react"
import urlFor from "@/lib/urlFor"

import BlogAuthor from "@/components/App/Blog/BlogAuthor/BlogAuthor.component"
import BlogHeader from "@/components/App/Blog/BlogHeader/BlogHeader.component"
import PostBanner from "@/components/App/PostBanner/PostBanner.component"
import PostComments from "@/components/App/Blog/PostComments/PostComments.component"
import RelatedPosts from "@/components/App/Blog/RelatedPosts/RelatedPosts.component"
import { RichTextComponents } from "@/components/App/RichTextComponents/RichTextComponents.component"
import SharePosts from "@/components/App/Blog/SharePosts/SharePosts.component"
import SidebarNav from "@/components/App/Blog/SidebarNav/SidebarNav.component"

import styles from "./post.module.scss"

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 30

export async function generateStaticParams() {
  const query = groq`
    *[_type=="post"] {
      slug
    }
  `

  const slugs: Post[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug
  }))
}

export default async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0] {
      ...,
      author->,
      categories[]->,
      tags[]->
    }
  `

  const post: Post = await client.fetch(query, { slug })

  if (!post) {
    notFound()
  }

  const relatedPostsReferences:Post[] = post?.relatedPost || []

  const relatedPostsQuery = groq`
    *[_type == "post" && _id in $references] {
      ...,
      author->,
      categories[]->,
      tags[]->
    }
  `

  const references = relatedPostsReferences.map(
    (ref:RelatedPostRef) => ref._ref
  )

  const relatedPosts = await client.fetch(relatedPostsQuery, { references })

  const commentsQuery = groq`
    *[_type == "comment" && post._ref == $postId && approved == true] {
      comment,
      name,
      publishedAt
    }
  `

  const comments = await client.fetch(commentsQuery, { postId: post._id })

  return (
    <article>
      <PostBanner
        imageAltText={post.title}
        imageSrc={urlFor(post.mainImage).url()}
      />
      <div className={styles.container}>
        <div className={`flex ${styles.wrapper}`}>
          <div className={styles.left}>
            <BlogHeader post={post} />
            <SharePosts post={post} />
            <BlogAuthor
              displayDesktop={false}
              post={post}
            />
            <SidebarNav
              displayDesktop={false}
              post={post}
            />
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
            <BlogAuthor
              displayDesktop
              post={post}
            />
            <SidebarNav
              displayDesktop
              post={post}
            />
          </div>
          <div className={styles.full}>
            <RelatedPosts relatedPosts={relatedPosts} />
          </div>
        </div>
      </div>
    </article>
  )
}
