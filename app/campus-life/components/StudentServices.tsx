import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Globe,
  FileCheck,
  Laptop,
  Briefcase,
  BookOpen,
  BadgeDollarSign,
  ShieldCheck,
  Scale,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Office of International Affairs",
    desc: "End-to-end support for international students including pre-arrival guidance, onboarding, and visa assistance.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "FRRO / e-FRRO Support",
    desc: "Dedicated assistance for foreign student registration and compliance with FRRO requirements in India.",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Academic Helpdesk & Portal",
    desc: "Access timetables, results, academic records, and notices through the Linways student platform.",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Career Services",
    desc: "18-member L&D team providing training, mock interviews, aptitude coaching, and placement support.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Library & Digital Resources",
    desc: "Extensive academic resources including digital databases and research materials.",
  },
  {
    icon: <BadgeDollarSign className="w-6 h-6" />,
    title: "Financial & Scholarships",
    desc: "Guidance on scholarships, financial aid, and funding opportunities.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Campus Safety & Committees",
    desc: "Anti-Ragging, Internal Complaints, and Grievance Redressal ensuring a safe environment.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Inclusion & Equality Cells",
    desc: "Dedicated cells promoting diversity, gender sensitisation, and equal opportunities.",
  },
];

const StudentServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Student Support"
          title="Comprehensive Student Services at"
          highlight="Presidency University"
          description="A robust ecosystem designed to support academic success, personal well-being, and a smooth transition for international students in India."
          primaryColor="#0A8F96"
        />

        {/* TOP SPLIT SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          {/* LEFT TEXT */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Presidency University provides a strong support system that
              ensures every student thrives academically and personally. From
              international onboarding and visa assistance to career development
              and campus safety, every service is structured to deliver a
              seamless university experience.
            </p>

            <p className="text-gray-500 mt-4 text-lg">
              Special emphasis is placed on international student services in
              Bangalore, making the transition to studying in India smooth,
              guided, and secure.
            </p>
          </div>

          {/* RIGHT HIGHLIGHT CARD */}
          <div className="bg-gradient-to-br from-[#0A8F96] to-[#0F6B73] text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl mb-3">International Student Support</h3>
            <p className="text-base opacity-90 leading-relaxed text-white">
              Dedicated assistance for global students including visa guidance,
              FRRO registration, onboarding support, and continuous engagement
              throughout their academic journey in India.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="text-white">✔ Pre-arrival guidance</p>
              <p className="text-white">✔ FRRO registration assistance</p>
              <p className="text-white">✔ On-campus integration</p>
              <p className="text-white">✔ Continuous advisory support</p>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-gray-50 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition duration-300"
            >
              <div className="text-[#0A8F96] mb-3 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h4 className=" text-[#0F1E3D] text-xl mb-2">{service.title}</h4>

              <p className="text-base text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentServices;
