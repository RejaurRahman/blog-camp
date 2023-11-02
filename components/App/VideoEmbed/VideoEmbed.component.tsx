"use client";

import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";

import styles from "./VideoEmbed.module.scss";

interface Props {
  caption: string;
  captionClass: string;
  url: string;
}

export default function VideoEmbed({ caption, captionClass, url }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <>
      {
        isLoaded ? (
          <div className={styles.video}>
            <ReactPlayer
              url={url}
              width="100%"
            />
            <div className={captionClass}>
              {caption}
            </div>
          </div>
        ) : null
      }
    </>
  )
}
