"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ExchangePartners } from "../components/exchange-partners"
import { HowToBuy } from "../components/how-to-buy"
import { Tokenomics } from "../components/tokenomics"
import { Roadmap } from "../components/roadmap"
import { StickyNotes } from "../components/sticky-notes"
import { Disclaimer } from "../components/disclaimer"
import { SocialLinks } from "../components/social-links"
import { Navigation } from "../components/navigation"
import { siteConfig } from "../constants/site-config"
import { tokenConfig } from "../constants/token-config"
import { CopyButton } from "../components/copy-button"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const mascotRef = useRef<HTMLDivElement>(null)
  const [totalRaised, setTotalRaised] = useState<string>("Loading...")

  useEffect(() => {
    const fetchTotalRaised = async () => {
      try {
        const response = await fetch("https://presale-api-2wl9.onrender.com/api/amount?id=008874513cat")
        const data = await response.json()
        setTotalRaised(data.amount || 0)
      } catch (error) {
        console.error("Error fetching total raised:", error)
        setTotalRaised("Error loading data")
      }
    }

    fetchTotalRaised()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMascotHover = () => {
    if (mascotRef.current) {
      mascotRef.current.classList.add("animate-bounce")
      setTimeout(() => {
        mascotRef.current?.classList.remove("animate-bounce")
      }, 1000)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="section-content">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none crypto-title">
                    {tokenConfig.name}
                  </h1>
                  <div className="max-w-[600px] md:text-xl space-y-4">
                    <p className="animate-fade-in crypto-subtitle" style={{ animationDelay: "0.4s" }}>
                      The most adorable memecoin in existence. It's time for {tokenConfig.name} to take reign.
                    </p>
                    <p className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
                      Send your coins to the presale contract address from your personal wallet only!
                    </p>

                    {/* Total Raised */}
                    <div
                      className="bg-white/20 p-4 rounded-lg border border-pink-300 shadow-md animate-fade-in flex items-center justify-between"
                      style={{ animationDelay: "0.7s" }}
                    >
                      <h3 className="font-bold text-lg">Total USDT raised:</h3>
                      <div className="text-2xl font-mono bg-white/30 p-2 rounded-md ml-2">
                        {typeof totalRaised === "number" || !isNaN(Number(totalRaised))
                          ? Number(totalRaised).toLocaleString()
                          : totalRaised}
                      </div>
                    </div>

                    {/* Presale CA */}
                    {tokenConfig.presaleCA && (
                      <div
                        className="bg-white/20 p-4 rounded-lg border border-pink-300 shadow-md animate-fade-in flex items-center justify-between"
                        style={{ animationDelay: "0.8s" }}
                      >
                        <h3 className="font-bold text-lg">Presale CA:</h3>
                        <div className="flex items-center ml-2">
                          <CopyButton text={tokenConfig.presaleCA} className="hover-glow" />
                        </div>
                      </div>
                    )}

                    {/* Warning */}
                    <div
                      className="bg-yellow-100/70 p-4 rounded-lg border border-yellow-400 shadow-md animate-fade-in"
                      style={{ animationDelay: "1s" }}
                    >
                      <div className="flex items-center">
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
                          className="text-yellow-600 mr-2"
                        >
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <p className="font-medium text-yellow-800">
                          Do not send from a CEX or your funds will be lost.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="animate-fade-in" style={{ animationDelay: "1.4s" }}>
                  <SocialLinks className="text-black" />
                </div>
              </div>
              <div
                ref={mascotRef}
                className="flex items-center justify-center animate-float"
                onMouseEnter={handleMascotHover}
              >
                <div className="bg-white/30 p-4 rounded-full">
                  <Image
                    src="/mewtul-logo.png"
                    alt="Token Mascot"
                    width={400}
                    height={400}
                    className="rounded-full object-contain hover-grow transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      <ExchangePartners />
      <div className="section-divider"></div>
      <StickyNotes />
      <div className="section-divider"></div>
      <HowToBuy />
      <div className="section-divider"></div>
      <Tokenomics />
      <div className="section-divider"></div>
      <Roadmap />
      <div className="section-divider"></div>
      <Disclaimer />

      <footer className="w-full py-6 bg-[#FF6B9D]">
        <div className="container px-4 md:px-6">
          <div className="section-content">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex items-center gap-2">
                <Image src="/mewtul-logo.png" alt="Logo" width={40} height={40} className="rounded-full hover-grow" />
                <span className="text-2xl font-bold crypto-title">{tokenConfig.name}</span>
              </div>
              <SocialLinks className="text-black" />
              <p className="text-xs text-black/60">{siteConfig.footer?.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
