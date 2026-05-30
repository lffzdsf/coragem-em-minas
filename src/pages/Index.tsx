import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrajectoryWorkSection from "@/components/TrajectoryWorkSection";
import FightCorruptionSection from "@/components/FightCorruptionSection";
import ElectionResultSection from "@/components/ElectionResultSection";
import ProfessionalValueSection from "@/components/ProfessionalValueSection";
import InsalubrityRightsSection from "@/components/InsalubrityRightsSection";
import SchoolHealthSection from "@/components/SchoolHealthSection";
import SynthesisSection from "@/components/SynthesisSection";
import MinasRepresentationSection from "@/components/MinasRepresentationSection";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrajectoryWorkSection />
      <FightCorruptionSection />
      <ElectionResultSection />
      <ProfessionalValueSection />
      <InsalubrityRightsSection />
      <SchoolHealthSection />
      <SynthesisSection />
      <MinasRepresentationSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
