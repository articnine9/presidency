"use client";

import { useState } from "react";

export default function CourseTabs({ data }: any) {
  const tabs = data?.tabs;

  const [tab, setTab] = useState("overview");

  if (!tabs) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {Object.keys(tabs).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded capitalize ${
              tab === t ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-gray-600 space-y-3">
        {/* OVERVIEW */}
        {tab === "overview" &&
          tabs.overview?.map((item: string, i: number) => (
            <p key={i}>{item}</p>
          ))}

        {/* HIGHLIGHTS */}
        {tab === "highlights" && (
          <ul className="list-disc ml-6">
            {tabs.highlights?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {/* CAREERS */}
        {tab === "careers" && (
          <ul className="list-disc ml-6">
            {tabs.careers?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
