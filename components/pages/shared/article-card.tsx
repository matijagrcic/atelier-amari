import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type ArticleCardProps = {
  title: string
  excerpt: string
  publishedAt: string
  category: string
  href: string
  image: { src: string; alt: string }
}

export function ArticleCard({
  title,
  excerpt,
  publishedAt,
  category,
  href,
  image,
}: ArticleCardProps) {
  return (
    <Card className="h-full overflow-hidden border-border/70 bg-card/60">
      <CardContent className="pt-6">
        <AspectRatio ratio={16 / 10} className="relative overflow-hidden rounded-xl">
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </AspectRatio>
      </CardContent>
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary" className="rounded-full">
            {category}
          </Badge>
          <span className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
            {publishedAt}
          </span>
        </div>
        <CardTitle className="font-serif text-2xl leading-tight">
          <a href={href} className="transition-colors hover:text-primary">
            {title}
          </a>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </CardHeader>
    </Card>
  )
}
