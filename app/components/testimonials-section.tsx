import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amara Okafor",
      country: "Nigeria",
      flag: "🇳🇬",
      photo:
        "https://images.unsplash.com/photo-1658252844173-ba5de80a3015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudCUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzOTg3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "Studying at Presidency University opened global career opportunities for me. The faculty and international exposure were exceptional.",
      programme: "MBA, Class of 2024",
    },
    {
      name: "Chen Wei",
      country: "Taiwan",
      flag: "🇹🇼",
      photo:
        "https://images.unsplash.com/photo-1626498246681-9d57690a809f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0dWRlbnQlMjBncmFkdWF0aW9uJTIwaGFwcHl8ZW58MXx8fHwxNzczMzk4NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "The campus facilities and support from the International Office made my transition to India seamless. Bangalore is an amazing city to live in.",
      programme: "B.Tech Computer Science, Class of 2025",
    },
    {
      name: "Sarah Mitchell",
      country: "United Kingdom",
      flag: "🇬🇧",
      photo:
        "https://images.unsplash.com/photo-1709202967828-e1a7823ccdf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwaGVhZHNob3QlMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczMzk4Nzk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote:
        "Presidency University combines academic excellence with practical industry exposure. The international community made me feel at home.",
      programme: "M.Sc Data Science, Class of 2024",
    },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-[1180px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0F1E3D] mb-4"
          >
            International Student Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#4A5568] max-w-2xl mx-auto"
          >
            Hear from students who chose Presidency University for their
            international education
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#FAFAF7] p-8 rounded-xl border border-[#E2E0DB] hover:border-[#0A8F96] transition-all duration-300"
            >
              <Quote className="text-[#0A8F96] mb-4" size={32} />

              <p className="text-[#4A5568] mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-[#0F1E3D] m-0 text-base">
                      {testimonial.name}
                    </h4>
                    <span className="text-2xl">{testimonial.flag}</span>
                  </div>
                  <p className="text-sm text-[#94A3B8] m-0">
                    {testimonial.programme}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
