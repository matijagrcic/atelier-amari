"use client"

import Image from "next/image"
import collections from "@/data/home/mock-collections-carousel.json"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type CollectionsData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
  items: Array<{
    name: string
    material: string
    description: string
    pieceCount: string
    image: { src: string; alt: string }
  }>
}

export function CollectionsCarouselBlock() {
  const data = collections as CollectionsData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          {data.headline}
        </h2>
        <p className="text-muted-foreground">{data.description}</p>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="px-2 md:px-12">
        <CarouselContent>
          {data.items.map((item) => (
            <CarouselItem key={item.name} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full border-border/70 bg-card/60">
                <CardContent className="pt-6">
                  <AspectRatio ratio={4 / 3} className="relative overflow-hidden rounded-xl">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </AspectRatio>
                </CardContent>
                <CardHeader>
                  <Badge variant="outline" className="w-fit rounded-full">
                    {item.material}
                  </Badge>
                  <CardTitle className="pt-3 font-serif text-2xl">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.pieceCount}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-border/70" />
        <CarouselNext className="right-0 border-border/70" />
      </Carousel>

      <div className="mt-8 rounded-2xl border border-border/70 bg-[linear-gradient(120deg,hsl(35_40%_93%),hsl(30_24%_96%))] p-6 md:flex md:items-center md:justify-between">
        <p className="font-serif text-2xl tracking-tight md:text-3xl">
          Discover the full atelier edit.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
          <Button asChild className="rounded-full">
            <a href={data.primaryAction.href}>{data.primaryAction.label}</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href={data.secondaryAction.href}>{data.secondaryAction.label}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
