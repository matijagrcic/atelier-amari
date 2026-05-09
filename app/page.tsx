import type { Metadata } from "next"
import { CtaBlock } from "@/components/pages/home/cta-block"
import { HeroBlock } from "@/components/pages/home/hero-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { absoluteUrl, siteConfig, siteRoutes } from "@/lib/seo/site"

const homeTitle = siteConfig.defaultTitle
const homeDescription =
  "Atelier A'mari is a warm art studio for ceramics, painting, and creative gatherings."

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  alternates: {
    canonical: siteRoutes.home,
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteRoutes.home,
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.defaultOgImage),
        alt: "Atelier A'mari studio with original paintings and creative materials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [absoluteUrl(siteConfig.defaultOgImage)],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(22_46%_82%/.42),transparent_42%),radial-gradient(circle_at_15%_68%,hsl(39_34%_90%/.75),transparent_40%)]" />
        <div className="relative">
          <HeroBlock />
          <CtaBlock />
        </div>
      </main>
    </div>
  )
}
