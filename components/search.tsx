"use client";

import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { course } from "@/src/data/course";
import { printers } from "@/src/data/printers";
import { materials } from "@/src/data/materials";
import { software } from "@/src/data/software";
import { glossary } from "@/src/data/glossary";
import { troubleshooting } from "@/src/data/troubleshooting";

const index = [
  ...course.map((x) => ({ title: x.title, text: x.description, href: `/course/${x.slug}`, section: "Курс" })),
  ...printers.map((x) => ({ title: x.name, text: x.bestFor, href: `/printers/${x.slug}`, section: "Принтеры" })),
  ...materials.map((x) => ({ title: x.name, text: x.uses.join(" "), href: `/materials/${x.slug}`, section: "Материалы" })),
  ...software.map((x) => ({ title: x.name, text: x.purpose, href: "/software", section: "ПО" })),
  ...glossary.map((x) => ({ title: x.term, text: x.short, href: "/glossary", section: "Глоссарий" })),
  ...troubleshooting.map((x) => ({ title: x.problem, text: x.symptoms.join(" "), href: "/troubleshooting", section: "Диагностика" })),
];

export function Search() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return index.filter((item) => `${item.title} ${item.text} ${item.section}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return (
    <div className="relative w-full max-w-md">
      <SearchIcon className="pointer-events-none absolute left-3 top-2.5 size-4 text-muted-foreground" />
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Поиск по сайту" className="h-9 w-full rounded-md border bg-background pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-ring" />
      {results.length > 0 && (
        <div className="absolute left-0 right-0 top-11 z-50 rounded-lg border bg-card p-2 shadow-lg">
          {results.map((item) => (
            <Link key={`${item.href}-${item.title}`} href={item.href} onClick={() => setQuery("")} className="block rounded-md px-3 py-2 hover:bg-muted">
              <span className="text-xs text-muted-foreground">{item.section}</span>
              <p className="text-sm font-medium">{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
