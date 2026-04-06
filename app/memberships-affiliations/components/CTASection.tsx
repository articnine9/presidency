"use client";

export default function CTASection() {
  return (
    <>

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
                Start your global academic journey with
                Presidency University
              </p>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">

              {/* Button */}
              <button className="ml-3 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-2.5 rounded-lg flex items-center gap-3 text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
              <button className="border border-[#c4a45b] text-[#c4a45b] px-5 py-2 rounded-lg  text-sm font-medium hover:bg-[#c4a45b] hover:text-white transition">
                Talk to Counsellor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-12 px-6">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="rounded-xl bg-gradient-to-r from-[#0F1E3D] to-[#0F1E3D] text-white py-10 px-6 text-center shadow-lg">
           
            <h2 className="text-3xl md:text-4xl  text-[#fff] mb-4">
              Start your global academic journey with <br />
              Presidency University
            </h2>

    
            <div className="flex justify-center gap-4 flex-wrap">
         
              <button className="ml-3 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-2.5 rounded-lg flex items-center gap-3 text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                Apply Now
              </button>

              <button className="border border-[#c4a45b] text-[#c4a45b] px-5 py-2 rounded-lg  text-sm font-medium hover:bg-[#c4a45b] hover:text-white transition">
                Talk to Counsellor
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </>

  );
}
