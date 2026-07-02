export type SoftwareTool = {
  slug: string;
  name: string;
  category: "CAD" | "Слайсер" | "Ремонт моделей" | "Библиотека моделей";
  purpose: string;
  difficulty: "легко" | "средне" | "сложно";
  price: string;
  platforms: string[];
  bestFor: string;
  pros: string[];
  cons: string[];
};
