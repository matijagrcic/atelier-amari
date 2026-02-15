import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export type PurchaseOption = {
  label: string
  value: string
}

type DetailPurchasePanelProps = {
  title: string
  price: string
  badge?: string
  subBadge?: string
  shortDescription: string
  purchaseOptions: PurchaseOption[]
  ctaLabel: string
  stripePaymentLink: string
  helperText: string
}

export function DetailPurchasePanel({
  title,
  price,
  badge,
  subBadge,
  shortDescription,
  purchaseOptions,
  ctaLabel,
  stripePaymentLink,
  helperText,
}: DetailPurchasePanelProps) {
  return (
    <div className="space-y-4 rounded-2xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur md:p-6">
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {badge ? (
            <Badge variant="outline" className="rounded-full">
              {badge}
            </Badge>
          ) : null}
          {subBadge ? (
            <Badge variant="secondary" className="rounded-full">
              {subBadge}
            </Badge>
          ) : null}
        </div>
        <h1 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h1>
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">From</p>
        <p className="text-2xl font-semibold text-foreground/90">{price}</p>
      </div>

      <div className="space-y-2 rounded-xl border border-border/70 bg-background/50 p-4 text-sm">
        {purchaseOptions.map((option) => (
          <div key={`${option.label}-${option.value}`} className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">{option.label}</span>
            <span className="text-right font-medium text-foreground/85">{option.value}</span>
          </div>
        ))}
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{shortDescription}</p>

      <Button asChild className="w-full rounded-full text-sm uppercase tracking-[0.16em]">
        <a href={stripePaymentLink} target="_blank" rel="noopener noreferrer" aria-label={`${ctaLabel}: ${title}`}>
          {ctaLabel}
        </a>
      </Button>

      <p className="text-xs leading-relaxed text-muted-foreground">{helperText}</p>
    </div>
  )
}
