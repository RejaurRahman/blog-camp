import { PortableText } from "@portabletext/react";
import React from "react";

import styles from "./TwoColumnText.module.scss";

interface Props {
  columns: TwoColumnText;
}

export default function TwoColumnText({ columns }: Props) {
  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <PortableText
          value={columns.leftColumn}
        />
      </div>
      <div className={styles.column}>
        <PortableText
          value={columns.rightColumn}
        />
      </div>
    </div>
  )
}
