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
    <section className="bg-[#F7F7F5] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Required"
          highlight="Documents"
          description={data.description}
          align="center"
          primaryColor="#F58233"
        />

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
                          {/* TITLE */}
                          <h4
                            className="
                              text-lg
                              font-semibold
                              text-[#183153]
                            "
                          >
                            {doc.title}
                          </h4>

                          {/* DESCRIPTION */}
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
    </section>
  );
}
