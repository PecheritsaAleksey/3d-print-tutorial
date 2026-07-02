"use client";

import { useMemo, useState } from "react";
import { GlossaryTermCard, TroubleshootingCard } from "@/components/domain-cards";
import { Card } from "@/components/ui";
import { glossary } from "@/src/data/glossary";
import { troubleshooting } from "@/src/data/troubleshooting";
import { faq } from "@/src/data/faq";

export function GlossaryExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = ["all", ...Array.from(new Set(glossary.map((x) => x.category)))];
  const filtered = useMemo(() => glossary.filter((item) => (category === "all" || item.category === category) && `${item.term} ${item.short} ${item.details}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return <Explorer query={query} setQuery={setQuery} category={category} setCategory={setCategory} categories={categories}>{filtered.map((item) => <GlossaryTermCard key={item.slug} item={item} />)}</Explorer>;
}

export function TroubleshootingExplorer() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => troubleshooting.filter((item) => `${item.problem} ${item.symptoms.join(" ")} ${item.likelyCauses.join(" ")}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <div className="space-y-4">
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Фильтр по симптомам: нити, углы, щелкает..." className="h-10 w-full rounded-md border bg-background px-3" />
      {filtered.map((item) => <TroubleshootingCard key={item.slug} issue={item} />)}
    </div>
  );
}

export function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = ["all", ...Array.from(new Set(faq.map((x) => x.category)))];
  const filtered = useMemo(() => faq.filter((item) => (category === "all" || item.category === category) && `${item.question} ${item.answer}`.toLowerCase().includes(query.toLowerCase())), [query, category]);
  return (
    <Explorer query={query} setQuery={setQuery} category={category} setCategory={setCategory} categories={categories}>
      {filtered.map((item) => <Card key={item.id}><p className="text-sm text-muted-foreground">{item.category}</p><h3 className="mt-1 text-lg font-semibold">{item.question}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.answer}</p></Card>)}
    </Explorer>
  );
}

function Explorer({ query, setQuery, category, setCategory, categories, children }: { query: string; setQuery: (v: string) => void; category: string; setCategory: (v: string) => void; categories: string[]; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-[1fr_240px]">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Поиск" className="h-10 rounded-md border bg-background px-3" />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-10 rounded-md border bg-background px-3">{categories.map((item) => <option key={item} value={item}>{item === "all" ? "Все категории" : item}</option>)}</select>
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </div>
  );
}
