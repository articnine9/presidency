import HowToApplyHero from "./components/HowToApplyHero";
import ApplicationSteps from "./components/ApplicationSteps";
import DocumentsSection from "./components/DocumentsSection";
import IntakeSection from "./components/IntakeSection";
import VisaSection from "./components/VisaSection";
import CourseCTA from "./components/CourseCTA";

import data from "./data/HowToApply.json";

const HowToApply = async ({
  searchParams,
}: {
  searchParams: Promise<{ program?: string }>;
}) => {
  const sp = await searchParams;
  const raw = sp.program;
  const selectedProgram = raw
    ? decodeURIComponent(raw).replace(/\+/g, " ")
    : null;

  return (
    <>
      <HowToApplyHero data={data.hero} selectedProgram={selectedProgram} />
      <IntakeSection data={data.intakeSection} />
      <ApplicationSteps data={data.stepsSection} />
      <DocumentsSection data={data.documentsSection} />

      <VisaSection data={data.visaSection} />
      {/* <CourseCTA /> */}
    </>
  );
};

export default HowToApply;
