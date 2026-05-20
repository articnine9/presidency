"use client";

import CommonHeader from "@/app/components/CommonHeader";
import { Globe, Leaf, Utensils, Coffee, Soup, Info } from "lucide-react";

const diningFeatures = [
  {
    icon: Globe,
    title: "Global & Indian cuisine balance",
  },
  {
    icon: Leaf,
    title: "Vegetarian & vegan-friendly",
  },
  {
    icon: Utensils,
    title: "Mild & adaptable flavours",
  },
  {
    icon: Soup,
    title: "Comfort food options available",
  },
  {
    icon: Coffee,
    title: "Cafés & Snacks",
  },
];

const DiningSection = () => {
  return (
    <section className="bg-[#fff] py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Dining on Campus"
          title="Dining on Campus at"
          highlight="Presidency University"
          description="The cafeteria and food courts serve North Indian, South Indian, and continental cuisine, along with vegetarian and vegan-friendly meals."
          align="center"
          primaryColor="#0A8F96"
        />

        {/* 🔥 MAIN GRID */}
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-2">
          {/* 🔹 LEFT IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/img/dining-campus.jpg"
              alt="Campus Dining"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          {/* 🔹 RIGHT CONTENT */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-[#0A8F96]/15
              bg-white
              p-8
              shadow-sm
            "
          >
            {/* 🔥 LEFT ACCENT BORDER */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[6px]
                bg-[#0A8F96]
                rounded-l-2xl
              "
            />

            <div className="pl-2">
              <h3 className="text-4xl text-[#1E3557]">
                Designed for Global Students
              </h3>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                For international students unfamiliar with Indian cuisine, the
                campus food experience is approachable and balanced — blending
                global flavours with authentic local options.
              </p>

              {/* FEATURES */}
              <div className="mt-8 space-y-4">
                {diningFeatures.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        relative
                        overflow-hidden
                        flex
                        items-center
                        gap-4
                        rounded-xl
                        border
                        border-gray-200
                        bg-[#f9fbfc]
                        px-5
                        py-4
                        transition-all
                        duration-300
                        hover:border-[#0A8F96]/40
                        hover:bg-white
                      "
                    >
                      {/* 🔥 LEFT SMALL BORDER */}
                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          h-full
                          w-[4px]
                          bg-[#0A8F96]
                          rounded-l-xl
                        "
                      />

                      <div className="flex items-center gap-4 pl-2">
                        {/* ICON */}
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#0A8F96]/10
                            text-[#0A8F96]
                            shrink-0
                          "
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* TITLE */}
                        <p className="text-base text-[#1E3557]">{item.title}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 🔥 NOTE */}
        <div
          className="
            mt-8
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-[#ff7a2f]/40
            bg-white
            px-5
            py-4
          "
        >
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#ff7a2f]" />

          <div>
            <h4 className="text-sm text-[#ff7a2f]">Note</h4>

            <p className="mt-1 text-sm text-gray-600">
              Specific outlets, opening hours, and dietary labels (halal, Jain,
              allergy-friendly) should be confirmed with the university.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
