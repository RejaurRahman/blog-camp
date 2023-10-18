"use client";

import Link from "next/link";
import React from "react";

export default function ClientSideRoute({ children, className, route }: {
  children: React.ReactNode,
  className?: string;
  route: string
}) {
  return (
    <Link href={route} className={className}>
      {children}
    </Link>
  )
}
