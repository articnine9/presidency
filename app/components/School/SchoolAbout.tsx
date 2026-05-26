"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Cpu,
  Globe2,
  Handshake,
  BarChart3,
  Settings,
  Target,
  Brain,
  Briefcase,
  GraduationCap,
} from "lucide-react";

/* ── types ── */
type Feature = { title: string; description: string };
type SchoolAboutProps = {
  data: {
    title: string;
    subtitle?: string;
    content: string[];
    image?: string;
    features?: Feature[];
    hexagons?: any[];
  };
};

/* ── icons pool ── */
const ICONS = [
  <Cpu size={20} />,
  <Globe2 size={20} />,
  <Handshake size={20} />,
  <BarChart3 size={20} />,
  <Settings size={20} />,
  <Target size={20} />,
  <Brain size={20} />,
  <Briefcase size={20} />,
  <GraduationCap size={20} />,
];

/* flat-top hexagon clip-path */
const HEX = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80";

/* ── image hexagon ── */
function HexImg({
  src,
  size,
  delay = 0,
}: {
  src: string;
  size: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      style={{ width: size, height: Math.round(size * 0.866), clipPath: HEX }}
      className="overflow-hidden shadow-lg flex-shrink-0"
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

/* ── teal content hexagon ── */
function HexTile({
  title,
  iconIdx,
  size,
  delay = 0,
}: {
  title: string;
  iconIdx: number;
  size: number;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      style={{ width: size, height: Math.round(size * 0.866), clipPath: HEX }}
      className="bg-[#0A8F96] hover:bg-[#097e85] transition-colors duration-300
                 flex flex-col items-center justify-center gap-2
                 text-white cursor-default shadow-md flex-shrink-0"
    >
      <div className="opacity-90">{ICONS[iconIdx % ICONS.length]}</div>
      <p className="text-[11px] text-white font-semibold text-center px-5 leading-snug">
        {title}
      </p>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   7-HEX FLOWER  —  matches screenshot exactly:

            [tile: top]
   [tile: top-left]   [tile: top-right]
         [CENTER img]
   [img: bottom-left] [tile: bottom]  [img: bottom-right]

   Flat-top honeycomb neighbor positions:
     top          → (cx,    cy - H)
     top-right    → (cx+dH, cy - dV)
     bottom-right → (cx+dH, cy + dV)
     bottom       → (cx,    cy + H)
     bottom-left  → (cx-dH, cy + dV)
     top-left     → (cx-dH, cy - dV)
────────────────────────────────────────────────────────────── */
function HexFlower({
  features,
  image,
}: {
  features: Feature[];
  image: string;
}) {
  const S  = 158;
  const H  = Math.round(S * 0.866);
  const dH = Math.round(S * 0.75);
  const dV = Math.round(H * 0.5);

  /* origin offset so all coords are ≥ 0 */
  const ox = dH; // center x
  const oy = H; // center y

  /* 7 hexagon positions */
  const cells = [
    /* 0 — center */ { x: ox, y: oy, type: "img" as const },
    /* 1 — top    */ { x: ox, y: oy - H, type: "tile" as const, ti: 0 },
    /* 2 — top-R  */ { x: ox + dH, y: oy - dV, type: "tile" as const, ti: 1 },
    /* 3 — bot-R  */ { x: ox + dH, y: oy + dV, type: "img" as const },
    /* 4 — bottom */ { x: ox, y: oy + H, type: "tile" as const, ti: 2 },
    /* 5 — bot-L  */ { x: ox - dH, y: oy + dV, type: "img" as const },
    /* 6 — top-L  */ { x: ox - dH, y: oy - dV, type: "tile" as const, ti: 3 },
  ];

  const canW = Math.max(...cells.map((c) => c.x)) + S;
  const canH = Math.max(...cells.map((c) => c.y)) + H;

  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: canW, height: canH }}
    >
      {cells.map((cell, i) => (
        <div key={i} className="absolute" style={{ left: cell.x, top: cell.y }}>
          {cell.type === "img" ? (
            <HexImg src={image} size={S} delay={i * 0.08} />
          ) : (
            <HexTile
              title={features[cell.ti!]?.title ?? ""}
              iconIdx={cell.ti!}
              size={S}
              delay={i * 0.08}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function SchoolAbout({ data }: SchoolAboutProps) {
  const image = data.image || DEFAULT_IMG;
  const features = data.features || [];

  return (
    <section className="py-10 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ══ MOBILE ══ */}
        <div className="lg:hidden space-y-6">
          <CommonHeader
            tag="About Us"
            title={data.title}
            primaryColor="#0A8F96"
            align="left"
          />

          <div className="space-y-3">
            {data.content.map((para, i) => (
              <p
                key={i}
                className="text-[13px] leading-7 text-gray-600 text-justify"
              >
                {para}
              </p>
            ))}
          </div>

          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {features.slice(0, 4).map((f, i) => (
                <div
                  key={i}
                  className="bg-[#0A8F96] rounded-xl p-4 text-white flex flex-col items-center text-center gap-2"
                >
                  <div className="opacity-80">{ICONS[i % ICONS.length]}</div>
                  <p className="text-[11px] font-semibold leading-tight">
                    {f.title}
                  </p>
                </div>
              ))}
            </div>
          )}

          {features.length > 0 && (
            <div className="space-y-3">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#0A8F96]/20 bg-white px-4 py-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96]">
                      {ICONS[i % ICONS.length]}
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#0A8F96]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ══ DESKTOP ══ */}
        <div className="hidden lg:block">
          {/* row 1: text LEFT + flower RIGHT */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              <CommonHeader
                tag="About Us"
                title={data.title}
                primaryColor="#0A8F96"
                align="left"
              />
              <div className="space-y-4">
                {data.content.map((para, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-base leading-relaxed text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT — 7-hex flower */}
            <div className="flex justify-center items-center">
              {features.length >= 4 ? (
                <HexFlower features={features} image={image} />
              ) : (
                <div
                  className="overflow-hidden shadow-xl"
                  style={{ width: 320, height: 277, clipPath: HEX }}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* row 2: feature detail cards */}
          {features.length > 0 && (
            <div className="mt-10">
              <h2 className="text-3xl font-serif text-gray-900 mb-6">
                What You'll Experience Here
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {features.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="relative bg-white rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-[#0A8F96]" />
                    <div className="mb-3 text-[#0A8F96]">
                      {ICONS[i % ICONS.length]}
                    </div>
                    <h3 className="text-[20px] text-[#183153] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
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
