import Link from "next/link";
import React, { ReactNode } from "react";

import styles from "./SocialIcon.module.scss";

type SocialIconProps = {
  children: ReactNode;
  url: string;
};

export default function SocialIcon({
  children,
  url
}: SocialIconProps) {
  return (
    <li className={styles.item}>
      <Link
        className={`flex justify-center ${styles.link}`}
        href={url}
        rel="noopener"
        target="_blank"
      >
        {children}
      </Link>
    </li>
  )
}
