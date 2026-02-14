import faq from "@/data/home/mock-faq.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FaqData = {
  sectionId: string
  eyebrow: string
  headline: string
  items: Array<{ question: string; answer: string }>
}

export function FaqBlock() {
  const data = faq as FaqData

  return (
    <section id={data.sectionId} className="mx-auto w-full max-w-4xl px-6 py-16">
      <div className="mb-8 space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h2 className="font-serif text-4xl tracking-tight md:text-5xl">
          {data.headline}
        </h2>
      </div>

      <Accordion type="single" collapsible className="rounded-2xl border border-border/70 px-6">
        {data.items.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger className="text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
