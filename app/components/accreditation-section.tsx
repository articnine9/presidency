import { motion } from "motion/react";
import {
  Award,
  CheckCircle,
  TrendingUp,
  Users,
  Globe,
  Target,
} from "lucide-react";

export function AccreditationSection() {
  const achievements = [
    {
      icon: <Award size={48} />,
      title: "NAAC Accredited",
      description:
        "National Assessment and Accreditation Council recognized for quality education",
      color: "from-[#0A8F96] to-[#0BB5B5]",
    },
    {
      icon: <CheckCircle size={48} />,
      title: "UGC Approved",
      description:
        "University Grants Commission approved institution with government recognition",
      color: "from-[#0F1E3D] to-[#1a2d52]",
    },
    {
      icon: <TrendingUp size={48} />,
      title: "Globally Ranked",
      description:
        "Featured in NIRF, QS World University Rankings, and Times Higher Education",
      color: "from-[#D4A843] to-[#c99533]",
    },
  ];

  const stats = [
    { number: "95%", label: "Placement Rate", icon: <Target size={24} /> },
    {
      number: "500+",
      label: "Recruiting Companies",
      icon: <Users size={24} />,
    },
    { number: "20+", label: "Countries", icon: <Globe size={24} /> },
    {
      number: "₹8.5L",
      label: "Average Package",
      icon: <TrendingUp size={24} />,
    },
  ];

  const companies = [
    { name: "Amazon", logo: "🏢" },
    { name: "Microsoft", logo: "💻" },
    { name: "Deloitte", logo: "📊" },
    { name: "Accenture", logo: "🎯" },
    { name: "Capgemini", logo: "⚡" },
    { name: "KPMG", logo: "📈" },
    { name: "Cognizant", logo: "🔷" },
    { name: "Infosys", logo: "🌟" },
    { name: "TCS", logo: "💼" },
    { name: "Wipro", logo: "🚀" },
    { name: "Google", logo: "🎨" },
    { name: "IBM", logo: "🔧" },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#0F1E3D] via-[#1a2d52] to-[#0F1E3D] text-white relative overflow-hidden"
      id="accreditation"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A8F96] rounded-lg blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A843] rounded-lg blur-3xl"></div>
      </div>

      <div className="max-w-[1180px] mx-auto px-5 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Accredited, Ranked & Industry Connected
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-2xl mx-auto text-lg"
          >
            A globally recognized institution with strong industry partnerships
          </motion.p>
        </div>

        {/* Accreditation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
              ></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-white mb-4">{achievement.icon}</div>
                <h3 className="text-white mb-3 text-xl">{achievement.title}</h3>
                <p className="text-white/80 text-sm m-0">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 mb-16"
        >
          <h3 className="text-white text-center mb-10">Placement Excellence</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center text-[#D4A843] mb-3">
                  {stat.icon}
                </div>
                <div
                  className="text-4xl md:text-5xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-center mb-10">
            Our Recruitment Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center justify-center gap-3">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {company.logo}
                  </span>
                  <span className="text-white font-semibold text-center">
                    {company.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-white mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of successful alumni working at leading companies
              worldwide. Our dedicated placement cell ensures you're
              career-ready from day one.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#0F1E3D] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                View Placement Records
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Meet Our Alumni
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
