"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqAccordion({ data, query }: any) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

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
    <section className="pb-20 bg-[#f4f6f8]">
      <div className="max-w-[1400px] mx-auto px-5 space-y-4">
        {displayData.map((category: any, index: number) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={category.id}
              className="rounded-xl bg-white shadow-md overflow-hidden border border-gray-200"
            >
              {/* 🔥 CATEGORY HEADER */}
              <div
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`flex items-center justify-between px-5 py-4 cursor-pointer transition
                ${isActive ? "bg-[#0A8F96] text-white" : "bg-white"}
              `}
              >
                <h3 className="text-lg md:text-2xl">{category.category}</h3>

                {isActive ? <ChevronUp /> : <ChevronDown />}
              </div>

              {/* 🔥 FAQ ITEMS */}
              {isActive && (
                <div className="p-5 space-y-4 bg-gray-50">
                  {category.items.map((faq: any, i: number) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-lg p-4"
                    >
                      <p className="font-medium text-gray-900 mb-2 text-lg">
                        {faq.question}
                      </p>
                      <p className="text-base text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
