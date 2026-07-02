"use client";

import { useEffect } from "react";
import { withBasePath } from "@/lib/site";

export function PwaRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;

    navigator.serviceWorker.register(withBasePath("/sw.js"), { scope: withBasePath("/") }).catch(() => {
      // PWA should never break the app shell if registration is unavailable.
    });
  }, []);

  return null;
}
