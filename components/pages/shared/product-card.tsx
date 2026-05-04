import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type ProductCardProps = {
  name: string
  price: string
  description: string
  category: string
  image: { src: string; alt: string }
  action: { label: string; href: string }
}

export function ProductCard({
  name,
  price,
  description,
  category,
  image,
  action,
}: ProductCardProps) {
  return (
    <Card className="h-full border-border/70 bg-card/70 shadow-sm">
      <CardContent className="pt-6">
        <AspectRatio ratio={4 / 3} className="relative overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </AspectRatio>
      </CardContent>
      <CardHeader className="space-y-3">
        <Badge variant="outline" className="w-fit rounded-full">
          {category}
        </Badge>
        <div className="space-y-1">
          <CardTitle className="font-serif text-2xl">{name}</CardTitle>
          <p className="text-sm font-medium text-foreground/80">{price}</p>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" className="w-full rounded-full">
          <a href={action.href}>{action.label}</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
