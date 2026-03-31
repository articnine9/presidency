import CommonHeader from "@/app/components/CommonHeader";
import {
  BedDouble,
  Utensils,
  ShieldCheck,
  HeartPulse,
  Bus,
  Home,
} from "lucide-react";

const StudentHousingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag="Campus Life"
          title="Student"
          highlight="Housing"
          primaryColor="#0A8F96"
          description="Safe, modern, and comfortable on-campus accommodation for students."
          descriptionColor="#475569"
        />

        {/* 🔹 GRID */}
        <div className="grid lg:grid-cols-2 gap-14 mt-12 items-center">
          {/* 🔸 LEFT CONTENT */}
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p className="text-base">
              Presidency University provides safe, modern on-campus residential
              facilities for both male and female students. Designed with the
              international student experience in mind, the hostels offer a
              secure and comfortable living environment within the university
              grounds.
            </p>

            <p className="text-base">
              The university operates multiple hostel blocks with separate
              facilities for male and female students. Rooms are available in
              twin and triple-sharing formats, fully furnished with beds, study
              tables, cupboards, and free Wi-Fi.
            </p>

            <p className="text-base">
              Students benefit from dining services offering four meals a day,
              along with amenities such as laundry rooms, common areas, indoor
              and outdoor games, and purified drinking water.
            </p>

            <p className="text-base">
              For safety and wellbeing, the hostels provide 24/7 security with
              CCTV, resident wardens, medical support, and emergency services.
            </p>

            {/* 🔹 CTA */}
            <button className="mt-4 px-7 py-3 bg-[#0A8F96] text-white rounded-lg hover:bg-[#0BB5B5] transition">
              Apply for Accommodation
            </button>
          </div>

          {/* 🔸 RIGHT CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-[#0A8F96]">
              <BedDouble className="text-[#0A8F96] mb-3" />
              <h4 className="font-semibold text-[#0F1E3D]">Furnished Rooms</h4>
              <p className="text-base text-gray-500 mt-2">
                Twin & triple-sharing rooms with Wi-Fi and storage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-[#0A8F96]">
              <Utensils className="text-[#0A8F96] mb-3" />
              <h4 className="font-semibold text-[#0F1E3D]">Dining</h4>
              <p className="text-base text-gray-500 mt-2">
                Four meals daily with veg & non-veg options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-[#0A8F96]">
              <ShieldCheck className="text-[#0A8F96] mb-3" />
              <h4 className="font-semibold text-[#0F1E3D]">24/7 Security</h4>
              <p className="text-base text-gray-500 mt-2">
                CCTV monitoring, wardens, and safety support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-[#0A8F96]">
              <HeartPulse className="text-[#0A8F96] mb-3" />
              <h4 className="font-semibold text-[#0F1E3D]">Health Support</h4>
              <p className="text-base text-gray-500 mt-2">
                Medical room, nurse, and emergency ambulance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-[#0A8F96]">
              <Bus className="text-[#0A8F96] mb-3" />
              <h4 className="font-semibold text-[#0F1E3D]">Transport</h4>
              <p className="text-base text-gray-500 mt-2">
                Weekend transport to Yelahanka and city access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition border-b-4 border-b-[#0A8F96]">
              <Home className="text-[#0A8F96] mb-3" />
              <h4 className="font-semibold text-[#0F1E3D]">Off-Campus Help</h4>
              <p className="text-base text-gray-500 mt-2">
                Assistance in finding nearby accommodation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHousingSection;
