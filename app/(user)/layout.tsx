import "../../styles/globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
