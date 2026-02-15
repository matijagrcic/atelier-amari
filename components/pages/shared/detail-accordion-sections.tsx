import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export type DetailAccordionSection = {
  id: string
  title: string
  content?: string
  items?: string[]
}

type DetailAccordionSectionsProps = {
  sections: DetailAccordionSection[]
}

export function DetailAccordionSections({ sections }: DetailAccordionSectionsProps) {
  return (
    <section className="rounded-2xl border border-border/70 bg-card/60 p-6">
      <Accordion type="multiple" className="w-full">
        {sections.map((section) => (
          <AccordionItem key={section.id} value={section.id}>
            <AccordionTrigger className="font-serif text-lg no-underline hover:no-underline">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              {section.content ? <p>{section.content}</p> : null}
              {section.items?.length ? (
                <ul className="space-y-2 text-foreground/85">
                  {section.items.map((item) => (
                    <li key={`${section.id}-${item}`} className="flex items-start gap-2">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
