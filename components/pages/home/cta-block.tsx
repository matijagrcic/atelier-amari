import cta from "@/data/home/mock-cta.json"
import { Button } from "@/components/ui/button"

type CtaData = {
  sectionId: string
  headline: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
}

export function CtaBlock() {
  const data = cta as CtaData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      <div className="rounded-3xl border border-border/70 bg-[linear-gradient(120deg,hsl(34_36%_88%),hsl(24_32%_78%))] p-8 shadow-lg md:p-12">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          {data.headline}
        </h2>
        <p className="max-w-2xl pt-4 text-base text-foreground/80 md:text-lg">
          {data.description}
        </p>
        <div className="flex flex-wrap gap-3 pt-7">
          <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90">
            <a href={data.primaryAction.href}>{data.primaryAction.label}</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-foreground/30 bg-transparent">
            <a href={data.secondaryAction.href}>{data.secondaryAction.label}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
