"use client";

import { useState, type FormEvent } from "react";
import { DonateButton } from "@/components/DonateButton";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("General question");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[Hope Has No Borders] ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
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
            Your name
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
            placeholder="How should we address you?"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-sm font-medium text-night">
            Your email
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
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-topic" className="text-sm font-medium text-night">
            Topic
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={fieldClass}
          >
            <option>General question</option>
            <option>I want to donate</option>
            <option>How funds are used</option>
            <option>Partnership or volunteering</option>
            <option>Media or press</option>
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="text-sm font-medium text-night">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`${fieldClass} resize-y min-h-[9rem]`}
            placeholder="Write a few lines — every message is read with care."
          />
        </div>
        <p className="text-sm text-ink/60">
          This opens your email app to send to{" "}
          <span className="font-medium text-night">{site.contactEmail}</span>.
          Nothing is stored on this website.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-saffron px-7 py-3.5 text-sm font-semibold text-cream shadow-[0_12px_28px_-10px_rgba(201,120,60,0.65)] transition-all hover:bg-saffron-hover hover:-translate-y-0.5 focus-ring"
          >
            Send message
          </button>
          <DonateButton href="/donate" variant="ghost">
            Give hope instead
          </DonateButton>
        </div>
      </form>
    </FadeIn>
  );
}
