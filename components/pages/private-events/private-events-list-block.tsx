import privateEventsList from "@/data/private-events/mock-private-events-list.json"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type PrivateEventsListData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  items: Array<{
    id: string
    title: string
    groupSize: string
    duration: string
    description: string
    includes: string[]
  }>
}

export function PrivateEventsListBlock() {
  const data = privateEventsList as PrivateEventsListData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {data.items.map((item) => (
          <Card key={item.id} className="border-border/70 bg-card/60">
            <CardHeader className="space-y-3">
              <CardTitle className="font-serif text-3xl">{item.title}</CardTitle>
              <p className="text-sm font-medium text-muted-foreground">
                {item.groupSize} - {item.duration}
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.includes.map((detail) => (
                  <Badge key={detail} variant="secondary" className="rounded-full">
                    {detail}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
