"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { H2 } from "@/app/components/Headings";

export default function CourseFAQ({ data }: any) {
  const faqs = data?.faq || [];

  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs.length) return null;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F7F7F5] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
          {/* TAG */}
          <span
            className="
              inline-block
              rounded-md
              bg-[#DDF4F4]
              px-4 py-2
              text-xs
              font-medium
              text-[#0097A7]
            "
          >
            FAQs
          </span>

          {/* TITLE */}
          <H2 className="mt-5 text-[#183153]">
            Frequently Asked <span className="text-[#0097A7]">Questions</span>
          </H2>
        </div>

        {/* FAQ LIST */}
        <div className="mt-14 space-y-3">
          {faqs.map((item: any, index: number) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                className="
                  overflow-hidden
                  rounded-lg
                  bg-[#35A7AF]
                  shadow-sm
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-6
                    py-5
                    text-left
                  "
                >
                  <span
                    className="
                      text-base
                      font-medium
                      text-white
                    "
                  >
                    {item.q}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`
                      text-white
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="
                        overflow-hidden
                        bg-white
                      "
                    >
                      <div className="px-6 py-5">
                        <p
                          className="
                            text-sm
                            leading-7
                            text-gray-600
                          "
                        >
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* CTA CARD */}
        <div
          className="
            mt-10
            rounded-xl
            bg-[#0F2D52]
            px-8
            py-10
            md:flex
            md:items-center
            md:justify-between
          "
        >
          {/* LEFT */}
          <div>
            <h3
              className="
                text-3xl
                font-semibold
                text-white
              "
            >
              Your Next Move{" "}
              <span className="italic text-[#35C0C8]">Awaits</span>
            </h3>

            <p
              className="
                mt-3
                text-sm
                text-white/70
              "
            >
              Begin an extraordinary journey at Presidency University,
              Bengaluru.
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-md
              bg-[#00A8B5]
              px-6
              py-3
              text-sm
              font-medium
              text-white
              transition hover:bg-[#0095A1]
              md:mt-0
            "
          >
            APPLY NOW
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
