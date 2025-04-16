"use client"

import { useState } from "react"
import Image from "next/image"
import { useScroll } from "@/hooks/use-scroll"
import { siteConfig } from "@/constants/site-config"
import { tokenConfig } from "@/constants/token-config"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollToSection } = useScroll()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (href: string) => {
    // Remove '#' character
    const sectionId = href.replace("#", "")
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-pink shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/mewtul-logo.png" alt="Logo" width={40} height={40} className="rounded-full hover-grow" />
          <span className="text-2xl font-bold text-black crypto-title">{tokenConfig.name}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navigation.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.href)}
              className="text-black hover:text-black/80 relative group cursor-pointer"
            >
              {item.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        {/* Mobile menu toggle button */}
        <button className="md:hidden text-black" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-pink border-t border-black/20 shadow-lg">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {siteConfig.navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="text-black hover:text-black/80 py-2 px-4 rounded-md hover:bg-white/10 transition-colors"
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
