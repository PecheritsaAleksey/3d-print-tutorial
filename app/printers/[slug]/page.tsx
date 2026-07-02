import Link from "next/link";
import { notFound } from "next/navigation";
import { BadgeGroup, Callout, Card } from "@/components/ui";
import { List } from "@/components/domain-cards";
import { printers } from "@/src/data/printers";

export function generateStaticParams() {
  return printers.map((printer) => ({ slug: printer.slug }));
}

export default async function PrinterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const printer = printers.find((item) => item.slug === slug);
  if (!printer) notFound();
  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/printers" className="text-sm text-muted-foreground">← К каталогу</Link>
      <div><p className="text-sm text-muted-foreground">{printer.manufacturer}</p><h1 className="text-4xl font-bold">{printer.name}</h1><p className="mt-3 text-lg text-muted-foreground">{printer.bestFor}</p></div>
      <div className="grid gap-4 md:grid-cols-2"><Card><List title="Плюсы" items={printer.pros} /></Card><Card><List title="Минусы" items={printer.cons} /></Card></div>
      <Card><dl className="grid gap-3 text-sm md:grid-cols-2"><div><dt className="font-semibold">Технология</dt><dd>{printer.technology}</dd></div><div><dt className="font-semibold">Кинематика</dt><dd>{printer.kinematics}</dd></div><div><dt className="font-semibold">Область печати</dt><dd>{printer.buildVolume}</dd></div><div><dt className="font-semibold">Корпус</dt><dd>{printer.enclosed ? "есть" : "нет"}</dd></div><div><dt className="font-semibold">Цена глобально</dt><dd>~${printer.globalPriceUsd}</dd></div><div><dt className="font-semibold">Цена РФ</dt><dd>~{printer.russiaPriceRub.toLocaleString("ru-RU")} ₽</dd></div></dl><div className="mt-4"><BadgeGroup items={printer.materials} /></div></Card>
      <Callout title="Кому не подойдет" tone="warn">{printer.avoidIf}</Callout>
    </article>
  );
}
