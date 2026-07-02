import Link from "next/link";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium text-muted-foreground", className)}>{children}</span>;
}

export function BadgeGroup({ items }: { items: string[] }) {
  return <div className="flex flex-wrap gap-1.5">{items.map((item) => <Badge key={item}>{item}</Badge>)}</div>;
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border bg-card p-5 shadow-sm", className)}>{children}</div>;
}

export function ButtonLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link href={href} className={cn("inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90", className)}>{children}</Link>;
}

export function Callout({ title, children, tone = "info" }: { title: string; children: React.ReactNode; tone?: "info" | "warn" | "tip" }) {
  const styles = {
    info: "border-primary/30 bg-primary/5",
    warn: "border-secondary/40 bg-secondary/10",
    tip: "border-emerald-500/30 bg-emerald-500/10",
  };
  return (
    <div className={cn("rounded-lg border p-4", styles[tone])}>
      <p className="mb-1 text-sm font-semibold">{title}</p>
      <div className="text-sm leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-muted">
      <div className="h-full bg-primary transition-all" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}
