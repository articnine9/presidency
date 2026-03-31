import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Utensils,
  Leaf,
  Globe,
  Coffee,
  Info,
  MapPin,
  Sparkles,
} from "lucide-react";

const DiningSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Campus Life"
          title="Dining on Campus at"
          highlight="Presidency University"
          description="A diverse and student-friendly food ecosystem offering comfort, nutrition, and global flavours."
        />

        {/* TOP SPLIT */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              The Presidency University campus offers a variety of dining
              options designed to suit diverse tastes and dietary preferences.
              Students enjoy hygienic, freshly prepared meals throughout the
              day.
            </p>

            <p className="text-gray-500 mt-4">
              The cafeteria and food courts serve North Indian, South Indian,
              and continental cuisine, along with vegetarian and vegan-friendly
              meals.
            </p>

            {/* INFO BOX */}
            <div className="mt-6 flex gap-3 bg-yellow-50 border border-yellow-200 text-yellow-800 text-sm p-4 rounded-xl">
              <Info className="w-5 h-5 mt-0.5" />
              <p>
                Specific outlets, opening hours, and dietary labels (halal,
                Jain, allergy-friendly) should be confirmed with the university.
              </p>
            </div>
          </div>

          {/* RIGHT FEATURE */}
          <div className="bg-white border rounded-2xl p-8 shadow-md">
            <div className="flex items-center gap-2 mb-4 text-[#0A8F96]">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-xl font-semibold text-[#0F1E3D]">
                Designed for Global Students
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              For international students unfamiliar with Indian cuisine, the
              campus food experience is approachable and balanced — blending
              global flavours with authentic local dishes.
            </p>

            <div className="mt-6 space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0A8F96]" />
                <span>Global & Indian cuisine balance</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#0A8F96]" />
                <span>Vegetarian & vegan-friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-[#0A8F96]" />
                <span>Mild & adaptable flavours</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-[#0A8F96]" />
                <span>Comfort food options available</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOD GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-5 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition">
            <Utensils className="w-6 h-6 text-[#0A8F96]" />
            <h4 className="mt-3 font-semibold text-[#0F1E3D]">Main Meals</h4>
            <p className="text-xs text-gray-600 mt-1">
              North & South Indian meals served daily.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition">
            <Leaf className="w-6 h-6 text-[#0A8F96]" />
            <h4 className="mt-3 font-semibold text-[#0F1E3D]">
              Vegetarian & Vegan
            </h4>
            <p className="text-xs text-gray-600 mt-1">
              Healthy plant-based and nutritious options.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition">
            <Globe className="w-6 h-6 text-[#0A8F96]" />
            <h4 className="mt-3 font-semibold text-[#0F1E3D]">Continental</h4>
            <p className="text-xs text-gray-600 mt-1">
              Pasta, baked dishes, and global cuisine.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition">
            <Coffee className="w-6 h-6 text-[#0A8F96]" />
            <h4 className="mt-3 font-semibold text-[#0F1E3D]">
              Cafés & Snacks
            </h4>
            <p className="text-xs text-gray-600 mt-1">
              Beverages, quick bites, and hangout spaces.
            </p>
          </div>
        </div>

        {/* CITY SECTION */}
        <div className="mt-20 flex gap-4 bg-[#0A8F96]/5 border border-[#0A8F96]/20 p-8 rounded-2xl">
          <MapPin className="w-6 h-6 text-[#0A8F96]" />

          <div>
            <h3 className="text-lg font-semibold text-[#0F1E3D] mb-2">
              Beyond Campus: Bengaluru Food Scene
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Located in Yelahanka, the campus offers easy access to Bengaluru’s
              vibrant food culture — from local street food to international
              restaurant chains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
