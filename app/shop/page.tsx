import type { Metadata } from "next"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { OverlapCtaStripBlock } from "@/components/pages/shop/overlap-cta-strip-block"
import { ProductGridBlock } from "@/components/pages/shop/product-grid-block"
import { ShopHeroBlock } from "@/components/pages/shop/shop-hero-block"
import { JsonLd } from "@/components/seo/json-ld"
import { getAllProducts } from "@/data/shop/products"
import { buildShopCollectionJsonLd } from "@/lib/seo/json-ld"
import { absoluteUrl, siteConfig, siteRoutes } from "@/lib/seo/site"

const shopTitle = "Shop"
const shopDescription =
  "Browse handcrafted ceramics, original paintings, and studio editions from Atelier Amari."

export const metadata: Metadata = {
  title: shopTitle,
  description: shopDescription,
  alternates: {
    canonical: siteRoutes.shop,
  },
  openGraph: {
    title: `${shopTitle} | ${siteConfig.name}`,
    description: shopDescription,
    url: siteRoutes.shop,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        alt: "Atelier Amari shop edit of ceramics and original paintings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${shopTitle} | ${siteConfig.name}`,
    description: shopDescription,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
}

export default function ShopPage() {
  const products = getAllProducts()

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <JsonLd data={buildShopCollectionJsonLd(products, shopDescription)} />
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
