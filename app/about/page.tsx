import AboutHero from "./components/AboutHero";
import { RankingAccreditationSection } from "@/app/components/RankingAccreditationSection";
import HistoryTimeline from "./components/HistoryTimeline";
import VisionMission from "./components/VisionMission";
import ResearchInnovation from "./components/ResearchInnovation";
import LeadershipSection from "./components/LeadershipSection";
import GlobalPresence from "./components/GlobalPresence";
import CTASection from "./components/CTASection";
const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <RankingAccreditationSection />
      <HistoryTimeline />
      <VisionMission />
      <ResearchInnovation />
      <LeadershipSection />
      <GlobalPresence />
      <CTASection />
    </>
  );
};

export default AboutPage;
