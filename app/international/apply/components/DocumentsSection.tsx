"use client";

import { motion } from "framer-motion";
import {
  FileText,
  GraduationCap,
  Globe,
  Edit,
  Users,
  Briefcase,
  FileSearch,
  Image,
  BadgeCheck,
  Camera,
  FileCheck,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

import CommonHeader from "@/app/components/CommonHeader";

const iconMap: any = {
  fileText: FileText,
  graduationCap: GraduationCap,
  passport: Globe,
  language: Globe,
  edit: Edit,
  users: Users,
  briefcase: Briefcase,
  fileSearch: FileSearch,
  image: Image,
  badgeCheck: BadgeCheck,
  camera: Camera,
  fileCheck: FileCheck,
};

export default function DocumentsSection({ data }: any) {
  return (
    <section className="bg-[#F7F7F5] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Required"
          highlight="Documents"
          description={data.description}
          align="center"
          primaryColor="#F58233"
        />

        {/* ================= MOBILE VIEW ================= */}
        <div className="mt-10 space-y-5 md:hidden">
          {data.sections.map((section: any, sectionIndex: number) => {
            const HeaderIcon = iconMap[section.icon] || FileText;

            return (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dce6e8]
                  bg-white
                  shadow-sm
                "
              >
                {/* TOP HEADER */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    bg-[#dfecee]
                    px-4
                    py-4
                  "
                >
                  <div className="text-[#0A8F96]">
                    <HeaderIcon size={18} />
                  </div>

                  <h3
                    className="
                      text-[22px]
                      font-semibold
                      text-[#183153]
                    "
                  >
                    {section.title}
                  </h3>
                </div>

                {/* LIST */}
                <div className="space-y-4 px-4 py-5">
                  {section.items.map((doc: any, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* Bullet */}
                      <div
                        className="
                            mt-[5px]
                            flex
                            h-4
                            w-4
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#ff8c42]
                          "
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#ff8c42]" />
                      </div>

                      {/* Text */}
                      <p
                        className="
                            text-[13px]
                            leading-6
                            text-gray-700
                          "
                      >
                        {doc.title}
                      </p>
                    </div>
                  ))}

                  {/* VIEW DETAILS */}
                  <button
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-end
                      gap-1
                      text-[12px]
                      font-medium
                      text-[#ff8c42]
                    "
                  >
                    View Details
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}

          {/* IMPORTANT NOTE */}
          {data.importantNote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-[#F4B183]
                bg-[#FFF8F2]
                px-5
                py-5
              "
            >
              <div className="flex items-start gap-3">
                {/* ICON */}
                <div
                  className="
                    mt-1
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF1E8]
                    text-[#F58233]
                  "
                >
                  <AlertCircle size={15} />
                </div>

                {/* CONTENT */}
                <div>
                  <h4
                    className="
                      text-[22px]
                      font-semibold
                      text-[#F58233]
                    "
                  >
                    {data.importantNote.title}
                  </h4>

                  <p
                    className="
                      mt-3
                      text-[13px]
                      leading-7
                      text-gray-600
                    "
                  >
                    {data.importantNote.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block">
          {/* DOCUMENT GROUPS */}
          <div className="mt-16 space-y-10">
            {data.sections.map((section: any, sectionIndex: number) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* SECTION TITLE */}
                <h3
                  className="
                      mb-5
                      text-3xl
                      font-semibold
                      text-[#183153]
                    "
                >
                  {section.title}
                </h3>

                {/* SECTION CARD */}
                <div
                  className="
                      rounded-2xl
                      border
                      border-[#F4B183]
                      bg-white
                      px-8
                      py-8
                    "
                >
                  <div className="space-y-8">
                    {section.items.map((doc: any, index: number) => {
                      const Icon = iconMap[doc.icon] || FileText;

                      return (
                        <div key={index} className="flex items-start gap-5">
                          {/* ICON */}
                          <div
                            className="
                                  flex
                                  h-11
                                  w-11
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  bg-[#FFF3EA]
                                  text-[#F58233]
                                "
                          >
                            <Icon size={18} />
                          </div>

                          {/* CONTENT */}
                          <div>
                            <h4
                              className="
                                    text-lg
                                    font-semibold
                                    text-[#183153]
                                  "
                            >
                              {doc.title}
                            </h4>

                            <p
                              className="
                                    mt-2
                                    text-sm
                                    leading-7
                                    text-gray-600
                                  "
                            >
                              {doc.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* IMPORTANT NOTE */}
          {data.importantNote && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="
                mt-10
                rounded-2xl
                border
                border-[#F4C7A1]
                bg-[#FFF8F2]
                px-6
                py-5
              "
            >
              <div className="flex items-start gap-4">
                {/* ICON */}
                <div
                  className="
                    mt-1
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF1E8]
                    text-[#F58233]
                  "
                >
                  <AlertCircle size={16} />
                </div>

                {/* CONTENT */}
                <div>
                  <h4
                    className="
                      text-base
                      font-semibold
                      text-[#F58233]
                    "
                  >
                    {data.importantNote.title}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      leading-7
                      text-gray-600
                    "
                  >
                    {data.importantNote.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
