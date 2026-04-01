"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { TopBar } from "./TopBar";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cpu,
  Settings,
  Building,
  Briefcase,
  Banknote,
  GraduationCap,
} from "lucide-react";
type ProgrammeItem = {
  label: string;
  href: string;
};

type ProgrammeCategory = {
  ug: ProgrammeItem[];
  pg: ProgrammeItem[];
  phd: ProgrammeItem[];
  diploma: ProgrammeItem[];
};
export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [activeSchool, setActiveSchool] = useState(
    "Computer Science and Engineering",
  );



  // 🔥 ICON MAP
  const iconMap: any = {
    cpu: Cpu,
    settings: Settings,
    building: Building,
    briefcase: Briefcase,
    banknote: Banknote,
    graduationCap: GraduationCap,
  };
  const programmesData: Record<string, ProgrammeCategory> = {
    "Computer Science and Engineering": {
      ug: [
        {
          label: "B.Tech Computer Science & Engineering",
          href: "/schools/computer-science/btech-cse",
        },
        {
          label: "B.Tech Computer Science & Technology (Big Data)",
          href: "/schools/computer-science/btech-big-data",
        },
        {
          label: "B.Tech Computer Science & Technology (DevOps)",
          href: "/schools/computer-science/btech-devops",
        },
        {
          label: "B.Tech Computer Science & Engineering (AI & ML)",
          href: "/schools/computer-science/btech-ai-ml",
        },
        {
          label: "B.Tech Computer Science & Engineering (Blockchain)",
          href: "/schools/computer-science/btech-blockchain",
        },
        {
          label: "B.Tech Computer Science & Engineering (Cyber Security)",
          href: "/schools/computer-science/btech-cyber-security",
        },
        {
          label: "B.Tech Computer Science & Engineering (Data Science)",
          href: "/schools/computer-science/btech-data-science",
        },
        {
          label: "B.Tech Computer Science & Engineering (Internet of Things)",
          href: "/schools/computer-science/btech-iot",
        },
        {
          label: "B.Tech Information Science & Engineering",
          href: "/schools/computer-science/btech-information-science",
        },
        {
          label: "B.Tech Computer Engineering",
          href: "/schools/computer-science/btech-computer-engineering",
        },
        {
          label: "B.Tech Information Science & Technology",
          href: "/schools/computer-science/btech-information-technology",
        },
        {
          label: "B.Tech Robotics & Artificial Intelligence",
          href: "/schools/computer-science/btech-robotics-ai",
        },
        {
          label: "B.Tech Artificial Intelligence & Data Science",
          href: "/schools/computer-science/btech-ai-data-science",
        },
      ],
      pg: [
        { label: "M.Tech Computer Science & Engineering (Artificial Intelligence)", href: "/schools/pg/mtech-ai" },
        {
          label: "M.Tech Computer Science & Engineering (Data Science)",
          href: "/schools/computer-science/mtech-data-science",
        },
      ],
      phd: [
        {
          label: "PhD in Computer Science & Engineering",
          href: "/schools/computer-science/phd-cse",
        },
      ],
      diploma: [
        {
          label: "Post Graduate Diploma in Big Data",
          href: "/schools/computer-science/pg-diploma-big-data",
        },
      ]
    },

    " Engineering": {
      ug: [
        {
          label: "B.Tech Electronics & Communication Engineering",
          href: "/schools/engineering/btech-ece",
        },
        {
          label: "B.Tech Electrical & Electronics Engineering",
          href: "/schools/engineering/btech-eee",
        },
        { label: "B.Tech VLSI", href: "/schools/engineering/btech-vlsi" },
        { label: "B.Tech Civil Engineering", href: "/schools/engineering/btech-civil-engineering" },
        {
          label: "B.Tech Mechanical Engineering",
          href: "/schools/engineering/btech-mechanical-engineering",
        },
        {
          label: "B.Tech Petroleum Engineering",
          href: "/schools/engineering/btech-petroleum-engineering",
        },
      ],
      pg: [
        {
          label: "M.Tech Embedded System & VLSI",
          href: "/schools/engineering/mtech-embeddedsystem-vlsi",
        },
        {
          label: "M.Tech Building & Construction Technology",
          href: "/schools/engineering/mtech-buliding-construction-technology",
        },
      ],
      phd: [
        {
          label: "Ph.D. Electronics & Communications Engineering",
          href: "/schools/engineering/phd-ece",
        },
        {
          label: "PhD Mechanical Engineering",
          href: "/schools/engineering/phd-mechanical-engineering",
        },
        { label: "PhD Civil Engineering", href: "/schools/engineering/phd-civil-engineering" },
        {
          label: "Ph.D. Electrical & Electronics Engineering",
          href: "/schools/engineering/phd-eee",
        },
        {
          label: "Ph.D. Petroleum Engineering",
          href: "/schools/engineering/phd-petroleum-engineering",
        },
      ],
      diploma: [
        {
          label: "Post Graduate Diploma in Drone Technology",
          href: "/schools/engineering/pg-diploma-drone-technology",
        },
      ]
    },

    "Information Science": {
      ug: [
        { label: "Bachelor of Computer Applications (BCA)", href: "/schools/information-science/bca" },
        { label: "B.C.A. Artificial Intelligence and Machine Learning", href: "/schools/information-science/bca-AL-ML" },
        {
          label: "B.C.A. Data Science",
          href: "/schools/information-science/bca-data-science",
        },
      ],
      pg: [{ label: "Master of Computer Applications (MCA)", href: "/schools/information-science/mca" }],
      phd: [
        {
          label: "Ph.D. Information Science",
          href: "/schools/information-science/phd-information-science",
        },
      ],
      diploma: []
    },

    "Management": {
      ug: [
        { label: "Bachelor of Business Administration (BBA)", href: "/schools/management/bba" },
        {
          label: "BBA (Aviation Management)",
          href: "/schools/management/bba-aviation-management",
        },
        {
          label: "BBA (Business Analytics)",
          href: "/schools/management/bba-business-analytics",
        },
        {
          label: "BBA (Digital Marketing)",
          href: "/schools/management/bba-digital-marketing",
        },
        {
          label: "BBA (Digital Business)",
          href: "/schools/management/bba-digital-business",
        },
        {
          label: "BBA Hospitality Management",
          href: "/schools/management/bba-hospitality-management",
        },
      ],
      pg: [
        { label: "MBA (All Business Domains and New Age Specialisations)", href: "/schools/management/mba" },
        { label: "MBA (Marketing and Finance)", href: "/schools/management/mba-marketing-finance" },
        { label: "MBA (Banking and Finance Management)", href: "/schools/management/mba-banking-finance-management" },
        { label: "MBA (Digital Marketing)", href: "/schools/management/mba-digital-marketing" },
        {
          label: "MBA (Business Analytics)",
          href: "/schools/management/mba-business-analytics",
        },
      ],
      phd: [
        { label: "Ph.D. General Management", href: "/schools/management/phd-general-management" },
        { label: "Ph.D. Marketing Management", href: "/schools/management/phd-marketing-management" },
        { label: "Ph.D. Financial Management", href: "/schools/management/phd-financial-management" },
        { label: "Ph.D. Human Resource Management", href: "/schools/management/phd-human-resource-management" },
        {
          label: "Ph.D. Business Analytics",
          href: "/schools/management/phd-business-analytics",
        },
      ],
      diploma: [
        {
          label: "Post Graduate Diploma in Public Administration",
          href: "/schools/management/pg-diploma-public-administration",
        },
      ]
    },

    "Commerce": {
      ug: [
        {
          label: "B.Com. (Specialisation in Banking and Finance)",
          href: "/schools/commerce/bcom-banking-and-finance",
        },
        { label: "B.Com. (ACCA)", href: "/schools/commerce/bcom-acca" },
        {
          label: "B.Com. (Specialisation in Corporate Accounting and Taxation)",
          href: "/schools/commerce/bcom-corporate-accounting-and-taxation",
        },
        {
          label: "B.Com. (Business Analytics)",
          href: "/schools/commerce/bcom-business-analytics",
        },
        { label: "B.Com. (Corporate Accounting Integrated with CMA-US)", href: "/schools/commerce/bcom-corporate-accounting-integrated-cma-us" },
        { label: "B.Com. CA Foundation", href: "/schools/commerce/bcom-ca-foundation" },
      ],
      pg: [],
      phd: [{ label: "Ph.D. Commerce", href: "/schools/commerce/phd-commerce" },
      { label: "Ph.D. Economics", href: "/schools/commerce/phd-economics" }
      ],
      diploma: [
        {
          label: "PhD in Computer Science & Engineering",
          href: "/schools/computer-science/phd-cse",
        },
      ]
    },

    Law: {
      ug: [
        { label: "B.A. LL.B. (Hons.)", href: "/schools/law/ba-llb" },
        { label: "B.B.A. LL.B. (Hons.)", href: "/schools/law/bba-llb" },
      ],
      pg: [{ label: "LL.M. (Master of Laws)", href: "/schools/law/llm" }],
      phd: [{ label: "Ph.D. Law", href: "/schools/law/phd-law" }],
      diploma: []
    },

    "Design": {
      ug: [
        {
          label: "B.Des Communication Design",
          href: "/schools/design/bdes-communication-design",
        },
        {
          label: "B.Des Fashion Design",
          href: "/schools/design/bdes-fashion-design",
        },
        {
          label: "B.Des Product Design",
          href: "/schools/design/bdes-product-design",
        },
        { label: "B.Des Space Design", href: "/schools/design/bdes-space-design" },
        { label: "B.Sc. Multimedia and Animation", href: "/schools/design/bsc-multimedia-and-animation" },
        {
          label: "B.Des Game Design",
          href: "/schools/design/bdes-game-design",
        },
        {
          label: "Bachelor of Fine Arts (BFA)",
          href: "/schools/design/bfa",
        },
      ],
      pg: [],
      phd: [{ label: "Ph.D. Design", href: "/schools/design/phd-design" }],
      diploma: []
    },

    "Media Studies": {
      ug: [
        {
          label: "BA (Journalism & Mass Communication) — General",
          href: "/schools/media-studies/ba-journalism-communication-general",
        },
        {
          label: "BA JMC (Digital Marketing & Advertising / PR & Corporate)",
          href: "/schools/media-studies/ba-jmc-digital-marketing-advertising",
        },
        {
          label: "BA JMC (Film, Television & Digital Production)",
          href: "/schools/media-studies/ba-jmc-film-television-digital-production",
        },
        { label: "BA JMC (Immersive Media, AR/VR & Interactive Storytelling)", href: "/schools/media-studies/ba-jmc-immersivemedia-ar-vr-interactive-storytelling" },
        {
          label: "BA JMC (Digital Storytelling & Content Creation)",
          href: "/schools/media-studies/ba-jmc-digital-storytelling-content-creation",
        },
      ],
      pg: [
        {
          label: "MA Journalism & Mass Communication",
          href: "/schools/media-studies/ma-journalism-mass-communication",
        },
        
      ],
      phd: [{ label: "Ph.D. Media Studies", href: "/schools/media-studies/phd-media-studies" }],
      diploma: [
        {
          label: "Post Graduate Diploma in Film Making",
          href: "/schools/media-studies/post-graduate-diploma-film-making",
        },
      ]
    },

    "Liberal Arts and Sciences": {
      ug: [
        { label: "B.Sc. Psychology", href: "/schools/liberal-arts-science/bsc-psychology" },
        { label: "B.A. (Psychology, Economics)", href: "/schools/liberal-arts-science/ba-psychology-economics" },
        { label: "B.A. (Communication and Media, Psychology)", href: "/schools/liberal-arts-science/ba-communication-media" },
        {
          label: "B.A. (Psychology, English)",
          href: "/schools/liberal-arts-science/ba-psychology-english",
        },
        { label: "B.A. (History & Political Science)", href: "/schools/liberal-arts-science/ba-history-political-science" },
        { label: "B.A. (Political Science & Economics)", href: "/schools/liberal-arts-science/ba-political-science-economics" },
        { label: "B.A. (English & History)", href: "/schools/liberal-arts-science/ba-english-history" },
        { label: "B.A. (English & Political Science)", href: "/schools/liberal-arts-science/ba-english-political-science" },
         { label: "B.A. (Performing Arts – Classical Music, Psychology)", href: "/schools/liberal-arts-science/ba-arts-classicalmusic-psychology" },
          { label: "B.A. (Performing Arts – Classical Dance, Psychology)", href: "/schools/liberal-arts-science/ba-arts-classicaldance-psychology" },
          { label: "B.A. (Performing Arts – Classical Dance, English)", href: "/schools/liberal-arts-science/ba-arts-classicaldance-english" },
          { label: "B.A. (Performing Arts – Western Music – Instrumental, English)", href: "/schools/liberal-arts-science/ba-performing-arts-western-music-instrumental-english" },
          { label: "B.A. (Performing Arts – Western Music – Instrumental, Psychology)", href: "/schools/liberal-arts-science/ba-performing-arts–western-music-instrumental-psychology" },
          { label: "B.A. (Theatre Studies, Psychology)", href: "/schools/liberal-arts-science/ba-theatre-studies-psychology" },
          { label: "B.A. (Theatre Studies, English)", href: "/schools/liberal-arts-science/ba-theatre-studies-english" },
          
        ],
      pg: [
        {
          label: "M.Sc. Psychology (Child / Clinical / Counselling / Industrial Psychology)",
          href: "/schools/liberal-arts-science/msc-psychology-child-clinical-counselling-industrial-psychology",
        },
        {
          label: "M.A. English (Digital Humanities / Cultural Studies / Creative Writing / Educational Leadership)",
          href: "/schools/liberal-arts-science/ma-english-digital-humanities-cultural-Studies-creative-writing-educational-leadership",
        },
        
      ],
      phd: [
        { label: "Ph.D. English", href: "/schools/liberal-arts-science/phd-english" },
        
      ],
      diploma: [
        {
          label: "Diploma in Bharatanatyam",
          href: "/schools/liberal-arts-science/diploma-bharatanatyam",
        },
        {
          label: "Diploma in Kathak",
          href: "/schools/liberal-arts-science/diploma-kathak",
        },
        {
          label: "Diploma in Kuchipudi",
          href: "/schools/liberal-arts-science/diploma-kuchipudi",
        },
        {
          label: "Diploma in Mohiniyattam",
          href: "/schools/liberal-arts-science/diploma-mohiniyattam",
        },
      ]
    },

    "Allied Health Sciences": {
      ug: [
        {
          label: "Bachelor of Physiotherapy (BPT)",
          href: "/schools/allied-health-sciences/bpt",
        },
        {
          label: "B.Sc. Anaesthesia and Operation Theatre",
          href: "/schools/allied-health-sciences/bsc-anesthesia-operation-theatre",
        },
         {
          label: "B.Sc. Medical Laboratory Technology",
          href: "/schools/allied-health-sciences/bsc-medical-laboratory-technology",
        },
         {
          label: "B.Sc. Cardiac Care Technology (CCT)",
          href: "/schools/allied-health-sciences/bsc-cct",
        },
         {
          label: "B.Sc. Respiratory Care Technology (RCT)",
          href: "/schools/allied-health-sciences/bsc-rct",
        },
         {
          label: "B.Sc. Medical Radiology and Imaging",
          href: "/schools/allied-health-sciences/bsc-medical-radiology-imaging",
        },
      ],
      pg: [],
      phd: [],
      diploma: [
      ]
    },
  };
  // 🔥 NAV ITEMS
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },

    {
      label: "Schools",
      hasMegaMenu: true,
      megaMenu: [
        {
          title: "Technology & Engineering",
          items: [
            {
              label: "Computer Science & Engineering",
              icon: "cpu",
              href: "/schools/computer-science",
            },
            {
              label: "Engineering",
              icon: "graduationCap",
              href: "/schools/engineering",
            },
            {
              label: "Information Science",
              icon: "graduationCap",
              href: "/schools/information-science",
            },
          ],
        },
        {
          title: "Business & Commerce",
          items: [
            {
              label: "Management",
              icon: "graduationCap",
              href: "/schools/management",
            },
            {
              label: "Commerce",
              icon: "graduationCap",
              href: "/schools/commerce",
            },
          ],
        },
        {
          title: "Creative & Media",
          items: [
            { label: "Design", icon: "graduationCap", href: "/schools/design" },
            {
              label: "Media Studies",
              icon: "graduationCap",
              href: "/schools/media",
            },
          ],
        },
        {
          title: "Law & Humanities",
          items: [
            { label: "Law", icon: "graduationCap", href: "/schools/law" },
            {
              label: "Liberal Arts & Sciences",
              icon: "graduationCap",
              href: "/schools/liberal-arts",
            },
          ],
        },
        {
          title: "Health Sciences",
          items: [
            {
              label: "Allied Health Sciences",
              icon: "graduationCap",
              href: "/schools/health",
            },
          ],
        },
      ],
    },

    {
      label: "Programmes",
      hasMegaMenu: true,
      customMega: true,

      // 🔥 Optional right-side image (you can still use it later)
      image:
        "https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080",

      // 🔥 Optional quick links (top shortcuts inside mega menu if needed)
      quickLinks: [
        {
          label: "All Undergraduate Programmes",
          href: "/schools/ug",
        },
        {
          label: "All Postgraduate Programmes",
          href: "/schools/pg",
        },
        {
          label: "PhD & Research",
          href: "/schools/phd",
        },
        {
          label: "International Programmes",
          href: "/schools/international",
        },
      ],
    },

    {
      label: "International",
      hasDropdown: true,
      dropdown: [
        { label: "Study in India", href: "/international/overview" },
        { label: "UG Programmes", href: "/international/ug" },
        { label: "PG Programmes", href: "/international/pg" },
        { label: "Research & PhD", href: "/international/phd" },
        { label: "How to Apply", href: "/international/apply" },
        { label: "Scholarships", href: "/international/scholarships" },
        { label: "Contact OIA", href: "/international/contact" },
        { label: "FAQ'S", href: "/international/faq" },
      ],
    },

    { label: "Campus Life", href: "/campus-life" },
    { label: "Bangalore Life", href: "/bangalore-life" },
    { label: "Contact", href: "/contact" },
  ];


  // 🔥 HOVER HANDLERS
  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <>
      <TopBar />
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-[70px]">
            {/* LOGO */}
            <img src="/img/logo.webp" className="h-12" />

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={!item.hasMegaMenu ? "relative" : ""}
                  onMouseEnter={() =>
                    (item.hasDropdown || item.hasMegaMenu) &&
                    handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {/* MAIN LINK */}
                  <Link
                    href={item.href || "#"}
                    className="text-[#1e3a5f] font-medium flex items-center gap-1"
                  >
                    {item.label}
                    {(item.hasDropdown || item.hasMegaMenu) && (
                      <ChevronDown size={14} />
                    )}
                  </Link>

                  {/* 🔥 MEGA MENU */}
                  {item.hasMegaMenu && activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className={`absolute left-0 top-full w-full z-50 ${item.customMega
                          ? "bg-[#ffff] text-white"
                          : "bg-white border-t shadow-2xl"
                        }`}
                    >
                      {/* 🔥 CUSTOM PROGRAMMES MENU */}
                      {item.customMega ? (
                        <div className="max-w-[1400px] mx-auto px-6 py-10 pb-0 bg-white">
                          <div className={`grid grid-cols-5 gap-10`}>
                            {/* 🔹 LEFT SIDEBAR */}
                            <div className="space-y-4 text-sm max-h-[420px] overflow-y-auto">
                              {Object.keys(programmesData).map((school, i) => (
                                <p
                                  key={i}
                                  onMouseEnter={() => setActiveSchool(school)}
                                  className={`cursor-pointer transition ${activeSchool === school
                                      ? "text-[#1e3a5f] font-semibold"
                                      : "text-gray-600 hover:text-[#0A8F96]"
                                    }`}
                                >
                                  Presidency School of {school}
                                </p>
                              ))}
                            </div>

                            {/* 🔹 UG */}
                             {programmesData[activeSchool]?.ug.length > 0 && (
                            <div className="border-l pl-6 max-h-[420px] overflow-y-auto">
                              <h3 className="text-lg text-[#1e3a5f] mb-4">
                                UG Programmes
                              </h3>

                              <div className="space-y-3">
                                {programmesData[activeSchool]?.ug?.map(
                                  (prog, i) => (
                                    <Link
                                      key={i}
                                      href={prog.href}
                                      className="flex items-center gap-3 group"
                                    >
                                      <div
                                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg 
                bg-[#0A8F96]/10 text-[#1e3a5f] 
                group-hover:bg-[#1e3a5f] group-hover:text-white transition"
                                      >
                                        <GraduationCap size={16} />
                                      </div>

                                      <span className="text-[#1e3a5f]  group-hover:text-[#1e3a5f]">
                                        {prog.label}
                                      </span>
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                             )
                            }

                            {/* 🔹 PG */}
                            {programmesData[activeSchool]?.pg.length > 0 && (
                            <div className="border-l pl-6 max-h-[420px] overflow-y-auto">
                              <h3 className="text-lg text-[#1e3a5f] mb-4">
                                PG Programmes
                              </h3>

                              <div className="space-y-3">
                                {programmesData[activeSchool]?.pg?.map(
                                  (prog, i) => (
                                    <Link
                                      key={i}
                                      href={prog.href}
                                      className="flex items-center gap-3 group"
                                    >
                                      <div
                                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg 
                bg-[#0A8F96]/10 text-[#1e3a5f] 
                group-hover:bg-[#1e3a5f] group-hover:text-white transition"
                                      >
                                        <GraduationCap size={16} />
                                      </div>

                                      <span className="text-gray-700 group-hover:text-[#1e3a5f]">
                                        {prog.label}
                                      </span>
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                            )
                          }

                             {programmesData[activeSchool]?.phd.length > 0 && (
                            <div className="border-l pl-6 max-h-[420px] overflow-y-auto">
                              <h3 className="text-lg text-[#1e3a5f] mb-4">
                                PhD Programmes
                              </h3>

                              <div className="space-y-3">
                                {programmesData[activeSchool]?.phd?.map(
                                  (prog, i) => (
                                    <Link
                                      key={i}
                                      href={prog.href}
                                      className="flex items-center gap-3 group"
                                    >
                                      <div
                                        className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg 
                bg-[#0A8F96]/10 text-[#1e3a5f] 
                group-hover:bg-[#1e3a5f] group-hover:text-white transition"
                                      >
                                        <GraduationCap size={16} />
                                      </div>

                                      <span className="text-gray-700 group-hover:text-[#1e3a5f]">
                                        {prog.label}
                                      </span>
                                    </Link>
                                  ),
                                )}
                              </div>
                            </div>
                             )
                            }
                            {programmesData[activeSchool]?.diploma.length > 0 && (
                              <div className="border-l pl-6 max-h-[420px] overflow-y-auto">
                                <h3 className="text-lg text-[#1e3a5f] mb-4">
                                  Diploma Programmes
                                </h3>

                                <div className="space-y-3">
                                  {programmesData[activeSchool]?.diploma?.map((prog, i) => (
                                    <Link
                                      key={i}
                                      href={prog.href}
                                      className="flex items-center gap-3 group"
                                    >
                                      <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg 
            bg-[#0A8F96]/10 text-[#1e3a5f] 
            group-hover:bg-[#1e3a5f] group-hover:text-white transition"
                                      >
                                        <GraduationCap size={16} />
                                      </div>

                                      <span className="text-gray-700 group-hover:text-[#1e3a5f]">
                                        {prog.label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : (
                        /* 🔥 DEFAULT MEGA MENU */
                        <div className="max-w-[1400px] mx-auto px-8 py-10">
                          <div className="grid grid-cols-5 gap-10">
                            {item.megaMenu?.map((section: any, idx: number) => (
                              <div key={idx}>
                                <h4 className="text-lg text-[#1e3a5f] mb-4">
                                  {section.title}
                                </h4>

                                <div className="space-y-3">
                                  {section.items.map((sub: any, i: number) => {
                                    const Icon = iconMap[sub.icon];

                                    return (
                                      <Link
                                        key={i}
                                        href={sub.href}
                                        className="flex items-center gap-3 group"
                                      >
                                        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0A8F96]/10 text-[#1e3a5f] group-hover:bg-[#1e3a5f] group-hover:text-white transition">
                                          {Icon && <Icon size={16} />}
                                        </div>

                                        <span className="text-base text-gray-700 group-hover:text-[#1e3a5f]">
                                          {sub.label}
                                        </span>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 🔥 DROPDOWN (LIKE YOUR IMAGE) */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-5 
                    w-[260px] bg-white rounded-2xl 
                    shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-4 z-50"
                    >
                      {/* ARROW */}
                      <div
                        className="absolute -top-2 left-1/2 -translate-x-1/2 
                      w-4 h-4 bg-white rotate-45"
                      ></div>

                      {item.dropdown?.map((subItem: any, idx: number) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="block px-6 py-3 text-[15px] text-gray-700 
                        hover:bg-[#0A8F96]/10 hover:text-[#0A8F96] transition rounded-md mx-2"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* CTA */}
              <button className="bg-[#0A8F96] text-white px-6 py-2 rounded-lg flex items-center gap-2">
                APPLY NOW <ArrowRight size={16} />
              </button>
            </div>

            {/* MOBILE */}

            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() =>
                      setMobileOpenItem(
                        mobileOpenItem === item.label ? null : item.label,
                      )
                    }
                    className="w-full flex justify-between text-[#1e3a5f] font-medium py-2"
                  >
                    {item.label}
                    {(item.hasDropdown || item.hasMegaMenu) && (
                      <ChevronDown
                        size={16}
                        className={
                          mobileOpenItem === item.label ? "rotate-180" : ""
                        }
                      />
                    )}
                  </button>

                  {/* MOBILE DROPDOWN */}
                  {item.hasDropdown && mobileOpenItem === item.label && (
                    <div className="pl-4 space-y-2">
                      {item.dropdown.map((sub: any, idx: number) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          className="block text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* MOBILE MEGA */}
                  {item.hasMegaMenu && mobileOpenItem === item.label && (
                    <div className="pl-4 space-y-3">
                      {item.megaMenu?.map((section: any, idx: number) => (
                        <div key={idx}>
                          <h4 className="text-xs text-[#0A8F96]">
                            {section.title}
                          </h4>
                          {section.items.map((sub: any, i: number) => (
                            <Link
                              key={i}
                              href={sub.href}
                              className="block text-sm"
                            >
                              › {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <a
                href="/apply"
                className="block bg-[#0A8F96] text-white py-3 text-center rounded-lg"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
