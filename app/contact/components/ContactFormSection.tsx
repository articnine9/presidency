"use client";

import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section className="py-20 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 🔥 HEADER */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-[#0A8F96] font-semibold mb-2">
            Contact Form
          </p>

          <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f]">
            Send Us a Message
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        {/* 🔥 FORM CARD */}
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-10">
          <form className="grid md:grid-cols-2 gap-6">
            {/* NAME */}
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

            {/* EMAIL */}
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

            {/* PHONE */}
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

            {/* SUBJECT */}
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

            {/* MESSAGE */}
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

            {/* BUTTON */}
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
    </section>
  );
}
