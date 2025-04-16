"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { tokenConfig } from "@/constants/token-config"
import { CopyButton } from "@/components/copy-button"

export function StickyNotes() {
  // Get sticky notes data directly from tokenConfig
  const stickyNotes = tokenConfig.stickyNotes.map((note) => ({
    ...note,
    content: note.content.replace(/\$TOKEN/g, tokenConfig.name),
    subtext: note.subtext.replace(/\$TOKEN/g, tokenConfig.name),
  }))

  const notesRef = useRef<HTMLDivElement>(null)

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

    const cards = document.querySelectorAll(".sticky-note-card")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" ref={notesRef}>
      <div className="container px-4 md:px-6">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stickyNotes.map((note, index) => (
              <Card
                key={index}
                className={`sticky-note-card bg-gradient-card border-2 border-white shadow-card text-white card-3d opacity-0 ${note.rotation}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl heading-tertiary">{note.content}</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Display token address copy button for the first card */}
                  {index === 0 ? (
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <span className="text-sm font-medium crypto-subtitle">Token Address</span>
                        <CopyButton text={tokenConfig.tokenCA} className="ml-2 bg-white/20 hover-glow" />
                      </div>

                      {/* Presale Address Section */}
                      <div className="flex items-center">
                        <span className="text-sm font-medium crypto-subtitle">Presale Address</span>
                        <CopyButton text={tokenConfig.presaleCA} className="ml-2 bg-white/20 hover-glow" />
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <p className="text-sm text-white/80">Follow our socials</p>
                        <div className="flex gap-2">
                          <a href={tokenConfig.socialLinks.twitter} className="text-white hover:text-white/80">
                            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover-grow">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-white/80">{note.subtext}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="bg-gradient-card border-2 border-white shadow-card text-white max-w-lg mx-auto relative overflow-hidden card-3d">
              <div className="absolute inset-0 z-0 opacity-20">
                <Image
                  src="/mewtul-logo.png"
                  alt="Background Mascot"
                  fill
                  className="object-contain object-right-bottom animate-pulse-slow"
                />
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="heading-tertiary">
                  {tokenConfig.howToBuy.solInstructions.title.replace(/SOL/g, tokenConfig.network.secondary)}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2">
                  {tokenConfig.howToBuy.solInstructions.steps.map((step, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="font-bold">•</span>
                      <span>
                        {step.replace(/SOL/g, tokenConfig.network.secondary).replace(/\$TOKEN/g, tokenConfig.name)}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
