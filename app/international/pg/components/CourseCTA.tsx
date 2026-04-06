export default function CourseCTA() {
  return (
    <section className="bg-[#F6F7FB] pb-16 pt-20 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-6 ">
        <div className="bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Your Next Move{" "}
              <span className="text-teal-400 italic">Awaits</span>
            </h2>

            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Begin an extraordinary journey at Presidency University,
              Bengaluru.
            </p>
          </div>

          {/* Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            APPLY NOW →
          </button>
        </div>
      </div>
    </section>
  );
}
