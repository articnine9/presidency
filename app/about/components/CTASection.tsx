"use client";

export default function CTASection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* 🔥 CTA BOX */}
        <div className="rounded-xl bg-gradient-to-r from-[#0F1E3D] to-[#0F1E3D] text-white py-10 px-6 text-center shadow-lg">
          {/* TEXT */}
          <h2 className="text-3xl md:text-4xl  text-[#fff] mb-4">
            Start your global academic journey with <br />
            Presidency University
          </h2>

          {/* BUTTONS */}
          <div className="flex justify-center gap-4 flex-wrap">
            {/* PRIMARY BUTTON */}
            <button className="ml-3 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-2.5 rounded-lg flex items-center gap-3 text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Apply Now
            </button>

            {/* SECONDARY BUTTON */}
            <button className="border border-[#c4a45b] text-[#c4a45b] px-5 py-2 rounded-lg  text-sm font-medium hover:bg-[#c4a45b] hover:text-white transition">
              Talk to Counsellor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
