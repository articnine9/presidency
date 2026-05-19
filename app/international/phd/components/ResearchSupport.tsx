"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  FileCheck,
  Building2,
  BookOpen,
  Globe,
  ShieldCheck,
} from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

const iconMap: any = {
  funding: Lightbulb,
  patent: FileCheck,
  excellence: Building2,
  publication: BookOpen,
  collaboration: Globe,
  frro: ShieldCheck,
};

export default function ResearchSupportCards({ data }: any) {
  const items = data?.researchSupport || [];

  return (
    <section className="py-16 md:py-20 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* Header */}
        <CommonHeader
          tag="Research"
          title="Support for"
          highlight=" International Scholars"
          description="Explore the facilities and support systems available for your research journey."
          align="center"
        />

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {items.map((item: string, index: number) => {
            // simple keyword matching
            let Icon = Lightbulb;
            if (item.toLowerCase().includes("patent")) Icon = FileCheck;
            else if (item.toLowerCase().includes("centre")) Icon = Building2;
            else if (item.toLowerCase().includes("publication"))
              Icon = BookOpen;
            else if (item.toLowerCase().includes("international")) Icon = Globe;
            else if (item.toLowerCase().includes("frro")) Icon = ShieldCheck;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1E3A5F]/10">
                  <Icon className="text-[#1E3A5F]" size={20} />
                </div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-[#1E3A5F] text-sm md:text-base">
                    {item.split("—")[0]}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    {item.split("—")[1] || ""}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
