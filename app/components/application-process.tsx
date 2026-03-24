import { motion } from "motion/react";
import {
  Search,
  FileText,
  Upload,
  Mail,
  Plane,
  ArrowRight,
} from "lucide-react";

export function ApplicationProcess() {
  const steps = [
    {
      number: "1",
      icon: <Search size={32} />,
      title: "Choose Your Programme",
      description:
        "Browse our 100+ programmes and find the perfect fit for your career goals.",
    },
    {
      number: "2",
      icon: <FileText size={32} />,
      title: "Submit Online Application",
      description:
        "Complete the online application form with your academic and personal .",
    },
    {
      number: "3",
      icon: <Upload size={32} />,
      title: "Upload Documents",
      description:
        "Submit required documents including transcripts, passport, and English proficiency.",
    },
    {
      number: "4",
      icon: <Mail size={32} />,
      title: "Receive Admission Offer",
      description:
        "Get your admission letter and acceptance package from the university.",
    },
    {
      number: "5",
      icon: <Plane size={32} />,
      title: "Apply for Student Visa",
      description:
        "Use your admission letter to apply for an Indian student visa and prepare for arrival.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAF7]" id="how-to-apply">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F1E3D] mb-4"
          >
            How to Apply
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A5568] max-w-2xl mx-auto"
          >
            Your journey to Presidency University in 5 simple steps
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection Line - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#E2E0DB] -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* Number Circle */}
                <div
                  className="w-20 h-20 rounded-full bg-[#0A8F96] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-semibold relative z-20"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div className="flex justify-center text-[#0F1E3D] mb-3">
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-[#0F1E3D] mb-2">{step.title}</h4>
                <p className="text-[#4A5568] text-sm m-0">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-[#0A8F96] text-white px-10 py-4 rounded-lg hover:bg-[#0BB5B5] transition-colors inline-flex items-center gap-2">
            Apply Now
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
