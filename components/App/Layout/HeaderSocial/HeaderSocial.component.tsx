import Image from "next/image"
import Link from "next/link"
import React from "react"

import FBIcon from "@/assets/svg/facebook.svg"
import LinkedinIcon from "@/assets/svg/linkedin.svg"
import PinterestIcon from "@/assets/svg/pinterest.svg"
import RedditIcon from "@/assets/svg/reddit.svg"
import TwitterIcon from "@/assets/svg/twitter.svg"

import styles from "./HeaderSocial.module.scss"

interface Props {
  data?: SocialLinks
}

export default function HeaderSocial({ data }: Props) {
  return data?.fbLink || data?.linkedinLink || data?.pinterestLink || data?.redditLink || data?.twitterLink ? (
    <ul>
      {data?.fbLink && (
        <Link
          className={`flex justify-center ${styles.link}`}
          href={data?.fbLink}
          rel="noopener"
          target="_blank"
        >
          <Image
            alt="Facebook"
            className={styles.image}
            height={21}
            src={FBIcon}
            width={21}
          />
        </Link>
      )}
      {data?.linkedinLink && (
        <Link
          className={`flex justify-center ${styles.link}`}
          href={data?.linkedinLink}
          rel="noopener"
          target="_blank"
        >
          <Image
            alt="LinkedIn"
            className={styles.image}
            height={21}
            src={LinkedinIcon}
            width={21}
          />
        </Link>
      )}
      {data?.pinterestLink && (
        <Link
          className={`flex justify-center ${styles.link}`}
          href={data?.pinterestLink}
          rel="noopener"
          target="_blank"
        >
          <Image
            alt="Pinterest"
            className={styles.image}
            height={21}
            src={PinterestIcon}
            width={21}
          />
        </Link>
      )}
      {data?.redditLink && (
        <Link
          className={`flex justify-center ${styles.link}`}
          href={data?.redditLink}
          rel="noopener"
          target="_blank"
        >
          <Image
            alt="Reddit"
            className={styles.image}
            height={21}
            src={RedditIcon}
            width={21}
          />
        </Link>
      )}
      {data?.twitterLink && (
        <Link
          className={`flex justify-center ${styles.link}`}
          href={data?.twitterLink}
          rel="noopener"
          target="_blank"
        >
          <Image
            alt="Twitter"
            className={styles.image}
            height={21}
            src={TwitterIcon}
            width={21}
          />
        </Link>
      )}
    </ul>
  ) : null
}
