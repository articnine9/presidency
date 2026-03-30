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
    <section className="py-20 bg-[#fffbf5]">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Visa Information"
          title="Student Visa"
          highlight="Requirements"
          description={data.description}
          align="center"
        />

        {/* 🔥 REQUIREMENTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {data.requirements.map((item: any, index: number) => {
            const Icon = iconMap[item.icon];

            return (
              <div
                key={index}
                className="bg-[#f9fafb] rounded-xl p-5 border hover:shadow-md transition border-b-4 border-b-[#0A8F96]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg 
                    bg-[#0A8F96]/10 text-[#0A8F96]"
                  >
                    {Icon && <Icon size={18} />}
                  </div>

                  <div>
                    <h4 className="text-xl  text-gray-800">{item.title}</h4>
                    <p className="text-base text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 AFTER ARRIVAL */}
        <div className="mt-14 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white rounded-xl p-8 text-center">
          <h3 className="text-lg mb-2">{data.afterArrival.title}</h3>
          <p className="text-base opacity-90 text-white">
            {data.afterArrival.description}
          </p>
        </div>

        {/* 🔥 IMPORTANT NOTES */}
        <div className="mt-10 space-y-4">
          {data.importantNotes.map((note: string, i: number) => (
            <div
              key={i}
              className="bg-[#fff7ed] border-l-4 border-orange-400 p-4 rounded-md"
            >
              <p className="text-base text-gray-700">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
