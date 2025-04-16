"use client"

import { useCallback } from "react"

export function useScroll() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Consider header height for offset (header height is 64px)
      const offset = 64
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return { scrollToSection }
}
