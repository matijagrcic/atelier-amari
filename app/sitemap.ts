import type { MetadataRoute } from "next"
import workshopDetails from "@/data/workshops-and-classes/mock-workshop-details.json"
import { absoluteUrl, siteRoutes, workshopPath } from "@/lib/seo/site"

type SitemapEntry = MetadataRoute.Sitemap[number]

type WorkshopDetailsData = {
  items: Array<{ slug: string }>
}

const staticRoutes: Array<Pick<SitemapEntry, "changeFrequency" | "priority"> & { path: string }> = [
  { path: siteRoutes.home, changeFrequency: "weekly", priority: 1 },
  { path: siteRoutes.workshops, changeFrequency: "weekly", priority: 0.8 },
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
    ...workshops.items.map((workshop) => ({
      url: absoluteUrl(workshopPath(workshop.slug)),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]
}
