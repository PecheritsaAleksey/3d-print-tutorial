export type UserLevel = "новичок" | "продвинутый" | "энтузиаст";
export type PrinterTechnology = "FDM" | "MSLA" | "SLA" | "SLS";

export type Printer = {
  slug: string;
  name: string;
  manufacturer: string;
  technology: PrinterTechnology;
  kinematics: string;
  buildVolume: string;
  enclosed: boolean;
  autoBedLeveling: boolean;
  speed: number;
  globalPriceUsd: number;
  russiaPriceRub: number;
  officialInRussia: boolean;
  materials: string[];
  purposes: string[];
  pros: string[];
  cons: string[];
  bestFor: string;
  avoidIf: string;
  userLevel: UserLevel;
  simplicity: number;
  versatility: number;
  printQuality: number;
  tweakLevel: number;
};

export type PrinterWizardAnswers = {
  budgetRub: number;
  purpose: string;
  needsEnclosure: boolean;
  speedImportant: boolean;
  readyToTune: boolean;
  engineeringMaterials: boolean;
  officialRussia: boolean;
};

export type PrinterRecommendation = {
  printer: Printer;
  score: number;
  reasons: string[];
  compromises: string[];
  avoid: string;
};
