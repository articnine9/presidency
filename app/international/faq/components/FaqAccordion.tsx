"use client";

import { useState } from "react";
import {
  Building2,
  CreditCard,
  GraduationCap,
  FileText,
  Hotel,
  ChevronDown,
  ChevronUp,
  Landmark,
  Building,
  Plane,
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
  const [openFaq, setOpenFaq] = useState(0);

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
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        {/* ================= MOBILE VIEW ================= */}
        <div className="block md:hidden">
          <div className="space-y-4">
            {displayData.map((category: any, index: number) => {
              const Icon = icons[category.category] || Building2;

              const isActive = activeTab === index;

              return (
                <div
                  key={category.id}
                  className="
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#D7E5E8]
                      bg-white
                      shadow-sm
                    "
                >
                  {/* CATEGORY HEADER */}
                  <button
                    onClick={() => setActiveTab(isActive ? -1 : index)}
                    className={`
                        flex
                        w-full
                        items-center
                        justify-between
                        px-4
                        py-4
                        transition-all

                        ${isActive ? "bg-[#EAF5F6]" : "bg-white"}
                      `}
                  >
                    <div className="flex items-center gap-4">
                      {/* ICON */}
                      <div
                        className={`
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl

                            ${
                              isActive
                                ? "bg-[#D9F0F2] text-[#0A8F96]"
                                : "bg-[#F3F4F6] text-[#1E3A5F]"
                            }
                          `}
                      >
                        <Icon size={22} />
                      </div>

                      {/* TITLE */}
                      <h3
                        className={`
                            text-[20px]
                            font-semibold

                            ${isActive ? "text-[#0A8F96]" : "text-[#1E3A5F]"}
                          `}
                      >
                        {category.category === "About"
                          ? "About Presidency University"
                          : category.category === "Admissions"
                            ? "Admission Requirements"
                            : category.category === "Accommodation"
                              ? "Campus Life and Accommodation"
                              : category.category === "Visa"
                                ? "Visa and Immigration"
                                : "Career and Post-Study"}
                      </h3>
                    </div>

                    {isActive ? (
                      <ChevronUp size={22} className="text-[#0A8F96]" />
                    ) : (
                      <ChevronDown size={22} className="text-[#1E3A5F]" />
                    )}
                  </button>

                  {/* FAQ ITEMS */}
                  {isActive && (
                    <div className="border-t border-[#D7E5E8] bg-white">
                      {category.items.map((faq: any, i: number) => {
                        const isOpen = openFaq === i;

                        return (
                          <div
                            key={i}
                            className="
                                  border-b
                                  border-[#E5ECEE]
                                  last:border-b-0
                                "
                          >
                            {/* QUESTION */}
                            <button
                              onClick={() => setOpenFaq(isOpen ? -1 : i)}
                              className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    px-4
                                    py-5
                                    text-left
                                  "
                            >
                              <h4
                                className="
                                      pr-4
                                      text-[15px]
                                      leading-8
                                      text-[#1E3A5F]
                                    "
                              >
                                {faq.question}
                              </h4>

                              {isOpen ? (
                                <ChevronUp
                                  size={20}
                                  className="text-[#0A8F96]"
                                />
                              ) : (
                                <ChevronDown
                                  size={20}
                                  className="text-[#1E3A5F]"
                                />
                              )}
                            </button>

                            {/* ANSWER */}
                            {isOpen && (
                              <div
                                className="
                                      border-t
                                      border-[#E5ECEE]
                                      bg-[#F8FAFB]
                                      px-4
                                      py-5
                                    "
                              >
                                <p
                                  className="
                                        text-[14px]
                                        leading-8
                                        text-[#4B5563]
                                      "
                                >
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block">
          {/* KEEP YOUR EXISTING DESKTOP CODE */}

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
                  <button className="flex w-full items-center justify-between px-5 py-4 text-left">
                    <h3 className="text-sm font-medium text-[#1E3A5F] md:text-base">
                      {faq.question}
                    </h3>

                    <ChevronDown size={18} className="text-[#1E3A5F]" />
                  </button>

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
      </div>
    </section>
  );
}
