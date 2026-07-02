import { MaterialExplorer } from "@/components/material-explorer";

export default function MaterialsPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">Материалы и пластики</h1><p className="mt-2 text-muted-foreground">Сравнение сложности, прочности, термостойкости, запаха, хранения и типичных проблем.</p></div><MaterialExplorer /></div>;
}
