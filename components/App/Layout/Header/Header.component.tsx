"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/client";

import HeaderLogo from "@/components/App/Layout/HeaderLogo/HeaderLogo.component";
import HeaderModal from "@/components/App/Layout/HeaderModal/HeaderModal.component";
import HeaderSocial from "@/components/App/Layout/HeaderSocial/HeaderSocial.component";
import ScrollButtons from "@/components/App/ScrollButtons/ScrollButtons.component";

import styles from "./Header.module.scss";

const sitewideQuery = groq`
  *[_type == "sitewide"][0] {
    siteTitle,
    headerText,
    footerText,
    menu,
    socialLinks
  }
`

export default function Header() {
  const [data, setData] = useState<SiteData>();

  const getDataUsingSanity = async () => {
    const sidewideData= await client.fetch(sitewideQuery);

    setData(sidewideData)
  };

  useEffect(() => {
    getDataUsingSanity();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 min-h-full ${styles.header}`}
    >
      <NavigationMenu.Root>
        <HeaderLogo />
        <HeaderModal data={data} />
        <HeaderSocial data={data?.socialLinks} />
        <ScrollButtons />
      </NavigationMenu.Root>
    </header>
  )
}
