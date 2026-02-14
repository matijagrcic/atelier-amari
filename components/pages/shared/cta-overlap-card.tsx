import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type CtaOverlapCardProps = {
  eyebrow: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function CtaOverlapCard({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: CtaOverlapCardProps) {
  return (
    <Card className="border-border/70 bg-[linear-gradient(145deg,hsl(24_38%_92%),hsl(30_32%_97%))] shadow-xl">
      <CardHeader className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {eyebrow}
        </p>
        <CardTitle className="font-serif text-4xl tracking-tight md:text-5xl">{title}</CardTitle>
        <CardDescription className="text-base text-foreground/70">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        <Button asChild className="rounded-full">
          <a href={primaryAction.href}>
            {primaryAction.label}
            <ArrowRight className="ml-2 size-4" />
          </a>
        </Button>
        {secondaryAction ? (
          <Button asChild variant="outline" className="rounded-full">
            <a href={secondaryAction.href}>{secondaryAction.label}</a>
          </Button>
        ) : null}
      </CardContent>
    </Card>
  )
}
