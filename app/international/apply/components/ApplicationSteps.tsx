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

function StepCard({ step, index }: { step: any; index: number }) {
  return (
    <div className="bg-white p-4 shadow-sm border rounded-xl transition hover:shadow-xl sm:p-6">
      <span className="text-sm font-medium text-[#0A8F96] sm:text-base">
        Step {index + 1}
      </span>
      <h3 className="mt-1 mb-2 text-lg leading-tight sm:text-xl">{step.title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
        {step.description}
      </p>
    </div>
  );
}

export default function ApplicationSteps({ data }: any) {
  return (
    <section className="bg-[#f4f6f8] py-12 md:py-20">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-5 md:px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Step-by-Step"
          highlight="Application Guide"
          description={data.description}
          align="center"
        />

        {/* 🔥 MOBILE: stacked timeline (icon + card) */}
        <div className="mt-10 space-y-6 md:hidden">
          {data.steps.map((step: any, index: number) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={`m-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className="flex gap-3"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div className="relative">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#0A8F96] to-[#0BB5B5] text-white shadow-lg sm:h-14 sm:w-14"
                    >
                      {Icon && <Icon size={22} />}
                    </div>
                    <div
                      className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-[#0A8F96] shadow sm:h-6 sm:w-6 sm:text-xs"
                    >
                      {index + 1}
                    </div>
                  </div>
                  {index < data.steps.length - 1 ? (
                    <div
                      className="mt-2 h-8 w-px shrink-0 bg-gray-200"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <StepCard step={step} index={index} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 DESKTOP: alternating timeline */}
        <div className="relative mt-16 hidden md:block">
          {/* CENTER LINE */}
          <div className="absolute bottom-0 left-1/2 top-0 w-[2px] -translate-x-1/2 bg-gray-200" />

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
                <div className="absolute left-1/2 z-10 -translate-x-1/2">
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
            viewport={{ once: true }}
            className="mt-12 rounded-xl bg-gradient-to-r from-[#0b2a4a] to-[#0A8F96] p-5 text-center text-white shadow-lg sm:mt-16 sm:p-8"
          >
            <p className="mb-2 text-base sm:text-lg">{data.contact.text}</p>
            <p className="flex flex-col gap-2 text-xs opacity-90 sm:flex-row sm:justify-center sm:gap-4 sm:text-sm">
              <span className="break-all">📧 {data.contact.email}</span>
              <span className="hidden sm:inline">|</span>
              <span>📞 {data.contact.phone}</span>
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
