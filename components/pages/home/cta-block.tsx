import { ArrowRight } from "lucide-react"
import cta from "@/data/home/mock-cta.json"
import { Button } from "@/components/ui/button"

type CtaData = {
  sectionId: string
  eyebrow?: string
  headline: string
  description: string
  details?: string[]
  footnote?: string
  actions: Array<{
    label: string
    href: string
    variant: "primary" | "secondary"
  }>
}

export function CtaBlock() {
  const data = cta as CtaData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(135deg,hsl(34_36%_89%),hsl(24_34%_80%))] p-6 shadow-[0_24px_90px_hsl(24_36%_34%/.18)] md:p-10">
        <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-background/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div>
            {data.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/60">
                {data.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 max-w-3xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              {data.headline}
            </h2>
            <p className="max-w-2xl pt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              {data.description}
            </p>
            {data.details?.length ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {data.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-full border border-foreground/15 bg-background/35 px-4 py-2 text-sm text-foreground/75"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="rounded-[1.5rem] border border-background/60 bg-background/45 p-4 shadow-inner backdrop-blur-sm sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/55">
              Rezerviraj mjesto
            </p>
            <div className="flex flex-col gap-3 pt-4">
              {data.actions.map((action) => {
                const isExternal = action.href.startsWith("http")
                const externalProps = isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {}

                return action.variant === "primary" ? (
                  <Button
                    key={action.href}
                    asChild
                    className="group h-14 justify-between rounded-full bg-foreground px-6 text-base text-background shadow-lg hover:bg-foreground/90"
                  >
                    <a href={action.href} {...externalProps}>
                      <span>{action.label}</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                ) : (
                  <Button
                    key={action.href}
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-foreground/30 bg-transparent"
                  >
                    <a href={action.href} {...externalProps}>
                      {action.label}
                    </a>
                  </Button>
                )
              })}
            </div>
            {data.footnote ? (
              <p className="pt-4 text-sm leading-relaxed text-foreground/65">{data.footnote}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
