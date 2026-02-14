import giftCardFaq from "@/data/gift-card/mock-gift-card-faq.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"

type GiftCardFaqData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  items: Array<{
    id: string
    question: string
    answer: string
  }>
}

export function GiftCardFaqBlock() {
  const data = giftCardFaq as GiftCardFaqData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <Accordion type="single" collapsible className="w-full">
        {data.items.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionShell>
  )
}
