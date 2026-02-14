import Image from "next/image"
import aboutStudio from "@/data/about/mock-about-studio.json"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type AboutStudioData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  gallery: Array<{
    id: string
    src: string
    alt: string
    caption: string
  }>
}

export function AboutStudioBlock() {
  const data = aboutStudio as AboutStudioData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {data.gallery.map((item) => (
          <Card key={item.id} className="overflow-hidden border-border/70 bg-card/60">
            <CardContent className="pt-6">
              <AspectRatio ratio={4 / 3} className="relative overflow-hidden rounded-xl">
                <Image src={item.src} alt={item.alt} fill className="object-cover" />
              </AspectRatio>
            </CardContent>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{item.caption}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
