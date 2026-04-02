"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "../../../styles/about.css";

export default function MembershipsAffiliationsHero() {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Mandatory Disclosures", link: "/about-us/mandatory-disclosures" },
    { name: "Memberships & Affiliations", link: "" },
  ];

  return (
    <>
      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {breadcrumbs.map((item, index, arr) => (
              <span key={index}>
                {index !== arr.length - 1 ? (
                  <a
                    href={item.link}
                    className="hover:text-[#0A8F96] transition"
                  >
                    {item.name}
                  </a>
                ) : (
                  <span className="text-[#0A8F96] font-medium">
                    {item.name}
                  </span>
                )}
                {index !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={
              "https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            }
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/80 via-[#0F1E3D]/70 to-[#0F1E3D]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 w-full">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif mb-4 leading-tight"
            >
              Memberships &
              <span className="italic text-[#D4A843]">{"  "}Affiliations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mb-6"
            >
              Presidency University takes pride in its esteemed memberships and
              affiliations with prestigious national and international
              organizations, accrediting bodies, and professional networks that
              validate our commitment to academic excellence and quality
              education.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/90 mb-6"
            >
              Rajanukunte, Yelahanka, Bengaluru, Karnataka, Pin: 560119, India
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-[#0A8F96] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-base md:text-lg">
              View All Memberships
              <ArrowRight size={18} />
            </button>
            <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-base md:text-lg">
              Download Affiliation Letter
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
