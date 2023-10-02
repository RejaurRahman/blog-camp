import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "../../../../assets/images/logo.png";

export default function HeaderLogo() {
  return (
    <Link href="/">
      <Image
        alt="Blog Camp"
        height={96}
        src={Logo}
        width={96}
      />
    </Link>
  )
}
