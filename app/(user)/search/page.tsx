import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import ArticlePost from "@/components/App/Blog/ArticlePost/ArticlePost.component";

import postStyles from "@/app/(user)/post/[slug]/post.module.scss";
import styles from "./page.module.scss";

export const revalidate = 30;

const query = groq`
  *[_type == "post" && (
    author->name match $searchQuery ||
    categories[]->title match $searchQuery ||
    tags[]->title match $searchQuery ||
    title match $searchQuery
  )] {
    ...,
    author->,
    categories[]->,
    tags[]->
  }
`

export default async function Search({ searchParams }: { searchParams: { query: string } }) {
  const searchQuery = searchParams.query;

  const searchResult: Post[] = await client.fetch(query, { searchQuery });

  return (
    <div className={styles.container}>
      <div className={`flex ${postStyles.wrapper}`}>
        <div className="w-full">
          <h1 className={`relative font-bold pb-12 mb-12 text-center ${styles.title}`}>
            Search Results
          </h1>
          {searchResult.map((post, index: number) => {
            return (
              <ArticlePost
                key={index}
                post={post}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
