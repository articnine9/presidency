"use client";

import { Home, Train } from "lucide-react";

export default function LivingFoodSection() {
  return (
    <section className="bg-[#f3f4f6] py-16 px-6">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 🔹 TITLE */}
        <h2 className="text-3xl md:text-4xl text-[#1e3a5f]">
          WORLD-CLASS LIVING AND FOOD
        </h2>

        <p className="text-base text-gray-600 mb-10 max-w-xl">
          Cost of living is ens an interactive dashboard to elegants
          illustrative, interactive dashboard.
        </p>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 🏠 CARD 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:-translate-y-1 transition bs">
            <img
              src="/img/house.png"
              className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* 🔥 STRONG OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

            {/* TOP */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <h3 className="text-white text-xl tracking-wide drop-shadow-md">
                HOUSING & APARTMENTS
              </h3>

              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <Home size={16} />
              </div>
            </div>

            {/* 🔥 BOTTOM GLASS BOX */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl p-4 text-white">
              <p className="text-base opacity-80 text-white">Price</p>

              <p className="text-base text-white">$2,000/mo</p>

              <div className="w-full h-1 bg-white/30 rounded-full relative">
                <div className="absolute left-[60%] w-3 h-3 bg-white rounded-full -top-1 shadow"></div>
              </div>

              <div className="flex justify-between text-base  opacity-80">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>

          {/* 🚆 CARD 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group hover:-translate-y-1 transition">
            <img
              src="/img/trans.png"
              className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
            />

            {/* 🔥 STRONG OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

            {/* TOP */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <h3 className="text-white text-xl  tracking-wide drop-shadow-md">
                TRANSPORTATION & CONNECTIVITY
              </h3>

              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                <Train size={16} />
              </div>
            </div>

            {/* 🔥 BOTTOM GLASS BOX */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-md rounded-xl p-4 text-white">
              <p className="text-base opacity-80 text-white">Price</p>

              <p className="text-base font-semibold  text-white">
                $2,000/mo
              </p>

              <div className="w-full h-1 bg-white/30 rounded-full relative">
                <div className="absolute left-[40%] w-3 h-3 bg-white rounded-full -top-1 shadow"></div>
              </div>

              <div className="flex justify-between text-base  opacity-80">
                <span>Low</span>
                <span>High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
