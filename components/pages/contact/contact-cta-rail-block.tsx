import contactCtaRail from "@/data/contact/mock-contact-cta-rail.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type ContactCtaRailData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  actions: Array<{
    id: string
    title: string
    description: string
    action: { label: string; href: string }
  }>
}

export function ContactCtaRailBlock() {
  const data = contactCtaRail as ContactCtaRailData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {data.actions.map((item) => {
          const isExternal = item.action.href.startsWith("http")

          return (
            <Card key={item.id} className="border-border/70 bg-card/60">
              <CardHeader>
                <CardTitle className="font-serif text-3xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <Button asChild variant="outline" className="rounded-full">
                  <a
                    href={item.action.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.action.label}
                  </a>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}
