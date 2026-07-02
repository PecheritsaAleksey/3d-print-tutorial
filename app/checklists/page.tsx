import { Checklist } from "@/components/checklist-client";
import { checklists } from "@/src/data/checklists";

export default function ChecklistsPage() {
  return <div className="space-y-6"><div><h1 className="text-3xl font-bold">Чеклисты</h1><p className="mt-2 text-muted-foreground">Отмеченные пункты сохраняются локально в браузере.</p></div><div className="grid gap-4 md:grid-cols-2">{checklists.map((group) => <Checklist key={group.slug} group={group} />)}</div></div>;
}
