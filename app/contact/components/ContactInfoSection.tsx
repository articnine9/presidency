"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function ContactInfoSection() {
  return (
    <>
      {/* ================= CONTACT INFO ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* 🔥 HEADER */}
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-[#0A8F96] font-semibold mb-2">
              Contact Details
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f]">
              Get in Touch with Us
            </h2>
          </div>

          {/* 🔥 GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 🔹 OIA */}
            <div className="bg-[#F5F6F8] rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                Office of International Affairs (OIA)
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                For international student enquiries, collaborations, and
                partnerships.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <a
                    href="mailto:admission@presidency.international"
                    className="hover:text-[#0A8F96]"
                  >
                    admission@presidency.international
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+919022092222" className="hover:text-[#0A8F96]">
                    +91 9022092222
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={16} />
                  <a
                    href="https://presidency.international"
                    target="_blank"
                    className="hover:text-[#0A8F96]"
                  >
                    presidency.international
                  </a>
                </li>
              </ul>
            </div>

            {/* 🔹 ADMISSIONS */}
            <div className="bg-[#F5F6F8] rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                Admissions Office
              </h3>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+919022092222" className="hover:text-[#0A8F96]">
                    +91 9022092222
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+919024060000" className="hover:text-[#0A8F96]">
                    +91 9024060000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <a
                    href="mailto:admission@presidency.international"
                    className="hover:text-[#0A8F96]"
                  >
                    admission@presidency.international
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe size={16} />
                  <a
                    href="https://apply.presidency.international"
                    target="_blank"
                    className="hover:text-[#0A8F96]"
                  >
                    apply.presidency.international
                  </a>
                </li>
              </ul>
            </div>

            {/* 🔹 ADDRESS */}
            <div className="bg-[#F5F6F8] rounded-xl p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                Main Campus Address
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1" />
                  <div>
                    Presidency University <br />
                    Rajanukunte, Yelahanka <br />
                    Bengaluru, Karnataka – 560119 <br />
                    India
                  </div>
                </li>

                <li className="flex items-center gap-3 mt-2">
                  <Phone size={16} />
                  <a href="tel:+918023093500" className="hover:text-[#0A8F96]">
                    +91 080-23093500
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOCIAL MEDIA ================= */}
      <section className="py-16 bg-[#F5F6F8]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#0A8F96] font-semibold mb-2">
            Connect With Us
          </p>

          <h2 className="text-2xl md:text-3xl font-serif text-[#1e3a5f] mb-8">
            Follow Presidency University
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {["Facebook", "Instagram", "LinkedIn", "YouTube", "Twitter/X"].map(
              (platform, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white px-6 py-3 rounded-full text-sm shadow-sm hover:shadow-md hover:bg-[#0A8F96] hover:text-white transition"
                >
                  {platform}
                </a>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
