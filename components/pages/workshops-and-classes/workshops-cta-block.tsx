import workshopsCta from "@/data/workshops-and-classes/mock-workshops-cta.json"
import { CtaOverlapCard } from "@/components/pages/shared/cta-overlap-card"
import { SectionShell } from "@/components/pages/shared/section-shell"

type WorkshopsCtaData = {
  sectionId: string
  eyebrow: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction: { label: string; href: string }
}

export function WorkshopsCtaBlock() {
  const data = workshopsCta as WorkshopsCtaData

  return (
    <SectionShell id={data.sectionId} className="pt-10">
      <CtaOverlapCard
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        primaryAction={data.primaryAction}
        secondaryAction={data.secondaryAction}
      />
    </SectionShell>
  )
}
