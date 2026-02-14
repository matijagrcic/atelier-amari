import commissionsCapabilities from "@/data/commissions/mock-commissions-capabilities.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type CommissionsCapabilitiesData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  capabilities: Array<{
    id: string
    title: string
    description: string
  }>
}

export function CommissionsCapabilitiesBlock() {
  const data = commissionsCapabilities as CommissionsCapabilitiesData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {data.capabilities.map((capability) => (
          <Card key={capability.id} className="border-border/70 bg-card/60">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">{capability.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
