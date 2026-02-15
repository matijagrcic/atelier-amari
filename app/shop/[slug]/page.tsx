import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { ProductDetailBlock, type ProductDetail } from "@/components/pages/shop/product-detail-block"
import productDetails from "@/data/shop/mock-product-details.json"

type ProductDetailsData = {
  items: ProductDetail[]
}

type DetailPageProps = {
  params: Promise<{ slug: string }>
}

function getProductBySlug(slug: string) {
  const data = productDetails as ProductDetailsData
  return data.items.find((item) => item.slug === slug)
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | Atelier Amari",
    }
  }

  return {
    title: `${product.name} | Atelier Amari`,
    description: product.shortDescription,
  }
}

export default async function ProductDetailPage({ params }: DetailPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(22_46%_82%/.26),transparent_44%),radial-gradient(circle_at_12%_22%,hsl(39_34%_90%/.68),transparent_46%)]" />
        <div className="relative">
          <ProductDetailBlock product={product} />
        </div>
      </main>
    </div>
  )
}
