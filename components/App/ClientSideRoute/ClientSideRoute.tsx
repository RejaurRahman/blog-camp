"use client";

import Link from "next/link";
import React from "react";

export default function ClientSideRoute({
  children,
  className,
  itemProp,
  onClick,
  route
}: {
  children: React.ReactNode,
  className?: string;
  itemProp?: string;
  onClick?: () => void;
  route: string
}) {
  return (
    <Link
      className={className}
      href={route}
      itemProp={itemProp}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
