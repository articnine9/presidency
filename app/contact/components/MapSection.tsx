"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
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

        {/* 🔥 TWO COLUMN GRID */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ================= MAP ================= */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Presidency+University+Bangalore&output=embed"
              className="w-full h-110 border-0"
              loading="lazy"
            ></iframe>

            <div className="p-6 flex flex-col gap-4">
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
                className="w-fit bg-[#0A8F96] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#0BB5B5] transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">
              Send Us a Message
            </h3>

            <form className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-700 mb-1 block">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-1 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-1 block">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-1 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm text-gray-700 mb-1 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A8F96]"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#0A8F96] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0BB5B5] transition shadow-md"
                >
                  Submit Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
