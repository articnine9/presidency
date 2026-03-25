"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CourseFAQ({ data }: any) {
  const faqs = data?.faq || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#fff] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-3">
          {faqs.map((item: any, index: number) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-lg transition ${
                  isOpen ? "shadow-sm" : ""
                }`}
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-5 py-4 text-left bg-[#e5f0f2] "
                >
                  <span className="font-medium text-gray-900 text-sm">
                    {item.q}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 border-t px-5 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
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
