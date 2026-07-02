import type { Printer, PrinterRecommendation, PrinterWizardAnswers } from "@/src/types/printer";

export const printers: Printer[] = [
  {
    slug: "bambu-lab-a1-mini",
    name: "Bambu Lab A1 mini",
    manufacturer: "Bambu Lab",
    technology: "FDM",
    kinematics: "Cartesian bedslinger",
    buildVolume: "180 x 180 x 180 мм",
    enclosed: false,
    autoBedLeveling: true,
    speed: 500,
    globalPriceUsd: 249,
    russiaPriceRub: 32000,
    officialInRussia: false,
    materials: ["PLA", "PETG", "TPU"],
    purposes: ["старт", "декор", "детали для дома", "многоцвет"],
    pros: ["очень простой старт", "автокалибровка", "готовые профили", "компактный размер"],
    cons: ["маленькая область печати", "нет корпуса", "ABS/ASA не его сценарий"],
    bestFor: "Первый домашний FDM-принтер для PLA/PETG, учебных моделей и аккуратных бытовых деталей.",
    avoidIf: "Нужны крупные детали, закрытая камера или стабильная печать ABS/ASA.",
    userLevel: "новичок",
    simplicity: 5,
    versatility: 3,
    printQuality: 4,
    tweakLevel: 1,
  },
  {
    slug: "bambu-lab-a1",
    name: "Bambu Lab A1",
    manufacturer: "Bambu Lab",
    technology: "FDM",
    kinematics: "Cartesian bedslinger",
    buildVolume: "256 x 256 x 256 мм",
    enclosed: false,
    autoBedLeveling: true,
    speed: 500,
    globalPriceUsd: 399,
    russiaPriceRub: 52000,
    officialInRussia: false,
    materials: ["PLA", "PETG", "TPU"],
    purposes: ["старт", "детали для дома", "прототипы", "многоцвет"],
    pros: ["большая область для класса", "хорошая автоматика", "много готовых профилей"],
    cons: ["открытая конструкция", "экосистема частично vendor-controlled"],
    bestFor: "Новичку, которому нужен один быстрый принтер без долгой механической настройки.",
    avoidIf: "Критична официальная локальная поддержка или инженерные пластики в корпусе.",
    userLevel: "новичок",
    simplicity: 5,
    versatility: 4,
    printQuality: 4,
    tweakLevel: 1,
  },
  {
    slug: "flashforge-adventurer-5m",
    name: "FlashForge Adventurer 5M",
    manufacturer: "FlashForge",
    technology: "FDM",
    kinematics: "CoreXY",
    buildVolume: "220 x 220 x 220 мм",
    enclosed: false,
    autoBedLeveling: true,
    speed: 600,
    globalPriceUsd: 299,
    russiaPriceRub: 39000,
    officialInRussia: true,
    materials: ["PLA", "PETG", "TPU"],
    purposes: ["старт", "быстрая печать", "прототипы"],
    pros: ["быстрый CoreXY", "простая эксплуатация", "хорошая цена"],
    cons: ["без штатного корпуса", "для ABS лучше версия Pro или корпус"],
    bestFor: "Быстрый вход в FDM без переплаты за закрытый корпус.",
    avoidIf: "Сразу планируются ABS/ASA/нейлон в стабильном режиме.",
    userLevel: "новичок",
    simplicity: 4,
    versatility: 4,
    printQuality: 4,
    tweakLevel: 2,
  },
  {
    slug: "flashforge-adventurer-5m-pro",
    name: "FlashForge Adventurer 5M Pro",
    manufacturer: "FlashForge",
    technology: "FDM",
    kinematics: "CoreXY",
    buildVolume: "220 x 220 x 220 мм",
    enclosed: true,
    autoBedLeveling: true,
    speed: 600,
    globalPriceUsd: 599,
    russiaPriceRub: 72000,
    officialInRussia: true,
    materials: ["PLA", "PETG", "TPU", "ABS", "ASA"],
    purposes: ["инженерные детали", "быстрая печать", "дом"],
    pros: ["закрытый корпус", "фильтрация", "высокая скорость", "понятный старт"],
    cons: ["меньше открытости, чем у DIY-платформ", "цена выше entry-сегмента"],
    bestFor: "Тем, кто хочет закрытый быстрый FDM без сборки и долгих апгрейдов.",
    avoidIf: "Нужна максимальная открытость прошивки или большая область печати.",
    userLevel: "новичок",
    simplicity: 4,
    versatility: 5,
    printQuality: 4,
    tweakLevel: 2,
  },
  {
    slug: "creality-k2-se",
    name: "Creality K2 SE",
    manufacturer: "Creality",
    technology: "FDM",
    kinematics: "CoreXY",
    buildVolume: "260 x 260 x 260 мм",
    enclosed: false,
    autoBedLeveling: true,
    speed: 600,
    globalPriceUsd: 349,
    russiaPriceRub: 45000,
    officialInRussia: true,
    materials: ["PLA", "PETG", "TPU"],
    purposes: ["старт", "прототипы", "быстрая печать"],
    pros: ["хорошее соотношение размера и цены", "быстрый CoreXY", "широкая доступность"],
    cons: ["качество зависит от партии и профилей", "для сложных материалов нужен корпус"],
    bestFor: "Пользователю, который хочет скорость и доступность, но готов проверять настройки.",
    avoidIf: "Нужен максимально беспроблемный первый опыт без ручной доводки.",
    userLevel: "продвинутый",
    simplicity: 3,
    versatility: 4,
    printQuality: 3,
    tweakLevel: 3,
  },
  {
    slug: "prusa-mk4s",
    name: "Prusa MK4S",
    manufacturer: "Prusa Research",
    technology: "FDM",
    kinematics: "Cartesian bedslinger",
    buildVolume: "250 x 210 x 220 мм",
    enclosed: false,
    autoBedLeveling: true,
    speed: 300,
    globalPriceUsd: 799,
    russiaPriceRub: 115000,
    officialInRussia: false,
    materials: ["PLA", "PETG", "TPU", "ABS", "ASA"],
    purposes: ["обучение", "надежность", "мастерская", "open-source"],
    pros: ["сильная документация", "ремонтопригодность", "зрелые профили", "открытая культура"],
    cons: ["дороже конкурентов", "для ABS/ASA нужен enclosure"],
    bestFor: "Тем, кто ценит предсказуемость, документацию и долгий жизненный цикл.",
    avoidIf: "Главный критерий - минимальная цена за скорость.",
    userLevel: "продвинутый",
    simplicity: 4,
    versatility: 4,
    printQuality: 5,
    tweakLevel: 2,
  },
  {
    slug: "prusa-core-one",
    name: "Prusa CORE One",
    manufacturer: "Prusa Research",
    technology: "FDM",
    kinematics: "CoreXY",
    buildVolume: "250 x 220 x 270 мм",
    enclosed: true,
    autoBedLeveling: true,
    speed: 500,
    globalPriceUsd: 1199,
    russiaPriceRub: 170000,
    officialInRussia: false,
    materials: ["PLA", "PETG", "TPU", "ABS", "ASA", "PC"],
    purposes: ["инженерные детали", "мастерская", "надежность"],
    pros: ["закрытая камера", "сильная экосистема Prusa", "хорошая механика"],
    cons: ["высокий бюджет", "локальная доступность нестабильна"],
    bestFor: "Продвинутому пользователю, которому нужна закрытая надежная машина.",
    avoidIf: "Бюджет ограничен или важна официальная доступность в РФ.",
    userLevel: "энтузиаст",
    simplicity: 4,
    versatility: 5,
    printQuality: 5,
    tweakLevel: 2,
  },
  {
    slug: "elegoo-mars-5-ultra",
    name: "Elegoo Mars 5 Ultra",
    manufacturer: "Elegoo",
    technology: "MSLA",
    kinematics: "Resin Z-axis",
    buildVolume: "153 x 77 x 165 мм",
    enclosed: true,
    autoBedLeveling: true,
    speed: 150,
    globalPriceUsd: 269,
    russiaPriceRub: 38000,
    officialInRussia: true,
    materials: ["Standard resin", "Tough resin", "Castable resin"],
    purposes: ["миниатюры", "фигурки", "ювелирка"],
    pros: ["очень высокая детализация", "доступная цена", "компактный формат"],
    cons: ["смола требует PPE, мойки и УФ-досветки", "малый объем для корпусов"],
    bestFor: "Миниатюры, рельефы и модели, где FDM-слои слишком заметны.",
    avoidIf: "Нет отдельной зоны под запах, мойку, перчатки и отходы смолы.",
    userLevel: "продвинутый",
    simplicity: 3,
    versatility: 2,
    printQuality: 5,
    tweakLevel: 3,
  },
  {
    slug: "anycubic-photon-mono-m7-pro",
    name: "Anycubic Photon Mono M7 Pro",
    manufacturer: "Anycubic",
    technology: "MSLA",
    kinematics: "Resin Z-axis",
    buildVolume: "223 x 126 x 230 мм",
    enclosed: true,
    autoBedLeveling: true,
    speed: 170,
    globalPriceUsd: 549,
    russiaPriceRub: 72000,
    officialInRussia: true,
    materials: ["Standard resin", "Tough resin", "Castable resin"],
    purposes: ["миниатюры", "стоматология", "ювелирка", "мелкие серии"],
    pros: ["крупнее Mars", "высокая детализация", "быстрая печать слоев"],
    cons: ["дороже вход", "постобработка обязательна"],
    bestFor: "Регулярная resin-печать с более крупным полем.",
    avoidIf: "Нужны дешевые функциональные детали из PLA/PETG.",
    userLevel: "продвинутый",
    simplicity: 3,
    versatility: 3,
    printQuality: 5,
    tweakLevel: 3,
  },
  {
    slug: "formlabs-form-4",
    name: "Formlabs Form 4",
    manufacturer: "Formlabs",
    technology: "SLA",
    kinematics: "LFD resin",
    buildVolume: "200 x 125 x 210 мм",
    enclosed: true,
    autoBedLeveling: true,
    speed: 100,
    globalPriceUsd: 4499,
    russiaPriceRub: 645000,
    officialInRussia: false,
    materials: ["Standard resin", "Tough resin", "Dental resin", "Castable resin"],
    purposes: ["профессиональные прототипы", "стоматология", "ювелирка"],
    pros: ["профессиональная экосистема", "стабильные материалы", "повторяемость"],
    cons: ["дорого", "расходники и постобработка привязаны к экосистеме"],
    bestFor: "Профессиональная смоляная печать, где важна повторяемость и документация.",
    avoidIf: "Это домашний хобби-старт с ограниченным бюджетом.",
    userLevel: "энтузиаст",
    simplicity: 4,
    versatility: 4,
    printQuality: 5,
    tweakLevel: 2,
  },
];

