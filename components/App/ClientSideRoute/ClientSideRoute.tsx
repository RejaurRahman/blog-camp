"use client";

import Link from "next/link";
import React from "react";

export default function ClientSideRoute({ children, className, itemProp, route }: {
  children: React.ReactNode,
  className?: string;
  itemProp?: string;
  route: string
}) {
  return (
    <Link
      href={route}
      className={className}
      itemProp={itemProp}
    >
      {children}
    </Link>
  )
}
