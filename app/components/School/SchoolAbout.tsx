"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import { Cpu, Globe2, Handshake, BarChart3, Settings, Target, Brain, Briefcase, GraduationCap } from "lucide-react";

/* ── types ── */
type Feature = { title: string; description: string };

type SchoolAboutProps = {
  data: {
    title: string;
    subtitle?: string;
    content: string[];
    image?: string;
    features?: Feature[];
    hexagons?: any[]; // kept for backward compat, not used
  };
};

/* ─────────────────────────────────────────────
   ICONS
───────────────────────────────────────────── */
const ICONS = [
  <Cpu size={18} />,
  <Globe2 size={18} />,
  <Handshake size={18} />,
  <BarChart3 size={18} />,
  <Settings size={18} />,
  <Target size={18} />,
  <Brain size={18} />,
  <Briefcase size={18} />,
  <GraduationCap size={18} />,
];

/* ─────────────────────────────────────────────
   HEXAGON CLIP-PATH  (flat-top)
───────────────────────────────────────────── */
const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const DEFAULT_IMG = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80";

/* ── image hex ── */
function HexImg({ src, size, delay = 0 }: { src: string; size: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ width: size, height: Math.round(size * 0.866), clipPath: HEX_CLIP }}
      className="overflow-hidden flex-shrink-0 shadow-md"
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

/* ── teal content hex ── */
function HexTile({
  title, iconIdx, size, delay = 0,
}: { title: string; iconIdx: number; size: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ width: size, height: Math.round(size * 0.866), clipPath: HEX_CLIP }}
      className="bg-[#0A8F96] hover:bg-[#077f86] transition-colors duration-300 flex-shrink-0
                 flex flex-col items-center justify-center gap-2 text-white cursor-default shadow-md"
    >
      <div className="opacity-80">{ICONS[iconIdx % ICONS.length]}</div>
      <p className="text-[10px] font-semibold text-center px-4 leading-snug">{title}</p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   HONEYCOMB — layout matches screenshot:

       [tile0]   [img]
   [img]   [tile1]   [tile2]
       [tile3]   [img]

───────────────────────────────────────────── */
function Honeycomb({ features, image }: { features: Feature[]; image: string }) {
  const S   = 148;
  const H   = Math.round(S * 0.866);
  const cX  = S * 0.77;
  const cY  = H * 0.54;
  const colW = cX * 2;
  const rowH = cY * 2;
  const offY = cY; // middle-col vertical shift

  /* (col, row) → pixel */
  function px(col: number, row: number) {
    return {
      x: col * colW,
      y: row * rowH + (col % 2 === 1 ? offY : 0),
    };
  }

  /* fixed layout: 4 tiles + 3 image hexagons */
  const layout = [
    { col: 0, row: 0, type: "tile", ti: 0 },
    { col: 2, row: 0, type: "tile", ti: 1 },
    { col: 1, row: 1, type: "tile", ti: 2 },
    { col: 0, row: 2, type: "tile", ti: 3 },
    /* images */
    { col: 1, row: -1, type: "img" },
    { col: 2, row: 2,  type: "img" },
    { col: 1, row:  3, type: "img" },
  ] as const;

  const allX = layout.map(c => px(c.col, c.row).x);
  const allY = layout.map(c => px(c.col, c.row).y);
  const canW = Math.max(...allX) + S;
  const canH = Math.max(...allY) + H;

  return (
    <div className="relative" style={{ width: canW, height: canH }}>
      {layout.map((cell, i) => {
        const { x, y } = px(cell.col, cell.row);
        return (
          <div key={i} className="absolute" style={{ left: x, top: y }}>
            {cell.type === "img" ? (
              <HexImg src={image} size={S} delay={i * 0.07} />
            ) : (
              <HexTile
                title={features[cell.ti]?.title ?? ""}
                iconIdx={cell.ti}
                size={S}
                delay={i * 0.07}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function SchoolAbout({ data }: SchoolAboutProps) {
  const image    = data.image || DEFAULT_IMG;
  const features = data.features || [];

  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* ══════════════════════════════════════
            MOBILE layout (stacked)
        ══════════════════════════════════════ */}
        <div className="lg:hidden space-y-8">
          <CommonHeader
            tag="About Us"
            title={data.title}
            primaryColor="#0A8F96"
            align="left"
          />

          <div className="space-y-4">
            {data.content.map((para, i) => (
              <p key={i} className="text-[13px] leading-8 text-gray-600 text-justify">
                {para}
              </p>
            ))}
          </div>

          {/* mobile: teal tile grid */}
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-3 mt-4">
              {features.slice(0, 6).map((f, i) => (
                <div
                  key={i}
                  className="bg-[#0A8F96] rounded-xl p-4 text-white flex flex-col items-center text-center gap-2"
                >
                  <div className="opacity-80">{ICONS[i % ICONS.length]}</div>
                  <p className="text-[11px] font-semibold leading-tight">{f.title}</p>
                </div>
              ))}
            </div>
          )}

          {/* feature cards */}
          {features.length > 0 && (
            <div className="space-y-4">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#0A8F96]/30 bg-white px-4 py-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96]">
                      {ICONS[i % ICONS.length]}
                    </div>
                    <div>
                      <h3 className="text-[17px] font-semibold text-[#0A8F96]">{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-7 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ══════════════════════════════════════
            DESKTOP layout
        ══════════════════════════════════════ */}
        <div className="hidden lg:block">

          {/* TOP: text left + honeycomb right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — about text */}
            <div>
              <CommonHeader
                tag="About Us"
                title={data.title}
                primaryColor="#0A8F96"
                align="left"
              />
              <div className="space-y-4">
                {data.content.map((para, i) => (
                  <p key={i} className="text-gray-600 text-base leading-relaxed text-justify">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT HEXAGON DESIGN */}
            <div className="flex justify-center items-center">
              {features.length > 0 ? (
                <Honeycomb features={features} image={image} />
              ) : (
                /* fallback: plain image */
                <div
                  className="overflow-hidden shadow-xl"
                  style={{ width: 340, height: 294, clipPath: HEX_CLIP }}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>

          {/* BOTTOM: feature detail cards */}
          {features.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-serif text-gray-900 mb-10">
                What You'll Experience Here
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {/* accent bar */}
                    <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-[#0A8F96]" />
                    {/* icon */}
                    <div className="mb-3 text-[#0A8F96]">{ICONS[i % ICONS.length]}</div>
                    <h3 className="text-[15px] font-semibold text-[#183153] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
