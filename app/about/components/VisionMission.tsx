"use client";

import { CheckCircle } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="py-16 px-6 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 🔹 TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
          VISION, MISSION & VALUES
        </h2>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* 🔵 VISION CARD */}
          <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/about/vision.jpg"
              className="w-full h-[180px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-semibold text-sm">VISION</h3>
            </div>
          </div>

          {/* 🟡 MISSION CARD */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-semibold text-gray-800 mb-4">MISSION</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Fomentment of mission</strong>
                  <br />
                  Mission-driven motivations
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Reequipments</strong>
                  <br />
                  Innovation possibilities
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Excellences</strong>
                  <br />
                  Innovation standards
                </span>
              </li>
            </ul>
          </div>

          {/* 🟢 VALUES CARD */}
          <div className="bg-white rounded-xl shadow-md p-5">
            <h3 className="font-semibold text-gray-800 mb-4">VALUES</h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Innovation</strong>
                  <br />
                  Inspiring keywords
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Integrity</strong>
                  <br />
                  Integrated keywords
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Excellence</strong>
                  <br />
                  Short most excellence
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
