"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";

import Image from "next/image";
import { H2, H3 } from "@/app/components/Headings";

export default function ContactInfoSection() {
  return (
    <>
      {/* ================= CONTACT ================= */}
      <section className="bg-[#fff] py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          {/* ================= HEADER ================= */}
          <div className="text-center">
            {/* TAG */}
            <span
              className="
                inline-block
                rounded-xl
                bg-[#EAF7F8]
                px-4
                py-2
                text-[11px]
                font-medium
                text-[#00A8B5]

                md:rounded-md
                md:text-xs
              "
            >
              Contact Details
            </span>

            {/* TITLE */}
            <H2
              className="
                mt-5
                tracking-tight
                text-[#183153]
              "
            >
              Get in Touch with Us
            </H2>
          </div>

          {/* ================= MOBILE VIEW ================= */}
          <div className="mt-10 block md:hidden">
            {/* MAIN CARD */}
            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-lg
              "
            >
              {/* IMAGE */}
              <div className="relative h-[220px] w-full">
                <Image
                  src="/img/contact/hero-bg.webp"
                  alt="International Students"
                  fill
                  className="object-cover"
                />
              </div>

              {/* BLUE PANEL */}
              <div className="bg-[#183153] px-5 py-6 text-white">
                <H3
                  className="
                    text-white
                  "
                >
                  Office of International Affairs (OIA)
                </H3>

                <p
                  className="
                    mt-4
                    text-[13px]
                    leading-7
                    text-white/80
                  "
                >
                  For international student enquiries, collaborations, and
                  partnerships.
                </p>

                {/* CONTACT ITEMS */}
                <div className="mt-6 space-y-5">
                  <a
                    href="mailto:admission@presidency.international"
                    className="
                      flex
                      items-center
                      gap-3
                      text-[13px]
                      text-white/90
                    "
                  >
                    <Mail size={16} className="text-[#35C0C8]" />
                    admission@presidency.international
                  </a>

                  <a
                    href="tel:+919022092222"
                    className="
                      flex
                      items-center
                      gap-3
                      text-[13px]
                      text-white/90
                    "
                  >
                    <Phone size={16} className="text-[#35C0C8]" />
                    +91 9022092222
                  </a>

                  <a
                    href="https://presidency.international"
                    target="_blank"
                    className="
                      flex
                      items-center
                      gap-3
                      text-[13px]
                      text-white/90
                    "
                  >
                    <Globe size={16} className="text-[#35C0C8]" />
                    presidency.international
                  </a>
                </div>
              </div>
            </div>

            {/* ADMISSIONS OFFICE */}
            <div
              className="
                mt-5
                rounded-2xl
                bg-[#F7F8FA]
                px-5
                py-6
              "
            >
              <H3
                className="
                  text-[#183153]
                "
              >
                Admissions Office
              </H3>

              <div className="mt-6 space-y-5">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[13px]
                    text-gray-600
                  "
                >
                  <Phone size={16} className="text-[#00A8B5]" />
                  +91 9022092222
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[13px]
                    text-gray-600
                  "
                >
                  <Phone size={16} className="text-[#00A8B5]" />
                  +91 9024060000
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[13px]
                    text-gray-600
                  "
                >
                  <Mail size={16} className="text-[#00A8B5]" />
                  admission@presidency.international
                </div>

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[13px]
                    text-gray-600
                  "
                >
                  <Globe size={16} className="text-[#00A8B5]" />
                  apply.presidency.international
                </div>
              </div>
            </div>

            {/* CAMPUS ADDRESS */}
            <div
              className="
                mt-5
                rounded-2xl
                bg-[#F7F8FA]
                px-5
                py-6
              "
            >
              <H3
                className="
                  text-[#183153]
                "
              >
                Main Campus Address
              </H3>

              <div
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  text-[13px]
                  leading-7
                  text-gray-600
                "
              >
                <MapPin size={16} className="mt-1 text-[#00A8B5]" />

                <div>
                  Presidency University Rajanukunte, Yelahanka Bengaluru –
                  560119 India
                </div>
              </div>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  text-[13px]
                  text-gray-600
                "
              >
                <Phone size={16} className="text-[#00A8B5]" />
                +91 080-23093500
              </div>
            </div>
          </div>

          {/* ================= DESKTOP VIEW ================= */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8 mt-14">
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
                <H3 className="text-white">
                  Office of International Affairs (OIA)
                </H3>

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
                <H3 className="text-[#183153]">
                  Admissions Office
                </H3>

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
                <H3 className="text-[#183153]">
                  Main Campus Address
                </H3>

                <div className="mt-6 flex items-start gap-3 text-sm leading-7 text-gray-600">
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
    </>
  );
}
