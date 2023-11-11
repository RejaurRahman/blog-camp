import Link from "next/link";
import React, { ReactNode } from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

interface StudioNavbarProps {
  renderDefault: () => ReactNode;
}

export default function StudioNavbar({ renderDefault }: StudioNavbarProps | any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link
          href="/"
          className="text-[#ffcc00] flex items-center"
        >
          <ArrowUturnLeftIcon
            className="h-6 w-6 text-[#ffcc00] mr-2"
          />
          Go To Website
        </Link>
      </div>
      <>{renderDefault()}</>
    </div>
  );
}
