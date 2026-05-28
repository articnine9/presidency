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

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
];

/* ── single image hexagon ── */
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
   HONEYCOMB — layout matching a tightly packed grid:

   Row 0 (even cols): col0, col2         → y = row * rowStep
   Row 1 (odd col):   col1               → y = row * rowStep + halfH (offset down)

   Final visual arrangement (flat-top honeycomb):

        [tile0]   [img1]
   [img0]   [tile1]   [tile2]
        [tile3]   [img2]

   Using a 3-column flat-top honeycomb:
   - col 0 & col 2 → no vertical offset
   - col 1 → shifted down by halfH
──────────────────────────────────────────────────── */

interface HoneycombProps {
  highlights: { title: string }[];
  images: string[]; // expects exactly 3 images
}

function Honeycomb({ highlights, images }: HoneycombProps) {
  const S = 160; // hex width
  const H = Math.round(S * 0.866); // hex height
  const colStep = Math.round(S * 0.76); // horizontal step between columns
  const rowStep = H; // vertical step between rows
  const halfH = Math.round(H * 0.5); // vertical offset for odd columns

  /*
    Layout grid (col index, row index):
      col 0 (even) → no vertical shift
      col 1 (odd)  → shifted down halfH
      col 2 (even) → no vertical shift

    Desired honeycomb:
      [tile:0]  [img:0]          col0 row0 | col1 row-1  (img row-1 sits above middle)
      [img:1]   [tile:1] [tile:2] col0 row2 | col1 row1  | col2 row0
      [tile:3]  [img:2]           col0 row4 | col1 row3
  */
  const layout: Array<
    | { col: number; row: number; type: "tile"; ti: number }
    | { col: number; row: number; type: "img"; imgIdx: number }
  > = [
    // teal tiles
    { col: 0, row: 0, type: "tile", ti: 0 },
    { col: 1, row: 1, type: "tile", ti: 1 },
    { col: 2, row: 0, type: "tile", ti: 2 },
    { col: 1, row: 3, type: "tile", ti: 3 },
    // image hexagons — each gets its own image
    { col: 1, row: -1, type: "img", imgIdx: 0 },
    { col: 0, row: 2, type: "img", imgIdx: 1 },
    { col: 2, row: 2, type: "img", imgIdx: 2 },
  ];

  /* Convert (col, row) → pixel coordinates */
  function pos(col: number, row: number) {
    return {
      x: col * colStep,
      y: row * rowStep + (col % 2 === 1 ? halfH : 0),
    };
  }

  /* Calculate canvas size from all positions */
  const allPositions = layout.map((n) => pos(n.col, n.row));
  const minY = Math.min(...allPositions.map((p) => p.y));
  const offsetY = minY < 0 ? Math.abs(minY) : 0; // shift everything down if any y < 0

  const canW = Math.max(...allPositions.map((p) => p.x)) + S;
  const canH = Math.max(...allPositions.map((p) => p.y)) + H + offsetY;

  return (
    <div
      className="relative flex-shrink-0 hidden lg:block"
      style={{ width: canW, height: canH }}
    >
      {layout.map((cell, i) => {
        const { x, y } = pos(cell.col, cell.row);
        return (
          <div key={i} className="absolute" style={{ left: x, top: y + offsetY }}>
            {cell.type === "img" ? (
              <HexImg
                src={images[cell.imgIdx] ?? images[0]}
                size={S}
                delay={i * 0.07}
              />
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

  /*
    Support three image formats from data:
      1. data.images  → string[]  (preferred, supply 3 URLs)
      2. data.image   → string    (single image, used for all 3 slots as fallback)
      3. Nothing      → DEFAULT_IMAGES
  */
  const images: string[] = Array.isArray(data?.images)
    ? [
        data.images[0] ?? DEFAULT_IMAGES[0],
        data.images[1] ?? DEFAULT_IMAGES[1],
        data.images[2] ?? DEFAULT_IMAGES[2],
      ]
    : data?.image
    ? [data.image, data.image, data.image]
    : DEFAULT_IMAGES;

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
          <Honeycomb highlights={highlights} images={images} />

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