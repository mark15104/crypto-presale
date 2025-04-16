import type React from "react"
import "../app/globals.css"
import type { Metadata } from "next"
import { Toaster } from "../components/ui/toaster"

export const metadata: Metadata = {
  title: "MEWTUL Presale",
  description: "A cute cat-themed memecoin presale website",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/mewtul-logo.png" />
        <link rel="apple-touch-icon" href="/mewtul-logo.png" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
