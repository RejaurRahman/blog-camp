import React from "react";

import "@/styles/globals.css";

export const metadata = {
  title: "Blog Camp",
  description: "Blog Camp is a platform where I share thoughts about life topics covering wide range of aspects.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className="scroll-smooth"
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className="overflow-x-hidden"
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
