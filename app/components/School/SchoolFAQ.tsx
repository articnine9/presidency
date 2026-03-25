"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function SchoolFAQ({ data }: any) {
  const faqs = data?.faq || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs.length) return null;

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TITLE */}
        <CommonHeader
          tag="FAQs"
          title="Frequently Asked"
          highlight="Questions"
          primaryColor="#0A8F96"
        />

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item: any, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 transition"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-start w-full text-left"
                >
                  <p className="text-lg font-medium text-[#1e3a5f] pr-4">
                    {item.q}
                  </p>

                  <span className="text-gray-400">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
