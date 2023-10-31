"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import urlFor from "@/lib/urlFor";

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css";

import type SwiperCore from "swiper";

import styles from "./Gallery.module.scss";

interface Props {
  gallery: Gallery;
}

export default function Gallery({ gallery }: Props) {
  const swiperRef = useRef<SwiperCore>();

  return gallery.image.length ? (
    <div className={`relative w-full h-full ${styles.media}`}>
      <Swiper
        autoplay={gallery.image.length > 1}
        className="w-full h-full"
        enabled={gallery.image.length > 1}
        modules={[Autoplay]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView="auto"
      >
        {gallery.image?.map((slide, index) => {
          return (
            <SwiperSlide
              className="w-full"
              key={`image-${index + 1}`}
            >
              <Image
                alt=""
                className="object-cover object-center w-full h-full"
                fill
                src={
                  urlFor(slide).url()
                }
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  ) : null
}
