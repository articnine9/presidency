"use client";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { H2 } from "@/app/components/Headings";


// ─── Types ────────────────────────────────────────────────────────────────────
interface RankingEntry {
  id: number;
  year: 2026 | 2025 | 2024 | 2023 | 2022;
  source: string;
  logo: string;
  title: string;
  entity: string;
  cats: string;
  ranks: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const rankings: RankingEntry[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    id: 1, year: 2026, source: "Times Survey",
    logo: "/img/media/media1.png",
    title: "Times All India Engineering Institutes Ranking Survey 2026",
    entity: "Presidency University, School of Engineering",
    cats: "2026 engineering",
    ranks: [
      "**Ranked 33** Pan India — Top 175 Engineering Institutes",
      "**Ranked 32** Pan India — Top 125 Private Engineering Institutes",
      "**Ranked 36** Pan India — Placement among Top 70 Private Institutes",
      "**Ranked 28** Pan India — Research Capability among Top 30 Institutes",
      "**Ranked 16** South Zone — Region-wise Engineering Institute Rankings",
    ],
  },
  {
    id: 2, year: 2026, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "India's Best Engineering Colleges 2026",
    entity: "School of Engineering, Presidency University, Bengaluru, Karnataka",
    cats: "2026 engineering",
    ranks: ["**Rated AAAA+** under Rating by Zone"],
  },
  {
    id: 3, year: 2026, source: "The Week – Hansa Research Survey",
    logo: "/img/media/week.png",    title: "India's Best Universities 2026",
    entity: "Presidency University, Bengaluru",
    cats: "2026 university",
    ranks: [
      "**Ranked 66** Pan India — Multidisciplinary Universities (1,000+ universities)",
      "**Ranked 7** Pan India — Emerging Multidisciplinary Universities (est. 2012+)",
      "**Ranked 3** South Zone — Emerging Multidisciplinary Universities",
      "**Ranked 23** South Zone — Multidisciplinary Universities",
      "**Ranked 12** South Zone — Private & Deemed Multidisciplinary Universities",
      "**Ranked 8** State-wise — Private & Deemed Multidisciplinary Universities",
      "**Ranked 3** State-wise — Emerging Multidisciplinary Universities",
    ],
  },
  {
    id: 4, year: 2026, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "GHRDC BCA Colleges Survey 2026",
    entity: "Presidency University School of Information Science, Bengaluru",
    cats: "2026 university",
    ranks: [
      "**Ranked 6** Pan India — Top BCA Colleges of Super Excellence",
      "**Ranked 3** Karnataka — Top BCA Colleges by State",
      "**Ranked 3** South Zone — Top BCA Colleges by Region",
    ],
  },
  {
    id: 5, year: 2026, source: "CSR India",
    logo: "/img/media/CSR.png",
    title: "CSR India's Top Engineering Colleges 2026",
    entity: "Presidency University, School of Engineering",
    cats: "2026 engineering",
    ranks: [
      "**Ranked 10th** Pan India — Top Engineering Colleges of Eminence",
      "**Ranked 4th** Karnataka — Top Engineering Colleges by State",
    ],
  },
  {
    id: 6, year: 2026, source: "Education World",
    logo: "/img/media/world.png",
    title: "Education World Best Private Multidisciplinary Universities Survey 2026",
    entity: "Presidency University, Bengaluru",
    cats: "2026 university",
    ranks: [
      "**Ranked Top 13** Pan India — Best Private Multidisciplinary Universities (400 universities)",
      "**Ranked Top 4** Karnataka — Best Private Multidisciplinary Universities (15 universities)",
      "**Ranked 9th** Pan India — Competence of Faculty",
      "**Ranked 10th** Pan India — Internationalism",
      "**Ranked 9th** Pan India — Infrastructure",
    ],
  },
  {
    id: 7, year: 2026, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "GHRDC Law Schools Survey 2026",
    entity: "Presidency University School of Law, Bengaluru",
    cats: "2026 law",
    ranks: [
      "**Ranked 5** Pan India — Top Law Schools of Eminence",
      "**Ranked 8** Karnataka — Top Law Schools by State",
      "**Ranked 9** South Zone — Top Law Schools by Region",
    ],
  },
  {
    id: 8, year: 2026, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "GHRDC BBA Colleges Survey 2026",
    entity: "Presidency University School of Management, Bengaluru",
    cats: "2026 management",
    ranks: [
      "**Ranked #1** Pan India — Top BBA Colleges of Super Excellence",
      "**Ranked #1** Karnataka — Top BBA Colleges by State",
      "**Ranked 2** South Zone — Top BBA Colleges by Region",
    ],
  },
  {
    id: 9, year: 2026, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers 360 India's Best Universities 2026",
    entity: "Presidency University, Bengaluru",
    cats: "2026 university",
    ranks: ["**Ranked 59** — Best Multidisciplinary University, Private (Pan India)"],
  },
  {
    id: 10, year: 2026, source: "Times B School",
    logo: "/img/media/time.png",
    title: "Times B School Ranking 2026",
    entity: "School of Management, Presidency University, Bengaluru, Karnataka",
    cats: "2026 management",
    ranks: [
      "**Top 64** — Top 100 B Schools",
      "**Top 24** — Top 40 Private Universities",
      "**Top 39** — Top 50 Institutes (Placement)",
      "**Top 16** — Top 20 South B Schools",
    ],
  },
  {
    id: 11, year: 2026, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers 360 India's Best B-Schools 2026",
    entity: "School of Management, Presidency University, Bengaluru, Karnataka",
    cats: "2026 management",
    ranks: ["**Rated AAA+** under Rating by Zone"],
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    id: 12, year: 2025, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best B-Schools 2025",
    entity: "School of Management, Presidency University, Bengaluru, Karnataka",
    cats: "2025 management",
    ranks: [
      "**Ranked 13** Bengaluru (Private)",
      "**Ranked 31** South Zone (Private)",
      "**Ranked 91** Private (Pan India)",
      "**Ranked 110** Govt and Private (Pan India)",
    ],
  },
  {
    id: 13, year: 2025, source: "Fortune India",
    logo: "/img/media/fortune.png",  
        title: "Fortune India Best Business Schools 2025",
    entity: "Presidency University, Bengaluru, Karnataka",
    cats: "2025 management",
    ranks: [
      "**Rank 17** Bangalore",
      "**Rank 41** South Zone",
      "**Rank 58** University (Pan India)",
      "**Rank 110** Private (Pan India)",
    ],
  },
  {
    id: 14, year: 2025, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today India's Best University 2025",
    entity: "Presidency University, Bengaluru, Karnataka",
    cats: "2025 university",
    ranks: ["**Ranked 39** Pan India — General (Private) India's Best Universities"],
  },
  {
    id: 15, year: 2025, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best Young Universities Survey 2025",
    entity: "Presidency University, Bengaluru, Karnataka",
    cats: "2025 university",
    ranks: [
      "**Ranked 20** Pan India — Best Private Young Universities",
      "**Rated 32** Pan India — Best in STEM",
      "**Rated AAAA** — States' Best Young Universities",
    ],
  },
  {
    id: 16, year: 2025, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best Colleges of India 2025 – Engineering",
    entity: "School of Engineering, Presidency University",
    cats: "2025 engineering",
    ranks: [
      "**Ranked 33** Pan India — Best Emerging Engineering (Pvt) Colleges 2025",
      "**Ranked 11** Bengaluru City — Top Engineering (Pvt) Colleges 2025",
      "**Ranked 108** Pan India — Top Engineering (Pvt) Colleges 2025",
    ],
  },
  {
    id: 17, year: 2025, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best Colleges of India 2025 – BBA",
    entity: "School of Management, Presidency University",
    cats: "2025 management",
    ranks: [
      "**Ranked 65** Pan India — Emerging Bachelor of Business Administration (BBA) Colleges 2025",
      "**Ranked 21** Bengaluru City — Top BBA Colleges 2025",
      "**Ranked 146** Pan India — Top BBA Colleges 2025",
    ],
  },
  {
    id: 18, year: 2025, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best Colleges of India 2025 – BCom",
    entity: "School of Commerce, Presidency University",
    cats: "2025 university",
    ranks: [
      "**Ranked 30** Pan India — Emerging Bachelor of Commerce (BCom) Colleges 2025",
      "**Ranked 20** Bengaluru City — Top BCom Colleges 2025",
      "**Ranked 133** Pan India — Top BCom Colleges 2025",
    ],
  },
  {
    id: 19, year: 2025, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best Colleges of India 2025 – BCA",
    entity: "School of Information Science, Presidency University",
    cats: "2025 university",
    ranks: [
      "**Ranked 39** Pan India — Emerging Bachelor of Computer Application (BCA) Colleges 2025",
      "**Ranked 17** Bengaluru City — Top BCA Colleges 2025",
      "**Ranked 117** Pan India — Top BCA Colleges 2025",
    ],
  },
  {
    id: 20, year: 2025, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best Colleges of India 2025 – Law",
    entity: "School of Law, Presidency University",
    cats: "2025 law",
    ranks: [
      "**Ranked 17** Pan India — Emerging Law Colleges 2025",
      "**Ranked 06** Bengaluru City — Top Law Colleges 2025",
      "**Ranked 38** Pan India — Top Law Colleges 2025",
    ],
  },
  {
    id: 21, year: 2025, source: "Times Survey",
    logo: "/img/media/media1.png",
    title: "Times All India Engineering Institutes Ranking Survey 2025",
    entity: "Presidency University, Bengaluru",
    cats: "2025 engineering",
    ranks: [
      "**Ranked 37** Pan India — Top 175 Engineering Institutes",
      "**Ranked 35** Pan India — Top 125 Private Engineering Institutes",
      "**Ranked 28** Pan India — Research Capability (Top 30 Institutes)",
      "**Ranked 41** Pan India — Placement (Top 70 Private Institutes)",
      "**Ranked 18** South Zone — Region-wise Engineering Institute Rankings",
    ],
  },
  {
    id: 22, year: 2025, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best Universities 2025",
    entity: "Presidency University, Bengaluru",
    cats: "2025 university",
    ranks: [
      "**Ranked 45** All India — Private & Deemed Multidisciplinary Universities",
      "**Ranked 13** All India — Emerging & Multidisciplinary Universities",
      "**Ranked 2** South Zone — Emerging Multidisciplinary Universities",
      "**Ranked 24** South Zone — Multidisciplinary Universities",
      "**Ranked 13** South Zone — Private & Deemed Multidisciplinary Universities",
    ],
  },
  {
    id: 23, year: 2025, source: "CSR",
    logo: "/img/media/CSR.png",
    title: "CSR Law Schools Survey 2025",
    entity: "Presidency School of Law, Bengaluru, Karnataka",
    cats: "2025 law",
    ranks: [
      "**Ranked 3** Pan India — Top Eminent Law Schools in India",
      "**Ranked 7** Karnataka — Top Law Schools by State",
    ],
  },
  {
    id: 24, year: 2025, source: "Careers 360",
    logo: "/img/media/360.png",    
     title: "Careers360 India's Best Engineering Colleges Survey 2025",
    entity: "Presidency University, Bengaluru, Karnataka",
    cats: "2025 engineering",
    ranks: [
      "**Rated AAAA+** under India's Best Engineering Colleges (Rating by Zone)",
      "**Rated AAAA** Pan India — India's Best Engineering Colleges",
    ],
  },
  {
    id: 25, year: 2025, source: "CSR",
    logo: "/img/media/CSR.png",
    title: "CSR Engineering College Survey 2025",
    entity: "Presidency University, School of Engineering, Bengaluru, Karnataka",
    cats: "2025 engineering",
    ranks: [
      "**Ranked 14** Pan India — Top Engineering Colleges of Eminence",
      "**Ranked 3** Karnataka — Top Engineering Colleges by State",
    ],
  },
  {
    id: 26, year: 2025, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best Universities Ranking 2025",
    entity: "Presidency University, Bengaluru",
    cats: "2025 university",
    ranks: [
      "**Ranked 68** Pan India — India's Best Universities 2025 (March 2025 Edition, CAREERS360-University Special Edition)",
    ],
  },
  {
    id: 27, year: 2025, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "GHRDC BCA College Survey 2025",
    entity: "Presidency University School of Information Science, Bengaluru",
    cats: "2025 university",
    ranks: [
      "**Ranked 9** Pan India — Top BCA Colleges in India",
      "**Ranked 5** Karnataka — Top BCA Colleges by State",
      "**Ranked 5** South Zone — Top BCA Colleges by Region",
    ],
  },
  {
    id: 28, year: 2025, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "GHRDC BBA College Survey 2025",
    entity: "Presidency University School of Commerce & Economics, Bengaluru",
    cats: "2025 management",
    ranks: [
      "**Ranked #1** Pan India — Top BBA Colleges of Super Excellence",
      "**Ranked 2** Karnataka — Top BBA Colleges by State",
      "**Ranked 3** South Zone — Top BBA Colleges by Region",
    ],
  },
  {
    id: 29, year: 2025, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best Law Colleges 2025",
    entity: "Presidency University, Bengaluru",
    cats: "2025 law",
    ranks: ["**Rated AAA+** by Careers360 India's Best Law Colleges 2025"],
  },
  {
    id: 30, year: 2025, source: "Chronicles of India",
    logo: "/img/media/media10.jpg",
    title: "Chronicles of India – Technology & AI Education Ranking 2025",
    entity: "Presidency University, Bengaluru",
    cats: "2025 university",
    ranks: [
      "**Category A1** — Institution of Innovation & Impact",
    ],
  },
  {
    id: 31, year: 2025, source: "Times B School",
    logo: "/img/media/media11.png",
    title: "Times B School Ranking 2025",
    entity: "School of Management, Presidency University",
    cats: "2025 management",
    ranks: [
      "**Top 10** — Top 40 Universities",
      "**Top 5** — South Zone",
      "**Top 23** — Placements Category",
    ],
  },

