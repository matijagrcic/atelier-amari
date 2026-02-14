import commissionsTallyForm from "@/data/commissions/mock-commissions-tally-form.json"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"
import { TallyEmbed } from "@/components/pages/shared/tally-embed"

type CommissionsTallyFormData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  formUrl: string
  formTitle: string
}

export function CommissionsTallyFormBlock() {
  const data = commissionsTallyForm as CommissionsTallyFormData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <TallyEmbed formUrl={data.formUrl} title={data.formTitle} />
    </SectionShell>
  )
}
