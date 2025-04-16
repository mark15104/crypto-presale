"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { tokenConfig } from "@/constants/token-config"

export function HowToBuy() {
  // Replace token name in text
  const title = tokenConfig.howToBuy.title.replace(/\$TOKEN/g, tokenConfig.name)
  const description = tokenConfig.howToBuy.description.replace(/\$TOKEN/g, tokenConfig.name)

  // Process step information
  const steps = tokenConfig.howToBuy.steps.map((step) => ({
    ...step,
    title: step.title.replace(/ETH/g, tokenConfig.network.primary).replace(/\$TOKEN/g, tokenConfig.name),
    description: step.description
      .replace(/ETH/g, tokenConfig.network.primary)
      .replace(/\$TOKEN/g, tokenConfig.name)
      .replace(/metamask/gi, tokenConfig.wallet.recommended.toLowerCase())
      .replace(/Metamask/g, tokenConfig.wallet.recommended),
  }))

  const sectionRef = useRef<HTMLDivElement>(null)

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

    const cards = document.querySelectorAll(".how-to-buy-card")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="how-to-buy" className="w-full py-12 md:py-24 lg:py-32" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="section-content">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white heading-secondary">{title}</h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed subtitle-style crypto-subtitle">
                {description}
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="how-to-buy-card bg-gradient-card border-2 border-white shadow-card text-white card-3d opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="relative w-16 h-16 animate-float">
                    <Image
                      src={step.icon || "/placeholder.svg"}
                      alt={`Step ${index + 1}`}
                      width={60}
                      height={60}
                      className="rounded-full bg-primary-foreground p-2 hover-grow"
                    />
                  </div>
                  <CardTitle className="text-xl heading-tertiary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
