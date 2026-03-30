import HowToApplyHero from "./components/HowToApplyHero";
import ApplicationSteps from "./components/ApplicationSteps";
import DocumentsSection from "./components/DocumentsSection";
import IntakeSection from "./components/IntakeSection";
import VisaSection from "./components/VisaSection";
import CourseCTA from "./components/CourseCTA";

import data from "./data/HowToApply.json";

const HowToApply = () => {
  return (
    <>
      <HowToApplyHero data={data.hero} />
      <ApplicationSteps data={data.stepsSection} />
      <DocumentsSection data={data.documentsSection} />
      <IntakeSection data={data.intakeSection} />
      <VisaSection data={data.visaSection} />
      <CourseCTA />
    </>
  );
};

export default HowToApply;
