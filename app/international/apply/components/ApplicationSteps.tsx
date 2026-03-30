"use client";

import { motion } from "framer-motion";
import {
  User,
  BookOpen,
  FileText,
  Upload,
  CreditCard,
  CheckCircle,
  Video,
  Award,
} from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

const iconMap: any = {
  user: User,
  book: BookOpen,
  fileText: FileText,
  upload: Upload,
  creditCard: CreditCard,
  checkCircle: CheckCircle,
  video: Video,
  award: Award,
};

export default function ApplicationSteps({ data }: any) {
  return (
    <section className="py-20 bg-[#f4f6f8]">
      <div className="max-w-[1100px] mx-auto px-5">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Step-by-Step"
          highlight="Application Guide"
          description={data.description}
          align="center"
        />

        {/* 🔥 TIMELINE */}
        <div className="relative mt-16">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

          {data.steps.map((step: any, index: number) => {
            const Icon = iconMap[step.icon];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-16 flex items-center"
              >
                {/* 🔥 LEFT SIDE */}
                <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : ""}`}>
                  {isLeft && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition">
                      <span className="text-base text-[#0A8F96] ">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl  mt-1 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* 🔥 CENTER ICON */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    {/* ICON */}
                    <div
                      className="w-14 h-14 flex items-center justify-center rounded-full 
                      bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] 
                      text-white shadow-lg"
                    >
                      {Icon && <Icon size={22} />}
                    </div>

                    {/* NUMBER BADGE */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center 
                      rounded-full bg-white text-[#0A8F96] text-xs font-bold shadow"
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* 🔥 RIGHT SIDE */}
                <div className={`w-1/2 ${!isLeft ? "pl-12" : ""}`}>
                  {!isLeft && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-xl transition">
                      <span className="text-base text-[#0A8F96] font-medium">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl  mt-1 mb-2 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-base">
                        {step.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 SUPPORT BOX */}
        {data.contact && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-r from-[#0b2a4a] to-[#0A8F96] text-white rounded-xl p-8 text-center shadow-lg"
          >
            <p className="text-lg mb-2">{data.contact.text}</p>
            <p className="text-sm opacity-90">
              📧 {data.contact.email} | 📞 {data.contact.phone}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
