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
            className={`w-full text-lg ${styles.formField}`}
            name="search"
            placeholder="Type here to search..."
            type="search"
          />
        </label>
      </form>
      <span className={`flex justify-center items-center text-3xl ${styles.title}`}>
        Blog Camp
      </span>
      <div className={`flex justify-between ${styles.bottom}`}>
        <span className={`text-sm ${styles.subtitle}`}>
          Blog Camp is a platform where I share thoughts about life topics covering wide range of aspects.
        </span>
        <ul>
          <li className="pb-6">
            <Link
              className={`text-lg ${styles.menuItem} `}
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="pb-6">
            <Link
              className={`text-lg ${styles.menuItem} `}
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg ${styles.menuItem} `}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <span className={`text-sm uppercase ${styles.copyright}`}>
          Copyright &copy; {currentYear}. All rights reserved | Blog Camp
        </span>
      </div>
    </>
  )
}
