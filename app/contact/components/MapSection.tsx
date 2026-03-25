"use client";

import { MapPin } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function MapSection() {
  return (
    <section className="py-20 bg-[#F5F6F8]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Find Us"
          title="Visit Our"
          highlight="Campus"
          description="Presidency University is located in Bengaluru, offering a vibrant and accessible campus environment."
          primaryColor="#0A8F96"
        />

        {/* 🔥 MAP CARD */}
        <div className="bg-[#F5F6F8] rounded-2xl shadow-md overflow-hidden">
          {/* MAP */}
          <iframe
            src="https://www.google.com/maps?q=Presidency+University+Bangalore&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
          ></iframe>

          {/* INFO BAR */}
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3 text-gray-700 text-sm">
              <MapPin size={18} className="mt-1 text-[#0A8F96]" />
              <div>
                Presidency University, Rajanukunte, Yelahanka, Bengaluru –
                560119, India
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Presidency+University+Bangalore"
              target="_blank"
              className="bg-[#0A8F96] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#0BB5B5] transition"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
