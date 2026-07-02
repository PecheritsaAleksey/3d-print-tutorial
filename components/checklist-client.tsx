"use client";

import { useEffect, useState } from "react";
import type { ChecklistGroup } from "@/src/types/checklist";
import { Card, ProgressBar } from "@/components/ui";

export function Checklist({ group }: { group: ChecklistGroup }) {
  const key = `checklist:${group.slug}`;
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem(key) || "[]") as string[]);
  }, [key]);

  function toggle(item: string) {
    const next = checked.includes(item) ? checked.filter((x) => x !== item) : [...checked, item];
    setChecked(next);
    localStorage.setItem(key, JSON.stringify(next));
  }

  return (
    <Card>
      <h2 className="text-xl font-semibold">{group.title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{group.description}</p>
      <div className="my-4"><ProgressBar value={(checked.length / group.items.length) * 100} /></div>
      <div className="space-y-2">
        {group.items.map((item) => (
          <label key={item} className="flex items-start gap-3 rounded-md border p-3 text-sm">
            <input type="checkbox" checked={checked.includes(item)} onChange={() => toggle(item)} className="mt-1" />
            <span className={checked.includes(item) ? "text-muted-foreground line-through" : ""}>{item}</span>
          </label>
        ))}
      </div>
    </Card>
  );
}
