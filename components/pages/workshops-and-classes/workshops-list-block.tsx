import workshopsList from "@/data/workshops-and-classes/mock-workshops-list.json"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type WorkshopsListData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  items: Array<{
    id: string
    title: string
    format: string
    duration: string
    schedule: string
    description: string
    level: string
  }>
}

export function WorkshopsListBlock() {
  const data = workshopsList as WorkshopsListData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {data.items.map((item) => (
          <Card key={item.id} className="border-border/70 bg-card/60">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="rounded-full">
                  {item.format}
                </Badge>
                <Badge variant="secondary" className="rounded-full">
                  {item.level}
                </Badge>
              </div>
              <CardTitle className="font-serif text-3xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{item.description}</p>
              <p className="text-sm font-medium text-foreground/80">
                {item.duration} - {item.schedule}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
