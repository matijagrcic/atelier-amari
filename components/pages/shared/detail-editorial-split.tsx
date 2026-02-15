import Image from "next/image"

export type EditorialSplitSection = {
  title: string
  body: string
  image: { src: string; alt: string }
}

type DetailEditorialSplitProps = {
  sections: EditorialSplitSection[]
}

export function DetailEditorialSplit({ sections }: DetailEditorialSplitProps) {
  if (!sections.length) {
    return null
  }

  return (
    <section className="space-y-6">
      {sections.map((section, index) => (
        <div
          key={`${section.title}-${index}`}
          className="grid gap-6 rounded-2xl border border-border/70 bg-card/60 p-5 md:grid-cols-2 md:p-6"
        >
          <div className={`space-y-3 ${index % 2 === 1 ? "md:order-2" : ""}`}>
            <h2 className="font-serif text-2xl">{section.title}</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{section.body}</p>
          </div>
          <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? "md:order-1" : ""}`}>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
