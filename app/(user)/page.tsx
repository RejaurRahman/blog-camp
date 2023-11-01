import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import BlogList from "@/components/App/Blog/BlogList/BlogList.component";
import MainBanner from "@/components/App/MainBanner/MainBanner.component";

import styles from "./index.module.scss";

const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    categories[]->
  } | order(_publishedAt desc)
`

export const revalidate = 30;

export default async function HomePage() {
  const posts = await client.fetch(query);

  return (
    <div className={`flex ml-auto ${styles.container}`}>
      <MainBanner />
      <div className={`flex ${styles.content}`}>
        <BlogList posts={posts} />
      </div>
    </div>
  )
}
