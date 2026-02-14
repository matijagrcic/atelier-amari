import overlapCta from "@/data/shop/mock-overlap-cta-strip.json"
import { CtaOverlapCard } from "@/components/pages/shared/cta-overlap-card"
import { SectionShell } from "@/components/pages/shared/section-shell"

type OverlapCtaData = {
  sectionId: string
  eyebrow: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
}

export function OverlapCtaStripBlock() {
  const data = overlapCta as OverlapCtaData

  return (
    <SectionShell id={data.sectionId} className="-mt-4 pb-24 pt-10 md:-mt-10">
      <div className="relative">
        <div className="pointer-events-none absolute -left-6 top-8 h-28 w-28 rounded-full bg-primary/15 blur-2xl" />
        <div className="pointer-events-none absolute -right-8 bottom-0 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
        <div className="relative">
          <CtaOverlapCard
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
            primaryAction={data.primaryAction}
            secondaryAction={data.secondaryAction}
          />
        </div>
      </div>
    </SectionShell>
  )
}
