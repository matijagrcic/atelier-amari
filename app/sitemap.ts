import type { MetadataRoute } from "next"
import { getAllProducts } from "@/data/shop/products"
import workshopDetails from "@/data/workshops-and-classes/mock-workshop-details.json"
import { absoluteUrl, productPath, siteRoutes, workshopPath } from "@/lib/seo/site"

type SitemapEntry = MetadataRoute.Sitemap[number]

type WorkshopDetailsData = {
  items: Array<{ slug: string }>
}

const staticRoutes: Array<Pick<SitemapEntry, "changeFrequency" | "priority"> & { path: string }> = [
  { path: siteRoutes.home, changeFrequency: "weekly", priority: 1 },
  { path: siteRoutes.shop, changeFrequency: "weekly", priority: 0.9 },
  { path: siteRoutes.workshops, changeFrequency: "weekly", priority: 0.8 },
  { path: siteRoutes.about, changeFrequency: "monthly", priority: 0.7 },
  { path: siteRoutes.commissions, changeFrequency: "monthly", priority: 0.7 },
  { path: siteRoutes.contact, changeFrequency: "monthly", priority: 0.6 },
  { path: siteRoutes.giftCard, changeFrequency: "monthly", priority: 0.6 },
  { path: siteRoutes.privateEvents, changeFrequency: "monthly", priority: 0.6 },
  { path: siteRoutes.blog, changeFrequency: "monthly", priority: 0.5 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const workshops = workshopDetails as WorkshopDetailsData

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...getAllProducts().map((product) => ({
      url: absoluteUrl(productPath(product.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...workshops.items.map((workshop) => ({
      url: absoluteUrl(workshopPath(workshop.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]
}
