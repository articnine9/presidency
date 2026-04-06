"use client";

import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";

import { ProgramSearch } from "./components/ProgramSearch";
import { RankingsStatsSection } from "./components/RankingsStatsSection";
import { BangaloreSection } from "./components/bangalore-section";
import CampusLife from "./components/campus-life";
import { ProgrammesSection } from "./components/ProgramsSection";
import { PlacementsSection } from "./components/PlacementsSection";
import { AccreditationSection } from "./components/accreditation-section";
import { SchoolsSliderSection } from "./components/SchoolsSliderSection";
import { LifeAtPresidency } from "./components/InfrastructureSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { MasterPlanSection } from "./components/MasterPlanSection";
import { InternationalStudentsSection } from "./components/InternationalStudentsSection";
import { EventsActivitiesSection } from "./components/ProgramSection";
import { UpcomingEvents } from "./components/FeaturesSection";
import { CommunitySection } from "./components/CommunitySection";
import { WhyPresidency } from "./components/why-presidency";
import { AlumniTestimonials } from "./components/AlumniTestimonials";
import ThoughtLeadersSection from "./components/ThoughtLeadersSection";
import { TestimonialsSection } from "./components/testimonials-section";
import { AdmissionSection } from "./components/AdmissionSection";
import { CTASection } from "./components/CTASection";
import { NewsSection } from "./components/NewsSection";
import { ScholarshipsSection } from "./components/ScholarshipsSection";
import { ResearchHighlightsSection } from "./components/ResearchHighlightsSection";
import { RankingAccreditationSection } from "./components/RankingAccreditationSection";
import { ApplicationProcess } from "./components/application-process";
import { FinalCTA } from "./components/final-cta";
import { InFocusSection } from "./components/InFocusSection";
import { PlacementPartnersSection } from "./components/PlacementPartnersSection";
import { CampusVirtualTourSection } from "./components/CampusVirtualTourSection";
import { BangaloreCTASection } from "./components/BangaloreCTASection";
import { FooterSection } from "./components/Footer";
import { BangaloreLifeSection } from "./components/BangaloreLifeSection";
import { AboutPresidency } from "./components/AboutPresidency";
import JourneySection from "./components/YourJourney";
import { CampusLikeHome } from "./components/CampusLikeHome";
import { WhyChooseUs } from "./components/WhyChooseUs";
import VideoSectionFull from "./components/VideoSectionFull";

export default function App() {
  return (
    <div className="min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
      {/* Navigation */}
      {/* <Navigation /> */}

      {/* Hero Banner */}
      <HeroSection />
      <ProgramSearch />
      {/* <about> */}
      <AboutPresidency />
      {/* <YourJourney /> */}
      {/* <AboutPresidency /> */}
      <RankingAccreditationSection />
      {/* <WhyPresidency /> */}
      {/* Rankings + Stats */}
      {/* <RankingsStatsSection />
      <ScholarshipsSection />
      <RankingAccreditationSection /> */}
      {/* Programs Overview */}
      <ProgrammesSection />

      {/* <SchoolsSliderSection /> */}
      <WhyChooseUs />
      {/* <BangaloreCTASection /> */}
      <CampusLikeHome />
      {/* <ThoughtLeadersSection /> */}
      {/* <BangaloreLifeSection /> */}
      {/* <CommunitySection /> */}
      {/* <ResearchHighlightsSection /> */}
      {/* <CampusLife /> */}
      {/* <BangaloreSection /> */}
      {/* Campus Facilities */}
      {/* <AmenitiesSection /> */}

      {/* <EventsActivitiesSection /> */}
      <InternationalStudentsSection />

      <PlacementPartnersSection />

      {/* <ScholarshipsSection /> */}
      {/* <JourneySection /> */}
      {/* <VideoSectionFull /> */}
      {/* <NewsSection /> */}
      {/* <InFocusSection /> */}
      {/* <CampusVirtualTourSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <AccreditationSection />
      <TestimonialsSection />
      <ApplicationProcess /> */}
      {/* Campus Master Plan */}
      {/* <MasterPlanSection /> */}

      {/* Campus Infrastructure */}
      {/* <LifeAtPresidency /> */}
      {/* Student Life */}

      {/* Placement & Careers */}
      {/* <PlacementsSection /> */}

      {/* Events */}
      {/* <UpcomingEvents /> */}

      {/* Community & Clubs */}

      {/* Alumni Stories */}
      {/* <AlumniTestimonials /> */}

      {/* Faculty & Thought Leaders */}

      {/* Admissions */}
      {/* <AdmissionSection /> */}

      {/* Final Call to Action */}
      {/* <FinalCTA /> */}
      {/* <CTASection /> */}

      {/* Footer */}

      {/* <FooterSection /> */}
    </div>
  );
}
