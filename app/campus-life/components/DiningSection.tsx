"use client";

import Image from "next/image";

export default function DiningSection() {
  return (
    <section className="w-full bg-[#0d2a4a]">
      <div className="max-w-[1400px] mx-auto ">
        <div className="grid md:grid-cols-2">
          {/* LEFT PANEL */}
          <div className="bg-[#0d2a4a] text-white flex flex-col justify-center px-8 py-16 md:py-24">
            <h2 className="text-2xl md:text-4xl leading-snug">
              DINING & <br /> GLOBAL CUISINES
            </h2>

            <p className="mt-4 text-lg text-gray-300 max-w-md">
              Diverse food options catering to international palates.
            </p>

            <p className="mt-3 text-base text-gray-400 max-w-md">
              Indulge in delectable multi-cuisine restaurant.
            </p>

            <button className="mt-6 text-sm  underline underline-offset-4 hover:text-gray-300 text-left">
              Learn More →
            </button>
          </div>

          {/* RIGHT GRID */}
          <div className="relative grid grid-cols-3 grid-rows-2 h-[350px] md:h-auto pr-6">
            {/* Image 1 */}
            <div className="relative">
              <Image src="/food1.jpg" alt="" fill className="object-cover" />
              <Label text="Continental" />
            </div>

            {/* Image 2 */}
            <div className="relative">
              <Image src="/food2.jpg" alt="" fill className="object-cover" />
              <Label text="Asian" />
            </div>

            {/* Image 3 */}
            <div className="relative">
              <Image src="/food3.jpg" alt="" fill className="object-cover" />
              <Label text="Indian" />
            </div>

            {/* Bottom Images */}
            <div className="relative">
              <Image src="/food4.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="relative">
              <Image src="/food5.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="relative">
              <Image src="/food6.jpg" alt="" fill className="object-cover" />
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-md flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-lg"></span>
              <p className="text-xs font-medium text-gray-800">
                Verified Student Cuisines Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Label Component */
function Label({ text }: { text: string }) {
  return (
    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
      {text}
    </div>
  );
}
