"use client";

import CommonHeader from "@/app/components/CommonHeader";
import { motion } from "framer-motion";

export default function CourseOverview({ data }: any) {
  if (!data?.overview) return null;

  return (
    <section className="bg-[#F6F7FB] md:pt-32 py-20 relative z-0">
      <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CommonHeader
            tag="Programme Overview"
            title="Designing the Communication Systems"
            highlight="of Tomorrow"
            primaryColor="#0A8F96"
            align="left"
          />

          {/* TEXT */}
          <div className="space-y-5 text-gray-700 leading-relaxed mt-6">
            {Array.isArray(data.overview) ? (
              data.overview.map((para: string, index: number) => (
                <p key={index} className="text-base">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-base">{data.overview}</p>
            )}
          </div>
        </motion.div>

        {/* 🔥 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={
                data.image ||
                "https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              }
              alt="Course Overview"
              className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
