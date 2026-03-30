"use client";

import { Phone, Mail, Globe, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function TopBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) return;

    // 👉 redirect to search page (you can customize)
    window.location.href = `/search?q=${query}`;
  };

  return (
    <div className="bg-[#1e3a5f] text-white text-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-2 flex justify-between items-center">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 9022092222</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>admission@presidency.international</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          {/* 🔍 SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center bg-white/10 rounded-md px-2 py-1"
          >
            <Search size={14} className="text-white/70" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent outline-none px-2 text-white placeholder:text-white/60 text-sm w-[140px]"
            />
          </form>

          {/* 🌍 INTERNATIONAL */}
          <Link
            href="/international"
            className="flex items-center gap-1 hover:underline"
          >
            <Globe size={14} />
            International
          </Link>
        </div>
      </div>
    </div>
  );
}
