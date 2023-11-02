import Image from "next/image";
import Link from "next/link";
import React from "react";

import urlFor from "@/lib/urlFor";

import Gallery from "@/components/App/Gallery/Gallery.component";
import VideoEmbed from "@/components/App/VideoEmbed/VideoEmbed.component";

import styles from "./RichTextComponents.module.scss";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="mb-12">
          <div
            className={`relative w-full ${styles.image}`}
          >
            <Image
              alt={value.alt || ""}
              className="object-cover"
              fill
              src={urlFor(value).url()}
            />
          </div>
          {value.caption && (
            <div className={`p-4 ${styles.mediaCaption}`}>
              {value.caption}
            </div>
          )}
        </div>
      )
    },
    gallery: ({ value}: any) => {
      return (
        <Gallery gallery={value} />
      )
    },
    youtube: ({ value }: any) => {
      return (
        <VideoEmbed
          caption={value.caption}
          captionClass={`p-4 mb-12 ${styles.mediaCaption}`}
          url={value.url}
        />
      )
    }
  },
  list: {
    bullet: ({ children }: any) => (
      <ul
        className={`ml-3.5 pb-10 list-disc space-y-5 ${styles.list}`}
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className={`ml-3.5 pb-10 list-decimal space-y-5 ${styles.list}`}
      >
        {children}
      </ol>
    )
  },
  block: {
    h1: ({ children }: any) => (
      <h1
        className={`text-6xl pb-10 font-bold ${styles.heading}`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2
        className={`text-5xl pb-10 font-bold ${styles.heading}`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        className={`text-4xl pb-8 font-bold ${styles.heading}`}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4
        className={`text-3xl pb-8 font-bold ${styles.heading}`}
      >
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h4
        className={`text-2xl pb-7 font-bold ${styles.heading}`}
      >
        {children}
      </h4>
    ),
    h6: ({ children }: any) => (
      <h4
        className={`text-xl pb-7 font-bold ${styles.heading}`}
      >
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p
        className={`text-lg pb-6 ${styles.text}`}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className={`relative pl-10 py-6 mt-5 mb-10 ${styles.quote}`}
      >
        {children}
      </blockquote>
    )
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      const target = !value.href.startsWith("/") ? "_blank" : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className={`no-underline relative w-fit ${styles.link}`}
        >
          {children}
        </Link>
      )
    }
  }
}
