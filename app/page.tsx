import { CallToAction } from "@/components/cta";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { LogosSection } from "@/components/logos-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function page() {
  return (
    <>
      <Header />
      <main className="grow space-y-20 mb-20">
        <div>
          <HeroSection />
          <LogosSection />
        </div>
        <FeatureSection />
        <PricingSection />
        <TestimonialsSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
