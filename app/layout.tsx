import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout";
import { PwaRegister } from "@/components/pwa/register";
import { ThemeProvider } from "@/components/theme-provider";
import { withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  applicationName: "3D Print Course",
  title: "Домашняя 3D-печать",
  description: "Интерактивный курс и энциклопедия по домашней 3D-печати.",
  manifest: withBasePath("/manifest.webmanifest"),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "3D Print Course",
  },
  icons: {
    icon: [
      { url: withBasePath("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { url: withBasePath("/icon-512.png"), sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: withBasePath("/apple-touch-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#14707a" },
    { media: "(prefers-color-scheme: dark)", color: "#2bb8c6" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
          <PwaRegister />
        </ThemeProvider>
      </body>
    </html>
  );
}
