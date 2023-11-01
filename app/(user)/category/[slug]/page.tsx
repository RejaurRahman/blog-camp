import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import BlogList from "@/components/App/Blog/BlogList/BlogList.component";
import TextBanner from "@/components/App/TextBanner/TextBanner.component";

import styles from "../../index.module.scss";

export const revalidate = 30;

export default async function CategoryPosts({ params: { slug } }: any) {
  const categoryQuery = groq`
    *[_type == "category" && title == $slug][0] {
      _id
    }
  `

  const category: { _id: string } | [] = await client.fetch(categoryQuery, {
    slug
  });

  const postQuery = groq`
    *[_type == "post" && references("category", $category._id)] {
      ...
    }
  `

  const post: Post[] = await client.fetch(postQuery, {
    category
  });

  return (
    <div className={`flex ml-auto ${styles.container}`}>
      <TextBanner title={""} />
      <div className={`flex ${styles.content}`}>
        <BlogList posts={post} />
      </div>
    </div>
  )
}