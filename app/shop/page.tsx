import type { Metadata } from "next"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { OverlapCtaStripBlock } from "@/components/pages/shop/overlap-cta-strip-block"
import { ProductGridBlock } from "@/components/pages/shop/product-grid-block"
import { ShopHeroBlock } from "@/components/pages/shop/shop-hero-block"

export const metadata: Metadata = {
  title: "Shop | Atelier Amari",
  description: "Browse handcrafted ceramic collections and studio editions.",
}

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,hsl(22_46%_82%/.35),transparent_40%),radial-gradient(circle_at_12%_26%,hsl(39_34%_90%/.7),transparent_44%)]" />
        <div className="relative">
          <ShopHeroBlock />
          <ProductGridBlock />
          <OverlapCtaStripBlock />
        </div>
      </main>
    </div>
  )
}
