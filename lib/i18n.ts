import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["en", "zh", "ja", "ar", "es", "ru"];
export const defaultLocale = "en";

export const localeNames: Record<string, string> = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
  ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية",
  es: "🇪🇸 Español",
  ru: "🇷🇺 Русский",
};

export function getLocale(headers: any): string {
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  zh: () => import("@/locales/zh.json").then((module) => module.default),
  ja: () => import("@/locales/ja.json").then((module) => module.default),
  ar: () => import("@/locales/ar.json").then((module) => module.default),
  es: () => import("@/locales/es.json").then((module) => module.default),
  ru: () => import("@/locales/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  // Normalisasi
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) locale = "zh";
  if (!locales.includes(locale)) locale = defaultLocale;

  try {
    return await dictionaries[locale]();
  } catch (err) {
    console.warn(`Failed to load dictionary for '${locale}', falling back to '${defaultLocale}'`);
    return await dictionaries[defaultLocale]();
  }
};
