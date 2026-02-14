import giftCardOptions from "@/data/gift-card/mock-gift-card-options.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type GiftCardOptionsData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  options: Array<{
    id: string
    title: string
    value: string
    description: string
    action: { label: string; href: string }
  }>
}

export function GiftCardOptionsBlock() {
  const data = giftCardOptions as GiftCardOptionsData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {data.options.map((option) => (
          <Card key={option.id} className="border-border/70 bg-card/60">
            <CardHeader>
              <CardTitle className="font-serif text-3xl">{option.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-lg font-medium text-foreground">{option.value}</p>
              <p className="text-sm text-muted-foreground">{option.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full rounded-full">
                <a href={option.action.href}>{option.action.label}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
