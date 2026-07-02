"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { List } from "@/components/domain-cards";
import { Badge, ButtonLink, Callout, Card } from "@/components/ui";
import type { CourseLesson } from "@/src/types/course";

export function LessonClient({ lesson, next }: { lesson: CourseLesson; next?: CourseLesson }) {
  const [done, setDone] = useState<string[]>([]);
  const isDone = done.includes(lesson.slug);

  useEffect(() => setDone(JSON.parse(localStorage.getItem("course:done") || "[]") as string[]), []);

  function toggleDone() {
    const updated = isDone ? done.filter((slug) => slug !== lesson.slug) : Array.from(new Set([...done, lesson.slug]));
    setDone(updated);
    localStorage.setItem("course:done", JSON.stringify(updated));
  }

  return (
    <article className="mx-auto max-w-4xl space-y-6">
      <Link href="/course" className="text-sm text-muted-foreground">← К курсу</Link>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-semibold text-primary">{lesson.module}</p>
          {isDone && <Badge className="border-emerald-500 text-emerald-600"><CheckCircle2 className="mr-1 size-3" /> пройден</Badge>}
        </div>
        <h1 className="mt-2 text-4xl font-bold">{lesson.title}</h1>
        <p className="mt-3 text-lg text-muted-foreground">{lesson.description}</p>
      </div>
      <Card className="space-y-4">{lesson.body.map((p) => <p key={p} className="leading-7">{p}</p>)}</Card>
      <Callout title="Что нужно понять">{lesson.keyTakeaways.join(" ")}</Callout>
      <div className="grid gap-4 md:grid-cols-2"><Card><List title="Типичные ошибки" items={lesson.commonMistakes} /></Card><Card><List title="Чеклист" items={lesson.checklist} /></Card></div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={toggleDone}
          aria-pressed={isDone}
          className={isDone ? "rounded-md border bg-card px-4 py-2 text-sm font-semibold text-foreground" : "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"}
        >
          {isDone ? "Урок пройден" : "Отметить урок пройденным"}
        </button>
        {next && <ButtonLink href={`/course/${next.slug}`}>Следующий урок</ButtonLink>}
      </div>
    </article>
  );
}