  // ── 2024 (listed on website under older cards) ────────────────────────────
  {
    id: 32, year: 2024, source: "ASSOCHAM CARE",
    logo: "/img/media/assocham.png",
    title: "ASSOCHAM CARE 2024",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "Recognized as **\"CARE CHAMPION\"** by ASSOCHAM CARE 2024",
    ],
  },
  {
    id: 33, year: 2024, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best B-School Survey 2024",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Rated AAA** under Zone Category (Karnataka)",
    ],
  },
  {
    id: 34, year: 2024, source: "Fortune India",
    logo: "/img/media/fortune.png",  
        title: "Fortune India Best B-School Rankings 2024",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 19** City-wise Ranking",
      "**Top 52** Zone-wise Ranking (South)",
      "**Top 119** Private Rankings Pan India",
      "**Top 59** University Rankings Pan India",
    ],
  },
  {
    id: 35, year: 2024, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best B-Schools Survey 2024",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 50** Zone-wise Private (South)",
      "**Top 17** City-wise Private (Bengaluru)",
      "**Top 154** Pan India — Private Category",
    ],
  },
  {
    id: 36, year: 2024, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "The Week Hansa Research Survey 2024 – India's Best B-Schools",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 135** Pan India",
      "**Top 116** Private All India",
      "**Top 19** Emerging All India",
      "**Top 47** South Zone",
      "**Top 16** Bengaluru",
    ],
  },
  {
    id: 37, year: 2024, source: "CSR",
    logo: "/img/media/CSR.png",
    title: "CSR B-Schools Survey 2024",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 6** Pan India — Top B-Schools of Eminence",
      "**Top 11** Karnataka — Top B-Schools (Govt & Private) by State",
    ],
  },
  {
    id: 38, year: 2024, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best B-Schools Overall Ranking 2024",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 184** Pan India",
    ],
  },
  {
    id: 39, year: 2024, source: "Outlook iCare",
    logo: "/img/media/outlook.png",
    title: "Outlook iCare India's Best B-Schools 2025",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 49** Pan India — Top Private B-Schools",
      "**Top 17** South Zone — Top Private B-Schools",
      "**Top 7** Bengaluru — Top Private B-Schools",
      "**Top 20** Pan India — Private University-Constituent Colleges",
    ],
  },
  {
    id: 40, year: 2024, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best University 2024 Survey & Top Engineering Colleges 2024 (Card A)",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "**Top 40** Pan India — General (Private) Universities",
      "**Top 150** Pan India — Top Engineering Colleges",
      "**Top 121** Pan India — Top Engineering (Private) Colleges",
    ],
  },
  {
    id: 41, year: 2024, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best University 2024 Survey & Top Engineering Colleges 2024 (Card B)",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "**Top 40** Pan India — General (Private) Universities",
      "**Top 150** Pan India — Top Engineering Colleges",
      "**Top 121** Pan India — Top Engineering (Private) Colleges",
    ],
  },
  {
    id: 42, year: 2024, source: "BW Business World",
    logo: "/img/media/business.png",  
    title: "BW Business World India's Top Engineering Colleges & Universities 2024",
    entity: "School of Engineering, Presidency University",
    cats: "2024 engineering",
    ranks: [
      "**Top 97** Pan India — Overall Best Engineering Colleges and Best Universities",
      "**Top 41** Pan India — Private (All India)",
      "**Top 24** South Region",
    ],
  },
  {
    id: 43, year: 2024, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best Young Universities Ranking 2024",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "**Top 27** Pan India — Best Private Institutes",
      "**Top 18** Pan India — Multidisciplinary Private",
      "**Top 49** Pan India — Best in STEM",
      "**Rated AAAA** Karnataka",
    ],
  },
  {
    id: 44, year: 2024, source: "Outlook iCare",
    logo: "/img/media/outlook.png",
    title: "Outlook iCare India University Rankings 2024",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "**Top 17** Pan India — Top 50 State Private Universities",
    ],
  },
  {
    id: 45, year: 2024, source: "India Today",
    logo: "/img/media/india_today.png",  
    title: "India Today Best Colleges of India 2024 – Engineering",
    entity: "School of Engineering, Presidency University",
    cats: "2024 engineering",
    ranks: [
      "**Top 150** Pan India — Top Engineering Colleges",
      "**Top 121** Pan India — Top Engineering (Private) Colleges",
    ],
  },
  {
    id: 46, year: 2024, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "Engineering Colleges Rankings 2024",
    entity: "School of Engineering, Presidency University",
    cats: "2024 engineering",
    ranks: [
      "**Top 132** Pan India — Engineering Colleges (All India)",
      "**Top 12** Pan India — Emerging Private Engineering Colleges",
      "**Top 65** South India — Private Engineering Colleges (South Zone)",
      "**Top 14** Bengaluru — Private Engineering Colleges",
      "**Top 21** Karnataka — Private Engineering Colleges",
    ],
  },
  {
    id: 47, year: 2024, source: "CSR",
    logo: "/img/media/CSR.png",
    title: "CSR Engineering Colleges Survey 2024",
    entity: "School of Engineering, Presidency University",
    cats: "2024 engineering",
    ranks: [
      "**#1** Pan India — Outstanding Engineering Colleges of Excellence",
      "**Top 4** Karnataka",
    ],
  },
  {
    id: 48, year: 2024, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best Universities 2024",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "**Top 75** Pan India — Multidisciplinary Universities",
      "**Top 14** Pan India — Emerging Multidisciplinary Universities",
      "**Top 2** South Zone — Emerging Multidisciplinary Universities",
      "**Top 24** South Zone — Multidisciplinary Universities",
      "**Top 42** Pan India — Private & Deemed Multidisciplinary Universities",
    ],
  },
  {
    id: 49, year: 2024, source: "Times Survey",
    logo: "/img/media/media1.png",
    title: "Times All India Engineering Institutes Ranking Survey 2024",
    entity: "School of Engineering, Presidency University",
    cats: "2024 engineering",
    ranks: [
      "**Top 44** Pan India — Top 175 Engineering Institutes",
      "**Top 29** Pan India — Research Capability (Top 30 Institutes)",
      "**Top 45** Pan India — Placement (Top 70 Private Institutes)",
      "**Top 41** Pan India — Top 125 Private Engineering Institutes",
    ],
  },
  {
    id: 50, year: 2024, source: "Education World",
    logo: "/img/media/world.png",
    title: "EW India Higher Education Rankings 2024-25",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: [
      "**Top 17** Pan India — Best Private Multidisciplinary Universities",
      "**Top 4** Karnataka",
      "**Top 9** Placement Category",
    ],
  },
  {
    id: 51, year: 2024, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best Engineering Colleges 2024",
    entity: "Presidency University, Bengaluru",
    cats: "2024 engineering",
    ranks: ["**Rated AAAA** — India's Best Engineering Colleges 2024"],
  },
  {
    id: 52, year: 2024, source: "Careers 360",
    logo: "/img/media/360.png",
    title: "Careers360 India's Best Universities (Emerging Universities) 2024",
    entity: "Presidency University, Bengaluru",
    cats: "2024 university",
    ranks: ["Listed under **India's Best Universities (Emerging Universities)** — Careers360 Magazine (March 2024 Issue)"],
  },
  {
    id: 53, year: 2024, source: "Times B School",
    logo: "/img/media/time.png",
    title: "Times B School Ranking 2024",
    entity: "School of Management, Presidency University",
    cats: "2024 management",
    ranks: [
      "**Top 25** — Top 100 B-Schools",
      "**Top 12** — Top 40 Private Universities",
      "**Top 5** — Top 20 South B-Schools",
      "**Top 23** — Top 50 B-Schools (Placements)",
    ],
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    id: 54, year: 2023, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best B-Schools 2023",
    entity: "School of Management, Presidency University",
    cats: "2023 management",
    ranks: [
      "**Ranked 137** Pan India — Best B-Schools (All India - Govt & Private)",
      "**Ranked 118** Pan India — Best B-Schools (All India - Private Only)",
      "**Ranked 46** South Zone — Best B-Schools (Govt & Private)",
      "**Ranked 41** South Zone — Best B-Schools (Private Only)",
      "**Ranked 16** Bengaluru — Best B-Schools (Govt & Private)",
      "**Ranked 16** Bengaluru — Best B-Schools (Private Only)",
    ],
  },
  {
    id: 55, year: 2023, source: "Careers 360",
    logo: "/img/media/360.png",
    title: "India's Best Young Universities 2023",
    entity: "Presidency University, Bengaluru",
    cats: "2023 university",
    ranks: ["**Rated AAAA** — India's Best Young Universities Survey by Careers 360"],
  },
  {
    id: 56, year: 2023, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "Outstanding Engineering Colleges of Excellence 2023",
    entity: "School of Engineering, Presidency University",
    cats: "2023 engineering",
    ranks: [
      "**Top 17** Pan India — Outstanding Engineering Colleges of Excellence",
      "**Top 4** Karnataka — Top Engineering Colleges in Karnataka State",
    ],
  },
  {
    id: 57, year: 2023, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "Best Colleges of India 2023 – Engineering",
    entity: "School of Engineering, Presidency University",
    cats: "2023 engineering",
    ranks: [
      "**Top 138** Pan India — Top Engineering Colleges",
      "**Top 110** Pan India — Top Private Engineering Colleges",
      "**Top 65** South Zone — Top Private Engineering Colleges",
      "**Top 14** Bengaluru — Top Private Engineering Colleges",
    ],
  },
  {
    id: 58, year: 2023, source: "Education World",
    logo: "/img/media/world.png",
    title: "Education World – Best International Academic Collaboration 2023",
    entity: "Presidency University, Bengaluru",
    cats: "2023 university",
    ranks: [
      "**Top 7** Pan India — Best International Academic Collaboration",
      "**#1** Karnataka State — Best International Academic Collaboration",
      "**#1** Bengaluru — Best International Academic Collaboration",
    ],
  },
  {
    id: 59, year: 2023, source: "CSR",
    logo: "/img/media/CSR.png",
    title: "CSR Law Schools Survey 2023",
    entity: "School of Law, Presidency University",
    cats: "2023 law",
    ranks: [
      "**Top 5** Pan India — Top Eminent Law Schools",
      "**Top 6** Karnataka — Top Law Schools by State",
    ],
  },
  {
    id: 60, year: 2023, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best Universities 2023",
    entity: "Presidency University, Bengaluru",
    cats: "2023 university",
    ranks: ["**Ranked 69** Pan India — Multidisciplinary Universities"],
  },
  {
    id: 61, year: 2023, source: "Education World",
    logo: "/img/media/world.png",
    title: "India's Best Private Universities 2023",
    entity: "Presidency University, Bengaluru",
    cats: "2023 university",
    ranks: ["**Ranked 19** Pan India — India's Best Private Universities by Education World Magazine"],
  },
  {
    id: 62, year: 2023, source: "Deccan Chronicle",
    logo: "/img/media/deccan.png",
    title: "Deccan Chronicle B-School Survey 2023",
    entity: "School of Management, Presidency University",
    cats: "2023 management",
    ranks: [
      "**Ranked 55** — All-India Top B-Schools",
      "**Graded B+++** — All-India Grade-wise Top B-Schools",
      "Ranked under **All-India Region-wise Top B-Schools (South)**",
    ],
  },
  {
    id: 63, year: 2023, source: "Careers 360",
    logo: "/img/media/360.png",     
    title: "Careers360 India's Best Universities (Emerging Universities) 2023",
    entity: "Presidency University, Bengaluru",
    cats: "2023 university",
    ranks: ["Listed as **India's Best Universities (Emerging Universities)** — Careers360 Magazine"],
  },
  {
    id: 64, year: 2023, source: "IIRF",
    logo: "/img/media/iirf.png",     
    title: "IIRF 2023 Best B-Schools",
    entity: "School of Management, Presidency University",
    cats: "2023 management",
    ranks: [
      "**Ranked 61** Pan India — Best B-Schools (Private - Overall)",
      "**Ranked 34** Pan India — Top Private B-Schools (University Program)",
    ],
  },

  // ── 2022 ──────────────────────────────────────────────────────────────────
  {
    id: 65, year: 2022, source: "IIRF",
    logo: "/img/media/iirf.png",     
    title: "IIRF 2022 Best Engineering and BCA Colleges",
    entity: "Presidency University, Bengaluru",
    cats: "2022 engineering",
    ranks: [
      "**Ranked 27** Pan India — Top 100 BCA Colleges/Universities (School of Information Science – BCA Program)",
      "**Ranked 53** Pan India — Best Engineering Colleges (Private) (School of Engineering)",
    ],
  },
  {
    id: 66, year: 2022, source: "Business Today",
    logo: "/img/media/standard.png",
    title: "BT-MDRA Survey – India's Best B-Schools 2022",
    entity: "School of Management, Presidency University",
    cats: "2022 management",
    ranks: [
      "**Ranked 206** Pan India — India's Best B-Schools (Private - Overall)",
    ],
  },
  {
    id: 67, year: 2022, source: "Education World",
    logo: "/img/media/world.png",
    title: "Education World – New Genre Private Universities (South) 2022",
    entity: "Presidency University, Bengaluru",
    cats: "2022 university",
    ranks: ["Categorized as **New Genre Private Universities (South)** — Education World Magazine"],
  },
  {
    id: 68, year: 2022, source: "Open Magazine",
    logo: "/img/media/open.png",     
    title: "Open Magazine Best B-Schools 2023 Survey",
    entity: "School of Management, Presidency University, Bengaluru",
    cats: "2022 management",
    ranks: [
      "**Top 19** — Best B-Schools (Private Universities - South)",
      "**Top 9** — Best B-Schools (Private Universities - Karnataka)",
    ],
  },
  {
    id: 69, year: 2022, source: "GHRDC",
    logo: "/img/media/GHRDC.png",
    title: "GHRDC Ranking 2022 – B-Schools",
    entity: "School of Management, Presidency University",
    cats: "2022 management",
    ranks: [
      "**Top 3** — Outstanding B-Schools of Excellence in India",
      "**Top 12** — Best B-Schools in Karnataka",
    ],
  },
  {
    id: 70, year: 2022, source: "The Week – Hansa Survey",
    logo: "/img/media/week.png",
    title: "India's Best B-Schools 2022",
    entity: "School of Management, Presidency University",
    cats: "2022 management",
    ranks: [
      "**Ranked 135** Pan India — Best B-Schools (Govt & Private)",
      "**Ranked 116** Pan India — Best B-Schools (Private Only)",
      "**Ranked 44** South Zone — Best B-Schools (Govt & Private)",
      "**Ranked 39** South Zone — Best B-Schools (Private Only)",
      "**Ranked 16** Bengaluru — Best B-Schools (Govt & Private)",
      "**Ranked 16** Bengaluru — Best B-Schools (Private Only)",
    ],
  },
  {
    id: 71, year: 2022, source: "Outlook iCare",
    logo: "/img/media/outlook.png",
    title: "Outlook iCare India's Top Universities Rankings 2022",
    entity: "Presidency University, Bengaluru",
    cats: "2022 university",
    ranks: ["**Ranked 32** — Top 50 State Private Universities in India"],
  },
  {
    id: 72, year: 2022, source: "BW Business World",
    logo: "/img/media/business.png",
    title: "BW Business World India's Top Engineering Colleges & Universities 2022",
    entity: "Presidency University, Bengaluru",
    cats: "2022 engineering",
    ranks: [
      "**Ranked 48** Pan India — India's Top Engineering Colleges & Universities",
      "**Ranked 28** South Zone — India's Top Engineering Colleges & Universities",
    ],
  },
];


