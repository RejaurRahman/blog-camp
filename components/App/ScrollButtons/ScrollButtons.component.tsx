import React from "react";
import { usePathname } from "next/navigation";

import ScrollNext from "./ScrollNext/ScrollNext.component";
import BackTop from "./BackTop/BackTop.component";

export default function ScrollButtons() {
  const pathname = usePathname();

  return (
    <>
      {
        pathname === "/" || pathname?.includes("/home") ? (
          <ScrollNext />
        ) : (
          <BackTop />
        )
      }
    </>
  )
}
