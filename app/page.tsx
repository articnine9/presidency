"use client";

import { HeroSection } from "./components/HeroSection";
import { ProgrammesSection } from "./components/ProgramsSection";
import { SchoolsSliderSection } from "./components/SchoolsSliderSection";
import { PlacementPartnersSection } from "./components/PlacementPartnersSection";
import { CampusLikeHome } from "./components/CampusLikeHome";
import { InternationalStudentsSection } from "./components/InternationalStudentsSection";
import { RankingAccreditationSection } from "./components/RankingAccreditationSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import StudyInBangalore from "./components/study-in-bangalore";
import { AboutPresidency } from "./components/AboutPresidency";
import AdmissionProcessPage from "./components/applyWay";

export default function App() {
  return (
    <div className="min-h-dvh w-full min-w-0 overflow-x-hidden bg-white">
      {/* Hero Banner */}
      <HeroSection />

      {/* About */}
      <StudyInBangalore />
      <AboutPresidency />

      {/* Programs Overview */}
      <ProgrammesSection />

      <div className="hidden md:block">
        <SchoolsSliderSection />
      </div>

      <PlacementPartnersSection />

      <CampusLikeHome />

      <div className="hidden md:block">
        <InternationalStudentsSection />
      </div>

      <RankingAccreditationSection />
      <WhyChooseUs />

      <div className="block md:hidden">
        <InternationalStudentsSection />
      </div>

      <AdmissionProcessPage />
    </div>
  );
}
