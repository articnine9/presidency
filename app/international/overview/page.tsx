import StudyInIndiaHero from "./components/StudyInIndiaHero";
import StudyIndiaAbout from "./components/StudyIndiaAbout";
import UGSection from "./components/UGSection";
import PGSection from "./components/PGSection";
import PhDSection from "./components/PhDSection";
import InternationalSection from "./components/InternationalSection";
import LanguageSection from "./components/LanguageSection";
import ShortCoursesSection from "./components/ShortCoursesSection";
import CourseCTA from "./components/CourseCTA";
import InternationalPrograms from "./components/InternationalPrograms";
import LanguageElectives from "./components/LanguageElectives";

import data from "./data/StudyInIndia.json";

const StudyInIndiaPage = () => {
  return (
    <>
      {/* 🔥 HERO */}
      <StudyInIndiaHero data={data.hero} />

      {/* 📘 ABOUT */}
      <div className="hidden md:block">
        <StudyIndiaAbout data={data} />
      </div>

      {/* 🎓 PROGRAMMES */}
      <UGSection data={data} />
      <PGSection data={data} />
      <PhDSection data={data} />
      <InternationalPrograms data={data} />
      <LanguageElectives data={data} />
      {/* 🌍 GLOBAL OPPORTUNITIES */}
      {/* <InternationalSection data={data} />
      <LanguageSection data={data} /> */}

      {/* 🚀 SKILL DEVELOPMENT */}
      {/* <ShortCoursesSection data={data} /> */}

      {/* 📞 CTA */}
      <CourseCTA data={data} />
    </>
  );
};

export default StudyInIndiaPage;
