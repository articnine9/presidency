"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

function ProgrammeMegaColumn({
  title,
  accent,
  programmes,
}: {
  title: string;
  accent: string;
  programmes: ProgrammeItem[];
}) {
  return (
    <div className="flex max-h-[min(420px,55vh)] min-h-0 flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className={`${accent} shrink-0 rounded-t-xl px-3 py-2.5`}>
        <h4 className="text-[11px] font-bold uppercase tracking-wide text-white">
          {title}
        </h4>
      </div>
      <div className="min-h-0 flex-1 space-y-0.5 overflow-y-auto p-2">
        {programmes.map((prog, i) => (
          <Link
            key={i}
            href={prog.href}
            className="flex items-start gap-2 rounded-lg px-2 py-2 text-left text-xs leading-snug text-gray-700 transition hover:bg-[#0A8F96]/10 hover:text-[#1e3a5f] sm:text-[13px]"
          >
            <GraduationCap
              size={14}
              className="mt-0.5 shrink-0 text-[#0A8F96]"
            />
            <span className="line-clamp-4">{prog.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenItem(null);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileOpenItem(null);
  }, [pathname]);
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
        {
          label:
            "M.Tech Computer Science & Engineering (Artificial Intelligence)",
          href: "/schools/pg/mtech-ai",
        },
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
      ],
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
        {
          label: "B.Tech Civil Engineering",
          href: "/schools/engineering/btech-civil-engineering",
        },
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
        {
          label: "PhD Civil Engineering",
          href: "/schools/engineering/phd-civil-engineering",
        },
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
      ],
    },

    "Information Science": {
      ug: [
        {
          label: "Bachelor of Computer Applications (BCA)",
          href: "/schools/information-science/bca",
        },
        {
          label: "B.C.A. Artificial Intelligence and Machine Learning",
          href: "/schools/information-science/bca-AL-ML",
        },
        {
          label: "B.C.A. Data Science",
          href: "/schools/information-science/bca-data-science",
        },
      ],
      pg: [
        {
          label: "Master of Computer Applications (MCA)",
          href: "/schools/information-science/mca",
        },
      ],
      phd: [
        {
          label: "Ph.D. Information Science",
          href: "/schools/information-science/phd-information-science",
        },
      ],
      diploma: [],
    },

    Management: {
      ug: [
        {
          label: "Bachelor of Business Administration (BBA)",
          href: "/schools/management/bba",
        },
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
        {
          label: "MBA (All Business Domains and New Age Specialisations)",
          href: "/schools/management/mba",
        },
        {
          label: "MBA (Marketing and Finance)",
          href: "/schools/management/mba-marketing-finance",
        },
        {
          label: "MBA (Banking and Finance Management)",
          href: "/schools/management/mba-banking-finance-management",
        },
        {
          label: "MBA (Digital Marketing)",
          href: "/schools/management/mba-digital-marketing",
        },
        {
          label: "MBA (Business Analytics)",
          href: "/schools/management/mba-business-analytics",
        },
      ],
      phd: [
        {
          label: "Ph.D. General Management",
          href: "/schools/management/phd-general-management",
        },
        {
          label: "Ph.D. Marketing Management",
          href: "/schools/management/phd-marketing-management",
        },
        {
          label: "Ph.D. Financial Management",
          href: "/schools/management/phd-financial-management",
        },
        {
          label: "Ph.D. Human Resource Management",
          href: "/schools/management/phd-human-resource-management",
        },
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
      ],
    },

    Commerce: {
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
        {
          label: "B.Com. (Corporate Accounting Integrated with CMA-US)",
          href: "/schools/commerce/bcom-corporate-accounting-integrated-cma-us",
        },
        {
          label: "B.Com. CA Foundation",
          href: "/schools/commerce/bcom-ca-foundation",
        },
      ],
      pg: [],
      phd: [
        { label: "Ph.D. Commerce", href: "/schools/commerce/phd-commerce" },
        { label: "Ph.D. Economics", href: "/schools/commerce/phd-economics" },
      ],
      diploma: [
        {
          label: "PhD in Computer Science & Engineering",
          href: "/schools/computer-science/phd-cse",
        },
      ],
    },

    Law: {
      ug: [
        { label: "B.A. LL.B. (Hons.)", href: "/schools/law/ba-llb" },
        { label: "B.B.A. LL.B. (Hons.)", href: "/schools/law/bba-llb" },
      ],
      pg: [{ label: "LL.M. (Master of Laws)", href: "/schools/law/llm" }],
      phd: [{ label: "Ph.D. Law", href: "/schools/law/phd-law" }],
      diploma: [],
    },

    Design: {
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
        {
          label: "B.Des Space Design",
          href: "/schools/design/bdes-space-design",
        },
        {
          label: "B.Sc. Multimedia and Animation",
          href: "/schools/design/bsc-multimedia-and-animation",
        },
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
      diploma: [],
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
        {
          label: "BA JMC (Immersive Media, AR/VR & Interactive Storytelling)",
          href: "/schools/media-studies/ba-jmc-immersivemedia-ar-vr-interactive-storytelling",
        },
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
      phd: [
        {
          label: "Ph.D. Media Studies",
          href: "/schools/media-studies/phd-media-studies",
        },
      ],
      diploma: [
        {
          label: "Post Graduate Diploma in Film Making",
          href: "/schools/media-studies/post-graduate-diploma-film-making",
        },
      ],
    },

    "Liberal Arts and Sciences": {
      ug: [
        {
          label: "B.Sc. Psychology",
          href: "/schools/liberal-arts-science/bsc-psychology",
        },
        {
          label: "B.A. (Psychology, Economics)",
          href: "/schools/liberal-arts-science/ba-psychology-economics",
        },
        {
          label: "B.A. (Communication and Media, Psychology)",
          href: "/schools/liberal-arts-science/ba-communication-media",
        },
        {
          label: "B.A. (Psychology, English)",
          href: "/schools/liberal-arts-science/ba-psychology-english",
        },
        {
          label: "B.A. (History & Political Science)",
          href: "/schools/liberal-arts-science/ba-history-political-science",
        },
        {
          label: "B.A. (Political Science & Economics)",
          href: "/schools/liberal-arts-science/ba-political-science-economics",
        },
        {
          label: "B.A. (English & History)",
          href: "/schools/liberal-arts-science/ba-english-history",
        },
        {
          label: "B.A. (English & Political Science)",
          href: "/schools/liberal-arts-science/ba-english-political-science",
        },
        {
          label: "B.A. (Performing Arts – Classical Music, Psychology)",
          href: "/schools/liberal-arts-science/ba-arts-classicalmusic-psychology",
        },
        {
          label: "B.A. (Performing Arts – Classical Dance, Psychology)",
          href: "/schools/liberal-arts-science/ba-arts-classicaldance-psychology",
        },
        {
          label: "B.A. (Performing Arts – Classical Dance, English)",
          href: "/schools/liberal-arts-science/ba-arts-classicaldance-english",
        },
        {
          label:
            "B.A. (Performing Arts – Western Music – Instrumental, English)",
          href: "/schools/liberal-arts-science/ba-performing-arts-western-music-instrumental-english",
        },
        {
          label:
            "B.A. (Performing Arts – Western Music – Instrumental, Psychology)",
          href: "/schools/liberal-arts-science/ba-performing-arts–western-music-instrumental-psychology",
        },
        {
          label: "B.A. (Theatre Studies, Psychology)",
          href: "/schools/liberal-arts-science/ba-theatre-studies-psychology",
        },
        {
          label: "B.A. (Theatre Studies, English)",
          href: "/schools/liberal-arts-science/ba-theatre-studies-english",
        },
      ],
      pg: [
        {
          label:
            "M.Sc. Psychology (Child / Clinical / Counselling / Industrial Psychology)",
          href: "/schools/liberal-arts-science/msc-psychology-child-clinical-counselling-industrial-psychology",
        },
        {
          label:
            "M.A. English (Digital Humanities / Cultural Studies / Creative Writing / Educational Leadership)",
          href: "/schools/liberal-arts-science/ma-english-digital-humanities-cultural-Studies-creative-writing-educational-leadership",
        },
      ],
      phd: [
        {
          label: "Ph.D. English",
          href: "/schools/liberal-arts-science/phd-english",
        },
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
      ],
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
      diploma: [],
    },
  };
  // 🔥 NAV ITEMS
  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "About",
      hasDropdown: true,
      dropdown: [
        { label: "About Us", href: "/about" },
        {
          label: "Memberships & affiliations update",
          href: "/memberships-affiliations",
        },
        {
          label: "Media rankings",
          href: "/media-rankings",
        },
      ],
    },

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
      <nav className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/95 pt-[env(safe-area-inset-top)] shadow-md backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <div className="flex h-[64px] items-center justify-between sm:h-[70px]">
            {/* LOGO */}
            <Link
              href="/"
              className="shrink-0"
              onClick={closeMobileMenu}
            >
              <img
                src="/img/logo.webp"
                alt="Presidency University"
                className="h-10 w-auto sm:h-12"
              />
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className={item.hasMegaMenu || item.hasDropdown ? "relative" : ""}
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
                      className="absolute left-1/2 top-full z-50 mt-2 w-[min(calc(100vw-2rem),1400px)] max-w-[calc(100vw-2rem)] -translate-x-1/2"
                    >
                      {/* 🔥 CUSTOM PROGRAMMES MENU */}
                      {item.customMega ? (
                        <div className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-[0_24px_64px_rgba(15,30,61,0.14)]">
                          {/* Quick links */}
                          {Array.isArray((item as { quickLinks?: { label: string; href: string }[] }).quickLinks) &&
                            (item as { quickLinks: { label: string; href: string }[] }).quickLinks.length > 0 && (
                              <div className="flex flex-wrap gap-2 border-b border-white/10 bg-gradient-to-r from-[#0f1e3d] via-[#1a3050] to-[#0d4f55] px-5 py-4">
                                {(item as { quickLinks: { label: string; href: string }[] }).quickLinks.map((ql, qi) => (
                                  <Link
                                    key={qi}
                                    href={ql.href}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
                                  >
                                    {ql.label}
                                    <ArrowRight size={12} className="opacity-80" />
                                  </Link>
                                ))}
                              </div>
                            )}

                          <div className="max-w-[1400px] mx-auto px-4 py-6 sm:px-6 sm:py-8">
                            <div className="mb-5 flex flex-col gap-1 border-b border-gray-100 pb-4 sm:flex-row sm:items-end sm:justify-between">
                              <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#0A8F96]">
                                  Programmes
                                </p>
                                <h3 className="text-lg font-semibold text-[#1e3a5f] sm:text-xl">
                                  Browse by school & level
                                </h3>
                              </div>
                              <p className="max-w-md text-xs text-gray-500 sm:text-sm">
                                Select a school, then explore undergraduate, postgraduate, doctoral, and diploma offerings.
                              </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(200px,260px)_1fr] lg:gap-8 xl:grid-cols-[minmax(220px,280px)_1fr]">
                              {/* Schools sidebar */}
                              <aside className="rounded-xl border border-gray-100 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] p-3 shadow-sm">
                                <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                  Schools
                                </p>
                                <div className="max-h-[min(420px,55vh)] space-y-0.5 overflow-y-auto pr-1">
                                  {Object.keys(programmesData).map((school, si) => (
                                    <button
                                      key={si}
                                      type="button"
                                      onMouseEnter={() => setActiveSchool(school)}
                                      className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                                        activeSchool === school
                                          ? "bg-white font-semibold text-[#1e3a5f] shadow-sm ring-1 ring-[#0A8F96]/25"
                                          : "text-gray-600 hover:bg-white/80 hover:text-[#0A8F96]"
                                      }`}
                                    >
                                      <span className="line-clamp-2 leading-snug">
                                        Presidency School of {school}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              </aside>

                              {/* Level columns */}
                              <div className="grid min-h-0 grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
                                {programmesData[activeSchool]?.ug.length > 0 && (
                                  <ProgrammeMegaColumn
                                    title="Undergraduate"
                                    accent="bg-[#0A8F96]"
                                    programmes={programmesData[activeSchool]?.ug}
                                  />
                                )}
                                {programmesData[activeSchool]?.pg.length > 0 && (
                                  <ProgrammeMegaColumn
                                    title="Postgraduate"
                                    accent="bg-[#D4A843]"
                                    programmes={programmesData[activeSchool]?.pg}
                                  />
                                )}
                                {programmesData[activeSchool]?.phd.length > 0 && (
                                  <ProgrammeMegaColumn
                                    title="Doctoral"
                                    accent="bg-[#6b4f9a]"
                                    programmes={programmesData[activeSchool]?.phd}
                                  />
                                )}
                                {programmesData[activeSchool]?.diploma.length > 0 && (
                                  <ProgrammeMegaColumn
                                    title="Diploma"
                                    accent="bg-[#c45c2d]"
                                    programmes={programmesData[activeSchool]?.diploma}
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Schools mega — full-width panel, opaque, responsive columns */
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_24px_64px_rgba(15,30,61,0.14)]">
                          <div className="border-b border-gray-100 bg-gradient-to-r from-[#f8fafc] via-white to-[#f0fdfa] px-5 py-4 sm:px-6">
                            <p className="text-xs font-semibold uppercase tracking-wider text-[#0A8F96]">
                              Schools
                            </p>
                            <h3 className="text-lg font-semibold text-[#1e3a5f] sm:text-xl">
                              Explore our faculties
                            </h3>
                          </div>
                          <div className="px-4 py-6 sm:px-6 sm:py-8">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                              {item.megaMenu?.map((section: any, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex min-h-0 min-w-0 flex-col rounded-xl border border-gray-100 bg-[#fafbfc] p-4 shadow-sm"
                                >
                                  <h4 className="mb-3 border-b border-gray-200 pb-2 text-sm font-bold leading-tight text-[#1e3a5f]">
                                    {section.title}
                                  </h4>
                                  <div className="flex flex-col gap-2">
                                    {section.items.map((sub: any, i: number) => {
                                      const Icon = iconMap[sub.icon];
                                      return (
                                        <Link
                                          key={i}
                                          href={sub.href}
                                          className="group flex items-start gap-2.5 rounded-lg p-1.5 transition hover:bg-white hover:shadow-sm"
                                        >
                                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A8F96]/10 text-[#1e3a5f] transition group-hover:bg-[#1e3a5f] group-hover:text-white">
                                            {Icon && <Icon size={16} />}
                                          </div>
                                          <span className="min-w-0 text-sm leading-snug text-gray-700 group-hover:text-[#1e3a5f]">
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
                        </div>
                      )}
                    </div>
                  )}

                  {/* 🔥 DROPDOWN (LIKE YOUR IMAGE) */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-5 
    bg-white rounded-2xl 
    shadow-[0_10px_40px_rgba(0,0,0,0.1)] py-4 z-50
    ${item.label === "About" ? "w-[300px]" : "w-[260px]"}`}
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
              type="button"
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[#1e3a5f] lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="max-h-[min(70dvh,calc(100dvh-4rem))] space-y-4 overflow-y-auto overscroll-contain px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
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
                          onClick={closeMobileMenu}
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
                              onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
