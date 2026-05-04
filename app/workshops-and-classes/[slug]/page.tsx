import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import {
  WorkshopDetailBlock,
  type WorkshopDetail,
} from "@/components/pages/workshops-and-classes/workshop-detail-block"
import workshopDetails from "@/data/workshops-and-classes/mock-workshop-details.json"

type WorkshopDetailsData = {
  items: WorkshopDetail[]
}

type DetailPageProps = {
  params: Promise<{ slug: string }>
}

function getWorkshopBySlug(slug: string) {
  const data = workshopDetails as WorkshopDetailsData
  return data.items.find((item) => item.slug === slug)
}

export async function generateMetadata({ params }: DetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const workshop = getWorkshopBySlug(slug)

  if (!workshop) {
    return {
      title: "Workshop Not Found",
    }
  }

  return {
    title: workshop.title,
    description: workshop.shortDescription,
  }
}

export default async function WorkshopDetailPage({ params }: DetailPageProps) {
  const { slug } = await params
  const workshop = getWorkshopBySlug(slug)

  if (!workshop) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,hsl(18_40%_82%/.24),transparent_46%),radial-gradient(circle_at_14%_24%,hsl(38_36%_89%/.64),transparent_44%)]" />
        <div className="relative">
          <WorkshopDetailBlock workshop={workshop} />
        </div>
      </main>
    </div>
  )
}
