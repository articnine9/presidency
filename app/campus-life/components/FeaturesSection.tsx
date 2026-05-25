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

const extraCards = [
  {
    icon: Utensils,
    title: "Main Meals",
    desc: "North & South Indian meals served daily.",
  },
  {
    icon: Leaf,
    title: "Vegetarian & Vegan",
    desc: "Healthy plant-based and nutritious options.",
  },
  {
    icon: Globe,
    title: "Continental",
    desc: "Pasta, baked dishes, and global cuisine.",
  },
  {
    icon: Coffee,
    title: "Cafés & Snacks",
    desc: "Beverages, quick bites, and hangout spaces.",
  },
];

const DiningSection = () => {
  return (
    <section className="bg-[#fff] py-20 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag="Dining on Campus"
          title="Dining on Campus at"
          highlight="Presidency University"
          description="The cafeteria and food courts serve North Indian, South Indian, and continental cuisine, along with vegetarian and vegan-friendly meals."
          align="center"
          primaryColor="#0A8F96"
        />

        {/* DESKTOP VIEW */}
        <div className="mt-14 hidden items-stretch gap-6 lg:grid lg:grid-cols-2">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/img/dining-campus.jpg"
              alt="Campus Dining"
              className="
                h-full
                min-h-[420px]
                w-full
                object-cover
              "
            />
          </div>

          {/* RIGHT CONTENT */}
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
            {/* LEFT ACCENT */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-[6px]
                rounded-l-2xl
                bg-[#0A8F96]
              "
            />

            <div className="pl-2">
              <h3 className="text-4xl text-[#1E3557]">
                Designed for Global Students
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-relaxed
                  text-gray-600
                "
              >
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
                          flex
                          items-center
                          gap-4
                          overflow-hidden
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
                      {/* SMALL ACCENT */}
                      <div
                        className="
                            absolute
                            left-0
                            top-0
                            h-full
                            w-[4px]
                            rounded-l-xl
                            bg-[#0A8F96]
                          "
                      />

                      <div className="flex items-center gap-4 pl-2">
                        {/* ICON */}
                        <div
                          className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[#0A8F96]/10
                              text-[#0A8F96]
                            "
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        {/* TITLE */}
                        <p
                          className="
                              text-base
                              text-[#1E3557]
                            "
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="mt-8 space-y-3 lg:hidden">
          {/* FEATURE BOX */}
          <div
            className="
              rounded-2xl
              border
              border-[#0A8F96]/20
              bg-[#f9fbfa]
              p-4
            "
          >
            <h3
              className="
                text-[18px]
                leading-snug
                text-[#1E3557]
              "
            >
              Designed for Global Students
            </h3>

            <p
              className="
                mt-3
                text-[11px]
                leading-6
                text-gray-600
              "
            >
              For international students unfamiliar with Indian cuisine, the
              campus food experience is approachable and balanced — blending
              global flavours with authentic local dishes.
            </p>

            {/* FEATURE LIST */}
            <div className="mt-4 space-y-3">
              {diningFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                        flex
                        items-center
                        gap-3
                      "
                  >
                    <div
                      className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          bg-[#0A8F96]/10
                          text-[#0A8F96]
                        "
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>

                    <p
                      className="
                          text-[11px]
                          text-[#1E3557]
                        "
                    >
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* EXTRA CARDS */}
          {extraCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  rounded-2xl
                  border
                  border-[#0A8F96]/15
                  bg-[#f9fbfa]
                  px-4
                  py-3
                "
              >
                <div className="flex items-start gap-3">
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#0A8F96]/20
                      bg-[#0A8F96]/10
                      text-[#0A8F96]
                    "
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h4
                      className="
                        text-[13px]
                        text-[#1E3557]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        leading-5
                        text-gray-500
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* NOTE */}
          <div
            className="
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-[#ff7a2f]/40
              bg-[#fffaf7]
              px-4
              py-3
            "
          >
            <Info
              className="
                mt-0.5
                h-4
                w-4
                shrink-0
                text-[#ff7a2f]
              "
            />

            <div>
              <h4
                className="
                  text-[12px]
                  text-[#ff7a2f]
                "
              >
                Note
              </h4>

              <p
                className="
                  mt-1
                  text-[10px]
                  leading-5
                  text-gray-600
                "
              >
                Specific outlets, opening hours, and dietary labels (halal,
                Jain, allergy-friendly) should be confirmed with the university.
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP NOTE */}
        <div
          className="
            mt-8
            hidden
            items-start
            gap-3
            rounded-2xl
            border
            border-[#ff7a2f]/40
            bg-white
            px-5
            py-4
            lg:flex
          "
        >
          <Info
            className="
              mt-0.5
              h-5
              w-5
              shrink-0
              text-[#ff7a2f]
            "
          />

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
