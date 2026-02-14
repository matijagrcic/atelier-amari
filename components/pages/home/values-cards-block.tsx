import values from "@/data/home/mock-values-cards.json"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type ValuesData = {
  eyebrow: string
  headline: string
  items: Array<{ title: string; description: string }>
}

export function ValuesCardsBlock() {
  const data = values as ValuesData

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {data.eyebrow}
        </p>
        <h2 className="max-w-3xl font-serif text-4xl tracking-tight md:text-5xl">
          {data.headline}
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {data.items.map((item) => (
          <Card key={item.title} className="border-border/70 bg-card/60">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
