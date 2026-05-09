export const siteConfig = {
  name: "Atelier A'mari",
  shortName: "Atelier A'mari",
  defaultTitle: "Atelier A'mari | Handcrafted Ceramics and Original Paintings",
  titleTemplate: "%s | Atelier A'mari",
  description:
    "Ceramic atelier offering creative Paint & Sip workshops and a warm studio experience in Karlovac.",
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

