"use client";

import { useState } from "react";
import faqData from "./data/faqData.json";
import FaqSearch from "./components/FaqSearch";
import FaqAccordion from "./components/FaqAccordion";
import FaqHero from "./components/FaqHero";
import CourseCTA from "./components/CourseCTA";
const FAQPage = () => {
  const [query, setQuery] = useState("");
  return (
    <>
      <FaqHero data={faqData.hero} />
      <FaqSearch query={query} setQuery={setQuery} />
      <FaqAccordion data={faqData.faqs} query={query} />
      <CourseCTA />
    </>
  );
};
export default FAQPage;
