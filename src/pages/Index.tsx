import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RootsSection from "@/components/RootsSection";
import BonitoDeMinasSection from "@/components/BonitoDeMinasSection";
import SocialCommitmentSection from "@/components/SocialCommitmentSection";
import StorytellingSection from "@/components/StorytellingSection";
import CrisisSection from "@/components/CrisisSection";
import WhyDeputySection from "@/components/WhyDeputySection";
import ProposalsSection from "@/components/ProposalsSection";
import PillarsSection from "@/components/PillarsSection";
import TimelineSection from "@/components/TimelineSection";
import ManifestoSection from "@/components/ManifestoSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <RootsSection />
      <BonitoDeMinasSection />
      <SocialCommitmentSection />
      <StorytellingSection />
      <CrisisSection />
      <WhyDeputySection />
      <ProposalsSection />
      <PillarsSection />
      <TimelineSection />
      <ManifestoSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
