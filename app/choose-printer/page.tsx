import { PrinterWizard } from "@/components/wizard";

export default function ChoosePrinterPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">Помощник выбора принтера</h1><p className="mt-2 text-muted-foreground">Ответьте на вопросы, а scoring-система покажет 3 модели с причинами и компромиссами.</p></div><PrinterWizard /></div>;
}
