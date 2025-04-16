"use client"

import { useEffect, useRef } from "react"
import { tokenConfig } from "@/constants/token-config"
import { TokenomicsDistribution } from "@/components/tokenomics-distribution"

export function Tokenomics() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const supplyRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (supplyRef.current) observer.observe(supplyRef.current)
    if (infoRef.current) observer.observe(infoRef.current)

    return () => {
      if (supplyRef.current) observer.unobserve(supplyRef.current)
      if (infoRef.current) observer.unobserve(infoRef.current)
    }
  }, [])

  return (
    <section id="tokenomics" className="w-full py-12 md:py-24 lg:py-32" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="section-content">
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            {/* Token supply */}
            <div className="space-y-4 max-w-3xl mx-auto opacity-0" ref={supplyRef}>
              <h3 className="text-2xl font-medium text-white/90 subtitle-style crypto-subtitle">token supply:</h3>
              <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white crypto-title animate-pulse-slow">
                {tokenConfig.tokenomics.totalSupply}
              </p>
            </div>

            {/* Tax information */}
            <div
              className="max-w-3xl mx-auto bg-gradient-card border-2 border-white shadow-card rounded-xl p-8 text-left card-3d opacity-0"
              ref={infoRef}
            >
              <p className="text-xl md:text-2xl text-white mb-8 heading-tertiary">
                No Taxes, No Bullshit. It's that simple.
              </p>
              <p className="text-xl md:text-2xl text-white heading-tertiary">
                LP tokens are burnt, and contract ownership is renounced.
              </p>
            </div>

            {/* Token distribution information */}
            <TokenomicsDistribution />
          </div>
        </div>
      </div>
    </section>
  )
}
