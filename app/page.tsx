import HeroSection from "@/components/home/HeroSection";
import LightingPoolSection from "@/components/home/LightingPoolSection";
import FactoryClearanceSection from "@/components/home/FactoryClearanceSection";
import ShopByUseSection from "@/components/home/ShopByUseSection";
import ProProgramCTA from "@/components/home/ProProgramCTA";
import TrustSignals from "@/components/home/TrustSignals";
import FactoryStory from "@/components/home/FactoryStory";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Factory Direct Messaging */}
      <HeroSection />

      {/* Lighting Pool Active Deals */}
      <LightingPoolSection />

      {/* Weekly Factory Clearance */}
      <FactoryClearanceSection />

      {/* Factory Story Section */}
      <FactoryStory />

      {/* Shop by Use Case */}
      <ShopByUseSection />

      {/* PRO Program CTA */}
      <ProProgramCTA />

      {/* Trust Signals */}
      <TrustSignals />
    </div>
  );
}
