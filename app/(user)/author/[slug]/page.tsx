import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import BlogList from "@/components/App/Blog/BlogList/BlogList.component";
import TextBanner from "@/components/App/TextBanner/TextBanner.component";

import styles from "../../index.module.scss";

type Props = {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  const query = groq`
    *[_type == "author"] {
      slug
    }
  `

  const authors: Author[] = await client.fetch(query);
  const authorSlugs = authors.map((author) => author.slug.current);

  const slugRoutes = authorSlugs.map((slug) => ({
    slug
  }));

  return slugRoutes;
}

export const revalidate = 30;

export default async function AuthorPosts({ params: { slug } }: Props) {
  const authorQuery = groq`
    *[_type == "author" && slug.current == $slug][0] {
      _id,
      name
    }
  `

  const author: Author = await client.fetch(authorQuery, { slug });

  const postQuery = groq`
    *[_type == "post" && references("author", $author._id)] {
      ...,
      author->,
      categories[]->,
      tags[]->
    }
  `

  const post: Post[] = await client.fetch(postQuery, { author: author });

  return (
    <div className={`flex ml-auto ${styles.container}`}>
      <TextBanner title={author.name} />
      <div className={`flex ${styles.content}`}>
        <BlogList posts={post} />
      </div>
    </div>
  )
}
