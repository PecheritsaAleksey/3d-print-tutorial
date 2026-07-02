import Link from "next/link";
import type { CourseLesson } from "@/src/types/course";
import type { Printer } from "@/src/types/printer";
import type { Material } from "@/src/types/material";
import type { SoftwareTool } from "@/src/types/software";
import type { GlossaryTerm } from "@/src/types/glossary";
import type { TroubleshootingIssue } from "@/src/types/troubleshooting";
import { Badge, BadgeGroup, Card, ProgressBar } from "@/components/ui";

export function CourseCard({ lesson, done }: { lesson: CourseLesson; done?: boolean }) {
  return (
    <Link href={`/course/${lesson.slug}`}>
      <Card className="h-full transition hover:border-primary">
        <div className="mb-3 flex items-start justify-between gap-3">
          <Badge>{lesson.module}</Badge>
          {done && <Badge className="border-emerald-500 text-emerald-600">пройден</Badge>}
        </div>
        <h3 className="text-lg font-semibold">{lesson.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{lesson.description}</p>
      </Card>
    </Link>
  );
}

export function PrinterCard({ printer }: { printer: Printer }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">{printer.manufacturer}</p>
          <h3 className="text-lg font-semibold">{printer.name}</h3>
        </div>
        <Badge>{printer.userLevel}</Badge>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{printer.bestFor}</p>
      <div className="mt-4 grid gap-2 text-sm">
        <span>Технология: {printer.technology}</span>
        <span>Область: {printer.buildVolume}</span>
        <span>Цена РФ: ~{printer.russiaPriceRub.toLocaleString("ru-RU")} ₽</span>
      </div>
      <div className="mt-4"><BadgeGroup items={printer.materials.slice(0, 5)} /></div>
      <Link href={`/printers/${printer.slug}`} className="mt-5 text-sm font-semibold text-primary">Подробнее</Link>
    </Card>
  );
}

export function MaterialCard({ material }: { material: Material }) {
  return (
    <Link href={`/materials/${material.slug}`}>
      <Card className="h-full transition hover:border-primary">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{material.name}</h3>
          <Badge>{material.category}</Badge>
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{material.beginnerNote}</p>
        <div className="mt-4 space-y-2 text-sm">
          <Metric label="Сложность" value={material.difficulty * 20} />
          <Metric label="Прочность" value={material.strength * 20} />
          <Metric label="Термостойкость" value={material.heatResistance * 20} />
        </div>
        <div className="mt-4"><BadgeGroup items={material.tags} /></div>
      </Card>
    </Link>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return <div><div className="mb-1 flex justify-between text-xs text-muted-foreground"><span>{label}</span><span>{value / 20}/5</span></div><ProgressBar value={value} /></div>;
}

export function SoftwareCard({ tool }: { tool: SoftwareTool }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{tool.name}</h3>
        <Badge>{tool.category}</Badge>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{tool.purpose}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div><dt className="font-medium">Кому подходит</dt><dd className="text-muted-foreground">{tool.bestFor}</dd></div>
        <div><dt className="font-medium">Цена</dt><dd className="text-muted-foreground">{tool.price}</dd></div>
      </dl>
    </Card>
  );
}

export function GlossaryTermCard({ item }: { item: GlossaryTerm }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{item.term}</h3>
        <Badge>{item.category}</Badge>
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.short}</p>
      <p className="mt-3 text-sm leading-6">{item.details}</p>
      <div className="mt-4"><BadgeGroup items={item.related} /></div>
    </Card>
  );
}

export function TroubleshootingCard({ issue }: { issue: TroubleshootingIssue }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">{issue.problem}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <List title="Симптомы" items={issue.symptoms} />
        <List title="Причины" items={issue.likelyCauses} />
        <List title="Что проверить" items={issue.checks} />
        <List title="Как исправить" items={issue.fixes} />
      </div>
    </Card>
  );
}

export function List({ title, items }: { title: string; items: string[] }) {
  return <div><p className="mb-2 text-sm font-semibold">{title}</p><ul className="space-y-1 text-sm text-muted-foreground">{items.map((item) => <li key={item}>- {item}</li>)}</ul></div>;
}
