
import { BackgroundGradient } from "@/components/ui/landing/background-gradient";
import CtaSection from "@/components/ui/landing/cta-section";
import FeaturesSection from "@/components/ui/landing/features-section";
import HeroSection from "@/components/ui/landing/hero-section";
import HowItWorksSection from "@/components/ui/landing/how-it-works-section";
import PricingSection from "@/components/ui/landing/pricing-section";
import { PricingTable } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGradient/>
      <div className="relative-z-10">
        <HeroSection/>
        <FeaturesSection/>
        <HowItWorksSection/>
        <PricingSection/>
        <CtaSection/>
      </div>
    </div>
  );
}
