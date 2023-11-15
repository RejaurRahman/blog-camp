import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";
import { notFound } from "next/navigation";

import BlogList from "@/components/App/Blog/BlogList/BlogList.component";
import TextBanner from "@/components/App/TextBanner/TextBanner.component";

import styles from "@/app/index.module.scss";

type Props = {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  const query = groq`
    *[_type == "category"] {
      slug
    }
  `

  const categories: Category[] = await client.fetch(query);
  const categorySlugs = categories.map((category) => category.slug.current);

  const slugRoutes = categorySlugs.map((slug) => ({
    slug
  }));

  return slugRoutes;
}

export const revalidate = 30;

export default async function CategoryPosts({ params: { slug } }: Props) {
  const categoryQuery = groq`
    *[_type == "category" && slug.current == $slug][0] {
      _id,
      title
    }
  `

  const category: Category = await client.fetch(categoryQuery, { slug });

  if (!category) {
    notFound();
  }

  const postQuery = groq`
    *[_type == "post" && references("category", $category._id)] {
      ...,
      author->,
      categories[]->,
      tags[]->
    }
  `

  const post: Post[] = await client.fetch(postQuery, { category: category });

  return (
    <div className={`flex ml-auto ${styles.container}`}>
      <TextBanner title={category.title} />
      <div className={`flex ${styles.content}`}>
        <BlogList posts={post} />
      </div>
    </div>
  )
}