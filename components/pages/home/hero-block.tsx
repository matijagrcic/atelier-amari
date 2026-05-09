import Image from "next/image"
import hero from "@/data/home/mock-hero.json"
import { AspectRatio } from "@/components/ui/aspect-ratio"

type HeroData = {
  gallery: Array<{ src: string; alt: string }>
}

export function HeroBlock() {
  const data = hero as HeroData

  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-12">
      <div className="grid gap-5 md:grid-cols-2">
        {data.gallery.map((image, index) => (
          <AspectRatio
            key={image.src}
            ratio={index === 0 ? 5 / 4 : 4 / 5}
            className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-background/40 shadow-[0_24px_80px_hsl(25_40%_30%/.16)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority={index === 0}
            />
          </AspectRatio>
        ))}
      </div>
    </section>
  )
}
