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
      <section className="bg-[#fff] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* HEADER */}
          <div className="text-center">
            {/* TAG */}
            <span
              className="
          inline-block
          rounded-md
          bg-[#FFF1E8]
          px-4 py-2
          text-xs
          font-medium
          text-[#F58233]
        "
            >
              Contact Details
            </span>

            {/* TITLE */}
            <h2
              className="
          mt-5
          text-4xl
          md:text-5xl
          font-semibold
          text-[#183153]
        "
            >
              Connect With Our Admissions Team
            </h2>
          </div>

          {/* MAIN GRID */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* LEFT CARD */}
            <div
              className="
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-lg
        "
            >
              {/* IMAGE */}
              <div className="relative h-[240px] w-full">
                <Image
                  src="/img/contact/hero-bg.webp"
                  alt="International Students"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BLUE INFO PANEL */}
              <div className="bg-[#183153] px-8 py-7 text-white">
                <h3 className="text-xl font-semibold">
                  Office of International Affairs (OIA)
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/80">
                  For international student enquiries, collaborations, and
                  partnerships.
                </p>

                {/* CONTACT ITEMS */}
                <div className="mt-6 space-y-4">
                  <a
                    href="mailto:admission@presidency.international"
                    className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
                  >
                    <Mail size={16} className="text-[#35C0C8]" />
                    admission@presidency.international
                  </a>

                  <a
                    href="tel:+919022092222"
                    className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
                  >
                    <Phone size={16} className="text-[#35C0C8]" />
                    +91 9022092222
                  </a>

                  <a
                    href="https://presidency.international"
                    target="_blank"
                    className="flex items-center gap-3 text-sm text-white/90 hover:text-white"
                  >
                    <Globe size={16} className="text-[#35C0C8]" />
                    presidency.international
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-6">
              {/* ADMISSION OFFICE */}
              <div
                className="
            rounded-2xl
            border border-gray-200
            bg-white
            px-8 py-7
            shadow-md
          "
              >
                <h3 className="text-xl font-semibold text-[#183153]">
                  Admissions Office
                </h3>

                <div className="mt-6 space-y-5">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={16} className="text-[#F58233]" />
                    +91 9022092222
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone size={16} className="text-[#F58233]" />
                    +91 9024060000
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Mail size={16} className="text-[#F58233]" />
                    admission@presidency.international
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Globe size={16} className="text-[#F58233]" />
                    apply.presidency.international
                  </div>
                </div>
              </div>

              {/* CAMPUS ADDRESS */}
              <div
                className="
            rounded-2xl
            border border-gray-200
            bg-white
            px-8 py-7
            shadow-md
          "
              >
                <h3 className="text-xl font-semibold text-[#183153]">
                  Main Campus Address
                </h3>

                <div className="mt-6 flex items-start gap-3 text-sm text-gray-600 leading-7">
                  <MapPin size={16} className="mt-1 text-[#F58233]" />

                  <div>
                    Presidency University Rajanukunte,
                    <br />
                    Yelahanka Bengaluru – 560119 India
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
                  <Phone size={16} className="text-[#F58233]" />
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
