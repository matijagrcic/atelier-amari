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

export type ProductDetail = {
  slug: string
  name: string
  category: string
  price: string
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
  stripePaymentLink: string
}

type ProductDetailBlockProps = {
  product: ProductDetail
}

export function ProductDetailBlock({ product }: ProductDetailBlockProps) {
  const purchaseOptions = product.purchaseOptions?.length
    ? product.purchaseOptions
    : [
        { label: "Category", value: product.category },
        { label: "Availability", value: "Made in small batches" },
        { label: "Delivery", value: "Ships within 3-5 business days" },
      ]

  const includes = product.includes?.length
    ? product.includes
    : ["Hand-finished ceramic piece", "Protective gift-ready packaging", "Care card"]
  const importantInformation = product.importantInformation?.length
    ? product.importantInformation
    : ["Natural glaze variation is expected between pieces.", "Final sale on limited editions."]
  const accordionSections = product.accordionSections?.length
    ? product.accordionSections
    : [
        {
          id: "description",
          title: "Full Description",
          content: product.longDescription,
        },
        {
          id: "highlights",
          title: "Highlights",
          items: product.highlights,
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

  const editorialSections = product.editorialSections?.length
    ? product.editorialSections
    : [
        {
          title: "Studio Process",
          body: "Each piece is shaped, finished, and fired in small studio batches to preserve subtle hand-made character.",
          image: {
            src: product.gallery[1]?.src ?? product.gallery[0]?.src ?? "/images/home/process-throwing.svg",
            alt: product.gallery[1]?.alt ?? product.gallery[0]?.alt ?? `${product.name} studio process`,
          },
        },
      ]

  const relatedItems = product.relatedItems?.length ? product.relatedItems : []

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <Link
        href="/shop"
        className="mb-8 inline-flex text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Back to shop
      </Link>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
        <DetailMediaRail title={product.name} gallery={product.gallery} />

        <aside className="lg:sticky lg:top-24">
          <DetailPurchasePanel
            title={product.name}
            price={product.price}
            badge={product.category}
            shortDescription={product.shortDescription}
            purchaseOptions={purchaseOptions}
            ctaLabel="Buy now via Stripe"
            stripePaymentLink={product.stripePaymentLink}
            helperText="Secure checkout in Stripe. Each piece is purchased individually."
          />
        </aside>
      </div>

      <div className="mt-10 space-y-8">
        <DetailAccordionSections sections={accordionSections} />
        <DetailEditorialSplit sections={editorialSections} />
        <DetailRelatedItems heading="You might also like" items={relatedItems} />
      </div>
    </section>
  )
}
