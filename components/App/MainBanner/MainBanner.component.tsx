import Image from "next/image";
import React from "react";

import PortfolioImage from "../../../assets/images/myself.jpg";

import styles from "./MainBanner.module.scss";

export default function MainBanner() {
  return (
    <div className={styles.banner}>
      <Image
        alt="Rejaur Rahman"
        className="object-cover object-center h-full"
        data-desktop="false"
        src={PortfolioImage}
      />
      <Image
        alt="Rejaur Rahman"
        className="object-cover object-center h-full"
        data-desktop="true"
        priority={true}
        src={PortfolioImage}
      />
    </div>
  )
}
