"use client";

import { motion } from "framer-motion";

const LogoCarousel = ({ companies }: any) => {
  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...companies, ...companies].map((company, i) => (
          <div
            key={i}
            className="bg-white rounded-xl px-5 py-3 border flex items-center justify-center min-w-[200px] h-[140px]"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="max-h-14 object-contain  transition"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
