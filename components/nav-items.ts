import { BookOpen, CheckSquare, Cpu, HelpCircle, Home, LifeBuoy, Package, Printer, Search as SearchIcon, Wrench } from "lucide-react";

export const nav = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/course", label: "Курс", icon: BookOpen },
  { href: "/printers", label: "Принтеры", icon: Printer },
  { href: "/choose-printer", label: "Выбор", icon: SearchIcon },
  { href: "/materials", label: "Материалы", icon: Package },
  { href: "/software", label: "ПО", icon: Cpu },
  { href: "/glossary", label: "Глоссарий", icon: Wrench },
  { href: "/troubleshooting", label: "Диагностика", icon: LifeBuoy },
  { href: "/checklists", label: "Чеклисты", icon: CheckSquare },
  { href: "/faq", label: "FAQ", icon: HelpCircle },
];
