/** Humanitarian figures for Afghanistan — cited public sources. Update as reports refresh. */

export const afghanistanStats = {
  updatedLabel: "Figures reflect public reports from late 2025 – mid 2026",
  populationApproxMillions: 43,
  hunger: {
    title: "Acute food insecurity",
    leanSeasonMillions: 17.4,
    leanSeasonPercent: 36,
    emergencyMillions: 4.7,
    harvestSeasonMillions: 13.8,
    harvestSeasonPercent: 28,
    periodLean: "Nov 2025 – Mar 2026 (winter lean season)",
    periodHarvest: "Apr – Sep 2026 (projected)",
    source: "IPC / WFP",
    sourceUrl:
      "https://reliefweb.int/report/afghanistan/afghanistan-ipc-acute-food-insecurity-analysis-september-2025-september-2026-issued-16-december-2025",
  },
  malnutrition: {
    childrenUnderFiveMillions: 3.7,
    pregnantBreastfeedingMillions: 1.2,
    source: "IPC / WFP",
    sourceUrl:
      "https://reliefweb.int/report/afghanistan/wfp-afghanistan-external-situation-report-november-2025",
  },
  humanitarian: {
    peopleInNeedMillions: 21.9,
    percentOfPopulation: 45,
    year: "2026",
    source: "UN OCHA Humanitarian Needs and Response Plan",
    sourceUrl: "https://www.unocha.org/afghanistan",
  },
  livelihoods: {
    povertyPercent: 48,
    unemploymentPercent: 13.4,
    youthUnemploymentPercent: 16.8,
    povertyNote: "Approx. share living in poverty (World Bank, Spring 2023 baseline still widely cited)",
    unemploymentNote:
      "ILO modelled estimates understate underemployment and unpaid hardship — many educated adults still cannot earn enough to feed a family.",
    povertySource: "World Bank Afghanistan Development Update",
    unemploymentSource: "ILO / World Bank (modeled estimates, 2025)",
    povertySourceUrl:
      "https://thedocs.worldbank.org/en/doc/71dd45bbb425564ee41e22e1dc2c2f57-0310012025/original/Afghanistan-Development-Update-April-2025-Final.pdf",
    unemploymentSourceUrl: "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS",
  },
} as const;
