import { siteConfig } from "@/constants/site-config"

export function Disclaimer() {
  return (
    <section className="w-full py-8 bg-[#FF6B9D] text-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h3 className="text-lg font-semibold text-black">{siteConfig.disclaimer.title}</h3>
          <p className="max-w-[900px] text-xs md:text-sm text-black/80">{siteConfig.disclaimer.content}</p>
        </div>
      </div>
    </section>
  )
}
