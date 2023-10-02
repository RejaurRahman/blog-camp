import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../../../assets/images/logo.png";

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 w-24 min-h-full"
    >
      <Link href="/">
        <Image
          alt="Blog Camp"
          height={96}
          src={Logo}
          width={96}
        />
      </Link>
    </header>
  )
}
