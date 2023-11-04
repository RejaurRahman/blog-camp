"use client";

import Image from "next/image";
import React, { useRef } from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import urlFor from "@/lib/urlFor";

// eslint-disable-next-line import/no-unresolved, import/extensions
import "swiper/css";

import type SwiperCore from "swiper";

import styles from "./Gallery.module.scss";

interface Image {
  alt: string;
}

interface Gallery {
  image: Image[];
}

interface Props {
  gallery: Gallery;
}

export default function Gallery({ gallery }: Props) {
  const swiperRef = useRef<SwiperCore>();

  return gallery.image.length ? (
    <div className={`relative w-full h-full mb-6 ${styles.media}`}>
      <Swiper
        autoplay={gallery.image.length > 1}
        className="w-full h-full"
        enabled={gallery.image.length > 1}
        modules={[Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        pagination={{
          el: ".swiper-pagination-gallery",
          clickable: true,
        }}
        slidesPerView="auto"
      >
        {gallery.image.length > 1 && (
          <div
            className="swiper-pagination-gallery flex justify-center pt-6"
          />
        )}
        {gallery.image?.map((slide, index) => {
          return (
            <SwiperSlide
              key={`image-${index + 1}`}
            >
              <Image
                alt={slide.alt}
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
