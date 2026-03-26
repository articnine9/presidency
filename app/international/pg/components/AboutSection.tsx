"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export default function AboutSection({ data }: any) {
  const about = data?.about;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div>
          <CommonHeader
            tag="About"
            title="Postgraduate Programmes"
            highlight=" at Presidency"
            description={about?.content}
            align="left"
          />

          {/* Extra Note */}
          {about?.note && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-gray-600 mt-4 max-w-xl text-base"
            >
              {about.note}
            </motion.p>
          )}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={
              about?.image ||
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            }
            alt="About Programme"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
