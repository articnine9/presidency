"use client";

import { motion } from "framer-motion";
import { H2 } from "@/app/components/Headings";
import {
  BarChart3, Settings, Target, Brain,
  Briefcase, GraduationCap, Lightbulb, Globe,
} from "lucide-react";

const ICONS = [
  <BarChart3 size={20} />,
  <Settings size={20} />,
  <Target size={20} />,
  <Brain size={20} />,
  <Briefcase size={20} />,
  <GraduationCap size={20} />,
  <Lightbulb size={20} />,
  <Globe size={20} />,
];

/* flat-top hexagon */
const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80";

/* ── single image hexagon ── */
function HexImg({ src, size, delay = 0 }: { src: string; size: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ width: size, height: Math.round(size * 0.866), clipPath: HEX_CLIP }}
      className="overflow-hidden flex-shrink-0"
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

/* ── single teal content hexagon ── */
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
      className="bg-[#0097A7] hover:bg-[#00838f] transition-colors duration-300 flex-shrink-0
                 flex flex-col items-center justify-center gap-2 text-white cursor-default"
    >
      <div className="opacity-80">{ICONS[iconIdx % ICONS.length]}</div>
      <p className="text-[11px] font-semibold text-center px-5 leading-snug">{title}</p>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────
   HONEYCOMB — fixed positions matching screenshot:

        [hex0]    [img]
   [img]    [hex1]    [hex2]
        [hex3]    [img]

   Uses absolute positioning on a sized canvas.
──────────────────────────────────────────────────── */
function Honeycomb({ highlights, image }: { highlights: { title: string }[]; image: string }) {
  const S  = 160;                   // hex width
  const H  = Math.round(S * 0.866); // hex height
  const cX = S * 0.77;              // horizontal step
  const cY = H * 0.54;              // vertical step (honeycomb offset)

  /* anchor positions (col, row) — col-2 is shifted down ½ step */
  const layout = [
    /* teal content tiles */
    { col: 0, row: 0, type: "tile", ti: 0 },
    { col: 1, row: 1, type: "tile", ti: 1 },
    { col: 2, row: 0, type: "tile", ti: 2 },
    { col: 1, row: 3, type: "tile", ti: 3 },
    /* image hexagons */
    { col: 1, row: -1, type: "img" },
    { col: 0, row:  2, type: "img" },
    { col: 2, row:  2, type: "img" },
  ] as const;

  /* convert (col, row) to pixel coords */
  function pos(col: number, row: number) {
    const x = col * cX * 2;
    const baseY = row * cY * 2;
    const offset = col % 2 === 1 ? cY : 0; // middle col shifts down
    return { x, y: baseY + offset };
  }

  /* canvas size */
  const allX = layout.map(n => pos(n.col, n.row).x);
  const allY = layout.map(n => pos(n.col, n.row).y);
  const canW = Math.max(...allX) + S;
  const canH = Math.max(...allY) + H;

  return (
    <div className="relative flex-shrink-0 hidden lg:block" style={{ width: canW, height: canH }}>
      {layout.map((cell, i) => {
        const { x, y } = pos(cell.col, cell.row);
        return (
          <div key={i} className="absolute" style={{ left: x, top: y }}>
            {cell.type === "img" ? (
              <HexImg src={image} size={S} delay={i * 0.07} />
            ) : (
              <HexTile
                title={highlights[cell.ti]?.title ?? ""}
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

/* ──────────────────────────────────────────
   MAIN COMPONENT
────────────────────────────────────────── */
export default function CourseUSP({ data }: any) {
  const highlights: { title: string; description: string }[] = data?.highlights || [];
  if (!highlights.length) return null;

  const image: string = data?.image || DEFAULT_IMG;

  return (
    <section className="bg-[#F0F9FA] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-block rounded-md bg-[#DDF4F4] px-4 py-2 text-xs font-medium text-[#0097A7] mb-4">
            Key Highlights
          </span>
          <H2 className="text-[#183153]">
            Why Choose This <span className="text-[#0097A7]">Programme</span>
          </H2>
        </div>

        {/* TWO-COLUMN: honeycomb left + cards right */}
        <div className="flex flex-col lg:flex-row items-center gap-14">

          {/* LEFT — honeycomb (desktop only) */}
          <Honeycomb highlights={highlights} image={image} />

          {/* RIGHT — detail cards */}
          <div className="flex-1 grid sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* left accent */}
                <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-[#0097A7]" />
                {/* icon */}
                <div className="mb-3 text-[#0097A7]">{ICONS[index % ICONS.length]}</div>
                <h4 className="text-[15px] font-semibold text-[#183153] mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* MOBILE teal tiles grid */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
          {highlights.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-[#0097A7] rounded-xl p-4 text-white flex flex-col items-center text-center gap-2"
            >
              <div className="opacity-80">{ICONS[index % ICONS.length]}</div>
              <p className="text-xs font-semibold leading-tight">{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
