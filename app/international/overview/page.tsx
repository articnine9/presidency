import StudyInIndiaHero from "./components/StudyInIndiaHero";
import StudyIndiaAbout from "./components/StudyIndiaAbout";
import UGSection from "./components/UGSection";
import PGSection from "./components/PGSection";
import PhDSection from "./components/PhDSection";
import InternationalSection from "./components/InternationalSection";
import LanguageSection from "./components/LanguageSection";
import ShortCoursesSection from "./components/ShortCoursesSection";
import CourseCTA from "./components/CourseCTA";

import data from "./data/StudyInIndia.json";

const StudyInIndiaPage = () => {
  return (
    <>
      {/* 🔥 HERO */}
      <StudyInIndiaHero data={data.hero} />

      {/* 📘 ABOUT */}
      <StudyIndiaAbout data={data} />

      {/* 🎓 PROGRAMMES */}
      <UGSection data={data} />
      <PGSection data={data} />
      <PhDSection data={data} />

      {/* 🌍 GLOBAL OPPORTUNITIES */}
      <InternationalSection data={data} />
      <LanguageSection data={data} />

      {/* 🚀 SKILL DEVELOPMENT */}
      <ShortCoursesSection data={data} />

      {/* 📞 CTA */}
      <CourseCTA />
    </>
  );
};

export default StudyInIndiaPage;
