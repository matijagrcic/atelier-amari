import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type DetailAccordionSection = {
  id: string
  title: string
  content?: string | string[]
  items?: string[]
}

type DetailAccordionSectionsProps = {
  sections: DetailAccordionSection[]
  collapsible?: boolean
}

function getContentParagraphs(content?: string | string[]) {
  if (!content) {
    return []
  }

  if (Array.isArray(content)) {
    return content
  }

  return content
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function DetailSectionContent({ section }: { section: DetailAccordionSection }) {
  const contentParagraphs = getContentParagraphs(section.content)

  return (
    <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
      {contentParagraphs.map((paragraph) => (
        <p key={`${section.id}-${paragraph}`} className="max-w-3xl">
          {paragraph}
        </p>
      ))}
      {section.items?.map((item) => (
        <p key={`${section.id}-${item}`} className="max-w-3xl">
          {item}
        </p>
      ))}
    </div>
  )
}

export function DetailAccordionSections({ sections, collapsible = true }: DetailAccordionSectionsProps) {
  if (!collapsible) {
    return (
      <section className="space-y-7 rounded-[1.75rem] border border-border/70 bg-card/65 p-5 shadow-sm backdrop-blur md:p-7">
        {sections.map((section) => (
          <article key={section.id} className="border-b border-border/60 pb-7 last:border-b-0 last:pb-0">
            <h2 className="mb-4 font-serif text-lg leading-tight md:text-xl">{section.title}</h2>
            <DetailSectionContent section={section} />
          </article>
        ))}
      </section>
    )
  }

  return (
    <section className="rounded-[1.75rem] border border-border/70 bg-card/65 p-5 shadow-sm backdrop-blur md:p-7">
      <Accordion type="multiple" className="w-full">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={section.id} className="border-border/60">
            <AccordionTrigger className="font-serif text-lg no-underline hover:no-underline md:text-xl">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <DetailSectionContent section={section} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
