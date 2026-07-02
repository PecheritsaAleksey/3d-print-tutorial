import { FaqExplorer } from "@/components/filterable-content";

export default function FaqPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">FAQ</h1><p className="mt-2 text-muted-foreground">Ответы по выбору принтера, материалам, безопасности, слайсерам, обслуживанию и покупке в России.</p></div><FaqExplorer /></div>;
}
