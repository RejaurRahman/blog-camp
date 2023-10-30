"use client";

import React, { useEffect, useState } from "react";

import ReactPlayer from "react-player";

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
          <>
            <ReactPlayer
              url={url}
              width="100%"
            />
            <div className={captionClass}>
              {caption}
            </div>
          </>
        ) : null
      }
    </>
  )
}
