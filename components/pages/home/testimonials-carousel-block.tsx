"use client"

import Image from "next/image"
import testimonials from "@/data/home/mock-testimonials-carousel.json"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type TestimonialsData = {
  sectionId: string
  eyebrow: string
  headline: string
  items: Array<{
    quote: string
    name: string
    role: string
    portraitImage: { src: string; alt: string }
  }>
}

export function TestimonialsCarouselBlock() {
  const data = testimonials as TestimonialsData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          {data.headline}
        </h2>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="px-2 md:px-12">
        <CarouselContent>
          {data.items.map((item) => (
            <CarouselItem key={item.name} className="md:basis-1/2">
              <Card className="h-full border-border/70 bg-card/60">
                <CardHeader className="font-serif text-2xl leading-relaxed text-balance">
                  <span>
                    &ldquo;{item.quote}&rdquo;
                  </span>
                </CardHeader>
                <CardContent />
                <CardFooter className="flex items-center gap-4">
                  <div className="relative size-12 overflow-hidden rounded-full border border-border/70">
                    <Image
                      src={item.portraitImage.src}
                      alt={item.portraitImage.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-border/70" />
        <CarouselNext className="right-0 border-border/70" />
      </Carousel>
    </section>
  )
}
