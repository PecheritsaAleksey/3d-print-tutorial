"use client";

import { useMemo, useState } from "react";
import { recommendPrinters } from "@/src/data/printers";
import type { PrinterWizardAnswers } from "@/src/types/printer";
import { Card, Badge } from "@/components/ui";

export function PrinterWizard() {
  const [answers, setAnswers] = useState<PrinterWizardAnswers>({
    budgetRub: 70000,
    purpose: "старт",
    needsEnclosure: false,
    speedImportant: true,
    readyToTune: false,
    engineeringMaterials: false,
    officialRussia: false,
  });
  const recommendations = useMemo(() => recommendPrinters(answers), [answers]);
  const set = <K extends keyof PrinterWizardAnswers>(key: K, value: PrinterWizardAnswers[K]) => setAnswers((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
      <Card className="space-y-4">
        <label className="block text-sm">Бюджет: {answers.budgetRub.toLocaleString("ru-RU")} ₽<input type="range" min={25000} max={700000} step={5000} value={answers.budgetRub} onChange={(e) => set("budgetRub", Number(e.target.value))} className="mt-2 w-full" /></label>
        <div className="block text-sm"><label htmlFor="wizard-purpose">Что печатать</label><select id="wizard-purpose" value={answers.purpose} onChange={(e) => set("purpose", e.target.value)} className="mt-1 h-9 w-full rounded-md border bg-background px-2"><option value="старт">обучение и старт</option><option value="детали для дома">детали для дома</option><option value="инженерные детали">инженерные детали</option><option value="миниатюры">миниатюры</option><option value="ювелирка">ювелирка</option><option value="прототипы">прототипы</option></select></div>
        <Toggle label="Нужен корпус" value={answers.needsEnclosure} onChange={(v) => set("needsEnclosure", v)} />
        <Toggle label="Важна скорость" value={answers.speedImportant} onChange={(v) => set("speedImportant", v)} />
        <Toggle label="Готов к настройкам" value={answers.readyToTune} onChange={(v) => set("readyToTune", v)} />
        <Toggle label="Нужны ABS/ASA/нейлон/PC" value={answers.engineeringMaterials} onChange={(v) => set("engineeringMaterials", v)} />
        <Toggle label="Важна официальная доступность в РФ" value={answers.officialRussia} onChange={(v) => set("officialRussia", v)} />
      </Card>
      <div className="grid gap-4">
        {recommendations.map((item, index) => (
          <Card key={item.printer.slug}>
            <div className="flex items-start justify-between gap-3"><div><Badge>#{index + 1} · score {item.score}</Badge><h2 className="mt-2 text-2xl font-semibold">{item.printer.name}</h2></div><Badge>{item.printer.technology}</Badge></div>
            <p className="mt-3 text-muted-foreground">{item.printer.bestFor}</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <List title="Почему подходит" items={item.reasons.length ? item.reasons : ["лучший баланс по выбранным критериям"]} />
              <List title="Компромиссы" items={item.compromises.length ? item.compromises : ["существенных компромиссов по анкете нет"]} />
              <List title="Что лучше не покупать" items={[item.avoid]} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (value: boolean) => void }) {
  return <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />{label}</label>;
}

function List({ title, items }: { title: string; items: string[] }) {
  return <div><p className="mb-2 text-sm font-semibold">{title}</p><ul className="space-y-1 text-sm text-muted-foreground">{items.map((item) => <li key={item}>- {item}</li>)}</ul></div>;
}
