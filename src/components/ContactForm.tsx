"use client";

import { useEffect, useState, type FormEvent } from "react";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { site } from "@/lib/site";

export function ContactForm() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(t.form.topics[0]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTopic((prev) =>
      t.form.topics.includes(prev) ? prev : t.form.topics[0],
    );
  }, [t.form.topics]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Hope Has No Borders] ${topic}`);
    const body = encodeURIComponent(
      `${t.form.bodyName}: ${name}\n${t.form.bodyEmail}: ${email}\n${t.form.bodyTopic}: ${topic}\n\n${message}`,
    );
    window.location.href = `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "mt-2 w-full rounded-md border border-night/15 bg-cream px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-saffron focus:ring-2 focus:ring-saffron/25";

  return (
    <FadeIn>
      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium text-night">
            {t.form.name}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
            placeholder={t.form.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-night">
            {t.form.email}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
            placeholder={t.form.emailPlaceholder}
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className="text-sm font-medium text-night">
            {t.form.topic}
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={fieldClass}
          >
            {t.form.topics.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-night"
          >
            {t.form.message}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${fieldClass} min-h-[9rem] resize-y`}
            placeholder={t.form.messagePlaceholder}
          />
        </div>
        <p className="text-sm text-ink/60">
          {t.form.mailtoHint}{" "}
          <span className="font-medium text-night">{site.contactEmail}</span>.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-saffron px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_12px_28px_-10px_rgba(201,120,60,0.65)] transition-all hover:-translate-y-0.5 hover:bg-saffron-hover focus-ring"
          >
            {t.form.send}
          </button>
          <DonateButton href="/donate" variant="ghost">
            {t.form.giveInstead}
          </DonateButton>
        </div>
      </form>
    </FadeIn>
  );
}
