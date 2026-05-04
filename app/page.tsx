import type { Metadata } from "next"
import { CollectionsCarouselBlock } from "@/components/pages/home/collections-carousel-block"
import { CtaBlock } from "@/components/pages/home/cta-block"
import { ExperienceGridBlock } from "@/components/pages/home/experience-grid-block"
import { FaqBlock } from "@/components/pages/home/faq-block"
import { HeroBlock } from "@/components/pages/home/hero-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { ProcessBlock } from "@/components/pages/home/process-block"
import { JsonLd } from "@/components/seo/json-ld"
import faq from "@/data/home/mock-faq.json"
import { buildFaqPageJsonLd } from "@/lib/seo/json-ld"
import { absoluteUrl, siteConfig, siteRoutes } from "@/lib/seo/site"
import { TestimonialsCarouselBlock } from "@/components/pages/home/testimonials-carousel-block"
import { ValuesCardsBlock } from "@/components/pages/home/values-cards-block"

type FaqData = {
  items: Array<{ question: string; answer: string }>
}

const homeTitle = siteConfig.defaultTitle
const homeDescription =
  "Explore original paintings, handcrafted ceramics, creative workshops, and custom commissions from Atelier Amari."

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: {
    canonical: siteRoutes.home,
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteRoutes.home,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        alt: "Atelier Amari studio with original paintings and creative materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
}

export default function Home() {
  const faqData = faq as FaqData

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <JsonLd data={buildFaqPageJsonLd(faqData.items)} />
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(22_46%_82%/.35),transparent_40%),radial-gradient(circle_at_12%_26%,hsl(39_34%_90%/.7),transparent_44%)]" />
        <div className="relative">
          <HeroBlock />
          <ExperienceGridBlock />
          <ValuesCardsBlock />
          <CollectionsCarouselBlock />
          <ProcessBlock />
          <TestimonialsCarouselBlock />
          <FaqBlock />
          <CtaBlock />
        </div>
      </main>
    </div>
  )
}
