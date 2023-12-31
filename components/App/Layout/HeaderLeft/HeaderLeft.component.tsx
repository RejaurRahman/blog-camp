"use client"

import Link from "next/link"
import React, {
  FormEvent,
  useState
} from "react"

import styles from "./HeaderLeft.module.scss"

interface Props {
  data?: SiteData
  setOpen?: (open: boolean) => void
}

export default function HeaderLeft({ data, setOpen } : Props) {
  const [searchQuery, setSearchQuery] = useState("")

  const currentYear = new Date().getFullYear()

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    window.location.href = `/search?query=${searchQuery}`
  }

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <label>
          <input
            className={`w-full text-lg ${styles.formField}`}
            name="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type here to search..."
            type="search"
            value={searchQuery}
          />
        </label>
        <button type="submit" style={{ display: "none" }}></button>
      </form>
      <span
        className={`flex justify-center items-center text-3xl ${styles.title}`}
      >
        {data?.siteTitle}
      </span>
      <div className={`flex justify-between ${styles.bottom}`}>
        <span className={`text-sm ${styles.subtitle}`}>
          {data?.headerText}
        </span>
        <ul>
          {
            data?.menu?.map((item, index) => (
              <li
                className="pb-6"
                key={index}
              >
                <Link
                  className={`text-lg ${styles.menuItem}`}
                  href={item.slug}
                  onClick={() => setOpen && setOpen(false)}
                >
                  {item.menuName}
                </Link>
              </li>
            ))
          }
        </ul>
        <span className={`text-sm uppercase ${styles.copyright}`}>
          Copyright &copy {currentYear}. {data?.footerText}
        </span>
      </div>
    </>
  )
}
