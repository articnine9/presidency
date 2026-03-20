import {
  GraduationCap,
  Globe,
  Award,
  Users,
  Building2,
  MapPin,
} from "lucide-react";
import { motion } from "motion/react";

export function WhyPresidency() {
  const reasons = [
    {
      icon: <GraduationCap size={40} />,
      title: "100+ Academic Programmes",
      description:
        "Diverse programmes across 10 schools covering engineering, business, law, design, and more.",
      image:
        "https://images.unsplash.com/photo-1760121788536-9797394e210e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXVkaXRvcml1bSUyMGxlY3R1cmUlMjBoYWxsfGVufDF8fHx8MTc3MzM5OTQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Globe size={40} />,
      title: "Global Partnerships",
      description:
        "Collaborations with universities in the USA, UK, Germany, France, Taiwan, Malaysia, and Japan.",
      image:
        "https://images.unsplash.com/photo-1770364292883-befec1322e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBkaXZlcnNlJTIwZ3JvdXB8ZW58MXx8fHwxNzczMzk5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Award size={40} />,
      title: "Accredited & Approved",
      description:
        "NAAC accredited and UGC approved, recognized for academic excellence.",
      image:
        "https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50cyUyMGhhcHB5fGVufDF8fHx8MTc3MzMxMTE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Users size={40} />,
      title: "International Affairs Office",
      description:
        "Dedicated support for international students from application to graduation.",
      image:
        "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncm91cCUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MzM5OTQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Building2 size={40} />,
      title: "100-Acre Green Campus",
      description:
        "Safe campus with modern hostels, state-of-the-art labs, and sports facilities.",
      image:
        "https://images.unsplash.com/photo-1769699369445-263a7a365df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzMzMzUyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <MapPin size={40} />,
      title: "India's Technology Capital",
      description:
        "Located in Bangalore, home to tech giants and a thriving startup ecosystem.",
      image:
        "https://images.unsplash.com/photo-1708067077797-74f83eaa8231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjBzaWxpY29uJTIwdmFsbGV5JTIwdGVjaCUyMGNpdHl8ZW58MXx8fHwxNzczMzk4NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="py-20 bg-white" id="why-presidency">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F1E3D] mb-4"
          >
            Why Choose Presidency University
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A5568] max-w-2xl mx-auto"
          >
            A world-class education that prepares you for global career
            opportunities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl border border-[#E2E0DB] overflow-hidden hover:border-[#0A8F96] hover:shadow-xl transition-all duration-300 bg-white group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-[#0A8F96] mb-4">{reason.icon}</div>
                <h3 className="text-[#0F1E3D] mb-3 text-xl">{reason.title}</h3>
                <p className="text-[#4A5568] m-0">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
