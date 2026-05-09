import type { Metadata } from "next"
import { BlogFeedBlock } from "@/components/pages/blog/blog-feed-block"
import { BlogHeroBlock } from "@/components/pages/blog/blog-hero-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, studio notes, and ceramic inspiration from Atelier Amari.",
  robots: { index: false, follow: false },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <BlogHeroBlock />
          <BlogFeedBlock />
        </div>
      </main>
    </div>
  )
}
