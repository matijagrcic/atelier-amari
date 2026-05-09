import type { ProductDetail } from "@/data/shop/products"
import { absoluteUrl, productUrl, siteConfig, siteRoutes } from "@/lib/seo/site"

export type JsonLdData = Record<string, unknown>

type FaqItem = {
  question: string
  answer: string
}

type BreadcrumbItem = {
  name: string
  path: string
}

export function serializeJsonLd(data: JsonLdData | JsonLdData[]) {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}

export function buildOrganizationJsonLd(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.logo),
    sameAs: [siteConfig.instagramUrl],
  }
}

export function buildWebsiteJsonLd(): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  }
}

export function buildFaqPageJsonLd(items: FaqItem[], pagePath = siteRoutes.home): JsonLdData {
  const pageUrl = absoluteUrl(pagePath)

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function buildShopCollectionJsonLd(products: ProductDetail[], description: string): JsonLdData {
  const shopUrl = absoluteUrl(siteRoutes.shop)

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${shopUrl}#collection`,
    name: "Shop Atelier A'mari",
    description,
    url: shopUrl,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: productUrl(product.slug),
        item: buildProductSummaryJsonLd(product),
      })),
    },
  }
}

export function buildProductJsonLd(product: ProductDetail): JsonLdData {
  const url = productUrl(product.slug)
  const material = getFactValue(product, ["Material", "Medium"])

  return removeUndefined({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.longDescription,
    image: product.gallery.map((image) => absoluteUrl(image.src)),
    url,
    sku: product.sku,
    productID: product.slug,
    category: product.category,
    material,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    additionalProperty: product.facts?.map((fact) => ({
      "@type": "PropertyValue",
      name: fact.label,
      value: fact.value,
    })),
    offers: buildOfferJsonLd(product),
  })
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

function buildProductSummaryJsonLd(product: ProductDetail): JsonLdData {
  return removeUndefined({
    "@type": "Product",
    "@id": `${productUrl(product.slug)}#product`,
    name: product.name,
    description: product.shortDescription,
    image: product.gallery[0] ? absoluteUrl(product.gallery[0].src) : undefined,
    url: productUrl(product.slug),
    sku: product.sku,
    offers: buildOfferJsonLd(product),
  })
}

function buildOfferJsonLd(product: ProductDetail): JsonLdData | undefined {
  if (!product.price || product.priceAmount === null || !product.priceCurrency) {
    return undefined
  }

  return {
    "@type": "Offer",
    url: productUrl(product.slug),
    price: product.priceAmount,
    priceCurrency: product.priceCurrency,
    availability: product.availability,
    itemCondition: "https://schema.org/NewCondition",
    seller: { "@id": `${siteConfig.url}/#organization` },
  }
}

function getFactValue(product: ProductDetail, labels: string[]) {
  return product.facts?.find((fact) => labels.includes(fact.label))?.value
}

function removeUndefined(data: JsonLdData): JsonLdData {
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined && value !== null),
  )
}