export function recommendPrinters(answers: PrinterWizardAnswers): PrinterRecommendation[] {
  return printers
    .filter((printer) => !answers.needsEnclosure || printer.enclosed)
    .map((printer) => {
      let score = 0;
      const reasons: string[] = [];
      const compromises: string[] = [];

      if (printer.russiaPriceRub <= answers.budgetRub) {
        score += 25;
        reasons.push("укладывается в бюджет");
      } else {
        score -= Math.min(25, Math.round((printer.russiaPriceRub - answers.budgetRub) / 5000));
        compromises.push("цена выше выбранного бюджета");
      }

      if (printer.purposes.some((purpose) => purpose.includes(answers.purpose))) {
        score += 18;
        reasons.push(`подходит под сценарий: ${answers.purpose}`);
      }

      if (["миниатюры", "ювелирка"].includes(answers.purpose)) {
        if (printer.technology === "MSLA" || printer.technology === "SLA") {
          score += 35;
          reasons.push("resin-технология дает нужную микродеталь и гладкую поверхность");
        } else {
          score -= 20;
          compromises.push("FDM хуже передает мелкий рельеф и поверхность миниатюр");
        }
      }

      if (answers.purpose === "инженерные детали" && printer.technology === "FDM" && printer.enclosed) {
        score += 12;
        reasons.push("закрытый FDM лучше подходит для практичных инженерных пластиков");
      }

      if (answers.needsEnclosure && printer.enclosed) {
        score += 12;
        reasons.push("есть закрытая камера");
      } else if (!answers.needsEnclosure && !printer.enclosed) {
        score += 4;
        reasons.push("корпус не увеличивает цену");
      }

      if (answers.speedImportant && printer.speed >= 500) {
        score += 10;
        reasons.push("высокая паспортная скорость");
      }

      if (!answers.readyToTune && printer.simplicity >= 4 && printer.tweakLevel <= 2) {
        score += 15;
        reasons.push("минимум ручной доводки");
      } else if (!answers.readyToTune && printer.tweakLevel >= 3) {
        score -= 10;
        compromises.push("потребует больше настройки профилей");
      }

      if (answers.engineeringMaterials) {
        const engineering = ["ABS", "ASA", "Nylon", "PC"];
        if (printer.enclosed && printer.materials.some((material) => engineering.includes(material))) {
          score += 16;
          reasons.push("лучше готов к ABS/ASA/инженерным пластикам");
        } else {
          score -= 35;
          compromises.push("инженерные пластики будут ограничены");
        }
      }

      if (answers.officialRussia && printer.officialInRussia) {
        score += 10;
        reasons.push("есть подтверждаемая локальная доступность");
      } else if (answers.officialRussia) {
        score -= 8;
        compromises.push("официальный статус в РФ неочевиден");
      }

      score += printer.versatility + printer.printQuality + printer.simplicity;
      return { printer, score, reasons, compromises, avoid: printer.avoidIf };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}
