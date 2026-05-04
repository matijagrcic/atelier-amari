import type { Metadata } from "next"
import { ContactCtaRailBlock } from "@/components/pages/contact/contact-cta-rail-block"
import { ContactHeroBlock } from "@/components/pages/contact/contact-hero-block"
import { ContactTallyFormBlock } from "@/components/pages/contact/contact-tally-form-block"
import { NavigationBlock } from "@/components/pages/shared/navigation-block"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Atelier Amari for studio visits, commissions, and product inquiries.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <ContactHeroBlock />
          <ContactTallyFormBlock />
          <ContactCtaRailBlock />
        </div>
      </main>
    </div>
  )
}
