"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Laptop,
  FilePenLine,
  FileCheck,
  FileText,
  IdCard,
  ChevronRight,
  ChevronsDown,
} from "lucide-react";

const flowPreview = [
  { icon: Laptop, label: "Apply Online" },
  { icon: FilePenLine, label: "Submit Documents" },
  { icon: FileCheck, label: "Complete Visa" },
];

type StepIcon = typeof FileText | null;

const gridSteps: { n: number; title: string; icon: StepIcon }[] = [
  { n: 1, title: "Apply Online", icon: null },
  { n: 2, title: "Submit Documents", icon: null },
  { n: 3, title: "Get Offer Letter", icon: FileText },
  { n: 4, title: "Complete Visa", icon: IdCard },
];

export function AdmissionProcessSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[280px] w-[280px] rounded-full bg-[#0A8F96]/10 blur-[100px] md:h-[360px] md:w-[360px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-[#ff8c42]/10 blur-[90px]" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <CommonHeader
          tag="Admission Process"
          title="Four Steps"
          highlight="to Admission"
          description="From online application to visa readiness — a clear path for international applicants joining Presidency University."
          primaryColor="#ff8c42"
          secondaryColor="#1e3a5f"
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-2 max-w-[1100px] lg:mt-4"
        >
          {/* Card shell — stronger desktop treatment */}
          <div
            className="rounded-2xl border border-gray-200/90 bg-gradient-to-br from-[#f8fafc] via-[#eef1f6] to-[#e8ecf3] p-5 shadow-[0_20px_60px_-24px_rgba(15,30,61,0.15)] sm:p-8 md:p-10 lg:rounded-3xl lg:p-12"
          >
            <p className="mb-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#1e3a5f]/80 md:mb-10 md:text-xs">
              4 Steps to Admission
            </p>

            {/* Top: horizontal flow — desktop: even pipeline with chevrons */}
            <div className="mb-8 md:mb-10 lg:mb-12">
              <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-3">
                {flowPreview.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Fragment key={item.label}>
                      <div className="flex w-full max-w-xs flex-col items-center gap-3 lg:max-w-none lg:flex-1">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1e4c8f] shadow-md ring-1 ring-[#1e4c8f]/10 md:h-16 md:w-16 lg:h-[72px] lg:w-[72px]">
                          <Icon
                            className="h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9"
                            strokeWidth={1.65}
                          />
                        </div>
                        <span className="text-center text-xs font-semibold leading-snug text-[#1e4c8f] md:text-sm">
                          {item.label}
                        </span>
                      </div>
                      {i < flowPreview.length - 1 ? (
                        <>
                          <ChevronRight
                            className="hidden shrink-0 text-gray-400 lg:block lg:h-6 lg:w-6"
                            aria-hidden
                          />
                          <div
                            className="h-px w-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent lg:hidden"
                            aria-hidden
                          />
                        </>
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-8 flex items-center md:my-10 lg:my-12">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white p-2 shadow-md ring-1 ring-gray-200/80">
                <ChevronsDown
                  className="h-5 w-5 text-[#0A8F96] lg:h-6 lg:w-6"
                  aria-hidden
                />
              </div>
            </div>

            {/* Steps grid — mobile 2×2, desktop 4 columns */}
            <div className="mb-8 grid grid-cols-2 gap-3 sm:gap-4 md:mb-10 lg:grid-cols-4 lg:gap-5">
              {gridSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.n}
                    className="group flex min-h-[108px] flex-col items-center justify-center rounded-2xl border border-white/60 bg-white/90 px-3 py-5 text-center shadow-sm ring-1 ring-gray-200/50 transition hover:-translate-y-0.5 hover:shadow-md md:min-h-[120px] md:px-4 md:py-6 lg:min-h-[140px]"
                  >
                    <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0A8F96]/10 text-xs font-bold text-[#0A8F96]">
                      {step.n}
                    </span>
                    {StepIcon ? (
                      <StepIcon
                        className="mb-2 h-7 w-7 text-[#1e4c8f] opacity-90 transition group-hover:opacity-100 md:h-8 md:w-8"
                        strokeWidth={1.65}
                      />
                    ) : null}
                    <p className="text-[11px] font-semibold leading-snug text-[#1e3a5f] sm:text-xs md:text-sm">
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center pt-2">
              <Link
                href="/international/apply"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#ff8c42] px-10 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#e67e35] hover:shadow-xl md:px-12 md:text-base"
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
