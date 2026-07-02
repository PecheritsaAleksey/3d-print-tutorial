import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Домашняя 3D-печать",
    short_name: "3D Print",
    description: "Интерактивный курс и энциклопедия по домашней 3D-печати.",
    start_url: withBasePath("/"),
    scope: withBasePath("/"),
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#14707a",
    categories: ["education", "productivity", "utilities"],
    lang: "ru",
    icons: [
      {
        src: withBasePath("/icon-192.png"),
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/icon-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: withBasePath("/maskable-512.png"),
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      { name: "Курс", url: withBasePath("/course/"), description: "Открыть пошаговый курс" },
      { name: "Выбор принтера", url: withBasePath("/choose-printer/"), description: "Подобрать принтер" },
      { name: "Диагностика", url: withBasePath("/troubleshooting/"), description: "Найти причину дефекта печати" },
    ],
  };
}
