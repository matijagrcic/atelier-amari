import manifest from "@/public/atelier-amari/manifest.json"

type ManifestVariant = {
  width: number
  path: string
}

type ManifestImage = {
  source: string
  variants: ManifestVariant[]
}

type ProductGridItem = {
  id: string
  name: string
  price: string
  description: string
  category: string
  image: { src: string; alt: string }
  action: { label: string; href: string }
}

type ProductDetail = {
  slug: string
  name: string
  category: string
  price: string
  sku: string
  priceAmount: number
  priceCurrency: string
  availability: string
  shortDescription: string
  longDescription: string
  highlights: string[]
  facts: Array<{ label: string; value: string }>
  purchaseOptions: Array<{ label: string; value: string }>
  includes: string[]
  importantInformation: string[]
  editorialSections: Array<{
    title: string
    body: string
    image: { src: string; alt: string }
  }>
  gallery: Array<{ src: string; alt: string }>
  stripePaymentLink: string
}

type SeriesCopy = {
  description: string
  palette: string
  price: string
  priceAmount: number
  priceCurrency: string
}

const PUBLIC_ASSET_ROOT = "/atelier-amari"

const curatedPaintingSeries = new Set(["awakening", "azure-dreams", "flower-scent"])

const seriesCopy: Record<string, SeriesCopy> = {
  awakening: {
    description: "luminous abstract layers and a quiet sense of arrival",
    palette: "soft luminous contrast",
    price: "EUR 420",
    priceAmount: 420,
    priceCurrency: "EUR",
  },
  "azure-dreams": {
    description: "blue-toned atmosphere, coastal depth, and airy movement",
    palette: "azure, mist, and coastal shadow",
    price: "EUR 360",
    priceAmount: 360,
    priceCurrency: "EUR",
  },
  "coral-dreams": {
    description: "warm coral movement and softly glowing abstract form",
    palette: "coral, shell, and sun-washed neutrals",
    price: "EUR 340",
    priceAmount: 340,
    priceCurrency: "EUR",
  },
  "dream-come-true": {
    description: "gentle color fields with a hopeful, meditative presence",
    palette: "warm light and softened color",
    price: "EUR 380",
    priceAmount: 380,
    priceCurrency: "EUR",
  },
  "flower-scent": {
    description: "floral memory translated into layered color and gesture",
    palette: "petal tones and garden light",
    price: "EUR 390",
    priceAmount: 390,
    priceCurrency: "EUR",
  },
  "harmony-in-pink": {
    description: "pink tonal harmony with expressive surface movement",
    palette: "rose, blush, and quiet warmth",
    price: "EUR 370",
    priceAmount: 370,
    priceCurrency: "EUR",
  },
  "purple-beauties": {
    description: "rich violet forms with a dramatic, painterly presence",
    palette: "violet, plum, and mineral shadow",
    price: "EUR 410",
    priceAmount: 410,
    priceCurrency: "EUR",
  },
  "purple-dreams": {
    description: "dreamlike purple studies with layered atmospheric depth",
    palette: "lavender, violet, and dusk tones",
    price: "EUR 360",
    priceAmount: 360,
    priceCurrency: "EUR",
  },
  spring: {
    description: "fresh seasonal color and open, garden-like movement",
    palette: "spring greens, light, and floral color",
    price: "EUR 380",
    priceAmount: 380,
    priceCurrency: "EUR",
  },
  "whispers-on-the-canvas": {
    description: "subtle abstract marks with a restrained, poetic surface",
    palette: "quiet neutrals and soft tonal shifts",
    price: "EUR 350",
    priceAmount: 350,
    priceCurrency: "EUR",
  },
}

const manifestImages = (manifest as { images: ManifestImage[] }).images

const paintingImages = manifestImages.filter((image) => image.source.startsWith("paintings/"))

const paintingImagesBySeries = paintingImages.reduce<Record<string, ManifestImage[]>>((groups, image) => {
  const seriesSlug = getSeriesSlug(image.source)
  groups[seriesSlug] = [...(groups[seriesSlug] ?? []), image]
  return groups
}, {})

const generatedPaintingSeries = Object.entries(paintingImagesBySeries).filter(
  ([seriesSlug]) => !curatedPaintingSeries.has(seriesSlug),
)

