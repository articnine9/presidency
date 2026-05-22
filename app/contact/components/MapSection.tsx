"use client";

import { MapPin, Send } from "lucide-react";

export default function MapSection() {
  return (
    <section className="bg-[#F7F7F5] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center">
          {/* TAG */}
          <span
            className="
              inline-block
              rounded-xl
              bg-[#FFF1E8]
              px-4
              py-2
              text-[11px]
              font-medium
              text-[#F58233]

              md:rounded-md
              md:text-xs
            "
          >
            Find Us
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-5
              text-[40px]
              font-semibold
              leading-[1.1]
              tracking-tight
              text-[#183153]

              md:text-5xl
            "
          >
            Visit Our <span className="text-[#F58233]">Campus</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[13px]
              leading-7
              text-gray-600

              md:max-w-3xl
              md:text-sm
            "
          >
            Presidency University is located in Bengaluru, offering a vibrant
            and accessible campus environment.
          </p>
        </div>

        {/* ================= MOBILE VIEW ================= */}
        <div className="mt-10 block md:hidden">
          {/* MAP CARD */}
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-[#E4E7EB]
              bg-white
              shadow-sm
            "
          >
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=Presidency+University+Bangalore&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />

            {/* ADDRESS */}
            <div className="px-5 py-5">
              <div
                className="
                  flex
                  items-start
                  gap-3
                  text-[13px]
                  leading-7
                  text-gray-600
                "
              >
                <MapPin size={16} className="mt-1 text-[#F58233]" />

                <p>
                  Presidency University, Rajanukunte, Yelahanka, Bengaluru –
                  560119, India
                </p>
              </div>

              {/* BUTTON */}
              <a
                href="https://www.google.com/maps/place/Presidency+University+Bangalore"
                target="_blank"
                className="
                  mt-6
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F4A261]
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-[#E98E43]
                "
              >
                OPEN IN GOOGLE MAP
                <MapPin size={15} />
              </a>
            </div>
          </div>

          {/* FORM CARD */}
          <div
            className="
              mt-5
              rounded-3xl
              border
              border-[#E4E7EB]
              bg-[#F8F6F1]
              px-5
              py-6
              shadow-sm
            "
          >
            {/* TITLE */}
            <h3
              className="
                text-[28px]
                font-semibold
                text-[#183153]
              "
            >
              Send Us a Message
            </h3>

            {/* FORM */}
            <form className="mt-6">
              {/* FULL NAME */}
              <div>
                <label className="mb-2 block text-[13px] text-[#183153]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    h-[52px]
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    text-[13px]
                    outline-none
                    transition
                    focus:border-[#F58233]
                  "
                />
              </div>

              {/* EMAIL */}
              <div className="mt-5">
                <label className="mb-2 block text-[13px] text-[#183153]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    h-[52px]
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    text-[13px]
                    outline-none
                    transition
                    focus:border-[#F58233]
                  "
                />
              </div>

              {/* PHONE */}
              <div className="mt-5">
                <label className="mb-2 block text-[13px] text-[#183153]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="
                    h-[52px]
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    text-[13px]
                    outline-none
                    transition
                    focus:border-[#F58233]
                  "
                />
              </div>

              {/* SUBJECT */}
              <div className="mt-5">
                <label className="mb-2 block text-[13px] text-[#183153]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="
                    h-[52px]
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    text-[13px]
                    outline-none
                    transition
                    focus:border-[#F58233]
                  "
                />
              </div>

              {/* MESSAGE */}
              <div className="mt-5">
                <label className="mb-2 block text-[13px] text-[#183153]">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-300
                    bg-white
                    px-4
                    py-4
                    text-[13px]
                    outline-none
                    transition
                    focus:border-[#F58233]
                  "
                />
              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-6
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#F2994A]
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#EB8B36]
                "
              >
                SUBMIT MESSAGE
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:grid mt-14 gap-8 lg:grid-cols-2">
          {/* MAP CARD */}
          <div
            className="
              overflow-hidden
              rounded-2xl
              border border-[#D7E3E3]
              bg-white
              shadow-sm
            "
          >
            {/* MAP */}
            <iframe
              src="https://www.google.com/maps?q=Presidency+University+Bangalore&output=embed"
              className="h-[340px] w-full border-0"
              loading="lazy"
            />

            {/* ADDRESS */}
            <div className="px-6 py-5">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={16} className="mt-1 text-[#F58233]" />

                <p>
                  Presidency University, Rajanukunte, Yelahanka, Bengaluru –
                  560119, India
                </p>
              </div>

              {/* BUTTON */}
              <a
                href="https://www.google.com/maps/place/Presidency+University+Bangalore"
                target="_blank"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-md
                  bg-[#F4A261]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition hover:bg-[#E98E43]
                "
              >
                VIEW MAP
                <MapPin size={14} />
              </a>
            </div>
          </div>

          {/* FORM CARD */}
          <div
            className="
              rounded-2xl
              border border-[#D7E3E3]
              bg-white
              px-8
              py-8
              shadow-sm
            "
          >
            {/* FORM TITLE */}
            <h3
              className="
                text-center
                text-2xl
                font-semibold
                text-[#F58233]
              "
            >
              Send Us a Message
            </h3>

            {/* FORM */}
            <form className="mt-8">
              {/* ROW 1 */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#183153]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-lg
                      border border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#F58233]
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#183153]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      rounded-lg
                      border border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#F58233]
                    "
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-[#183153]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="
                      w-full
                      rounded-lg
                      border border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#F58233]
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-[#183153]">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="
                      w-full
                      rounded-lg
                      border border-gray-300
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      focus:border-[#F58233]
                    "
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-5">
                <label className="mb-2 block text-sm text-[#183153]">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="
                    w-full
                    rounded-lg
                    border border-gray-300
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-[#F58233]
                  "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
