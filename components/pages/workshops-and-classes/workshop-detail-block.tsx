import Link from "next/link"
import {
  DetailAccordionSections,
  type DetailAccordionSection,
} from "@/components/pages/shared/detail-accordion-sections"
import {
  DetailEditorialSplit,
  type EditorialSplitSection,
} from "@/components/pages/shared/detail-editorial-split"
import { DetailMediaRail } from "@/components/pages/shared/detail-media-rail"
import {
  DetailPurchasePanel,
  type PurchaseOption,
} from "@/components/pages/shared/detail-purchase-panel"
import {
  DetailRelatedItems,
  type RelatedDetailItem,
} from "@/components/pages/shared/detail-related-items"

export type WorkshopDetail = {
  slug: string
  title: string
  format: string
  level: string
  duration: string
  schedule: string
  price: string
  priceLabel?: string
  shortDescription: string
  longDescription: string
  highlights: string[]
  facts?: Array<{ label: string; value: string }>
  purchaseOptions?: PurchaseOption[]
  accordionSections?: DetailAccordionSection[]
  editorialSections?: EditorialSplitSection[]
  relatedItems?: RelatedDetailItem[]
  includes?: string[]
  importantInformation?: string[]
  gallery: Array<{ src: string; alt: string }>
  ctaLabel?: string
  helperText?: string
  stripePaymentLink: string
}

type WorkshopDetailBlockProps = {
  workshop: WorkshopDetail
}

export function WorkshopDetailBlock({ workshop }: WorkshopDetailBlockProps) {
  const purchaseOptions = workshop.purchaseOptions?.length
    ? workshop.purchaseOptions
    : [
        { label: "Duration", value: workshop.duration },
        { label: "Schedule", value: workshop.schedule },
        { label: "Level", value: workshop.level },
      ]

  const includes = workshop.includes?.length
    ? workshop.includes
    : ["Clay, glaze materials, and firings", "Instructor guidance", "Small-group studio setting"]
  const importantInformation = workshop.importantInformation?.length
    ? workshop.importantInformation
    : [
        "Please arrive 10 minutes before the start time.",
        "Each booking is a separate payment and seat reservation.",
      ]
  const accordionSections = workshop.accordionSections?.length
    ? workshop.accordionSections
    : [
        {
          id: "description",
          title: "Full Description",
          content: workshop.longDescription,
        },
        {
          id: "highlights",
          title: "Highlights",
          items: workshop.highlights,
        },
        {
          id: "includes",
          title: "Includes",
          items: includes,
        },
        {
          id: "important",
          title: "Important Information",
          items: importantInformation,
        },
      ]
  const editorialSections = workshop.editorialSections?.length
    ? workshop.editorialSections
    : [
        {
          title: "Studio Atmosphere",
          body: "Each session balances guided instruction with calm, focused making time in a small atelier environment.",
          image: {
            src: workshop.gallery[1]?.src ?? workshop.gallery[0]?.src ?? "/images/home/portrait-marta.svg",
            alt: workshop.gallery[1]?.alt ?? workshop.gallery[0]?.alt ?? `${workshop.title} studio atmosphere`,
          },
        },
      ]
  const relatedItems = workshop.relatedItems?.length ? workshop.relatedItems : []

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <Link
        href="/workshops-and-classes"
        className="mb-8 inline-flex text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Natrag na radionice
      </Link>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <DetailMediaRail title={workshop.title} gallery={workshop.gallery} />

        <aside className="lg:sticky lg:top-24">
          <DetailPurchasePanel
            title={workshop.title}
            price={workshop.price}
            priceLabel={workshop.priceLabel}
            badge={workshop.format}
            subBadge={workshop.level}
            shortDescription={workshop.shortDescription}
            purchaseOptions={purchaseOptions}
            ctaLabel={workshop.ctaLabel ?? "Reserve via Stripe"}
            stripePaymentLink={workshop.stripePaymentLink}
            helperText={
              workshop.helperText ??
              "Secure checkout in Stripe. Each workshop booking is a separate payment."
            }
          />
        </aside>
      </div>

      <div className="mt-10 space-y-8">
        <DetailAccordionSections sections={accordionSections} />
        <DetailEditorialSplit sections={editorialSections} />
        <DetailRelatedItems heading="Možda će ti se svidjeti" items={relatedItems} />
      </div>
    </section>
  )
}
