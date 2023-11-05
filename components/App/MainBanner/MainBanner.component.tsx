import Image from "next/image";
import React from "react";

import PortfolioImage from "../../../assets/images/myself.jpg";

import styles from "./MainBanner.module.scss";

export default function MainBanner() {
  return (
    <div className={styles.banner}>
      <Image
        alt="Rejaur Rahman"
        className="object-cover object-center h-full w-full"
        data-desktop="false"
        height={300}
        src={PortfolioImage}
        width={320}
      />
      <Image
        alt="Rejaur Rahman"
        className="object-cover object-center h-full w-full"
        data-desktop="true"
        height={300}
        priority={true}
        src={PortfolioImage}
        width={320}
      />
    </div>
  )
}
