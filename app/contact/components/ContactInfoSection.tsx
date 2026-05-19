"use client";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";
import Image from "next/image";

export default function ContactInfoSection() {
  return (
    <>
      {/* ================= CONTACT ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* HEADER */}
          <CommonHeader
            tag="Contact Details"
            title="Get in Touch with Us"
            // highlight="Us"
            primaryColor="#ff8c42"
          />

          {/* TWO COLUMN LAYOUT */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT COLUMN - Image with OIA Card Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* Background Image */}
              <div className="relative h-full min-h-[400px]">
                <Image
                  src="/img/contact/hero-bg.webp" // Replace with your actual image path
                  alt="Campus or International Students"
                  fill
                  className="object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* OIA Card - Positioned inside the image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white rounded-t-2xl">
                <h3 className="text-xl md:text-2xl mb-3">
                  Office of International Affairs (OIA)
                </h3>
                <p className="text-white/90 mb-6 text-base">
                  For international student enquiries, collaborations, and
                  partnerships.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href="mailto:admission@presidency.international"
                    className="flex items-center gap-2 hover:underline text-base"
                  >
                    <Mail size={18} /> admission@presidency.international
                  </a>
                  <a
                    href="tel:+919022092222"
                    className="flex items-center gap-2 hover:underline text-base"
                  >
                    <Phone size={18} /> +91 9022092222
                  </a>
                  <a
                    href="https://presidency.international"
                    target="_blank"
                    className="flex items-center gap-2 hover:underline text-base"
                  >
                    <Globe size={18} /> presidency.international
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Admissions Office & Main Campus Address */}
            <div className="flex flex-col gap-8">
              {/* ADMISSIONS OFFICE */}
              <div className="group bg-[#F5F6F8] rounded-2xl p-6 hover:shadow-xl transition">
                <h3 className="text-xl text-[#1e3a5f] mb-4">
                  Admissions Office
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3 group-hover:text-[#0A8F96] text-base">
                    <Phone size={16} />
                    +91 9022092222
                  </li>
                  <li className="flex items-center gap-3 group-hover:text-[#0A8F96] text-base">
                    <Phone size={16} />
                    +91 9024060000
                  </li>
                  <li className="flex items-center gap-3 group-hover:text-[#0A8F96] text-base">
                    <Mail size={16} />
                    admission@presidency.international
                  </li>
                  <li className="flex items-center gap-3 group-hover:text-[#0A8F96] text-base">
                    <Globe size={16} />
                    apply.presidency.international
                  </li>
                </ul>
              </div>

              {/* MAIN CAMPUS ADDRESS */}
              <div className="group bg-[#F5F6F8] rounded-2xl p-6 hover:shadow-xl transition">
                <h3 className="text-xl text-[#1e3a5f] mb-4">
                  Main Campus Address
                </h3>
                <div className="flex items-start gap-3 text-gray-700 text-base">
                  <MapPin size={16} className="mt-1" />
                  <div>
                    Presidency University <br />
                    Rajanukunte, Yelahanka <br />
                    Bengaluru – 560119 <br />
                    India
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 text-base text-gray-700">
                  <Phone size={16} />
                  +91 080-23093500
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL ================= */}
    </>
  );
}
