import type { Metadata } from "next"
import { CommissionsCapabilitiesBlock } from "@/components/pages/commissions/commissions-capabilities-block"
import { CommissionsHeroBlock } from "@/components/pages/commissions/commissions-hero-block"
import { CommissionsProcessBlock } from "@/components/pages/commissions/commissions-process-block"
import { CommissionsTallyFormBlock } from "@/components/pages/commissions/commissions-tally-form-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"

export const metadata: Metadata = {
  title: "Commissions | Atelier Amari",
  description: "Commission custom ceramic pieces for homes, gifts, and hospitality spaces.",
}

export default function CommissionsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <CommissionsHeroBlock />
          <CommissionsCapabilitiesBlock />
          <CommissionsProcessBlock />
          <CommissionsTallyFormBlock />
        </div>
      </main>
    </div>
  )
}
