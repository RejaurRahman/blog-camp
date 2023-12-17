"use client"

import Image from "next/image"
import React, { useState } from "react"

import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute"

import { CopyToClipboard } from "react-copy-to-clipboard"

import CopyIcon from "@/assets/svg/copy.svg"
import FBIcon from "@/assets/svg/facebook.svg"
import LinkedinIcon from "@/assets/svg/linkedin.svg"
import MailIcon from "@/assets/svg/mail.svg"
import TwitterIcon from "@/assets/svg/twitter.svg"

import styles from "./SharePosts.module.scss"

type Props = {
  post: Post
}

export default function SharePosts({ post }: Props) {
  const [copied, setCopied] = useState(false)

  return (
    <nav className={`relative ${styles.wrapper}`}>
      <ul className="flex">
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`https://www.facebook.com/sharer/sharer.php?u=${post.slug}`}
          >
            <Image
              alt="Facebook Share"
              className={styles.socialImage}
              height={21}
              src={FBIcon}
              width={21}
            />
          </ClientSideRoute>
        </li>
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`https://twitter.com/intent/tweet?text=${post.title}&ampurl=${post.slug}&ampvia=Rejaur_3Ronny`}
          >
            <Image
              alt="Twitter Share"
              className={styles.socialImage}
              height={21}
              src={TwitterIcon}
              width={21}
            />
          </ClientSideRoute>
        </li>
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`https://www.linkedin.com/shareArticle?mini=true&ampurl=${post.slug}&ampsummary=${post.title}&ampsource=rejaur-rahman-a938a657`}
          >
            <Image
              alt="LinkedIn Share"
              className={styles.socialImage}
              height={21}
              src={LinkedinIcon}
              width={21}
            />
          </ClientSideRoute>
        </li>
        <li className="mr-3">
          <ClientSideRoute
            className={`flex items-center justify-center w-10 h-10 rounded-full ${styles.socialLink}`}
            route={`mailto:?subject=${post.title}&ampbody=${post.slug}`}
          >
            <Image
              alt="Mail Share"
              className={styles.socialImage}
              height={21}
              src={MailIcon}
              width={21}
            />
          </ClientSideRoute>
        </li>
        <li className={`flex items-center justify-center relative w-10 h-10 rounded-full cursor-pointer ${styles.socialLink}`}>
          <CopyToClipboard
            text={post.slug.current}
            onCopy={() => {
              setCopied(true)
              setTimeout(() => setCopied(false), 1000)
            }}
          >
            <Image
              alt="Copy Share"
              className={styles.socialImage}
              height={21}
              src={CopyIcon}
              width={21}
            />
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
