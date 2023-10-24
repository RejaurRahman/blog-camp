"use client";

import React, { useState, useEffect } from "react";

import { ArrowUpIcon } from "@heroicons/react/24/solid";

import baseStyles from "../ScrollButtons.module.scss";
import styles from "./BackTop.module.scss";

export default function BackTop() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`absolute flex items-center justify-center bottom-7 left-1/2 h-7 w-7 rounded-full ${baseStyles.wrapper} ${styles.wrapper}`}
      data-visibility={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <ArrowUpIcon
        className="h-5 w-5"
        aria-hidden="true"
      />
    </button>
  )
}
