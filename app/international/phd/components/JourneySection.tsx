"use client";

import { Globe, Phone, FileText } from "lucide-react";
import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

const steps = [
  {
    title: "Explore Programmes",
    description: "Find your ideal course from our diverse offerings.",
    icon: Globe,
  },
  {
    title: "Contact OIA",
    description:
      "Talk to our Office of International Affairs for details on intakes, fees, and requirements.",
    icon: Phone,
  },
  {
    title: "Apply Online",
    description: "Submit your application through our easy online portal.",
    icon: FileText,
  },
];

export default function JourneySection() {
  return (
    <section className="py-16 md:py-20 bg-[#f4f6f8]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 text-center">
        {/* Title */}
        <CommonHeader
          tag="Journey"
          title="Your Journey to"
          highlight=" Presidency"
          description="Follow a simple 3-step process to begin your academic journey with us."
          align="center"
        />
        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Dotted Line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-0 right-0 border-t border-dashed border-gray-300 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-lg border-2 border-[#C9A24A] bg-white shadow-md mb-4">
                  <Icon className="text-[#1E3A5F]" size={24} />
                </div>

                {/* Step Title */}
                <h3 className=" text-gray-800 mb-2">
                  <span className="italic">Step {index + 1}:</span> {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
