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
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Required"
          highlight="Documents"
          description={data.description}
          align="center"
        />

        {/* 🔥 GRID */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {data.documents.map((doc: any, index: number) => {
            const Icon = iconMap[doc.icon] || FileText;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group bg-[#f9fafb] rounded-xl p-6 border 
                hover:shadow-xl transition-all duration-300 
                border-b-4 border-b-[#0A8F96]"
              >
                {/* 🔥 ICON */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 3 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl 
                  bg-gradient-to-br from-[#0A8F96]/10 to-[#0BB5B5]/20 
                  text-[#0A8F96] mb-5"
                >
                  <Icon size={24} />
                </motion.div>

                {/* 🔥 TITLE */}
                <h3 className="text-lg  text-gray-900 mb-2">{doc.title}</h3>

                {/* 🔥 DESCRIPTION */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {doc.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 🔥 IMPORTANT NOTE */}
        {data.importantNote && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 bg-gradient-to-r from-[#0b2a4a] to-[#0A8F96] text-white rounded-xl p-8 shadow-lg"
          >
            <h4 className="text-lg font-semibold mb-2">
              {data.importantNote.title}
            </h4>

            <p className="text-sm md:text-base opacity-90 leading-relaxed text-white">
              {data.importantNote.description}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
