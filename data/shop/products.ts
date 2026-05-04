import { generatedPaintingProductDetails, generatedPaintingProductGridItems } from "@/data/shop/generated-painting-products"
import productDetails from "@/data/shop/mock-product-details.json"
import productGrid from "@/data/shop/mock-product-grid.json"

export type ProductAvailability =
  | "https://schema.org/InStock"
  | "https://schema.org/OutOfStock"
  | "https://schema.org/PreOrder"
  | "https://schema.org/LimitedAvailability"

export type ProductGridItem = {
  id: string
  name: string
  price: string
  description: string
  category: string
  image: { src: string; alt: string }
  action: { label: string; href: string }
}

export type ProductDetail = {
  slug: string
  name: string
  category: string
  price: string
  sku: string
  priceAmount: number | null
  priceCurrency: string
  availability: ProductAvailability
  shortDescription: string
  longDescription: string
  highlights: string[]
  facts?: Array<{ label: string; value: string }>
  purchaseOptions?: Array<{ label: string; value: string }>
  accordionSections?: Array<{
    id: string
    title: string
    content?: string
    items?: string[]
  }>
  editorialSections?: Array<{
    title: string
    body: string
    image: { src: string; alt: string }
  }>
  relatedItems?: Array<{
    title: string
    meta: string
    price: string
    image: { src: string; alt: string }
    href: string
  }>
  includes?: string[]
  importantInformation?: string[]
  gallery: Array<{ src: string; alt: string }>
  stripePaymentLink: string
}

type ProductDetailsData = {
  items: ProductDetail[]
}

type ProductGridData = {
  items: ProductGridItem[]
}

export function getAllProducts(): ProductDetail[] {
  const data = productDetails as ProductDetailsData
  return [...data.items, ...(generatedPaintingProductDetails as ProductDetail[])]
}

export function getProductBySlug(slug: string) {
  return getAllProducts().find((item) => item.slug === slug)
}

export function getAllProductGridItems(): ProductGridItem[] {
  const data = productGrid as ProductGridData
  return [...data.items, ...generatedPaintingProductGridItems]
}
