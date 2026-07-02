import { SoftwareCard } from "@/components/domain-cards";
import { Callout } from "@/components/ui";
import { software } from "@/src/data/software";

const categories = ["CAD", "Слайсер", "Ремонт моделей", "Библиотека моделей"] as const;

export default function SoftwarePage() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Слайсеры и программы</h1><p className="mt-2 text-muted-foreground">CAD создает геометрию, слайсер готовит печать, утилиты чинят сетки, библиотеки дают стартовые модели.</p></div>
      <Callout title="Практический совет">Новичку не нужно учить все программы сразу: выберите один CAD под тип деталей и один слайсер с хорошим профилем вашего принтера.</Callout>
      {categories.map((category) => <section key={category} className="space-y-4"><h2 className="text-2xl font-semibold">{category}</h2><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{software.filter((tool) => tool.category === category).map((tool) => <SoftwareCard key={tool.slug} tool={tool} />)}</div></section>)}
    </div>
  );
}
