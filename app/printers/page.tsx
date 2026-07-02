import { PrinterExplorer } from "@/components/printer-explorer";

export default function PrintersPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">Каталог принтеров</h1><p className="mt-2 text-muted-foreground">Фильтруйте модели по бюджету, технологии, материалам, корпусу, доступности в РФ и назначению.</p></div><PrinterExplorer /></div>;
}