export const generatedPaintingProductGridItems: ProductGridItem[] = generatedPaintingSeries.map(
  ([seriesSlug, images]) => {
    const primaryImage = images[0]
    const metadata = getSeriesMetadata(seriesSlug)

    return {
      id: metadata.slug,
      name: metadata.name,
      price: metadata.copy.price,
      description: `Original painting series with ${metadata.copy.description}.`,
      category: "Painting",
      image: {
        src: getPublicImageSrc(primaryImage),
        alt: `${metadata.name} original painting series with ${metadata.copy.palette}.`,
      },
      action: { label: "View details", href: `/shop/${metadata.slug}` },
    }
  },
)

export const generatedPaintingProductDetails: ProductDetail[] = generatedPaintingSeries.map(
  ([seriesSlug, images]) => {
    const metadata = getSeriesMetadata(seriesSlug)
    const gallery = getGalleryForSeries(seriesSlug, images)

    return {
      slug: metadata.slug,
      name: metadata.name,
      category: "Painting",
      price: metadata.copy.price,
      sku: metadata.slug,
      priceAmount: metadata.copy.priceAmount,
      priceCurrency: metadata.copy.priceCurrency,
      availability: "https://schema.org/InStock",
      shortDescription: `An original ${metadata.name} painting series with ${metadata.copy.description}.`,
      longDescription: `${metadata.name} is a one-of-a-kind painting series built through layered pigment, visible handwork, and ${metadata.copy.palette}. The gallery brings the available views together under one product instead of repeating them as separate cards.`,
      highlights: [
        "Original one-of-a-kind painting series",
        `${metadata.name} series`,
        "Signed by the artist",
        "Protected packaging for pickup or shipping",
      ],
      facts: [
        { label: "Category", value: "Painting" },
        { label: "Medium", value: "Mixed media on canvas" },
        { label: "Edition", value: "Original work" },
      ],
      purchaseOptions: [
        { label: "Format", value: "Canvas" },
        { label: "Edition", value: "Original" },
        { label: "Dispatch", value: "5-7 business days" },
      ],
      includes: [
        "Original painting",
        "Certificate of authenticity",
        "Protective art packaging",
      ],
      importantInformation: [
        "This is a one-of-a-kind studio work.",
        "Frame is not included unless arranged by commission.",
        "Color may vary slightly between screens and the original painting.",
      ],
      editorialSections: [
        {
          title: `${metadata.name} Surface`,
          body: `This work explores ${metadata.copy.palette} through abstract movement, translucent layers, and a tactile painted surface.`,
          image: gallery[1] ?? gallery[0],
        },
      ],
      gallery,
      stripePaymentLink: `https://buy.stripe.com/${metadata.slug}`,
    }
  },
)

function getSeriesMetadata(seriesSlug: string) {
  const seriesName = toTitleCase(seriesSlug)
  const copy = seriesCopy[seriesSlug] ?? {
    description: "layered abstract color and visible handwork",
    palette: "atelier color and tonal movement",
    price: "EUR 360",
    priceAmount: 360,
    priceCurrency: "EUR",
  }

  return {
    slug: seriesSlug,
    name: seriesName,
    seriesSlug,
    copy,
  }
}

function getGalleryForSeries(seriesSlug: string, seriesImages: ManifestImage[]) {
  const metadata = getSeriesMetadata(seriesSlug)

  return seriesImages.map((galleryImage, index) => ({
    src: getPublicImageSrc(galleryImage),
    alt: `${metadata.name} painting view ${index + 1} with ${metadata.copy.palette}.`,
  }))
}

function getPublicImageSrc(image: ManifestImage) {
  const variant = image.variants.find((item) => item.width === 1200) ?? getLargestVariant(image)
  if (!variant) {
    throw new Error(`Missing generated image variants for ${image.source}`)
  }

  return `${PUBLIC_ASSET_ROOT}/${variant.path}`
}

function getLargestVariant(image: ManifestImage) {
  return [...image.variants].sort((first, second) => second.width - first.width)[0]
}

function getSeriesSlug(source: string) {
  return source.split("/")[1] ?? "paintings"
}

function toTitleCase(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
