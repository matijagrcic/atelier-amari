import Image from "next/image"
import processData from "@/data/home/mock-process.json"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

type ProcessData = {
  sectionId: string
  eyebrow: string
  headline: string
  gallery: Array<{ src: string; alt: string }>
  steps: Array<{ title: string; description: string }>
}

export function ProcessBlock() {
  const data = processData as ProcessData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          {data.headline}
        </h2>
      </div>

      <div className="space-y-6 rounded-2xl border border-border/70 bg-card/40 p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {data.gallery.map((image) => (
            <AspectRatio
              key={image.src}
              ratio={4 / 3}
              className="relative overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </AspectRatio>
          ))}
        </div>
        {data.steps.map((step, index) => (
          <div key={step.title}>
            <div className="grid gap-4 py-4 md:grid-cols-[120px_1fr] md:gap-6">
              <Badge variant="outline" className="h-fit w-fit rounded-full px-3">
                Step {index + 1}
              </Badge>
              <div>
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
            {index < data.steps.length - 1 ? <Separator /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
