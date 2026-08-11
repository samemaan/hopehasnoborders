import { defaultLocale, type Locale, locales } from "./config";
import type { Messages } from "./types";
import ar from "./messages/ar";
import dari from "./messages/dari";
import de from "./messages/de";
import en from "./messages/en";
import fr from "./messages/fr";
import ps from "./messages/ps";

export { locales, defaultLocale, localeMeta, LOCALE_STORAGE_KEY } from "./config";
export type { Locale } from "./config";
export type { Messages } from "./types";

const catalog: Record<Locale, Messages> = {
  en,
  ps,
  dari,
  ar,
  de,
  fr,
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getMessages(locale: Locale): Messages {
  return catalog[locale] ?? catalog[defaultLocale];
}