// ─── Category colors — membership-style subtle tones ──────────────────────────
const catColors: Record<string, string> = {
  engineering: "bg-orange-50 text-orange-600 border-orange-200",
  management:  "bg-teal-50 text-[#0A8F96] border-teal-200",
  law:         "bg-purple-50 text-purple-600 border-purple-200",
  university:  "bg-amber-50 text-amber-600 border-amber-200",
  design:      "bg-sky-50 text-sky-600 border-sky-200",
};

function getCatLabel(cats: string): string {
  if (cats.includes("engineering")) return "Engineering";
  if (cats.includes("management")) return "Management";
  if (cats.includes("law")) return "Law";
  if (cats.includes("design")) return "Design";
  if (cats.includes("university")) return "University";
  return "";
}

function getCatKey(cats: string): string {
  if (cats.includes("engineering")) return "engineering";
  if (cats.includes("management")) return "management";
  if (cats.includes("law")) return "law";
  if (cats.includes("design")) return "design";
  return "university";
}

// ─── Bold markdown renderer ───────────────────────────────────────────────────
function RankText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <span>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-gray-900">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}

// ─── Card — membership-style ──────────────────────────────────────────────────
function RankCard({ item, index }: { item: RankingEntry; index: number }) {
  const catKey = getCatKey(item.cats);
  const catLabel = getCatLabel(item.cats);
  const colorClass = catColors[catKey] ?? "bg-gray-100 text-gray-500 border-gray-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
    >
      {/* Logo Container — membership style */}
      <div className="w-full h-full md:h-32 mb-4 p-3 bg-gray-50 rounded-lg group-hover:bg-[#0A8F96]/5 transition-colors duration-300 flex items-center justify-center">
        <img
          src={item.logo}
          alt={item.source}
          className="max-h-[270px] max-w-[150px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            const t = e.target as HTMLImageElement;
            t.style.display = "none";
            const fb = t.parentElement?.querySelector(".logo-fb") as HTMLElement;
            if (fb) fb.style.display = "flex";
          }}
        />
        <div
          className="logo-fb hidden items-center justify-center text-center text-[16px] font-bold text-gray-700 leading-tight"
          style={{ display: "none" }}
        >
          {item.source}
        </div>
      </div>

      {/* Title — membership text style */}
      <h3 className="font-sans text-sm md:text-base text-gray-800 line-clamp-2 group-hover:text-[#0A8F96] transition-colors leading-snug mb-1">
        {item.title}
      </h3>

      {/* Entity */}
      <p className="font-sans text-[14px] text-gray-400 mb-3 leading-snug">
        {item.entity}
      </p>

      {/* Ranks list */}
      <div className="flex flex-col gap-1.5 mb-3 w-full text-left">
        {item.ranks.map((r, i) => (
          <div key={i} className="flex items-start gap-2 text-[14px] text-gray-600 leading-snug font-sans">
            <span className="mt-[5px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#0A8F96]" />
            <RankText text={r} />
          </div>
        ))}
      </div>

      {/* Category Tag — membership style with background chip */}
      <span className={`font-sans text-[15px] mt-auto px-3 py-1.5 rounded-full border font-semibold ${colorClass}`}>
        {catLabel}
      </span>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function MediaRankingsGrid() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const s = search.toLowerCase();
    if (!s) return rankings;
    return rankings.filter((r) =>
      r.title.toLowerCase().includes(s) ||
      r.source.toLowerCase().includes(s) ||
      r.entity.toLowerCase().includes(s) ||
      r.ranks.some(rank => rank.toLowerCase().includes(s)) ||
      getCatLabel(r.cats).toLowerCase().includes(s)
    );
  }, [search]);

  return (
    <section id="rankings" className="py-16 md:py-24 bg-gray-50 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* ── Header — matching Membership Page ── */}
        <div className="text-center mb-10">
          {/* Chip with Background */}
          <span className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] text-[13px] font-outfit px-4 py-1.5 rounded-full mb-5">
            Media Rankings
          </span>

          {/* Main Heading */}
          <h2 className="text-[clamp(2.6rem,2.5vw,4rem)]  leading-none mb-6">
            Our{" "}
            <a className=" text-[#0A8F96]">Prestigious Rankings </a>
            
          </h2>

          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-[640px] mx-auto leading-relaxed">
            Presidency University is consistently recognized by India&apos;s most
            respected survey agencies — from engineering and management to law
            and multidisciplinary excellence.
          </p>
        </div>

        {/* ── Search — membership style ── */}
        <div className="max-w-md mx-auto mb-12 mt-10 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search rankings..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-5 py-3.5 border border-gray-200 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/30 focus:border-[#0A8F96] transition-all text-[14px]"
          />
        </div>

        {/* ── Cards Grid — membership layout ── */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <svg
              className="mx-auto mb-4 text-gray-300"
              width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <p className="text-lg font-medium text-gray-500">No rankings found</p>
            <p className="text-[14px] mt-1">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((item, index) => (
              <RankCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}