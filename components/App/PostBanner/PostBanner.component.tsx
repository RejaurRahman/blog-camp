import Image from "next/image";
import React from "react";

import styles from "./PostBanner.module.scss";

type Props = {
  imageSrc: string;
  imageAltText: string;
}

export default function PostBanner({ imageSrc, imageAltText }: Props) {
  return (
    <div className={`relative h-full w-full ${styles.wrapper}`}>
      <Image
        alt={imageAltText}
        className="object-cover object-center"
        fill
        priority={true}
        src={imageSrc}
      />
    </div>
  )
}
