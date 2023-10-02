import Image from "next/image";
import React from "react";

import LogoImage from "../../../assets/images/logo.png";

export default function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        alt="Blog Camp"
        className="rounded-full object-cover"
        height={96}
        src={LogoImage}
        width={96}
      />
      <>
        {renderDefault(props)}
      </>
    </div>
  )
}
