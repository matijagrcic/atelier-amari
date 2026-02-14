import { CollectionsCarouselBlock } from "@/components/pages/home/collections-carousel-block"
import { CtaBlock } from "@/components/pages/home/cta-block"
import { FaqBlock } from "@/components/pages/home/faq-block"
import { HeroBlock } from "@/components/pages/home/hero-block"
import { NavigationBlock } from "@/components/pages/home/navigation-block"
import { ProcessBlock } from "@/components/pages/home/process-block"
import { TestimonialsCarouselBlock } from "@/components/pages/home/testimonials-carousel-block"
import { ValuesCardsBlock } from "@/components/pages/home/values-cards-block"

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(22_46%_82%/.35),transparent_40%),radial-gradient(circle_at_12%_26%,hsl(39_34%_90%/.7),transparent_44%)]" />
        <div className="relative">
          <HeroBlock />
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
