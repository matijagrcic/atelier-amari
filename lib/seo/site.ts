export const siteConfig = {
  name: "Atelier Amari",
  shortName: "Atelier Amari",
  defaultTitle: "Atelier Amari | Handcrafted Ceramics and Original Paintings",
  titleTemplate: "%s | Atelier Amari",
  description:
    "Ceramic atelier creating small-batch stoneware, original paintings, workshops, and commissions for contemporary homes.",
  url: "https://www.atelieramari.com",
  locale: "en",
  instagramUrl: "https://www.instagram.com/amari_atelier/",
  defaultOgImage: "/atelier-amari/atelier-amari-art-studio/atelier-amari-01-1200w.webp",
  logo: "/apple-icon.png",
}

export const siteRoutes = {
  home: "/",
  about: "/about",
  blog: "/blog",
  commissions: "/commissions",
  contact: "/contact",
  giftCard: "/gift-card",
  privateEvents: "/private-events",
  shop: "/shop",
  workshops: "/workshops-and-classes",
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${normalizedPath}`
}

export function productUrl(slug: string) {
  return absoluteUrl(productPath(slug))
}

export function productPath(slug: string) {
  return `${siteRoutes.shop}/${slug}`
}

export function workshopUrl(slug: string) {
  return absoluteUrl(workshopPath(slug))
}

export function workshopPath(slug: string) {
  return `${siteRoutes.workshops}/${slug}`
}

