import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import urlFor from "@/lib/urlFor";

import Gallery from "@/components/App/Gallery/Gallery.component";
import VideoEmbed from "@/components/App/VideoEmbed/VideoEmbed.component";

import styles from "./RichTextComponents.module.scss";
import TextMedia from "../TextMedia/TextMedia.component";

export const RichTextComponents: PortableTextReactComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="mb-12">
          <div
            className={`relative w-full ${styles.image}`}
          >
            <Image
              alt={value.alt || ""}
              className="object-cover h-full w-full"
              height={200}
              src={urlFor(value).url()}
              width={245} />
          </div>
          {value.caption && (
            <div className={`p-4 ${styles.mediaCaption}`}>
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    gallery: ({ value }) => {
      return (
        <Gallery gallery={value} />
      );
    },
    textMedia: ({ value }) => {
      return (
        <TextMedia textMedia={value} />
      );
    },
    youtube: ({ value }) => {
      return (
        <VideoEmbed
          caption={value.caption}
          captionClass={`p-4 mb-12 ${styles.mediaCaption}`}
          url={value.url} />
      );
    }
  },
  list: {
    bullet: ({ children }) => (
      <ul
        className={`ml-3.5 pb-10 list-disc space-y-5 ${styles.list}`}
      >
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol
        className={`ml-3.5 pb-10 list-decimal space-y-5 ${styles.list}`}
      >
        {children}
      </ol>
    )
  },
  block: {
    h1: ({ children }) => (
      <h1
        className={`text-6xl pb-10 font-bold ${styles.heading}`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className={`text-5xl pb-10 font-bold ${styles.heading}`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`text-4xl pb-8 font-bold ${styles.heading}`}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className={`text-3xl pb-8 font-bold ${styles.heading}`}
      >
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h4
        className={`text-2xl pb-7 font-bold ${styles.heading}`}
      >
        {children}
      </h4>
    ),
    h6: ({ children }) => (
      <h4
        className={`text-xl pb-7 font-bold ${styles.heading}`}
      >
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p
        className={`text-lg pb-6 ${styles.text}`}
      >
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className={`relative pl-10 py-6 mt-5 mb-10 ${styles.quote}`}
      >
        {children}
      </blockquote>
    )
  },
  marks: {
    link: ({ children, value }) => {
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
      );
    }
  },
  hardBreak: false,
  listItem: ({ children }) => (
    <li className={styles.listItem}>
      {children}
    </li>
  ),
  unknownBlockStyle: () => (
    <span className="space-y-4">
      React component used when encountering a block style there is no registered component for in the components.block prop. Only used if components.block is an object.
    </span>
  ),
  unknownList: () => (
    <span className="space-y-4">
      React component used when encountering a list style there is no registered component for in the components.list prop. Only used if components.list is an object.
    </span>
  ),
  unknownListItem: () => (
    <span className="space-y-4">
      React component used when encountering a list item style there is no registered component for in the components.listItem prop. Only used if components.listItem is an object.
    </span>
  ),
  unknownMark: () => (
    <span className="space-y-4">
      React component used when encountering a mark type there is no registered component for in the components.marks prop.
    </span>
  ),
  unknownType: () => (
    <span className="space-y-4">
      React component used when encountering an object type there is no registered component for in the components.types prop.
    </span>
  )
}
