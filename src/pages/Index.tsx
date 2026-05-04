import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RootsSection from "@/components/RootsSection";
import SocialCommitmentSection from "@/components/SocialCommitmentSection";
import StorytellingSection from "@/components/StorytellingSection";
import CrisisSection from "@/components/CrisisSection";
import WhyDeputySection from "@/components/WhyDeputySection";
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
      <SocialCommitmentSection />
      <StorytellingSection />
      <CrisisSection />
      <WhyDeputySection />
      <PillarsSection />
      <TimelineSection />
      <ManifestoSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
