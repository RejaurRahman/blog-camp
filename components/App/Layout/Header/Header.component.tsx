import Image from "next/image";
import Link from "next/link";
import React from "react";

import HeaderModal from "../HeaderModal/HeaderModal.component";
import Logo from "../../../../assets/images/logo.png";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header
      className={`absolute top-0 left-0 w-24 min-h-full ${styles.header}`}
    >
      <Link href="/">
        <Image
          alt="Blog Camp"
          height={96}
          src={Logo}
          width={96}
        />
      </Link>
      <HeaderModal />
    </header>
  )
}
