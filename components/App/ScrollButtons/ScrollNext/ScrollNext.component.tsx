"use client";

import React, { useState, useEffect } from "react";

import { ArrowDownIcon } from "@heroicons/react/24/solid";

import baseStyles from "../ScrollButtons.module.scss";
import styles from "./ScrollNext.module.scss";

export default function ScrollNext() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsVisible(scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute flex items-center justify-center bottom-7 left-1/2 h-7 w-7 rounded-full ${baseStyles.wrapper} ${styles.wrapper}`}
      data-hidden-visibility={isVisible}
    >
      <ArrowDownIcon
        className="h-5 w-5"
      />
    </div>
  )
}
