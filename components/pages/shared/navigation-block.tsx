import Image from "next/image"
import Link from "next/link"
import navigation from "@/data/shared/mock-navigation.json"
import { Button } from "@/components/ui/button"

type NavigationData = {
  atelierName: string
  logo: { src: string; alt: string }
  links: Array<{ label: string; href: string }>
  primaryAction: { label: string; href: string }
}

export function NavigationBlock() {
  const data = navigation as NavigationData

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-md transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Go to Atelier Amari home page"
        >
          <span className="relative size-10 overflow-hidden rounded-full border border-border/70 bg-background/70">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              fill
              sizes="2.5rem"
              className="object-cover"
              priority
            />
          </span>
          <p className="font-serif text-xl leading-none tracking-tight">{data.atelierName}</p>
        </Link>

        {data.links.length > 0 ? (
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
            {data.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}

        <Button asChild size="sm" className="rounded-full">
          <a href={data.primaryAction.href}>{data.primaryAction.label}</a>
        </Button>
      </div>
    </header>
  )
}
