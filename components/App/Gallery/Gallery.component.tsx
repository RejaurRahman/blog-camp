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

interface GalleryImage {
  _type: "image";
  asset: Reference;
  alt: string;
}

interface Gallery {
  images: GalleryImage[];
}

interface Props {
  gallery: Gallery;
}

export default function Gallery({ gallery }: Props) {
  const swiperRef = useRef<SwiperCore>();

  return gallery.images.length ? (
    <div className={`relative w-full h-full mb-6 ${styles.media}`}>
      <Swiper
        autoplay={gallery.images.length > 1}
        className="w-full h-full"
        enabled={gallery.images.length > 1}
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
        {gallery.images.length > 1 && (
          <div
            className="swiper-pagination-gallery flex justify-center pt-6"
          />
        )}
        {gallery.images?.map((slide, index) => {
          return (
            <SwiperSlide
              key={`image-${index + 1}`}
            >
              <Image
                alt={slide.alt}
                className="object-cover object-center w-full h-full"
                height={138}
                src={
                  urlFor(slide).url()
                }
                width={245}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  ) : null
}
