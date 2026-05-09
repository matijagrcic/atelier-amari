import type { Metadata } from "next"
import { GiftCardFaqBlock } from "@/components/pages/gift-card/gift-card-faq-block"
import { GiftCardHeroBlock } from "@/components/pages/gift-card/gift-card-hero-block"
import { GiftCardOptionsBlock } from "@/components/pages/gift-card/gift-card-options-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Gift creative studio moments with Atelier A'mari gift cards and experiences.",
  robots: { index: false, follow: false },
}

export default function GiftCardPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <GiftCardHeroBlock />
          <GiftCardOptionsBlock />
          <GiftCardFaqBlock />
        </div>
      </main>
    </div>
  )
}
