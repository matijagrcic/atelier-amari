import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  eyebrow?: string
  headline: string
  description?: string
  className?: string
}

export function SectionHeader({
  eyebrow,
  headline,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 max-w-3xl space-y-3", className)}>
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl tracking-tight md:text-5xl">{headline}</h2>
      {description ? <p className="text-muted-foreground">{description}</p> : null}
    </div>
  )
}
