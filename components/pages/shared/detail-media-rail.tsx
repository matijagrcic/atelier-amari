"use client"

import { useState } from "react"
import Image from "next/image"

type MediaAsset = { src: string; alt: string }

type DetailMediaRailProps = {
  title: string
  gallery: MediaAsset[]
}

export function DetailMediaRail({ title, gallery }: DetailMediaRailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeImage = gallery[activeImageIndex] ?? gallery[0]

  if (!activeImage) {
    return null
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 lg:grid-cols-[5.25rem_minmax(0,1fr)]">
        <div className="order-2 flex gap-2 overflow-x-auto pb-1 lg:order-none lg:flex-col lg:overflow-visible lg:pb-0">
          {gallery.map((asset, index) => {
            const isActive = index === activeImageIndex
            return (
              <button
                key={`${title}-thumb-${asset.src}-${index}`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:h-24 lg:w-20 ${
                  isActive
                    ? "border-foreground shadow-[0_0_0_1px_hsl(var(--foreground)/0.2)]"
                    : "border-border/70 opacity-80 hover:opacity-100"
                }`}
                aria-label={`Preview image ${index + 1} of ${title}`}
                aria-pressed={isActive}
              >
                <Image src={asset.src} alt={asset.alt} fill className="object-cover" sizes="96px" />
              </button>
            )
          })}
        </div>

        <div className="order-1 relative overflow-hidden rounded-2xl border border-border/70 bg-card/50 lg:order-none">
          <div className="relative aspect-[5/4] w-full lg:aspect-[4/3]">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
