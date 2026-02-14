import aboutStory from "@/data/about/mock-about-story.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type AboutStoryData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  paragraphs: string[]
}

export function AboutStoryBlock() {
  const data = aboutStory as AboutStoryData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <Card className="border-border/70 bg-card/50">
        <CardHeader>
          <CardTitle className="font-serif text-3xl">Our Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </SectionShell>
  )
}
