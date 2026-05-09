import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { ProductDetailBlock } from "@/components/pages/shop/product-detail-block"
import { JsonLd } from "@/components/seo/json-ld"
import { getAllProducts, getProductBySlug } from "@/data/shop/products"
import { buildBreadcrumbJsonLd, buildProductJsonLd } from "@/lib/seo/json-ld"
import { absoluteUrl, productPath, siteConfig, siteRoutes } from "@/lib/seo/site"

type DetailPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested Atelier Amari product could not be found.",
      robots: { index: false, follow: false },
    }
  }

  const image = product.gallery[0]?.src ?? siteConfig.defaultOgImage
  const imageAlt = product.gallery[0]?.alt ?? product.name
  const canonicalPath = productPath(product.slug)

  return {
    title: product.name,
    description: product.shortDescription,
    robots: { index: false, follow: false },
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      url: canonicalPath,
      type: "website",
      images: [
        {
          url: absoluteUrl(image),
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${siteConfig.name}`,
      description: product.shortDescription,
      images: [absoluteUrl(image)],
    },
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
      <JsonLd
        data={[
          buildProductJsonLd(product),
          buildBreadcrumbJsonLd([
            { name: "Home", path: siteRoutes.home },
            { name: "Shop", path: siteRoutes.shop },
            { name: product.name, path: productPath(product.slug) },
          ]),
        ]}
      />
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
