import React from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import { PortableText } from "@portabletext/react";
import urlFor from "@/lib/urlFor";

import Breadcrumbs from "@/components/App/Breadcrumbs/Breadcrumbs.component";
import PostBanner from "@/components/App/PostBanner/PostBanner.component";
import { RichTextComponents } from "@/components/App/RichTextComponents/RichTextComponents.component";

import styles from "./page.module.scss";

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`
    *[_type=="page"] {
      slug
    }
  `

  const slugs: Page[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug
  }))
}

export default async function Page({ params: {slug} }: Props) {
  const query = groq`
    *[_type=="page" && slug.current == $slug][0] {
      ...
    }
  `

  const page: Page = await client.fetch(query, { slug })

  return (
    <article>
      <PostBanner
        imageAltText={page.title}
        imageSrc={urlFor(page.mainImage).url()}
      />
      <div className={`relative ${styles.container}`}>
        <div className={`flex ${styles.wrapper}`}>
          <Breadcrumbs pageTitle={page.title} />
          <h1 className={`font-bold pb-5 ${styles.title}`}>
            {page.title}
          </h1>
          <PortableText
            value={page.body}
            components={RichTextComponents}
          />
        </div>
      </div>
    </article>
  )
}
