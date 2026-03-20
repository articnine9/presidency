"use client";

import { Phone, Mail, Video, Radio } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-gray-100 text-[#1e2b38] pt-20">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-5 gap-12 pb-16">
        {/* COLUMN 1 */}
        <div>
          <h3 className="font-semibold mb-4">University</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Presidency University</li>
            <li>International Office</li>
            <li>Campus Tour</li>
            <li>How to Reach</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h3 className="font-semibold mb-4">Academic Programs</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Engineering & Technology</li>
            <li>Business & Management</li>
            <li>Science & Humanities</li>
            <li>Law</li>
            <li>Doctoral Programs</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h3 className="font-semibold mb-4">Admissions</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Scholarships</li>
            <li>Admission India</li>
            <li>Admission International</li>
            <li>Prospectus</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h3 className="font-semibold mb-4">Research & Innovation</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Research Centers</li>
            <li>Innovation & Incubation</li>
            <li>Faculty Research</li>
            <li>Industry Collaboration</li>
          </ul>
        </div>

        {/* COLUMN 5 */}
        <div>
          <h3 className="font-semibold mb-4">Media & Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li>News</li>
            <li>Press & Media</li>
            <li>Events</li>
            <li>Student Resources</li>
          </ul>
        </div>
      </div>

      {/* CONTACT BAR */}
      <div className="border-t border-gray-300 py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LOGO */}
          <div className="text-3xl font-bold text-[#1e3a5f]">
            Presidency University
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col gap-2 text-gray-600">
            <div className="flex items-center gap-3">
              <Phone size={18} /> +91 80 1234 5678
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} /> +91 80 8765 4321
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} /> admissions@presidencyuniversity.edu
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="flex items-center gap-10 text-[#1e3a5f]">
            <div className="flex items-center gap-2">
              <Video size={22} />
              Virtual Tour
            </div>

            <div className="flex items-center gap-2">
              <Video size={22} />
              Videos
            </div>

            <div className="flex items-center gap-2">
              <Radio size={22} />
              Campus Radio
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-[#1e4c8f] text-white text-center py-4 text-sm">
        © 2026 Presidency University. All Rights Reserved.
      </div>
    </footer>
  );
}
