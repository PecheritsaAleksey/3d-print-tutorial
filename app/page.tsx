import Link from "next/link";
import { ArrowRight, BookOpen, LifeBuoy, Package, Printer, SlidersHorizontal } from "lucide-react";
import { ButtonLink, Callout, Card } from "@/components/ui";

const scenarios = [
  ["Я новичок", "/course", BookOpen],
  ["Хочу выбрать принтер", "/choose-printer", Printer],
  ["Хочу разобраться в пластиках", "/materials", Package],
  ["У меня проблемы с печатью", "/troubleshooting", LifeBuoy],
  ["Хочу настроить слайсер", "/software", SlidersHorizontal],
] as const;

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="surface-grid overflow-hidden rounded-lg border bg-card">
        <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold text-primary">Интерактивный курс и энциклопедия</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Домашняя 3D-печать без хаоса в настройках</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">FDM, MSLA, материалы, слайсеры, выбор принтера, диагностика дефектов и безопасная работа дома. Сайт ведет от первой модели до инженерных пластиков и осмысленных апгрейдов.</p>
            <div className="mt-6 flex flex-wrap gap-3"><ButtonLink href="/course">Начать курс <ArrowRight className="ml-2 size-4" /></ButtonLink><ButtonLink href="/choose-printer" className="bg-secondary text-secondary-foreground">Подобрать принтер</ButtonLink></div>
          </div>
          <div className="grid content-end gap-3">
            <Card><b>Вход в хобби</b><p className="mt-1 text-sm text-muted-foreground">От 30-70 тыс. ₽ за понятный FDM-старт; смоляная печать требует отдельной зоны и постобработки.</p></Card>
            <Card><b>Что печатать дома</b><p className="mt-1 text-sm text-muted-foreground">Кронштейны, органайзеры, корпуса, макеты, игрушки, миниатюры, шаблоны и ремонтные детали.</p></Card>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Быстрый выбор сценария</h2>
        <div className="grid gap-3 md:grid-cols-5">{scenarios.map(([label, href, Icon]) => <Link key={label} href={href} className="rounded-lg border bg-card p-4 transition hover:border-primary"><Icon className="mb-3 size-5 text-primary" /><span className="text-sm font-semibold">{label}</span></Link>)}</div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Пошаговый курс", "11 модулей с пониманием, ошибками и чеклистами.", "/course"],
          ["Каталог принтеров", "Фильтры по бюджету, корпусу, материалам, РФ и назначению.", "/printers"],
          ["Материалы", "Сравнение PLA, PETG, ABS, ASA, TPU, Nylon, PC и композитов.", "/materials"],
          ["Слайсеры и CAD", "OrcaSlicer, Bambu Studio, Cura, PrusaSlicer, Fusion, FreeCAD.", "/software"],
          ["Глоссарий", "Термины FDM, flow, Z-offset, CoreXY и дефекты печати.", "/glossary"],
          ["Диагностика", "Симптомы, причины, проверки, исправления и профилактика.", "/troubleshooting"],
        ].map(([title, text, href]) => <Link key={title} href={href}><Card className="h-full transition hover:border-primary"><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></Card></Link>)}
      </section>

      <Callout title="С чего начать" tone="tip">Если вы не уверены в выборе, пройдите первый модуль курса, затем wizard выбора принтера. Для 80% бытовых задач сначала достаточно FDM-принтера, PLA/PETG и аккуратной настройки первого слоя.</Callout>
    </div>
  );
}
