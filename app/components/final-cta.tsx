import { motion } from "motion/react";
import { ArrowRight, Download, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 bg-[#0F1E3D] text-white">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white mb-6"
        >
          Start Your Global Education Journey Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/90 text-lg max-w-2xl mx-auto mb-10"
        >
          Join thousands of international students who chose Presidency
          University for world-class education in India's technology capital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button className="bg-[#D4A843] text-[#0F1E3D] px-8 py-4 rounded-lg hover:bg-[#D4A843]/90 transition-colors flex items-center gap-2">
            Apply Now
            <ArrowRight size={20} />
          </button>
          <button className="bg-white text-[#0F1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2">
            Download Prospectus
            <Download size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2">
            Contact International Admissions
            <Mail size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
