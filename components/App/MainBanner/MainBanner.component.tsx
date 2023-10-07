import Image from "next/image";
import React from "react";

import PortfolioImage from "../../../assets/images/myself.jpg";

import styles from "./MainBanner.module.scss";

export default function MainBanner() {
  return (
    <div className={styles.banner}>
      <Image
        alt="Rejaur Rahman"
        className="h-full"
        data-desktop="false"
        src={PortfolioImage}
      />
      <Image
        alt="Rejaur Rahman"
        className="h-full"
        data-desktop="true"
        src={PortfolioImage}
      />
    </div>
  )
}
