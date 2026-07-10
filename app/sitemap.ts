import type { MetadataRoute } from "next";
import schoolsData from "@/data/schools.json";

const BASE_URL = "https://presidency.international";

const STATIC: MetadataRoute.Sitemap = [
  // Core
  { url: `${BASE_URL}/`,                         priority: 1.0, changeFrequency: "weekly"  },
  { url: `${BASE_URL}/about`,                    priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE_URL}/contact`,                  priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE_URL}/campus-life`,              priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE_URL}/bangalore-life`,           priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE_URL}/memberships-affiliations`, priority: 0.5, changeFrequency: "yearly"  },
  { url: `${BASE_URL}/Media-Rankings`,           priority: 0.6, changeFrequency: "monthly" },
  // Schools listing pages
  { url: `${BASE_URL}/schools/ug`,              priority: 0.9, changeFrequency: "monthly" },
  { url: `${BASE_URL}/schools/pg`,              priority: 0.9, changeFrequency: "monthly" },
  { url: `${BASE_URL}/schools/phd`,             priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE_URL}/schools/international`,   priority: 0.9, changeFrequency: "monthly" },
  // International
  { url: `${BASE_URL}/international/overview`,  priority: 0.8, changeFrequency: "monthly" },
  { url: `${BASE_URL}/international/apply`,     priority: 0.9, changeFrequency: "monthly" },
  { url: `${BASE_URL}/international/faq`,       priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE_URL}/international/ug`,        priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE_URL}/international/pg`,        priority: 0.7, changeFrequency: "monthly" },
  { url: `${BASE_URL}/international/phd`,       priority: 0.7, changeFrequency: "monthly" },
  // Admissions
  { url: `${BASE_URL}/admissions/phd`,          priority: 0.7, changeFrequency: "monthly" },
];

type RawProgram = { slug?: unknown; [k: string]: unknown };

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const schoolPages: MetadataRoute.Sitemap = schoolsData.schools.map((school) => ({
    url: `${BASE_URL}/schools/${school.slug}`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const coursePages: MetadataRoute.Sitemap = schoolsData.schools.flatMap((school) =>
    ((school.programs ?? []) as RawProgram[])
      .filter((p) => typeof p?.slug === "string")
      .map((p) => ({
        url: `${BASE_URL}/schools/${school.slug}/${p.slug as string}`,
        lastModified: now,
        priority: 0.7,
        changeFrequency: "monthly" as const,
      })),
  );

  return [
    ...STATIC.map((entry) => ({ ...entry, lastModified: now })),
    ...schoolPages,
    ...coursePages,
  ];
}
