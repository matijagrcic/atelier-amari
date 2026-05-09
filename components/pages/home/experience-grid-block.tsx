import Image from "next/image"
import experienceGrid from "@/data/home/mock-experience-grid.json"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ExperienceGridData = {
  sectionId: string
  eyebrow: string
  headline: string
  description?: string
  items: Array<{
    id: string
    title: string
    description: string
    href: string
    badge?: string
    ctaLabel: string
    image: { src: string; alt: string }
  }>
}

export function ExperienceGridBlock() {
  const data = experienceGrid as ExperienceGridData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-6xl px-6 py-14">
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{data.headline}</h2>
        {data.description ? <p className="text-muted-foreground">{data.description}</p> : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
        {data.items.map((item, index) => (
          <Card
            key={item.id}
            className="h-full border-border/70 bg-[linear-gradient(145deg,hsl(34_30%_96%),hsl(30_24%_93%))] shadow-sm"
          >
            <CardContent className="pt-6">
              <AspectRatio ratio={4 / 3} className="relative overflow-hidden rounded-xl">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </AspectRatio>
            </CardContent>
            <CardHeader className="space-y-3">
              {item.badge ? (
                <Badge variant="outline" className="w-fit rounded-full">
                  {item.badge}
                </Badge>
              ) : null}
              <CardTitle className="font-serif text-2xl tracking-tight">{item.title}</CardTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <Button
                asChild
                variant={index === 0 ? "default" : "outline"}
                className="mt-2 w-full rounded-full"
              >
                <a href={item.href}>{item.ctaLabel}</a>
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
