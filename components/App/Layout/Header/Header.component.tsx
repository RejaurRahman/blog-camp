"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import React from "react";

import HeaderLogo from "../HeaderLogo/HeaderLogo.component";
import HeaderModal from "../HeaderModal/HeaderModal.component";
import HeaderSocial from "../HeaderSocial/HeaderSocial.component";
import ScrollButtons from "../../ScrollButtons/ScrollButtons.component";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header
      className={`fixed top-0 left-0 min-h-full ${styles.header}`}
    >
      <NavigationMenu.Root>
        <HeaderLogo />
        <HeaderModal />
        <HeaderSocial />
        <ScrollButtons />
      </NavigationMenu.Root>
    </header>
  )
}
