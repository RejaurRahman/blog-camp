import React from "react";

import styles from "./HeaderModal.module.scss";

export default function HeaderModal() {
  return (
    <div className={`w-24 h-24 flex items-center ${styles.burgerMenu}`}>
      <span className="flex relative mx-auto h-5 w-11">
        <span className={`absolute top-1/2 h-0.5 ${styles.menuIcon}`}></span>
      </span>
    </div>
  )
}
