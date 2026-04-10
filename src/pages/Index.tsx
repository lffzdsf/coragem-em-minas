import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorytellingSection from "@/components/StorytellingSection";
import TimelineSection from "@/components/TimelineSection";
import CrisisSection from "@/components/CrisisSection";
import PillarsSection from "@/components/PillarsSection";
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
      <StorytellingSection />
      <TimelineSection />
      <CrisisSection />
      <PillarsSection />
      <ManifestoSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
