import { TroubleshootingExplorer } from "@/components/filterable-content";

export default function TroubleshootingPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">Диагностика проблем</h1><p className="mt-2 text-muted-foreground">Начните с симптома: нити, углы, щелчки экструдера, смещение, слабая деталь или плохой первый слой.</p></div><TroubleshootingExplorer /></div>;
}
