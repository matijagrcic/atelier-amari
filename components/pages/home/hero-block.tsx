import Image from "next/image"
import hero from "@/data/home/mock-hero.json"
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

type HeroData = {
  eyebrow: string
  headline: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
  highlights: string[]
  featureCard: {
    title: string
    subtitle: string
    description: string
    image: { src: string; alt: string }
  }
}

export function HeroBlock() {
  const data = hero as HeroData

  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-14 pt-12 md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <Badge className="rounded-full bg-primary/90">{data.eyebrow}</Badge>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {data.headline}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          {data.description}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="rounded-full">
            <a href={data.primaryAction.href}>{data.primaryAction.label}</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href={data.secondaryAction.href}>{data.secondaryAction.label}</a>
          </Button>
        </div>

        <ul className="flex flex-wrap gap-2 pt-2">
          {data.highlights.map((item) => (
            <li key={item}>
              <Badge variant="secondary" className="rounded-full px-3 py-1">
                {item}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      <Card className="overflow-hidden border-border/70 bg-card/70 shadow-lg">
        <AspectRatio ratio={4 / 3} className="relative">
          <Image
            src={data.featureCard.image.src}
            alt={data.featureCard.image.alt}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
            priority
          />
        </AspectRatio>
        <CardHeader>
          <CardTitle className="font-serif text-2xl">
            {data.featureCard.title}
          </CardTitle>
          <CardDescription>{data.featureCard.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {data.featureCard.description}
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
