import blogFeed from "@/data/blog/mock-blog-feed.json"
import { ArticleCard } from "@/components/pages/shared/article-card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"
import { BlogProductFeatureBlock } from "./blog-product-feature-block"

type BlogArticleItem = {
  id: string
  type: "article"
  title: string
  excerpt: string
  publishedAt: string
  category: string
  href: string
  image: { src: string; alt: string }
}

type BlogProductFeatureItem = {
  id: string
  type: "productFeature"
  eyebrow: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
}

type BlogFeedData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  items: Array<BlogArticleItem | BlogProductFeatureItem>
}

export function BlogFeedBlock() {
  const data = blogFeed as BlogFeedData

  return (
    <SectionShell id={data.sectionId}>
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.items.map((item) =>
          item.type === "article" ? (
            <ArticleCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              publishedAt={item.publishedAt}
              category={item.category}
              href={item.href}
              image={item.image}
            />
          ) : (
            <BlogProductFeatureBlock
              key={item.id}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              primaryAction={item.primaryAction}
            />
          ),
        )}
      </div>
    </SectionShell>
  )
}
