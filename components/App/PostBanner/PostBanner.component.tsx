"use client";

import Image from "next/image";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import React from "react";

import styles from "./PostBanner.module.scss";

type Props = {
  imageSrc: string;
  imageAltText: string;
}

export default function PostBanner({ imageSrc, imageAltText }: Props) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className={`relative h-full w-full ${styles.wrapper}`}>
        <Image
          alt={imageAltText}
          className="object-cover object-center"
          fill
          priority={true}
          src={imageSrc}
        />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`sticky top-0 left-0 ${styles.progressBar}`}
          style={{ scaleX: scrollYProgress }}
        />
      </AnimatePresence>
    </>
  )
}
