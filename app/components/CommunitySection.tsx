import { Heart } from "lucide-react";

const communityImages = [
  {
    url: "https://images.unsplash.com/photo-1763890763432-17c9a529da20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNhbXB1cyUyMG91dGRvb3IlMjB3YWxraW5nJTIwZ3JvdXAlMjBkaXZlcnNlfGVufDF8fHx8MTc3MTgyMDU5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Campus Life",
  },
  {
    url: "https://images.unsplash.com/photo-1766459842752-e06f749c0b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3BvcnRzJTIwZmFjaWxpdGllcyUyMHN0dWRlbnRzJTIwYXRobGV0aWNzfGVufDF8fHx8MTc3MTgyMDU5OHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Sports & Athletics",
  },
  {
    url: "https://images.unsplash.com/photo-1723532623416-89c7bdcce044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBjYWZldGVyaWElMjBzb2NpYWxpemluZyUyMGZyaWVuZHN8ZW58MXx8fHwxNzcxODIwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Social Spaces",
  },
  {
    url: "https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwc3R1ZGVudHMlMjBjZWxlYnJhdGluZ3xlbnwxfHx8fDE3NzE4MjA1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Achievements",
  },
];

export function CommunitySection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with decorative elements */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#ff8c42]/10 text-[#ff8c42] px-6 py-3 rounded-full mb-6">
            <Heart size={20} />
            <span className="uppercase tracking-wider">Student Life</span>
          </div>

          <h2 className="text-2xl md:text-4xl text-[#1e3a5f] mb-6">
            A VIBRANT AND
            <br />
            <span className="text-[#ff8c42]">ENGAGING CAMPUS</span>
          </h2>

          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Experience a dynamic student life filled with cultural events,
            sports, clubs, and activities that enhance your university
            experience and create lasting memories.
          </p>
        </div>

        {/* Modern masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                height: index % 2 === 0 ? "350px" : "400px",
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-white text-xl">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative quote */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 lg:p-12 shadow-xl max-w-4xl">
            <p className="text-white text-2xl md:text-3xl italic leading-relaxed">
              "More than just education, it's a transformative journey where you
              discover your passion, build lifelong friendships, and prepare for
              global success."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
