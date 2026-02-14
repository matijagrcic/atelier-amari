import shopHero from "@/data/shop/mock-shop-hero.json"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionShell } from "@/components/pages/shared/section-shell"

type ShopHeroData = {
  eyebrow: string
  headline: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
}

export function ShopHeroBlock() {
  const data = shopHero as ShopHeroData

  return (
    <SectionShell className="pb-10 pt-12">
      <div className="space-y-6">
        <Badge className="rounded-full bg-primary/90">{data.eyebrow}</Badge>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {data.headline}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{data.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-full">
            <a href={data.primaryAction.href}>{data.primaryAction.label}</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href={data.secondaryAction.href}>{data.secondaryAction.label}</a>
          </Button>
        </div>
      </div>
    </SectionShell>
  )
}
