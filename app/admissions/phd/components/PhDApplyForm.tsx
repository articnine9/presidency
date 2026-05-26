"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";

const schools = [
  "Computer Science & Engineering",
  "Engineering",
  "Information Science",
  "Management",
  "Commerce",
  "Design",
  "Law",
  "Media Studies",
  "Liberal Arts & Sciences",
  "Health Sciences",
];

export default function PhDApplyForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    school: "",
    research: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F6F7FB]" id="apply">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT — Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-[#E6F4F5] text-[#0A8F96] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-md mb-4">
              Apply Now
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0F1E3D] leading-snug mb-6">
              Start Your Doctoral <br />
              <span className="text-[#0A8F96]">Application</span>
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
              Fill in the enquiry form and our admissions team will get in touch
              with you within 2 working days to guide you through the process.
            </p>

            {/* Key info */}
            <div className="space-y-4">
              {[
                { label: "Intake", value: "July / January (Biannual)" },
                { label: "Application Fee", value: "₹1,000 (non-refundable)" },
                { label: "Duration", value: "3–5 Years (Full-Time)" },
                { label: "Mode", value: "Full-Time On-Campus" },
                { label: "Contact", value: "admissions@presidency.edu.in" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0A8F96]" />
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-[#0F1E3D]">{item.label}:</span>{" "}
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A8F96]/10">
                  <Send size={28} className="text-[#0A8F96]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0F1E3D]">
                  Application Received!
                </h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Thank you for your enquiry. Our admissions team will contact you within 2 working days.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-[#0F1E3D] mb-6">
                  Ph.D. Enquiry Form
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/40 focus:border-[#0A8F96]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/40 focus:border-[#0A8F96]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        onChange={handleChange}
                        placeholder="+91 XXXXXXXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/40 focus:border-[#0A8F96]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Highest Qualification *</label>
                      <input
                        type="text"
                        name="qualification"
                        required
                        onChange={handleChange}
                        placeholder="e.g. M.Tech, MBA, LL.M"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/40 focus:border-[#0A8F96]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">School of Interest *</label>
                    <select
                      name="school"
                      required
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/40 focus:border-[#0A8F96] bg-white"
                    >
                      <option value="">Select a school</option>
                      {schools.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">
                      Research Interest / Topic <span className="text-gray-400">(optional)</span>
                    </label>
                    <textarea
                      name="research"
                      rows={3}
                      onChange={handleChange}
                      placeholder="Briefly describe your area of research interest..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A8F96]/40 focus:border-[#0A8F96] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#0A8F96] hover:bg-[#097e85] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200"
                  >
                    Submit Enquiry
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting you agree to our Privacy Policy. We will never share your data.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
