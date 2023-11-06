import Image from "next/image";
import { PortableText } from "@portabletext/react";
import React from "react";

import urlFor from "@/lib/urlFor";

import styles from "./TextMedia.module.scss";

type Props = {
  textMedia: TextMedia;
}

export default function TextMedia({ textMedia }: Props) {
  return (
    <div className={`flex mx-auto ${styles.wrapper}`}>
      <div className={`relative ${styles.left}`}>
        <Image
          alt="Text Media image"
          className="object-cover object-center h-full w-full"
          height={245}
          src={
            urlFor(textMedia.image).url()
          }
          width={245}
        />
      </div>
      <div className={styles.right}>
        <PortableText value={textMedia.copy} />
      </div>
    </div>
  );
}
