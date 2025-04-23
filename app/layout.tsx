import type React from "react"
import "../app/globals.css"
import type { Metadata } from "next"
import { Toaster } from "../components/ui/toaster"

export const metadata: Metadata = {
  title: "mewtulcoin | Official Presale Site",
  description:
    "The official presale for mewtulcoin — the internet’s cutest cat memecoin — is now live.",
  keywords: ["mewtulcoin", "mewtul", "mewtul presale", "memecoin", "뮤툴", "뮤툴프리세일", "뮤툴코인"],
  icons: {
    icon: [
      {
        url: "/mewtul-logo.png",
        href: "/mewtul-logo.png",
      },
    ],
    apple: {
      url: "/mewtul-logo.png",
      href: "/mewtul-logo.png",
    },
  },
  openGraph: {
    title: "mewtulcoin Official Presale",
    description: "Join the cutest cat-themed memecoin — Global presale now live!",
    url: "https://mewtul.com",
    siteName: "mewtulcoin",
    images: [
      {
        url: "/mewtul-logo.png",
        width: 600,
        height: 600,
        alt: "mewtulcoin Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mewtulcoin Presale",
    description: "The cutest cat-themed memecoin now available!",
    images: ["/mewtul-logo.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/mewtul-logo.png" />
        <link rel="apple-touch-icon" href="/mewtul-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
