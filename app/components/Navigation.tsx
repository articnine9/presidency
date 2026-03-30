"use client";

import { useState, useRef } from "react";
import Link from "next/link";
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

export function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // 🔥 ICON MAP
  const iconMap: any = {
    cpu: Cpu,
    settings: Settings,
    building: Building,
    briefcase: Briefcase,
    banknote: Banknote,
    graduationCap: GraduationCap,
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
      image: "/img/programmes.jpg",
      megaMenu: [
        {
          title: "Undergraduate",
          items: [
            {
              label: "Engineering (B.Tech)",
              icon: "graduationCap",
              href: "/programmes/ug/engineering",
            },
            {
              label: "Computer Applications (BCA)",
              icon: "graduationCap",
              href: "/programmes/ug/bca",
            },
            {
              label: "Business & Management (BBA)",
              icon: "graduationCap",
              href: "/programmes/ug/bba",
            },
            {
              label: "Commerce (B.Com)",
              icon: "graduationCap",
              href: "/programmes/ug/bcom",
            },
            {
              label: "Law (BA LLB / BBA LLB)",
              icon: "graduationCap",
              href: "/programmes/ug/law",
            },
            {
              label: "Design (B.Des)",
              icon: "graduationCap",
              href: "/programmes/ug/design",
            },
          ],
        },
        {
          title: "Postgraduate",
          items: [
            {
              label: "M.Tech",
              icon: "graduationCap",
              href: "/programmes/pg/mtech",
            },
            { label: "MBA", icon: "graduationCap", href: "/programmes/pg/mba" },
            { label: "MCA", icon: "graduationCap", href: "/programmes/pg/mca" },
            {
              label: "LL.M",
              icon: "graduationCap",
              href: "/programmes/pg/llm",
            },
            {
              label: "MA / M.Sc",
              icon: "graduationCap",
              href: "/programmes/pg/masters",
            },
          ],
        },
        {
          title: "Research",
          items: [
            {
              label: "PhD Programmes",
              icon: "graduationCap",
              href: "/programmes/phd",
            },
            {
              label: "Research Areas",
              icon: "graduationCap",
              href: "/programmes/research",
            },
          ],
        },
        {
          title: "Global Opportunities",
          items: [
            {
              label: "International Pathways",
              icon: "graduationCap",
              href: "/programmes/international",
            },
            {
              label: "Exchange Programmes",
              icon: "graduationCap",
              href: "/programmes/exchange",
            },
            {
              label: "Internships",
              icon: "graduationCap",
              href: "/programmes/internships",
            },
          ],
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

    { label: "Campus Life", href: "#" },
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
                    className="absolute left-0 top-full mt-0 w-full 
    bg-white shadow-2xl border-t z-50"
                  >
                    <div className="max-w-[1400px] mx-auto px-8 py-10">
                      <div className="grid grid-cols-5 gap-10">
                        {/* 🔥 COLUMNS */}
                        {item.megaMenu.map((section: any, idx: number) => (
                          <div key={idx}>
                            <h4 className="text-lg text-[#0A8F96] mb-4">
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
                                    <div
                                      className="w-9 h-9 flex items-center justify-center rounded-lg 
                      bg-[#0A8F96]/10 text-[#0A8F96] 
                      group-hover:bg-[#0A8F96] group-hover:text-white transition"
                                    >
                                      {Icon && <Icon size={16} />}
                                    </div>

                                    <span className="text-base text-gray-700 group-hover:text-[#0A8F96]">
                                      {sub.label}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                        {/* 🔥 IMAGE SECTION */}
                        {item.image && (
                          <div className="">
                            <div className="relative h-full rounded-xl overflow-hidden group">
                              <img
                                src={item.image}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                              />

                              {/* OVERLAY */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                              {/* TEXT */}
                              <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-sm opacity-80">Explore</p>
                                <h3 className="text-lg font-semibold">
                                  Programmes
                                </h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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
                      <Link key={idx} href={sub.href} className="block text-sm">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* MOBILE MEGA */}
                {item.hasMegaMenu && mobileOpenItem === item.label && (
                  <div className="pl-4 space-y-3">
                    {item.megaMenu.map((section: any, idx: number) => (
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
  );
}
