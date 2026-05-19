"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import CommonHeader from "@/app/components/CommonHeader";

// === REPLACE THIS ARRAY WITH YOUR ACTUAL 62 MEMBERSHIPS ===
const memberships = [
  // Regulatory & Accreditation (1-8)
  {
    id: 1,
    name: "University Grants Commission (UGC)",
    logo: "/img/memberships/ugc.png",
    category: "Regulatory",
  },
  {
    id: 2,
    name: "National Assessment and Accreditation Council (NAAC)",
    logo: "/img/memberships/naac.png",
    category: "Accreditation",
  },
  {
    id: 3,
    name: "All India Council for Technical Education (AICTE)",
    logo: "/img/memberships/aicte.png",
    category: "Regulatory",
  },
  {
    id: 4,
    name: "Association of Indian Universities (AIU)",
    logo: "/img/memberships/aiu.png",
    category: "Association",
  },
  {
    id: 5,
    name: "National Institutional Ranking Framework (NIRF)",
    logo: "/img/memberships/nirf.png",
    category: "Ranking",
  },
  {
    id: 6,
    name: "QS I-GAUGE",
    logo: "/img/memberships/qs.png",
    category: "Ranking",
  },
  {
    id: 7,
    name: "Times Higher Education (THE)",
    logo: "/img/memberships/the.png",
    category: "Ranking",
  },
  {
    id: 8,
    name: "National Board of Accreditation (NBA)",
    logo: "/img/memberships/nba.png",
    category: "Accreditation",
  },

  // Professional Bodies (9-20)
  {
    id: 9,
    name: "Computer Society of India (CSI)",
    logo: "/img/memberships/csi.png",
    category: "Professional Body",
  },
  {
    id: 10,
    name: "Indian Society for Technical Education (ISTE)",
    logo: "/img/memberships/iste.png",
    category: "Professional Body",
  },
  {
    id: 11,
    name: "Institution of Engineers (India) (IEI)",
    logo: "/img/memberships/iei.png",
    category: "Professional Body",
  },
  {
    id: 12,
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    logo: "/img/memberships/ieee.png",
    category: "Professional Body",
  },
  {
    id: 13,
    name: "ACM – Association for Computing Machinery",
    logo: "/img/memberships/acm.png",
    category: "Professional Body",
  },
  {
    id: 14,
    name: "SAE India",
    logo: "/img/memberships/sae.png",
    category: "Professional Body",
  },
  {
    id: 15,
    name: "Confederation of Indian Industry (CII)",
    logo: "/img/memberships/cii.png",
    category: "Industry Body",
  },
  {
    id: 16,
    name: "Federation of Indian Chambers of Commerce & Industry (FICCI)",
    logo: "/img/memberships/ficci.png",
    category: "Industry Body",
  },
  {
    id: 17,
    name: "ASSOCHAM",
    logo: "/img/memberships/assocham.png",
    category: "Industry Body",
  },
  {
    id: 18,
    name: "British Council",
    logo: "/img/memberships/british-council.png",
    category: "International",
  },
  {
    id: 19,
    name: "NASSCOM",
    logo: "/img/memberships/nasscom.png",
    category: "Industry Body",
  },
  {
    id: 20,
    name: "Entrepreneurship Development Institute of India (EDII)",
    logo: "/img/memberships/edii.png",
    category: "Entrepreneurship",
  },

  // Innovation & Entrepreneurship (21-27)
  {
    id: 21,
    name: "National Entrepreneurship Network (NEN)",
    logo: "/img/memberships/nen.png",
    category: "Entrepreneurship",
  },
  {
    id: 22,
    name: "Institution Innovation Council (IIC)",
    logo: "/img/memberships/iic.png",
    category: "Innovation",
  },
  {
    id: 23,
    name: "Ministry of Education Innovation Cell (MIC)",
    logo: "/img/memberships/mic.png",
    category: "Innovation",
  },
  {
    id: 24,
    name: "Atal Innovation Mission (AIM)",
    logo: "/img/memberships/aim.png",
    category: "Innovation",
  },
  {
    id: 25,
    name: "Startup India",
    logo: "/img/memberships/startup-india.png",
    category: "Entrepreneurship",
  },
  {
    id: 26,
    name: "Skill India",
    logo: "/img/memberships/skill-india.png",
    category: "Government",
  },
  {
    id: 27,
    name: "All India Management Association (AIMA)",
    logo: "/img/memberships/aima.png",
    category: "Management",
  },

  // Management & Accounting (28-34)
  {
    id: 28,
    name: "Indian Institute of Materials Management (IIMM)",
    logo: "/img/memberships/iimm.png",
    category: "Management",
  },
  {
    id: 29,
    name: "Indian Accounting Association (IAA)",
    logo: "/img/memberships/iaa.png",
    category: "Accounting",
  },
  {
    id: 30,
    name: "Institute of Company Secretaries of India (ICSI)",
    logo: "/img/memberships/icsi.png",
    category: "Accounting",
  },
  {
    id: 31,
    name: "Institute of Chartered Accountants of India (ICAI)",
    logo: "/img/memberships/icai.png",
    category: "Accounting",
  },
  {
    id: 32,
    name: "Institute of Cost Accountants of India (ICMAI)",
    logo: "/img/memberships/icmai.png",
    category: "Accounting",
  },
  {
    id: 33,
    name: "Project Management Institute (PMI)",
    logo: "/img/memberships/pmi.png",
    category: "Management",
  },
  {
    id: 34,
    name: "International Association of Engineers (IAENG)",
    logo: "/img/memberships/iaeng.png",
    category: "International",
  },

  // International Accreditations (35-44)
  {
    id: 35,
    name: "International Accreditation Organization (IAO)",
    logo: "/img/memberships/iao.png",
    category: "International",
  },
  {
    id: 36,
    name: "Accreditation Council for Business Schools and Programs (ACBSP)",
    logo: "/img/memberships/acbsp.png",
    category: "International",
  },
  {
    id: 37,
    name: "Association of Commonwealth Universities (ACU)",
    logo: "/img/memberships/acu.png",
    category: "International",
  },
  {
    id: 38,
    name: "International Association of Universities (IAU)",
    logo: "/img/memberships/iau.png",
    category: "International",
  },
  {
    id: 39,
    name: "Global Business School Network (GBSN)",
    logo: "/img/memberships/gbsn.png",
    category: "International",
  },
  {
    id: 40,
    name: "Association of MBAs (AMBA)",
    logo: "/img/memberships/amba.png",
    category: "International",
  },
  {
    id: 41,
    name: "Chartered Management Institute (CMI)",
    logo: "/img/memberships/cmi.png",
    category: "International",
  },

  // Academic Alliances - Tech (42-51)
  {
    id: 42,
    name: "SAP University Alliances",
    logo: "/img/memberships/sap.png",
    category: "Academic Alliance",
  },
  {
    id: 43,
    name: "Oracle Academy",
    logo: "/img/memberships/oracle.png",
    category: "Academic Alliance",
  },
  {
    id: 44,
    name: "Microsoft Learn / Microsoft Academic Alliance",
    logo: "/img/memberships/microsoft.png",
    category: "Academic Alliance",
  },
  {
    id: 45,
    name: "Google Developer Groups (GDG)",
    logo: "/img/memberships/google.png",
    category: "Academic Alliance",
  },
  {
    id: 46,
    name: "Red Hat Academy",
    logo: "/img/memberships/redhat.png",
    category: "Academic Alliance",
  },
  {
    id: 47,
    name: "Cisco Networking Academy",
    logo: "/img/memberships/cisco.png",
    category: "Academic Alliance",
  },
  {
    id: 48,
    name: "Amazon Web Services (AWS) Academy",
    logo: "/img/memberships/aws.png",
    category: "Academic Alliance",
  },
  {
    id: 49,
    name: "IBM Skills Academy",
    logo: "/img/memberships/ibm.png",
    category: "Academic Alliance",
  },
  {
    id: 50,
    name: "Salesforce Academic Alliance",
    logo: "/img/memberships/salesforce.png",
    category: "Academic Alliance",
  },

  // Online Learning Platforms (51-56)
  {
    id: 51,
    name: "Coursera for Campus",
    logo: "/img/memberships/coursera.png",
    category: "Online Learning",
  },
  {
    id: 52,
    name: "edX Academic Partner",
    logo: "/img/memberships/edx.png",
    category: "Online Learning",
  },
  {
    id: 53,
    name: "Udemy Academic Programs",
    logo: "/img/memberships/udemy.png",
    category: "Online Learning",
  },
  {
    id: 54,
    name: "National Digital Library of India (NDLI)",
    logo: "/img/memberships/ndli.png",
    category: "Government",
  },
  {
    id: 55,
    name: "Spoken Tutorial IIT Bombay",
    logo: "/img/memberships/spoken-tutorial.png",
    category: "Government",
  },
  {
    id: 56,
    name: "SWAYAM NPTEL",
    logo: "/img/memberships/swayam.png",
    category: "Government",
  },

  // Government & Hackathon Initiatives (57-62)
  {
    id: 57,
    name: "AICTE Internship Portal",
    logo: "/img/memberships/aicte-internship.png",
    category: "Government",
  },
  {
    id: 58,
    name: "Unnat Bharat Abhiyan",
    logo: "/img/memberships/unnat-bharat.png",
    category: "Government",
  },
  {
    id: 59,
    name: "Smart India Hackathon (SIH)",
    logo: "/img/memberships/sih.png",
    category: "Government",
  },
  {
    id: 60,
    name: "Internshala Training Partner",
    logo: "/img/memberships/internshala.png",
    category: "Training",
  },
  {
    id: 61,
    name: "TCS iON",
    logo: "/img/memberships/tcs-ion.png",
    category: "Industry Body",
  },
  {
    id: 62,
    name: "Infosys Springboard",
    logo: "/img/memberships/infosys.png",
    category: "Industry Body",
  },
];

