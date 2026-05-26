"use client";

import Link from "next/link";
import { Phone, Mail, Video, Radio } from "lucide-react";

const linkClass =
  "hover:text-[#0A8F96] transition-colors duration-200 cursor-pointer";

export function FooterSection() {
  return (
    <footer className="bg-gray-100 text-[#1e2b38] pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 pb-20">

        {/* ── COLUMN 1: University ── */}
        <div>
          <h3 className="font-semibold mb-6 text-[#0F1E3D] text-base">University</h3>
          <ul className="space-y-4 text-gray-600 text-[15px]">
            <li>
              <Link href="/about" className={linkClass}>About Us</Link>
            </li>
            <li>
              <Link href="/campus-life" className={linkClass}>Campus Life</Link>
            </li>
            <li>
              <Link href="/bangalore-life" className={linkClass}>Life in Bangalore</Link>
            </li>
            <li>
              <Link href="/memberships-affiliations" className={linkClass}>
                Memberships & Affiliations
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* ── COLUMN 2: Schools I ── */}
        <div>
          <h3 className="font-semibold mb-6 text-[#0F1E3D] text-base">Schools</h3>
          <ul className="space-y-4 text-gray-600 text-[15px]">
            <li>
              <Link href="/schools/computer-science" className={linkClass}>
                Computer Science & Engg
              </Link>
            </li>
            <li>
              <Link href="/schools/engineering" className={linkClass}>
                Engineering
              </Link>
            </li>
            <li>
              <Link href="/schools/information-science" className={linkClass}>
                Information Science
              </Link>
            </li>
            <li>
              <Link href="/schools/management" className={linkClass}>
                Management
              </Link>
            </li>
            <li>
              <Link href="/schools/commerce" className={linkClass}>
                Commerce
              </Link>
            </li>
          </ul>
        </div>

        {/* ── COLUMN 3: Schools II ── */}
        <div>
          {/* Blank heading keeps vertical alignment with col 2 */}
          <h3 className="font-semibold mb-6 text-[#0F1E3D] text-base invisible">
            Schools
          </h3>
          <ul className="space-y-4 text-gray-600 text-[15px]">
            <li>
              <Link href="/schools/design" className={linkClass}>
                Design
              </Link>
            </li>
            <li>
              <Link href="/schools/law" className={linkClass}>
                Law
              </Link>
            </li>
            <li>
              <Link href="/schools/media" className={linkClass}>
                Media Studies
              </Link>
            </li>
            <li>
              <Link href="/schools/liberal-arts" className={linkClass}>
                Liberal Arts & Sciences
              </Link>
            </li>
            <li>
              <Link href="/schools/health" className={linkClass}>
                Health Sciences
              </Link>
            </li>
          </ul>
        </div>

        {/* ── COLUMN 4: Admissions ── */}
        <div>
          <h3 className="font-semibold mb-6 text-[#0F1E3D] text-base">Admissions</h3>
          <ul className="space-y-4 text-gray-600 text-[15px]">
            <li>
              <Link href="/admissions/phd" className={linkClass}>
                Ph.D. Admissions
              </Link>
            </li>
            <li>
              <Link href="/international/overview" className={linkClass}>
                International Overview
              </Link>
            </li>
            <li>
              <Link href="/international/ug" className={linkClass}>
                UG Programmes
              </Link>
            </li>
            <li>
              <Link href="/international/pg" className={linkClass}>
                PG Programmes
              </Link>
            </li>
            <li>
              <Link href="/international/phd" className={linkClass}>
                PhD Research
              </Link>
            </li>
            <li>
              <Link href="/international/apply" className={linkClass}>
                How to Apply
              </Link>
            </li>
            <li>
              <Link href="/international/faq" className={linkClass}>
                International FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* ── COLUMN 5: Quick Links ── */}
        <div>
          <h3 className="font-semibold mb-6 text-[#0F1E3D] text-base">Quick Links</h3>
          <ul className="space-y-4 text-gray-600 text-[15px]">
            <li>
              <Link href="/" className={linkClass}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={linkClass}>About Us</Link>
            </li>
            <li>
              <Link href="/campus-life" className={linkClass}>Campus Life</Link>
            </li>
            <li>
              <Link href="/contact" className={linkClass}>Contact Us</Link>
            </li>
            <li>
              <Link href="/admissions/phd" className={linkClass}>
                Ph.D. Admissions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ── CONTACT BAR ── */}
      <div className="border-t border-gray-300 py-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* LOGO */}
          <Link href="/" className="text-3xl font-bold text-[#1e3a5f] hover:text-[#0A8F96] transition-colors duration-200">
            Presidency University
          </Link>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-3 text-gray-600 text-[15px]">
            <div className="flex items-center gap-3">
              <Phone size={16} /> +91 80 1234 5678
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} /> +91 80 8765 4321
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} /> admissions@presidencyuniversity.edu
            </div>
          </div>

          {/* QUICK ICONS */}
          <div className="flex items-center gap-8 text-[#1e3a5f] text-[15px]">
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#0A8F96] transition-colors duration-200">
              <Video size={20} />
              Virtual Tour
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#0A8F96] transition-colors duration-200">
              <Video size={20} />
              Videos
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#0A8F96] transition-colors duration-200">
              <Radio size={20} />
              Campus Radio
            </div>
          </div>
        </div>
      </div>

      {/* ── COPYRIGHT ── */}
      <div className="bg-[#1e4c8f] py-4 pb-[max(1rem,env(safe-area-inset-bottom))] text-center text-sm text-white">
        © 2026 Presidency University. All Rights Reserved.
      </div>
    </footer>
  );
}
