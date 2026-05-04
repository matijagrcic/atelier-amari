import productGrid from "@/data/shop/mock-product-grid.json"
import { ProductCard } from "@/components/pages/shared/product-card"
import { SectionHeader } from "@/components/pages/shared/section-header"
import { SectionShell } from "@/components/pages/shared/section-shell"
import { generatedPaintingProductGridItems } from "@/data/shop/generated-painting-products"

type ProductGridData = {
  sectionId: string
  eyebrow: string
  headline: string
  description: string
  items: Array<{
    id: string
    name: string
    price: string
    description: string
    category: string
    image: { src: string; alt: string }
    action: { label: string; href: string }
  }>
}

export function ProductGridBlock() {
  const data = productGrid as ProductGridData
  const items = [...data.items, ...generatedPaintingProductGridItems]

  return (
    <SectionShell id={data.sectionId} className="pt-8">
      <SectionHeader
        eyebrow={data.eyebrow}
        headline={data.headline}
        description={data.description}
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            action={item.action}
          />
        ))}
      </div>
    </SectionShell>
  )
}
