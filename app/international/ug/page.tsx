import CourseHero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ExplorePrograms from "./components/ExplorePrograms";
import ProgramsTabs from "./components/ProgramsTabs";
import CourseCTA from "./components/CourseCTA";
import JourneySection from "./components/JourneySection";
import data from "./data/school-ug.json";
const UGPage = () => {
  return (
    <>
      <CourseHero data={data} />
      <AboutSection data={data} />
      <ExplorePrograms />
      <ProgramsTabs data={data} />
      <JourneySection />
      <CourseCTA />
    </>
  );
};

export default UGPage;
