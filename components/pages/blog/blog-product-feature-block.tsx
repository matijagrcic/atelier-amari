import { CtaOverlapCard } from "@/components/pages/shared/cta-overlap-card"

type BlogProductFeatureBlockProps = {
  eyebrow: string
  title: string
  description: string
  primaryAction: { label: string; href: string }
}

export function BlogProductFeatureBlock({
  eyebrow,
  title,
  description,
  primaryAction,
}: BlogProductFeatureBlockProps) {
  return (
    <div className="md:col-span-2 lg:col-span-3">
      <CtaOverlapCard
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryAction={primaryAction}
      />
    </div>
  )
}
