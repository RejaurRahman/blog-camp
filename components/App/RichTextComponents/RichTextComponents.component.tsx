import Image from "next/image";
import Link from "next/link";
import React from "react";

import urlFor from "@/lib/urlFor";

import VideoEmbed from "../VideoEmbed/VideoEmbed.component";

import styles from "./RichTextComponents.module.scss";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="mb-12">
          <div
            className="relative w-full h-96"
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
        className="ml-10 py-5 list-disc space-y-5"
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className="mt-lg list-decimal"
      >
        {children}
      </ol>
    )
  },
  block: {
    h1: ({ children }: any) => (
      <h1
        className="text-6xl pb-10 font-bold"
      >
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2
        className="text-5xl pb-10 font-bold"
      >
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3
        className="text-4xl pb-8 font-bold"
      >
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4
        className="text-3xl pb-8 font-bold"
      >
        {children}
      </h4>
    ),
    h5: ({ children }: any) => (
      <h4
        className="text-2xl pb-7 font-bold"
      >
        {children}
      </h4>
    ),
    h6: ({ children }: any) => (
      <h4
        className="text-xl pb-7 font-bold"
      >
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p
        className="text-lg pb-6"
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
          className="underline decoration-[#F7AB04] hover:decoration-black"
        >
          {children}
        </Link>
      )
    }
  }
}
