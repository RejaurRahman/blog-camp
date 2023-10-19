import React from "react";

import ClientSideRoute from "../ClientSideRoute/ClientSideRoute";

import styles from "./Breadcrumbs.module.scss";

type Props = {
  pageTitle: string;
}

export default function Breadcrumbs({ pageTitle }: Props) {
  return (
    <nav className="pb-7">
      <ul
        className={`flex ${styles.breadcrumbs}`}
        itemScope
        itemType="http://schema.org/BreadcrumbList"
      >
        <li
          className="relative"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <ClientSideRoute
            className="flex items-center h-10 px-5"
            itemProp="item"
            route="/"
          >
            <span
              itemProp="name"
            >
              Home
            </span>
          </ClientSideRoute>
          <meta itemProp="position" content="1" />
        </li>
        <li
          className="relative"
          itemProp="itemListElement"
          itemScope
          itemType="http://schema.org/ListItem"
        >
          <span
            className="flex items-center h-10 px-5"
            itemProp="name"
          >
            {pageTitle}
          </span>
          <meta itemProp="position" content="2" />
        </li>
      </ul>
    </nav>
  )
}
