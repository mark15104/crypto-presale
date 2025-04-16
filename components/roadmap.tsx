"use client"

import { useEffect, useRef } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { tokenConfig } from "@/constants/token-config"

export function Roadmap() {
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

    const cards = document.querySelectorAll(".roadmap-card")
    cards.forEach((card) => observer.observe(card))

    return () => {
      cards.forEach((card) => observer.unobserve(card))
    }
  }, [])

  return (
    <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32" ref={sectionRef}>
      <div className="container px-4 md:px-6">
        <div className="section-content">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white heading-secondary">
                {tokenConfig.roadmap.title}
              </h2>
              <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed subtitle-style crypto-subtitle">
                {tokenConfig.roadmap.description}
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            {tokenConfig.roadmap.phases.map((phase, index) => (
              <Card
                key={index}
                className="roadmap-card bg-gradient-card border-2 border-white shadow-card text-white card-3d opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="heading-tertiary">{phase.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
