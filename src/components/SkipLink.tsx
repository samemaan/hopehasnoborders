"use client";

import { useI18n } from "@/components/LanguageProvider";

export function SkipLink() {
  const { t } = useI18n();
  return (
    <a href="#main-content" className="skip-link focus-ring">
      {t.common.skipToContent}
    </a>
  );
}
