"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useI18n } from "@/components/LanguageProvider";
import { localeMeta, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(next: Locale) {
    setLocale(next);
    setOpen(false);
  }

  const current = localeMeta[locale];

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={`inline-flex items-center gap-1.5 rounded-md border border-cream/30 text-cream transition-colors hover:bg-cream/10 focus-ring ${
          compact ? "px-2.5 py-2 text-xs" : "px-3 py-2 text-sm"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={t.common.language}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden className="text-[0.65rem] opacity-70">
          Aa
        </span>
        <span>{current.nativeLabel}</span>
        <span aria-hidden className="text-[0.65rem] opacity-60">
          ▾
        </span>
      </button>

      {open ? (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.common.language}
          className="absolute end-0 z-50 mt-2 min-w-[11rem] overflow-hidden rounded-md border border-cream/15 bg-night py-1 shadow-xl"
        >
          {locales.map((code) => {
            const meta = localeMeta[code];
            const selected = code === locale;
            return (
              <li key={code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm transition-colors focus-ring ${
                    selected
                      ? "bg-cream/15 text-cream"
                      : "text-sand hover:bg-cream/10 hover:text-cream"
                  }`}
                  onClick={() => pick(code)}
                >
                  <span>{meta.nativeLabel}</span>
                  <span className="text-xs text-sand/55">{meta.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
