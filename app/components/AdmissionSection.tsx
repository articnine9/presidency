"use client";

import { useState } from "react";

/* ---------- DATA ---------- */

const admissionContent = {
  tag: "International Admissions Open",
  title: "BEGIN YOUR",
  highlight: "GLOBAL EDUCATION JOURNEY",
  description:
    "Join Presidency University in Bangalore and gain access to world-class programmes, international collaborations, and industry-driven learning designed for global careers.",
};

const benefits = [
  "Industry-Aligned Programmes",
  "Global Academic Partnerships",
  "Modern 100-Acre Campus in Bangalore",
];

const programOptions = [
  "Engineering & Technology",
  "Business & Management",
  "Commerce & Finance",
  "Law",
  "Design & Creative Arts",
  "Media & Communication",
];

/* ---------- COMPONENT ---------- */

export function AdmissionSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-28 overflow-hidden text-white">
      {/* TOP CURVE */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-[100px]">
          <path d="M0,80 C360,120 1080,0 1440,80 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div> */}

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1523240795612-9a054b0db644)",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1e3a5f]/85"></div>

      {/* GLOW */}
      <div className="absolute left-0 top-0 w-[300px] h-[300px] bg-[#ff8c42]/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-20">
        {/* LEFT CONTENT */}

        <div>
          <span className="inline-block bg-white/10 text-orange-400 px-4 py-2 rounded-full mb-4 backdrop-blur">
            {admissionContent.tag}
          </span>

          <h2 className="text-2xl md:text-4xl mb-6">
            {admissionContent.title}
            <span className="block text-orange-400">
              {admissionContent.highlight}
            </span>
          </h2>

          <p className="text-white/80 text-lg mb-8">
            {admissionContent.description}
          </p>

          <ul className="space-y-3 text-white/80">
            {benefits.map((item) => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </div>

        {/* FORM */}

        <div className="bg-white rounded-3xl p-8 shadow-2xl text-black">
          <h3 className="text-2xl mb-6 text-[#1e3a5f]">Apply for Admission</h3>

          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <select
              name="program"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select Programme</option>

              {programOptions.map((program) => (
                <option key={program}>{program}</option>
              ))}
            </select>

            <button className="w-full bg-[#ff8c42] text-white py-4 rounded-xl hover:bg-[#e67a32] transition font-semibold">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 120" className="w-full h-[100px]">
          <path d="M0,80 C360,120 1080,0 1440,80 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div> */}
    </section>
  );
}
