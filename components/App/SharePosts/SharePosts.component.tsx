"use client";

import React, { useState } from "react";

import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faCopy, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCopy, faEnvelope, fab);

config.autoAddCss = false;

import styles from "./SharePosts.module.scss";

type Props = {
  post: Post;
}

export default function SharePosts({ post }: Props) {
  const [copied, setCopied] = useState(false);

  return (
    <nav className={`relative ${styles.wrapper}`}>
      <ul className="flex">
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`https://www.facebook.com/sharer/sharer.php?u=${post.slug}`}
          >
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </ClientSideRoute>
        </li>
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`https://twitter.com/intent/tweet?text=${post.title}&amp;url=${post.slug}&amp;via=Rejaur_3Ronny`}
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </ClientSideRoute>
        </li>
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${post.slug}&amp;summary=${post.title}&amp;source=rejaur-rahman-a938a657`}
          >
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </ClientSideRoute>
        </li>
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`mailto:?subject=${post.title}&amp;body=${post.slug}`}
          >
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </ClientSideRoute>
        </li>
        <li className={`flex items-center justify-center relative w-10 h-10 rounded-full cursor-pointer ${styles.socialLink}`}>
          <CopyToClipboard
            text={post.slug.current}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1000);
            }}
          >
            <FontAwesomeIcon icon={["fas", "copy"]} />
          </CopyToClipboard>
          {copied ? (
            <span
              className={`absolute top-2/4 left-12 px-2.5 ${styles.copyText}`}
            >
              Copied...
            </span>
          ) : null}
        </li>
      </ul>
    </nav>
  )
}
