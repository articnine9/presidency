"use client";

import {
  FileText,
  Globe,
  Edit,
  Camera,
  CreditCard,
  Home,
  Activity,
  Shield,
  Wallet,
  Banknote,
  AlertCircle,
  Mail,
  Phone,
  ExternalLink,
  ChevronRight,
  FileCheck2,
  BadgeDollarSign,
  HeartPulse,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

import CommonHeader from "@/app/components/CommonHeader";

const iconMap: any = {
  passport: Globe,
  fileText: FileText,
  edit: Edit,
  camera: Camera,
  banknote: Banknote,
  creditCard: CreditCard,
  home: Home,
  activity: Activity,
  shield: Shield,
  wallet: Wallet,
};

export default function VisaSection({ data }: any) {
  const groupedRequirements = [
    {
      title: "Basic Requirements",
      icon: FileCheck2,
      items: data.requirements.slice(0, 4),
    },
    {
      title: "Financial & Accommodation",
      icon: BadgeDollarSign,
      items: data.requirements.slice(4, 7),
    },
    {
      title: "Health & Insurance",
      icon: HeartPulse,
      items: data.requirements.slice(7, 9),
    },
    {
      title: "Additional Info",
      icon: IndianRupee,
      items: data.requirements.slice(9),
    },
  ];

  return (
    <section className="bg-[#fff] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Visa Information"
          title="Student Visa"
          highlight="Requirements"
          description={data.description}
          align="center"
          primaryColor="#00A8B5"
        />

        {/* ================= MOBILE VIEW ================= */}
        <div className="mt-10 space-y-5 md:hidden">
          {groupedRequirements.map((section, sectionIndex) => {
            const HeaderIcon = section.icon;

            return (
              <div
                key={sectionIndex}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dce6e8]
                  bg-white
                  shadow-sm
                "
              >
                {/* HEADER */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    bg-[#dfecee]
                    px-4
                    py-4
                  "
                >
                  <div className="text-[#0A8F96]">
                    <HeaderIcon size={18} />
                  </div>

                  <h3
                    className="
                      text-[22px]
                      font-semibold
                      text-[#183153]
                    "
                  >
                    {section.title}
                  </h3>
                </div>

                {/* ITEMS */}
                <div className="space-y-4 px-4 py-5">
                  {section.items.map((item: any, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* BULLET */}
                      <div
                        className="
                            mt-[5px]
                            flex
                            h-4
                            w-4
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#ff8c42]
                          "
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#ff8c42]" />
                      </div>

                      {/* TEXT */}
                      <p
                        className="
                            text-[13px]
                            leading-6
                            text-gray-700
                          "
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}

                  {/* VIEW DETAILS */}
                  <button
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-end
                      gap-1
                      text-[12px]
                      font-medium
                      text-[#ff8c42]
                    "
                  >
                    View Details
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}

          {/* IMPORTANT NOTES */}
          <div className="space-y-4">
            {data.importantNotes.map((note: string, i: number) => (
              <div
                key={i}
                className="
                    rounded-2xl
                    border
                    border-[#F4C7A1]
                    bg-[#FFF8F2]
                    px-5
                    py-5
                  "
              >
                <p
                  className="
                      text-[13px]
                      leading-7
                      text-gray-700
                    "
                >
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* CONTACT CARD */}
          <div
            className="
              rounded-2xl
              bg-[#163B65]
              p-5
              text-white
            "
          >
            <h3
              className="
                text-[32px]
                font-semibold
                leading-[1.1]
              "
            >
              Ready to Start Your Journey?
            </h3>

            <p
              className="
                mt-4
                text-[13px]
                leading-7
                text-white/80
              "
            >
              Apply now and take the first step toward studying at Presidency
              University. Our admissions team is here to support you at every
              stage.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-[13px] text-white/85">
                <Mail size={16} />
                admissions@presidency.international
              </div>

              <div className="flex items-center gap-3 text-[13px] text-white/85">
                <Phone size={16} />
                +91 9022092222
              </div>

              <div className="flex items-center gap-3 text-[13px] text-white/85">
                <ExternalLink size={16} />
                apply.presidencyuniversity.in
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-7
                flex
                h-[54px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0A8F96]
                text-sm
                font-medium
                text-white
              "
            >
              APPLY NOW
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden md:block">
          {/* REQUIREMENT GROUPS */}
          <div className="mt-16 space-y-8">
            {groupedRequirements.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {/* SECTION TITLE */}
                <h3
                  className="
                      mb-5
                      text-2xl
                      font-semibold
                      text-[#183153]
                    "
                >
                  {section.title}
                </h3>

                {/* BOX */}
                <div
                  className="
                      rounded-2xl
                      border
                      border-[#87D6DC]
                      bg-white
                      px-8
                      py-8
                    "
                >
                  <div className="space-y-7">
                    {section.items.map((item: any, index: number) => {
                      const Icon = iconMap[item.icon];

                      return (
                        <div key={index} className="flex items-start gap-5">
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
                                  bg-[#E7F7F8]
                                  text-[#00A8B5]
                                "
                          >
                            {Icon && <Icon size={18} />}
                          </div>

                          {/* TEXT */}
                          <div>
                            <h4
                              className="
                                    text-base
                                    font-semibold
                                    text-[#183153]
                                  "
                            >
                              {item.title}
                            </h4>

                            <p
                              className="
                                    mt-2
                                    text-sm
                                    leading-7
                                    text-gray-600
                                  "
                            >
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* AFTER ARRIVAL */}
          <div
            className="
              mt-10
              rounded-2xl
              bg-[#0F2D52]
              px-8
              py-6
              text-white
            "
          >
            <div className="flex items-start gap-4">
              {/* ICON */}
              <div className="mt-1 text-[#F58233]">
                <AlertCircle size={18} />
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg font-semibold">
                  {data.afterArrival.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-white/80
                  "
                >
                  {data.afterArrival.description}
                </p>
              </div>
            </div>
          </div>

          {/* IMPORTANT NOTES */}
          <div className="mt-6 space-y-4">
            {data.importantNotes.map((note: string, i: number) => (
              <div
                key={i}
                className="
                    rounded-xl
                    border
                    border-[#F4C7A1]
                    bg-[#FFF8F2]
                    px-5
                    py-4
                  "
              >
                <p
                  className="
                      text-sm
                      leading-7
                      text-gray-700
                    "
                >
                  {note}
                </p>
              </div>
            ))}
          </div>

          {/* CONTACT CTA */}
          <div
            className="
              mt-10
              rounded-2xl
              bg-[#0F2D52]
              px-8
              py-8
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
                Ready to Start Your{" "}
                <span className="text-[#35C0C8] italic">Journey?</span>
              </h3>

              <div className="mt-5 space-y-3 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <Mail size={16} />
                  admissions@presidency.international
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} />
                  +91 9022092222
                </div>

                <div className="flex items-center gap-3">
                  <ExternalLink size={16} />
                  apply.presidencyuniversity.in
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-md
                border border-white
                px-6
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-white/10
                md:mt-0
              "
            >
              CONTACT NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
