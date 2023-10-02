import Link from "next/link";
import React from "react";

import styles from "./HeaderLeft.module.scss";

export default function HeaderLeft() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <form>
        <label>
          <input
            className={`w-full ${styles.formField}`}
            name="search"
            placeholder="Type here to search..."
            type="search"
          />
        </label>
      </form>
      <span className={`flex justify-center items-center ${styles.title}`}>
        Blog Camp
      </span>
      <div className={`flex justify-between ${styles.bottom}`}>
        <span className={styles.subtitle}>
          Blog Camp is a platform where I share thoughts about life topics covering wide range of aspects.
        </span>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <span className={styles.copyright}>
          Copyright &copy; {currentYear}. All rights reserved | Blog Camp
        </span>
      </div>
    </>
  )
}
