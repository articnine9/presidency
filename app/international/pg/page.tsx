"use client";

import { useState } from "react";
import CourseHero from "./components/hero";
import AboutSection from "./components/AboutSection";
import ExplorePrograms from "./components/ExplorePrograms";
import ProgramsTabs from "./components/ProgramsTabs";
import CourseCTA from "./components/CourseCTA";
import JourneySection from "./components/JourneySection";

import data from "./data/school-pg.json";

const UGPage = () => {
  const [query, setQuery] = useState(""); // ✅ FIX

  return (
    <>
      <CourseHero data={data} />
      <AboutSection data={data} />

      {/* Search */}
      <ExplorePrograms query={query} setQuery={setQuery} />

      {/* Programs */}
      <ProgramsTabs data={data} query={query} />

      {/* Other Sections */}

      <JourneySection />
      <CourseCTA />
    </>
  );
};

export default UGPage;
