import Link from "next/link";
import { Search } from "@/components/search";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav } from "@/components/nav-items";
import { MobileNavigation } from "@/components/mobile-navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/92 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-3 px-4">
        <Link href="/" className="mr-2 whitespace-nowrap text-sm font-bold">3D Print Course</Link>
        <div className="hidden flex-1 md:block"><Search /></div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] w-60 shrink-0 overflow-auto border-r pr-4 lg:block">
      <nav className="grid gap-1">
        {nav.map((item) => {
          const Icon = item.icon;
          return <Link key={item.href} href={item.href} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"><Icon className="size-4" />{item.label}</Link>;
        })}
      </nav>
    </aside>
  );
}

export function Footer() {
  return <footer className="border-t py-8 text-center text-sm text-muted-foreground">Локальная энциклопедия и курс по домашней 3D-печати. Данные можно расширять в `src/data`.</footer>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-7xl gap-6 px-4 pb-24 pt-6 lg:pb-6">
        <Sidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <MobileNavigation />
      <Footer />
    </>
  );
}
