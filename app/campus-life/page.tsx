import HeroSection from "./components/HeroSection";
import FacilitiesSection from "./components/FacilitiesSection";
import ClubSection from "./components/ClubsSection";
import FeaturesSection from "./components/FeaturesSection";
import DiningSection from "./components/DiningSection";
import SupportSection from "./components/SupportSection";
import { BangaloreLifeSection } from "../components/BangaloreLifeSection";
import StudentServices from "./components/StudentServices";
import WellbeingSection from "./components/WellbeingSection";
import CourseCTA from "./components/CourseCTA";

// ✅ Import JSON
import data from "./data/CampusLife.json";

const CampusLife = () => {
  return (
    <>
      {/* ✅ Pass hero data */}
      <HeroSection data={data.hero} />

      <FacilitiesSection data={data.facilitiesSection} />
      <BangaloreLifeSection />
      <FeaturesSection />
      <ClubSection />
      <StudentServices />
      <DiningSection />
      <WellbeingSection />
      <CourseCTA />
    </>
  );
};

export default CampusLife;
