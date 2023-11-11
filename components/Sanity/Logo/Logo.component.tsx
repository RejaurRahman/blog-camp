import Image from "next/image";
import React, { ReactNode } from "react";
import LogoImage from "../../../assets/images/logo.png";

interface LogoProps {
  renderDefault: () => ReactNode;
  title: string;
}

export default function Logo(props: LogoProps | any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        alt={title}
        className="rounded-full object-cover"
        height={96}
        src={LogoImage}
        width={96}
      />
      <>
        {renderDefault()}
      </>
    </div>
  );
}
