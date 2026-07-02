import { GlossaryExplorer } from "@/components/filterable-content";

export default function GlossaryPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">Глоссарий</h1><p className="mt-2 text-muted-foreground">Поиск по терминам, категориям и связанным понятиям.</p></div><GlossaryExplorer /></div>;
}
