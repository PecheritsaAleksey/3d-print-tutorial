import Link from "next/link";
import { notFound } from "next/navigation";
import { List } from "@/components/domain-cards";
import { Callout, Card } from "@/components/ui";
import { materials } from "@/src/data/materials";

export function generateStaticParams() {
  return materials.map((material) => ({ slug: material.slug }));
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = materials.find((item) => item.slug === slug);
  if (!material) notFound();
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/materials" className="text-sm text-muted-foreground">← К материалам</Link>
      <div><p className="text-sm text-muted-foreground">{material.category}</p><h1 className="text-4xl font-bold">{material.name}</h1><p className="mt-3 text-lg text-muted-foreground">{material.beginnerNote}</p></div>
      <Card><dl className="grid gap-3 text-sm md:grid-cols-2"><div><dt className="font-semibold">Сопло</dt><dd>{material.nozzleTemp}</dd></div><div><dt className="font-semibold">Стол</dt><dd>{material.bedTemp}</dd></div><div><dt className="font-semibold">Камера</dt><dd>{material.needsEnclosure ? "нужна" : "не обязательна"}</dd></div><div><dt className="font-semibold">Запах/токсичность</dt><dd>{material.smellToxicity}</dd></div><div className="md:col-span-2"><dt className="font-semibold">Хранение</dt><dd>{material.storage}</dd></div></dl></Card>
      <div className="grid gap-4 md:grid-cols-2"><Card><List title="Плюсы" items={material.pros} /></Card><Card><List title="Минусы" items={material.cons} /></Card><Card><List title="Применения" items={material.uses} /></Card><Card><List title="Частые проблемы" items={material.commonProblems} /></Card></div>
      <Callout title="Для продвинутых" tone="tip">{material.advancedNote}</Callout>
    </article>
  );
}