export default function MembershipsGrid() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMemberships = memberships.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Header data for CommonHeader component
  const headerData = {
    tag: "Memberships & Affiliations",
    title: "Our",
    highlight: "Prestigious Associations",
    description:
      "Presidency University is proud to be associated with the following prestigious national and international organizations.",
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">
        {/* Common Header Component */}
        <CommonHeader
          tag={headerData.tag}
          title={headerData.title}
          highlight={headerData.highlight}
          description={headerData.description}
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 mt-10">
          <input
            type="text"
            placeholder="Search memberships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A8F96] focus:border-transparent"
          />
        </div>

        {/* Grid Layout - Responsive for 62 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
          {filteredMemberships.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center group cursor-pointer hover:-translate-y-1"
            >
              {/* Logo Container with consistent sizing */}
              <div className="w-24 h-24 md:w-28 md:h-28 relative mb-4 p-2 bg-gray-50 rounded-lg group-hover:bg-[#0A8F96]/5 transition-colors duration-300 flex items-center justify-center">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 96px, 112px"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse" />
                )}
              </div>

              {/* Membership Name */}
              <h3 className="text-sm md:text-base text-gray-800 line-clamp-2 group-hover:text-[#0A8F96] transition-colors">
                {item.name}
              </h3>

              {/* Optional Category Tag */}
              {item.category && (
                <span className="text-xs text-gray-500 mt-2 px-2 py-1 bg-gray-100 rounded-full">
                  {item.category}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Total Count Display */}
      </div>
    </section>
  );
}
