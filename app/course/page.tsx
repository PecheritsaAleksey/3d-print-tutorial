"use client";

import { useEffect, useState } from "react";
import { CourseCard } from "@/components/domain-cards";
import { ProgressBar } from "@/components/ui";
import { course } from "@/src/data/course";

export default function CoursePage() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => setDone(JSON.parse(localStorage.getItem("course:done") || "[]") as string[]), []);
  return (
    <div className="space-y-6">
      <div><p className="text-sm text-muted-foreground">Прогресс курса</p><div className="mt-2 max-w-xl"><ProgressBar value={(done.length / course.length) * 100} /></div></div>
      <h1 className="text-3xl font-bold">Пошаговый курс</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{course.map((lesson) => <CourseCard key={lesson.slug} lesson={lesson} done={done.includes(lesson.slug)} />)}</div>
    </div>
  );
}
