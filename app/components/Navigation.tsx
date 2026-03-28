"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Search,
  MapPin,
  Phone,
  Globe,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350);
  };

  // ✅ UPDATED NAV ITEMS WITH LINKS
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Schools", href: "/schools" },
    { label: "Programmes", href: "/programmes" },
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
    { label: "Life in Bangalore", href: "/bangalore-life" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-[#0F1E3D] text-white text-xs relative z-50">
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-[55px]">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1 opacity-80">
              <MapPin size={12} /> Bangalore, India
            </span>
            <span className="flex items-center gap-1 opacity-80">
              <Phone size={12} /> Contact
            </span>
            <span className="flex items-center gap-1 opacity-80">
              <Globe size={12} /> International Office
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:block opacity-80">
              Student Community
            </span>
            <span className="hidden lg:block opacity-80">Alumni</span>
            <span className="hidden lg:block opacity-80">Faculty & Staff</span>
            <Search size={16} className="cursor-pointer opacity-80" />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-40 transition-all ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-[70px]">
            {/* LOGO */}
            <img src="/img/logo.webp" className="h-12" />

            {/* MENU */}
            <div className="hidden lg:flex items-center gap-5">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  {/* ✅ MAIN LINK */}
                  <Link
                    href={item.href || "#"}
                    className="text-[#1e3a5f] text-[15px] font-medium flex items-center gap-1 relative"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={14} />}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A8F96] transition-all duration-300 group-hover:w-full"></span>
                  </Link>

                  {/* ✅ DROPDOWN */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-xl py-3 z-50">
                      {item.dropdown?.map((subItem: any, idx: number) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="block px-5 py-2 text-sm text-gray-700 hover:bg-[#0A8F96]/10 hover:text-[#0A8F96] transition"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* CTA */}
              <button
                onClick={() => setIsApplyOpen(true)}
                className="ml-3 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-2.5 rounded-full flex items-center gap-3 text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                APPLY NOW
                <ArrowRight size={18} />
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
      </nav>
      {/* MOBILE MENU PANEL */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[70px] left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col p-5 gap-2">
            {navItems.map((item, i) => (
              <div key={i}>
                <Link
                  href={item.href || "#"}
                  className="block text-[#1e3a5f] text-[16px] font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>

                {/* OPTIONAL: Dropdown for mobile */}
                {item.hasDropdown && (
                  <div className="pl-4">
                    {item.dropdown?.map((subItem: any, idx: number) => (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className="block text-gray-600 text-sm py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <button
              onClick={() => {
                setIsApplyOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 bg-[#0A8F96] text-white py-3 rounded-full text-sm font-semibold"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
}
