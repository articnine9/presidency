"use client";

import { useState, useEffect, useRef } from "react";
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

  // 🔥 Smooth Hover Handlers
  const handleMouseEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 350); // smooth delay
  };

  const navItems = [
    { label: "About" },
    { label: "Academics", hasDropdown: true },
    { label: "Admissions", hasDropdown: true },
    { label: "Programmes" },
    { label: "Living in Bangalore" },
    { label: "Scholarships" },
    { label: "FAQ" },
    { label: "Contact" },
  ];

  return (
    <>
      {/* 🔵 TOP BAR */}
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
            <span className="hidden md:block opacity-80">Current Students</span>
            <span className="hidden lg:block opacity-80">Alumni</span>
            <span className="hidden lg:block opacity-80">Faculty & Staff</span>
            <Search size={16} className="cursor-pointer opacity-80" />
          </div>
        </div>
      </div>

      {/* ⚪ NAVBAR */}
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
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <div
                  key={i}
                  className="relative group"
                  onMouseEnter={() =>
                    item.hasDropdown && handleMouseEnter(item.label)
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="text-[#1e3a5f] text-[15px] font-medium cursor-pointer flex items-center gap-1 relative">
                    {item.label}

                    {item.hasDropdown && <ChevronDown size={14} />}

                    {/* underline */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A8F96] transition-all duration-300 group-hover:w-full"></span>
                  </span>
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

        {/* 🔥 MEGA MENU */}
        <div
          onMouseEnter={() =>
            activeDropdown && handleMouseEnter(activeDropdown)
          }
          onMouseLeave={handleMouseLeave}
          className={`absolute left-0 top-full w-full bg-white shadow-2xl border-t z-30
          transition-all duration-300 ease-out
          ${
            activeDropdown
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-4 gap-10">
            <div>
              <h4 className="font-semibold mb-4 text-[#1e3a5f]">Programmes</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Undergraduate</li>
                <li>Postgraduate</li>
                <li>Doctoral</li>
                <li>Online</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#1e3a5f]">Schools</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Engineering</li>
                <li>Management</li>
                <li>Law</li>
                <li>Design</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#1e3a5f]">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Faculty</li>
                <li>Research</li>
                <li>Labs</li>
                <li>Library</li>
              </ul>
            </div>

            <div className="bg-[#f8fafc] p-5 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
                className="rounded-lg mb-4"
              />

              <h5 className="font-semibold text-[#1e3a5f] mb-2">
                Explore Academics
              </h5>

              <p className="text-sm text-gray-600 mb-3">
                Discover world-class programmes designed for global careers.
              </p>

              <button className="text-[#0A8F96] font-medium text-sm">
                View All →
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isApplyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsApplyOpen(false)}
          ></div>

          {/* MODAL */}
          <div className="relative bg-white w-full max-w-xl mx-auto rounded-2xl shadow-2xl p-8 animate-fadeIn">
            {/* CLOSE */}
            <button
              onClick={() => setIsApplyOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold text-[#1e3a5f] mb-6">
              Apply Now
            </h2>

            {/* COURSE SEARCH */}
            <div className="mb-5">
              <label className="text-sm text-gray-600 mb-1 block">
                Select Course
              </label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search course..."
                  className="w-full border border-gray-300 rounded-md py-3 px-4 pr-10 focus:border-[#0A8F96] outline-none"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:border-[#0A8F96] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:border-[#0A8F96] outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:border-[#0A8F96] outline-none"
              />
            </div>

            {/* CTA */}
            <button className="mt-6 w-full bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white py-3 rounded-full font-semibold hover:scale-[1.02] transition">
              Submit Application
            </button>
          </div>
        </div>
      )}
    </>
  );
}
