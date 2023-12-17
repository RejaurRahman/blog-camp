"use client"

import React, {
  useEffect,
  useState
} from "react"

import { ArrowDownIcon } from "@heroicons/react/24/solid"

import ClientSideRoute from "@/components/App/ClientSideRoute/ClientSideRoute"

import styles from "./SidebarNav.module.scss"

type Props = {
  displayDesktop: boolean
  post: Post
}

export default function SidebarNav({ displayDesktop, post }: Props) {
  const headTitles: string[] = []
  const [navSticky, setNavSticky] = useState(false)
  const [headTitle, setHeadTitle] = useState("Contents Navigation")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop

      if (scrollY >= 100) {
        setNavSticky(true)
      } else {
        setNavSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  post.body.forEach((body) => {
    if (body.style === "h2") {
      body.children.forEach((children) => {
        headTitles.push(children.text)
      })
    }
  })

  const clickHeadTitle = (title: string) => {
    setHeadTitle(title)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div
      className={styles.wrapper}
      data-desktop={displayDesktop}
      data-sticky={navSticky}
    >
      <nav className={styles.dropdownNav}>
        <button
          className={`flex items-center justify-between w-full py-4 px-5 ${styles.dropdownButton} ${isDropdownOpen ? styles.openButton : ""}`.trim()}
          onClick={toggleDropdown}
        >
          {headTitle}
          <ArrowDownIcon
            className="h-5 w-5"
          />
        </button>
        <div className={`absolute w-full h-0 opacity-0 ${styles.dropdownOptions} ${isDropdownOpen ? styles.openDropdown : ""}`.trim()}>
          {
            headTitles.map((title, key) => (
              <ClientSideRoute
                className={`block py-2.5 pr-0 pl-2.5 no-underline capitalize ${styles.link} ${title === headTitle ? styles.active : ""}`.trim()}
                key={key}
                onClick={() => clickHeadTitle(title)}
                route={`#${
                  title.toString().split(" ").length > 1 ?
                  title.toString().replace(/\s/g, "").toLowerCase() :
                  title.toString().toLowerCase()
                }`}
              >
                {title}
              </ClientSideRoute>
            ))
          }
        </div>
      </nav>
      <nav className={`pl-0 ${styles.sidebarNav}`}>
        <ol className="list-none m-0 p-0">
          {
            headTitles.map((title, key) => (
              <li
                className={styles.listItem}
                key={key}
              >
                <ClientSideRoute
                  className={`block py-2.5 pr-0 pl-2.5 no-underline capitalize ${styles.link} ${title === headTitle ? styles.active : ""}`.trim()}
                  onClick={() => clickHeadTitle(title)}
                  route={`#${
                    title.toString().split(" ").length > 1 ?
                    title.toString().replace(/\s/g, "").toLowerCase() :
                    title.toString().toLowerCase()
                  }`}
                >
                  {title}
                </ClientSideRoute>
              </li>
            ))
          }
        </ol>
      </nav>
    </div>
  )
}
