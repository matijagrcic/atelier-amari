import Link from "next/link"
import navigation from "@/data/shared/mock-navigation.json"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type NavigationData = {
  atelierName: string
  tagline: string
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
          className="space-y-1 rounded-md transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="Go to Atelier Amari home page"
        >
          <p className="font-serif text-xl leading-none tracking-tight">{data.atelierName}</p>
          <Badge variant="outline" className="rounded-full">
            {data.tagline}
          </Badge>
        </Link>

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

        <Button asChild size="sm" className="rounded-full">
          <a href={data.primaryAction.href}>{data.primaryAction.label}</a>
        </Button>
      </div>
    </header>
  )
}
