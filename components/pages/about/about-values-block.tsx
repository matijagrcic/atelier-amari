import aboutValues from "@/data/about/mock-about-values.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type AboutValuesData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  values: Array<{
    id: string
    title: string
    description: string
  }>
}

export function AboutValuesBlock() {
  const data = aboutValues as AboutValuesData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {data.values.map((item) => (
          <Card key={item.id} className="border-border/70 bg-card/60">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
