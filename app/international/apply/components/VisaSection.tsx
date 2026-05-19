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
  return (
    <section className="bg-[#fffbf5] py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Visa Information"
          title="Student Visa"
          highlight="Requirements"
          description={data.description}
          align="center"
        />

        {/* 🔥 REQUIREMENTS GRID */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {data.requirements.map((item: any, index: number) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={index}
                className="rounded-xl border border-b-4 border-b-[#0A8F96] bg-[#f9fafb] p-4 transition hover:shadow-md sm:p-5"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg 
                    bg-[#0A8F96]/10 text-[#0A8F96]"
                  >
                    {Icon && <Icon size={18} />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold leading-snug text-gray-800 sm:text-lg md:text-xl">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 AFTER ARRIVAL */}
        <div className="mt-10 rounded-xl bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] p-5 text-center text-white sm:mt-14 sm:p-8">
          <h3 className="mb-2 text-base sm:text-lg">{data.afterArrival.title}</h3>
          <p className="text-sm text-white opacity-90 sm:text-base">
            {data.afterArrival.description}
          </p>
        </div>

        {/* 🔥 IMPORTANT NOTES */}
        <div className="mt-10 space-y-4">
          {data.importantNotes.map((note: string, i: number) => (
            <div
              key={i}
              className="rounded-md border-l-4 border-orange-400 bg-[#fff7ed] p-3 sm:p-4"
            >
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                {note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
