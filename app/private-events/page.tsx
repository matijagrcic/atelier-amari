import type { Metadata } from "next"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"
import { PrivateEventsHeroBlock } from "@/components/pages/private-events/private-events-hero-block"
import { PrivateEventsListBlock } from "@/components/pages/private-events/private-events-list-block"
import { PrivateEventsProcessBlock } from "@/components/pages/private-events/private-events-process-block"

export const metadata: Metadata = {
  title: "Private Events",
  description: "Host intimate ceramic events, team workshops, and celebrations in our studio.",
}

export default function PrivateEventsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <PrivateEventsHeroBlock />
          <PrivateEventsListBlock />
          <PrivateEventsProcessBlock />
        </div>
      </main>
    </div>
  )
}
