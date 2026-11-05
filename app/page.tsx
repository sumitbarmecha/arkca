import { AboutSection } from "@/components/home/AboutSection";
import { FaqSection } from "@/components/home/FaqSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <main id="content" className="bg-canvas">
      <HomeHero />
      <ServicesOverview />
      <HowItWorks />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <InsightsSection />
    </main>
  );
}
