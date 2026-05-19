import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { UserCheck, Brain, Globe, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <UserCheck />,
    title: "Student Mentoring Programme",
    desc: "Every student is paired with a dedicated faculty mentor providing continuous academic, professional, and personal guidance.",
  },
  {
    icon: <Globe />,
    title: "International Student Support",
    desc: "Additional pastoral care helps international students smoothly transition to life and studies in India.",
  },
  {
    icon: <Brain />,
    title: "Wellness & Counselling",
    desc: "Access to qualified professionals for mental health, personal challenges, and confidential support.",
  },
  {
    icon: <ShieldCheck />,
    title: "Safe & Inclusive Campus",
    desc: "Zero-tolerance policy on ragging and discrimination ensures a respectful, secure environment.",
  },
];

const WellbeingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Student Wellbeing"
          title="Pastoral Care & Support at"
          highlight="Presidency University"
          description="A structured journey of care — supporting students academically, emotionally, and socially."
          primaryColor="#0f6b73"
        />

        {/* INTRO */}
        <p className="text-center text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed">
          Presidency University is deeply committed to holistic student
          wellbeing. From mentoring and mental health support to international
          care and campus safety, every student is supported at every stage of
          their journey.
        </p>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#0A8F96]/20 -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* CONTENT */}
                <div className="w-1/2">
                  <div className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                    <h3 className="text-lg  text-[#0F1E3D] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* ICON NODE */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#0A8F96] text-white shadow-md">
                  {React.cloneElement(step.icon, { className: "w-5 h-5" })}
                </div>

                {/* EMPTY SIDE */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CALLOUT */}
        <div className="mt-24 text-center bg-white border rounded-2xl p-8 shadow-md">
          <h3 className="text-xl  text-[#0F1E3D] mb-3">
            Confidential, Compassionate Support
          </h3>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Students facing personal, academic, or emotional challenges are
            encouraged to reach out. All support services are confidential,
            inclusive, and designed to ensure every student feels safe,
            respected, and empowered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WellbeingSection;
