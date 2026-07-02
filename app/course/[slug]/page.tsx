import { notFound } from "next/navigation";
import { LessonClient } from "@/app/course/[slug]/lesson-client";
import { course, getNextLesson } from "@/src/data/course";

export function generateStaticParams() {
  return course.map((lesson) => ({ slug: lesson.slug }));
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = course.find((item) => item.slug === slug);
  if (!lesson) notFound();

  return <LessonClient lesson={lesson} next={getNextLesson(lesson.slug)} />;
}
