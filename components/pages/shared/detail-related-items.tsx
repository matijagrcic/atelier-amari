import Image from "next/image"
import Link from "next/link"

export type RelatedDetailItem = {
  title: string
  meta: string
  price?: string
  image: { src: string; alt: string }
  href: string
}

type DetailRelatedItemsProps = {
  heading: string
  items: RelatedDetailItem[]
}

export function DetailRelatedItems({ heading, items }: DetailRelatedItemsProps) {
  if (!items.length) {
    return null
  }

  return (
    <section className="space-y-4">
      <h2 className="font-serif text-2xl">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={`${item.title}-${item.href}`}
            href={item.href}
            className="group overflow-hidden rounded-2xl border border-border/70 bg-card/60 transition-all hover:border-border hover:shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-1 p-4">
              <p className="font-serif text-lg leading-tight">{item.title}</p>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{item.meta}</p>
              {item.price ? <p className="text-sm font-medium text-foreground/80">{item.price}</p> : null}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
