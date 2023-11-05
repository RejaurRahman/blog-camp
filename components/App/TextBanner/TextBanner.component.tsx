import Image from "next/image";
import React from "react";

import Logo from "../../../assets/images/larger-logo.png";

import styles from "./TextBanner.module.scss";

type Props = {
  title: string;
}

export default function TextBanner({ title }: Props) {
  return (
    <div className={`flex items-center justify-center ${styles.banner}`}>
      <Image
        alt="Blog Camp"
        height={193}
        src={Logo}
        width={150}
      />
      <h2 className={`font-bold pt-7 ${styles.heading}`}>{title}</h2>
    </div>
  )
}
