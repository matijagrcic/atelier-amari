import giftCardHero from "@/data/gift-card/mock-gift-card-hero.json"
import { Badge } from "@/components/ui/badge"
import { SectionShell } from "@/components/pages/shared/section-shell"

type GiftCardHeroData = {
  eyebrow: string
  headline: string
  description: string
}

export function GiftCardHeroBlock() {
  const data = giftCardHero as GiftCardHeroData

  return (
    <SectionShell className="pb-8 pt-12">
      <div className="space-y-5">
        <Badge className="rounded-full bg-primary/90">{data.eyebrow}</Badge>
        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {data.headline}
        </h1>
        <p className="max-w-3xl text-lg text-muted-foreground">{data.description}</p>
      </div>
    </SectionShell>
  )
}
