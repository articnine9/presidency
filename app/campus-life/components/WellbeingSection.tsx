"use client";

import CommonHeader from "@/app/components/CommonHeader";

import {
  HeartHandshake,
  Globe2,
  Brain,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const supportItems = [
  {
    icon: HeartHandshake,
    title: "Student Mentoring Programme",
    desc: "Every student is paired with a dedicated faculty mentor providing continuous academic, professional, and personal guidance.",
  },
  {
    icon: Globe2,
    title: "International Student Support",
    desc: "Additional pastoral care helps international students smoothly transition to life and studies in India.",
  },
  {
    icon: Brain,
    title: "Wellness & Counselling",
    desc: "Access to qualified professionals for mental health, personal challenges, and confidential support.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Inclusive Campus",
    desc: "Zero-tolerance policy on ragging and discrimination ensures a respectful, secure environment.",
  },
];

const WellbeingSection = () => {
  return (
    <section className="bg-[#f7f8fa] py-20 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag="Student Wellbeing"
          title="Pastoral Care & Support at"
          highlight="Presidency University"
          description="Presidency University is deeply committed to holistic student wellbeing. From mentoring and mental health support to international care and campus safety, every student is supported at every stage of their journey."
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* DESKTOP VIEW */}
        <div className="mt-14 hidden items-center gap-8 lg:grid lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="space-y-5">
            {supportItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#ff7a2f]/25
                    bg-white
                    px-6
                    py-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  {/* LEFT LINE */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[4px]
                      bg-[#ff7a2f]
                    "
                  />

                  <div className="flex items-start gap-4">
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#ff7a2f]
                        text-white
                      "
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="text-lg text-[#1E3557]">{item.title}</h3>

                      <p
                        className="
                          mt-2
                          text-sm
                          leading-relaxed
                          text-gray-600
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/img/student-wellbeing.png"
              alt="Student Wellbeing"
              className="
                h-full
                min-h-[520px]
                w-full
                object-cover
              "
            />
          </div>
        </div>

        {/* MOBILE VIEW */}
        {/* MOBILE VIEW */}
        <div className="mt-8 space-y-5 lg:hidden">
          {supportItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
          relative
          flex
          gap-4
        "
              >
                {/* LEFT ICON + LINE */}
                <div
                  className="
            relative
            flex
            shrink-0
            flex-col
            items-center
          "
                >
                  {/* ICON */}
                  <div
                    className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#0A8F96]
              text-white
              shadow-md
            "
                  >
                    <Icon className="h-4 w-4" />
                  </div>

                  {/* VERTICAL LINE */}
                  {index !== supportItems.length - 1 && (
                    <div
                      className="
                mt-2
                h-16
                w-[2px]
                bg-[#dfe5e7]
              "
                    />
                  )}
                </div>

                {/* CARD */}
                <div
                  className="
            flex-1
            rounded-[28px]
            border
            border-[#e5ddd7]
            bg-[#fdfcfb]
            px-5
            py-5
            shadow-[0_6px_18px_rgba(0,0,0,0.06)]
          "
                >
                  <h3
                    className="
              text-[18px]
              leading-tight
              text-[#4A556D]
            "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
              mt-4
              text-[13px]
              leading-8
              text-[#4B5565]
            "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* MOBILE CTA */}
          <div
            className="
      mt-6
      rounded-2xl
      bg-[#183B6B]
      px-5
      py-5
      text-white
      shadow-lg
    "
          >
            <h3
              className="
        text-[28px]
        leading-tight
        text-white
      "
            >
              Your Next Move{" "}
              <span
                className="
          italic
          text-[#0A8F96]
        "
              >
                Awaits
              </span>
            </h3>

            <p
              className="
        mt-2
        text-[11px]
        leading-5
        text-white/80
      "
            >
              Begin an extraordinary journey at Presidency University Bengaluru.
            </p>

            {/* BUTTON */}
            <button
              className="
        mt-5
        inline-flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-[#0A8F96]
        px-5
        py-3
        text-[11px]
        tracking-wide
        text-white
        transition-all
        duration-300
        hover:bg-[#0bb5b5]
      "
            >
              APPLY NOW
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* DESKTOP CTA */}
        <div
          className="
            mt-10
            hidden
            flex-col
            items-start
            justify-between
            gap-6
            rounded-2xl
            bg-[#183B6B]
            px-8
            py-10
            md:flex-row
            md:items-center
            lg:flex
          "
        >
          {/* LEFT */}
          <div>
            <h3 className="text-4xl text-white">
              Your Next Move{" "}
              <span className="italic text-[#0A8F96]">Awaits</span>
            </h3>

            <p
              className="
                mt-3
                text-sm
                text-white/80
              "
            >
              Start your global academic journey with Presidency University
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-[#0A8F96]
              px-7
              py-3
              text-sm
              text-white
              transition-all
              duration-300
              hover:bg-[#0bb5b5]
            "
          >
            APPLY NOW
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WellbeingSection;
