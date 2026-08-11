export const locales = ["en", "ps", "dari", "ar", "de", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; nativeLabel: string; lang: string; dir: "ltr" | "rtl" }
> = {
  en: { label: "English", nativeLabel: "English", lang: "en", dir: "ltr" },
  ps: { label: "Pashto", nativeLabel: "پښتو", lang: "ps", dir: "rtl" },
  dari: { label: "Dari", nativeLabel: "دری", lang: "fa-AF", dir: "rtl" },
  ar: { label: "Arabic", nativeLabel: "العربية", lang: "ar", dir: "rtl" },
  de: { label: "German", nativeLabel: "Deutsch", lang: "de", dir: "ltr" },
  fr: { label: "French", nativeLabel: "Français", lang: "fr", dir: "ltr" },
};

export const LOCALE_STORAGE_KEY = "hhnnb-locale";
