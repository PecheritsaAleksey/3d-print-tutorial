"use client";

import { useMemo, useState } from "react";
import { PrinterCard } from "@/components/domain-cards";
import { Badge } from "@/components/ui";
import { printers } from "@/src/data/printers";

type SortKey = "price" | "simplicity" | "versatility" | "speed" | "quality";

export function PrinterExplorer() {
  const [technology, setTechnology] = useState("all");
  const [manufacturer, setManufacturer] = useState("all");
  const [enclosed, setEnclosed] = useState(false);
  const [beginner, setBeginner] = useState(false);
  const [official, setOfficial] = useState(false);
  const [material, setMaterial] = useState("all");
  const [purpose, setPurpose] = useState("all");
  const [budget, setBudget] = useState(200000);
  const [sort, setSort] = useState<SortKey>("price");

  const manufacturers = Array.from(new Set(printers.map((printer) => printer.manufacturer)));
  const materials = Array.from(new Set(printers.flatMap((printer) => printer.materials)));
  const purposes = Array.from(new Set(printers.flatMap((printer) => printer.purposes)));

  const filtered = useMemo(() => {
    return printers
      .filter((printer) => printer.russiaPriceRub <= budget)
      .filter((printer) => technology === "all" || printer.technology === technology)
      .filter((printer) => manufacturer === "all" || printer.manufacturer === manufacturer)
      .filter((printer) => !enclosed || printer.enclosed)
      .filter((printer) => !beginner || printer.userLevel === "новичок")
      .filter((printer) => !official || printer.officialInRussia)
      .filter((printer) => material === "all" || printer.materials.includes(material))
      .filter((printer) => purpose === "all" || printer.purposes.includes(purpose))
      .sort((a, b) => {
        if (sort === "price") return a.russiaPriceRub - b.russiaPriceRub;
        if (sort === "simplicity") return b.simplicity - a.simplicity;
        if (sort === "versatility") return b.versatility - a.versatility;
        if (sort === "speed") return b.speed - a.speed;
        return b.printQuality - a.printQuality;
      });
  }, [budget, technology, manufacturer, enclosed, beginner, official, material, purpose, sort]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-4">
        <div className="grid gap-3 md:grid-cols-4">
          <label className="text-sm">Бюджет: {budget.toLocaleString("ru-RU")} ₽<input type="range" min={25000} max={700000} step={5000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="mt-2 w-full" /></label>
          <Select label="Технология" value={technology} onChange={setTechnology} options={["all", "FDM", "MSLA", "SLA", "SLS"]} />
          <Select label="Производитель" value={manufacturer} onChange={setManufacturer} options={["all", ...manufacturers]} />
          <Select label="Материал" value={material} onChange={setMaterial} options={["all", ...materials]} />
          <Select label="Назначение" value={purpose} onChange={setPurpose} options={["all", ...purposes]} />
          <Select label="Сортировка" value={sort} onChange={(value) => setSort(value as SortKey)} options={["price", "simplicity", "versatility", "speed", "quality"]} />
          <Toggle label="Закрытый корпус" checked={enclosed} onChange={setEnclosed} />
          <Toggle label="Для новичка" checked={beginner} onChange={setBeginner} />
          <Toggle label="Официально в РФ" checked={official} onChange={setOfficial} />
        </div>
      </div>
      <div className="flex items-center justify-between"><p className="text-sm text-muted-foreground">Найдено: {filtered.length}</p><Badge>таблица + карточки</Badge></div>
      <div className="overflow-auto rounded-lg border">
        <table className="w-full min-w-[900px] text-sm">
          <thead className="bg-muted text-left"><tr><th className="p-3">Модель</th><th>Технология</th><th>Кинематика</th><th>Корпус</th><th>Автоуровень</th><th>Скорость</th><th>Цена РФ</th><th>Уровень</th></tr></thead>
          <tbody>{filtered.map((p) => <tr key={p.slug} className="border-t"><td className="p-3 font-medium">{p.name}</td><td>{p.technology}</td><td>{p.kinematics}</td><td>{p.enclosed ? "да" : "нет"}</td><td>{p.autoBedLeveling ? "да" : "нет"}</td><td>{p.speed} мм/с</td><td>~{p.russiaPriceRub.toLocaleString("ru-RU")} ₽</td><td>{p.userLevel}</td></tr>)}</tbody>
        </table>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{filtered.map((printer) => <PrinterCard key={printer.slug} printer={printer} />)}</div>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  const id = `printer-filter-${label.toLowerCase().replace(/[^a-zа-я0-9]+/gi, "-")}`;
  return <div className="text-sm"><label htmlFor={id}>{label}</label><select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 h-9 w-full rounded-md border bg-background px-2">{options.map((option) => <option key={option} value={option}>{option === "all" ? "Все" : option}</option>)}</select></div>;
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return <label className="flex items-center gap-2 pt-6 text-sm"><input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />{label}</label>;
}
