"use client";

import Link from "next/link";
import React from "react";

export default function ClientSideRoute({ children, route }: {
  children: React.ReactNode,
  route: string
}) {
  return (
    <Link href={route}>
      {children}
    </Link>
  )
}
