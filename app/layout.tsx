import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Atelier Amari | Handcrafted Ceramics",
  description:
    "Ceramic atelier creating small-batch stoneware and porcelain collections for contemporary tables and interiors.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Atelier Amari | Handcrafted Ceramics",
    description:
      "Discover handcrafted ceramic collections, studio process, and seasonal drops from Atelier Amari.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
