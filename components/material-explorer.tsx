"use client";

import { useMemo, useState } from "react";
import { MaterialCard } from "@/components/domain-cards";
import { materials } from "@/src/data/materials";

export function MaterialExplorer() {
  const [tag, setTag] = useState("all");
  const tags = ["all", "для новичка", "прочный", "гибкий", "термостойкий", "для улицы", "декоративный", "инженерный"];
  const filtered = useMemo(() => tag === "all" ? materials : materials.filter((material) => material.tags.includes(tag)), [tag]);
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">{tags.map((item) => <button key={item} onClick={() => setTag(item)} className={`rounded-md border px-3 py-1 text-sm ${tag === item ? "bg-primary text-primary-foreground" : "bg-card"}`}>{item === "all" ? "Все" : item}</button>)}</div>
      <div className="overflow-auto rounded-lg border">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-muted text-left"><tr><th className="p-3">Материал</th><th>Сложность</th><th>Прочность</th><th>Термостойкость</th><th>Гибкость</th><th>Камера</th><th>Сопло</th><th>Стол</th></tr></thead>
          <tbody>{filtered.map((m) => <tr key={m.slug} className="border-t"><td className="p-3 font-medium">{m.name}</td><td>{m.difficulty}/5</td><td>{m.strength}/5</td><td>{m.heatResistance}/5</td><td>{m.flexibility}/5</td><td>{m.needsEnclosure ? "да" : "нет"}</td><td>{m.nozzleTemp}</td><td>{m.bedTemp}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((material) => <MaterialCard key={material.slug} material={material} />)}</div>
    </div>
  );
}
