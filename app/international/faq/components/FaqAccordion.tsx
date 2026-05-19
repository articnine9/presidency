"use client";

import { useState } from "react";
import {
  Building2,
  CreditCard,
  GraduationCap,
  FileText,
  Hotel,
  ChevronDown,
} from "lucide-react";

const icons: any = {
  About: Building2,
  Visa: CreditCard,
  Career: GraduationCap,
  Admissions: FileText,
  Accommodation: Hotel,
};

export default function FaqAccordion({ data, query }: any) {
  const [activeTab, setActiveTab] = useState(0);

  // 🔍 Filter FAQs
  const filteredData = data
    .map((category: any) => {
      const filteredItems = category.items.filter((faq: any) =>
        faq.question.toLowerCase().includes(query.toLowerCase()),
      );

      return {
        ...category,
        items: filteredItems,
      };
    })
    .filter((category: any) => category.items.length > 0);

  const displayData = query ? filteredData : data;

  return (
    <section className="bg-[#F4F7F8] pb-14 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6">
        {/* TABS */}
        <div className="overflow-hidden rounded-xl border border-[#D8E4E7] bg-[#EAF2F3]">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {displayData.map((category: any, index: number) => {
              const Icon = icons[category.category] || Building2;
              const isActive = activeTab === index;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center justify-center gap-2 border-b border-r border-[#D8E4E7] px-4 py-4 text-sm font-medium transition-all md:text-base
                    ${
                      isActive
                        ? "bg-[#EAF2F3] text-[#0A8F96]"
                        : "bg-transparent text-[#1E3A5F]"
                    }
                  `}
                >
                  <Icon size={18} />

                  {category.category}

                  {/* ACTIVE LINE */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#0A8F96]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* FAQ CONTENT */}
          <div className="space-y-4 p-5 md:p-6">
            {displayData[activeTab]?.items.map((faq: any, i: number) => (
              <div
                key={i}
                className="overflow-hidden rounded-lg border border-[#D7E5E8] bg-[#F8FAFB]"
              >
                {/* QUESTION */}
                <button className="flex w-full items-center justify-between px-5 py-4 text-left">
                  <h3 className="text-sm font-medium text-[#1E3A5F] md:text-base">
                    {faq.question}
                  </h3>

                  <ChevronDown size={18} className="text-[#1E3A5F]" />
                </button>

                {/* ANSWER */}
                <div className="border-t border-[#D7E5E8] bg-white px-5 py-4">
                  <p className="text-sm leading-7 text-[#4B5563] md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
