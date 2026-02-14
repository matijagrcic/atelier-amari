import commissionsProcess from "@/data/commissions/mock-commissions-process.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type CommissionsProcessData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  steps: Array<{
    id: string
    title: string
    description: string
  }>
}

export function CommissionsProcessBlock() {
  const data = commissionsProcess as CommissionsProcessData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {data.steps.map((step, index) => (
          <Card key={step.id} className="border-border/70 bg-card/50">
            <CardHeader className="space-y-2">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Stage {index + 1}
              </p>
              <CardTitle className="font-serif text-2xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
