"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { nav } from "@/components/nav-items";
import { Search } from "@/components/search";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const primary = nav.slice(0, 4);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t bg-background lg:hidden">
        {primary.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center gap-1 px-1 py-2 text-[11px] text-muted-foreground">
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
        <button onClick={() => setOpen(true)} className="flex flex-col items-center gap-1 px-1 py-2 text-[11px] text-muted-foreground">
          <Menu className="size-4" />
          Меню
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Закрыть меню" className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 max-h-[88vh] overflow-auto rounded-t-lg border bg-background p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-semibold">Навигация</p>
              <button aria-label="Закрыть меню" onClick={() => setOpen(false)} className="inline-flex size-9 items-center justify-center rounded-md border">
                <X className="size-4" />
              </button>
            </div>
            <Search />
            <div className="mt-4 grid grid-cols-2 gap-2">
              {nav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-md border bg-card p-3 text-sm">
                    <Icon className="size-4 text-primary" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
