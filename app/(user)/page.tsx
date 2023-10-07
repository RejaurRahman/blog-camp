import React from "react";

import MainBanner from "@/components/App/MainBanner/MainBanner.component";

import styles from "./index.module.scss";

export default function HomePage() {
  return (
    <>
      <div className={`flex ml-auto ${styles.container}`}>
        <MainBanner />
        <div className={`flex ${styles.content}`} />
      </div>
    </>
  )
}
