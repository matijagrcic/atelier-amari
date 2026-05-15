import type { Metadata } from "next";
import { NavigationBlock } from "@/components/pages/shared/navigation-block";
import { WorkshopsCtaBlock } from "@/components/pages/workshops-and-classes/workshops-cta-block";
import { WorkshopsHeroBlock } from "@/components/pages/workshops-and-classes/workshops-hero-block";
import { WorkshopsListBlock } from "@/components/pages/workshops-and-classes/workshops-list-block";

export const metadata: Metadata = {
  title: "Paint & Sip Workshop",
  description: "Paint & Sip night za žene u Atelier A'mari u Karlovcu.",
};

export default function WorkshopsAndClassesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(34_32%_95%),hsl(30_24%_92%))] text-foreground">
      <NavigationBlock />
      <main className="relative overflow-x-clip">
        <div className="relative">
          <WorkshopsHeroBlock />
          <WorkshopsListBlock />
          <WorkshopsCtaBlock />
        </div>
      </main>
    </div>
  );
}
