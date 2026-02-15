import type { Metadata } from "next"
import { AboutHeroBlock } from "@/components/pages/about/about-hero-block"
import { AboutStoryBlock } from "@/components/pages/about/about-story-block"
import { AboutStudioBlock } from "@/components/pages/about/about-studio-block"
import { AboutValuesBlock } from "@/components/pages/about/about-values-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"

export const metadata: Metadata = {
  title: "About Me | Atelier Amari",
  description: "Learn more about Emina, her art, and the story behind her floral acrylic paintings.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <AboutHeroBlock />
          <AboutStoryBlock />
          <AboutValuesBlock />
          <AboutStudioBlock />
        </div>
      </main>
    </div>
  )
}
