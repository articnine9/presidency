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
          label: "B.Tech AI & Machine Learning",
          href: "/schools/computer-science/btech-ai-ml",
        },
        {
          label: "B.Tech Data Science",
          href: "/schools/computer-science/btech-data-science",
        },
        {
          label: "B.Tech Cyber Security",
          href: "/schools/computer-science/cyber-security",
        },
        {
          label: "B.Tech Blockchain",
          href: "/schools/computer-science/btech-blockchain",
        },
        {
          label: "B.Tech Internet of Things",
          href: "/schools/computer-science/btech-iot",
        },
        {
          label: "B.Tech DevOps",
          href: "/schools/computer-science/btech-devops",
        },
        {
          label: "B.Tech Big Data",
          href: "/schools/computer-science/btech-big-data",
        },
        {
          label: "B.Tech Robotics & AI",
          href: "/schools/computer-science/btech-robotics-ai",
        },
      ],
      pg: [
        { label: "M.Tech AI", href: "/schools/pg/mtech-ai" },
        {
          label: "M.Tech Data Science",
          href: "/schools/pg/mtech-data-science",
        },
      ],
      phd: [
        {
          label: "PhD in Computer Science & Engineering",
          href: "/schools/phd/cse",
        },
      ],
    },

    Engineering: {
      ug: [
        {
          label: "B.Tech Electronics & Communication Engineering",
          href: "/schools/ug/ece",
        },
        {
          label: "B.Tech Electrical & Electronics Engineering",
          href: "/schools/ug/eee",
        },
        { label: "B.Tech VLSI", href: "/schools/ug/vlsi" },
        { label: "B.Tech Civil Engineering", href: "/schools/ug/civil" },
        {
          label: "B.Tech Mechanical Engineering",
          href: "/schools/ug/mechanical",
        },
        {
          label: "B.Tech Petroleum Engineering",
          href: "/schools/ug/petroleum",
        },
      ],
      pg: [
        {
          label: "M.Tech Embedded Systems & VLSI",
          href: "/schools/pg/vlsi",
        },
        {
          label: "M.Tech Construction Technology",
          href: "/schools/pg/construction",
        },
      ],
      phd: [
        {
          label: "PhD Electronics & Communication",
          href: "/schools/phd/ece",
        },
        {
          label: "PhD Mechanical Engineering",
          href: "/schools/phd/mechanical",
        },
        { label: "PhD Civil Engineering", href: "/schools/phd/civil" },
        {
          label: "PhD Electrical Engineering",
          href: "/schools/phd/electrical",
        },
        {
          label: "PhD Petroleum Engineering",
          href: "/schools/phd/petroleum",
        },
      ],
    },

    "Information Science": {
      ug: [
        { label: "BCA", href: "/schools/ug/bca" },
        { label: "BCA Data Science", href: "/schools/ug/bca-data-science" },
        {
          label: "BCA AI & Machine Learning",
          href: "/schools/ug/bca-ai-ml",
        },
      ],
      pg: [{ label: "MCA", href: "/schools/pg/mca" }],
      phd: [
        {
          label: "PhD in Information Science",
          href: "/schools/phd/information-science",
        },
      ],
    },

    Management: {
      ug: [
        { label: "BBA", href: "/schools/ug/bba" },
        {
          label: "BBA Aviation Management",
          href: "/schools/ug/bba-aviation",
        },
        {
          label: "BBA Business Analytics",
          href: "/schools/ug/bba-analytics",
        },
        {
          label: "BBA Digital Marketing",
          href: "/schools/ug/bba-digital-marketing",
        },
        {
          label: "BBA Digital Business",
          href: "/schools/ug/bba-digital-business",
        },
        {
          label: "BBA Hospitality Management",
          href: "/schools/ug/bba-hospitality",
        },
      ],
      pg: [
        { label: "MBA Finance", href: "/schools/pg/mba-finance" },
        { label: "MBA Marketing", href: "/schools/pg/mba-marketing" },
        { label: "MBA Banking & Finance", href: "/schools/pg/mba-banking" },
        { label: "MBA Digital Marketing", href: "/schools/pg/mba-digital" },
        {
          label: "MBA Business Analytics",
          href: "/schools/pg/mba-analytics",
        },
      ],
      phd: [
        { label: "PhD in Management", href: "/schools/phd/management" },
        { label: "PhD in Marketing", href: "/schools/phd/marketing" },
        { label: "PhD in Finance", href: "/schools/phd/finance" },
        { label: "PhD in HR", href: "/schools/phd/hr" },
        {
          label: "PhD in Business Analytics",
          href: "/schools/phd/analytics",
        },
      ],
    },

    Commerce: {
      ug: [
        {
          label: "B.Com Banking & Finance",
          href: "/schools/ug/bcom-banking",
        },
        { label: "B.Com ACCA", href: "/schools/ug/bcom-acca" },
        {
          label: "B.Com Corporate Accounting",
          href: "/schools/ug/bcom-accounting",
        },
        {
          label: "B.Com Business Analytics",
          href: "/schools/ug/bcom-analytics",
        },
        { label: "B.Com CMA-US", href: "/schools/ug/bcom-cma" },
        { label: "B.Com CA Foundation", href: "/schools/ug/bcom-ca" },
      ],
      pg: [],
      phd: [{ label: "PhD in Commerce", href: "/schools/phd/commerce" }],
    },

    Law: {
      ug: [
        { label: "BA LLB (Hons.)", href: "/schools/ug/ba-llb" },
        { label: "BBA LLB (Hons.)", href: "/schools/ug/bba-llb" },
      ],
      pg: [{ label: "LL.M", href: "/schools/pg/llm" }],
      phd: [{ label: "PhD in Law", href: "/schools/phd/law" }],
    },

    Design: {
      ug: [
        {
          label: "B.Des Communication Design",
          href: "/schools/ug/design-communication",
        },
        {
          label: "B.Des Fashion Design",
          href: "/schools/ug/design-fashion",
        },
        {
          label: "B.Des Product Design",
          href: "/schools/ug/design-product",
        },
        { label: "B.Des Space Design", href: "/schools/ug/design-space" },
        { label: "B.Des Game Design", href: "/schools/ug/design-game" },
        {
          label: "B.Sc Multimedia & Animation",
          href: "/schools/ug/multimedia",
        },
      ],
      pg: [],
      phd: [{ label: "PhD in Design", href: "/schools/phd/design" }],
    },

    "Media Studies": {
      ug: [
        {
          label: "BA Journalism & Mass Communication",
          href: "/schools/ug/journalism",
        },
        {
          label: "BA Digital Marketing & Advertising",
          href: "/schools/ug/media-marketing",
        },
        {
          label: "BA Film & Television Production",
          href: "/schools/ug/film",
        },
        { label: "BA AR/VR & Immersive Media", href: "/schools/ug/ar-vr" },
        {
          label: "BA Digital Storytelling",
          href: "/schools/ug/storytelling",
        },
      ],
      pg: [
        {
          label: "MA Journalism & Mass Communication",
          href: "/schools/pg/journalism",
        },
      ],
      phd: [{ label: "PhD in Media Studies", href: "/schools/phd/media" }],
    },

    "Liberal Arts and Sciences": {
      ug: [
        { label: "BA Psychology", href: "/schools/ug/psychology" },
        { label: "BA English", href: "/schools/ug/english" },
        { label: "BA History", href: "/schools/ug/history" },
        {
          label: "BA Political Science",
          href: "/schools/ug/political-science",
        },
        { label: "BA Sociology", href: "/schools/ug/sociology" },
        { label: "BA Economics", href: "/schools/ug/economics" },
        { label: "BA Performing Arts", href: "/schools/ug/performing-arts" },
        { label: "B.Sc Psychology", href: "/schools/ug/psychology-bsc" },
      ],
      pg: [
        {
          label: "M.Sc Psychology (Clinical)",
          href: "/schools/pg/psychology-clinical",
        },
        {
          label: "M.Sc Psychology (Counselling)",
          href: "/schools/pg/psychology-counselling",
        },
        { label: "MA English", href: "/schools/pg/english" },
      ],
      phd: [
        { label: "PhD in Psychology", href: "/schools/phd/psychology" },
        { label: "PhD in English", href: "/schools/phd/english" },
        { label: "PhD in Economics", href: "/schools/phd/economics" },
      ],
    },

    "Allied Health Sciences": {
      ug: [
        {
          label: "Bachelor of Physiotherapy (BPT)",
          href: "/schools/ug/bpt",
        },
      ],
      pg: [],
      phd: [],
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
                      className={`absolute left-0 top-full w-full z-50 ${
                        item.customMega
                          ? "bg-[#ffff] text-white"
                          : "bg-white border-t shadow-2xl"
                      }`}
                    >
                      {/* 🔥 CUSTOM PROGRAMMES MENU */}
                      {item.customMega ? (
                        <div className="max-w-[1400px] mx-auto px-6 py-10 pb-0 bg-white">
                          <div className="grid grid-cols-4 gap-10">
                            {/* 🔹 LEFT SIDEBAR */}
                            <div className="space-y-4 text-sm max-h-[420px] overflow-y-auto">
                              {Object.keys(programmesData).map((school, i) => (
                                <p
                                  key={i}
                                  onMouseEnter={() => setActiveSchool(school)}
                                  className={`cursor-pointer transition ${
                                    activeSchool === school
                                      ? "text-[#1e3a5f] font-semibold"
                                      : "text-gray-600 hover:text-[#0A8F96]"
                                  }`}
                                >
                                  Presidency School of {school}
                                </p>
                              ))}
                            </div>

                            {/* 🔹 UG */}
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
                                        className="w-9 h-9 flex items-center justify-center rounded-lg 
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

                            {/* 🔹 PG */}
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
                                        className="w-9 h-9 flex items-center justify-center rounded-lg 
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

                            {/* 🔹 PHD */}
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
                                        className="w-9 h-9 flex items-center justify-center rounded-lg 
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
