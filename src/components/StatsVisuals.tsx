"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { useI18n } from "@/components/LanguageProvider";
import { fill } from "@/lib/i18n/fill";
import { afghanistanStats as s } from "@/lib/stats";

function useAnimatedPercent(target: number, enabled: boolean, duration = 1100) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, enabled, duration]);

  return value;
}

function RingStat({
  percent,
  label,
  detail,
  accent = "saffron",
}: {
  percent: number;
  label: string;
  detail: string;
  accent?: "saffron" | "sand";
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);

  const animated = useAnimatedPercent(percent, visible);
  const r = 54;
  const c = 2 * Math.PI * r;
  const offset = c - (animated / 100) * c;
  const stroke = accent === "saffron" ? "#C4783A" : "#E8DCC8";

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36">
        <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
          <circle
            cx="64"
            cy="64"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            className="text-night/10"
          />
          <circle
            cx="64"
            cy="64"
            r={r}
            fill="none"
            stroke={stroke}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-3xl text-night">
            {Math.round(animated)}%
          </span>
        </div>
      </div>
      <p className="mt-4 font-display text-xl text-night">{label}</p>
      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-ink/65">
        {detail}
      </p>
    </div>
  );
}

function BarRow({
  label,
  value,
  max,
  suffix = "",
  note,
}: {
  label: string;
  value: number;
  max: number;
  suffix?: string;
  note?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(true);
  }, []);
  const width = useAnimatedPercent((value / max) * 100, visible);

  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <p className="text-sm font-medium text-night">{label}</p>
        <p className="font-display text-lg text-saffron tabular-nums">
          {value}
          {suffix}
        </p>
      </div>
      <div className="h-3 w-full overflow-hidden bg-night/10">
        <div
          className="h-full bg-saffron transition-none"
          style={{ width: `${width}%` }}
        />
      </div>
      {note ? (
        <p className="mt-1.5 text-xs text-ink/55">{note}</p>
      ) : null}
    </div>
  );
}

export function StatsVisuals() {
  const { t } = useI18n();
  const hungerShare = [
    {
      label: t.stats.sliceEmergency,
      millions: s.hunger.emergencyMillions,
      color: "#8B4518",
    },
    {
      label: t.stats.sliceCrisis,
      millions:
        Math.round(
          (s.hunger.leanSeasonMillions - s.hunger.emergencyMillions) * 10,
        ) / 10,
      color: "#C4783A",
    },
    {
      label: t.stats.sliceNotAcute,
      millions:
        Math.round(
          (s.populationApproxMillions - s.hunger.leanSeasonMillions) * 10,
        ) / 10,
      color: "#E8DCC8",
    },
  ];
  const hungerTotal = hungerShare.reduce((a, b) => a + b.millions, 0);

  return (
    <div className="space-y-20">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">
          {t.stats.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl text-night sm:text-4xl md:text-5xl">
          {t.stats.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
          {t.stats.lead}
        </p>
        <p className="mt-2 text-sm text-ink/50">{t.stats.updatedLabel}</p>
      </FadeIn>

      <div className="grid gap-8 border-y border-night/10 py-10 sm:grid-cols-3">
        {[
          {
            value: `${s.hunger.leanSeasonMillions}M`,
            label: t.stats.calloutHunger,
            sub: t.stats.periodLean,
          },
          {
            value: `${s.humanitarian.peopleInNeedMillions}M`,
            label: t.stats.calloutAid,
            sub: fill(t.stats.calloutAidSub, {
              percent: s.humanitarian.percentOfPopulation,
              year: s.humanitarian.year,
            }),
          },
          {
            value: `${s.malnutrition.childrenUnderFiveMillions}M`,
            label: t.stats.calloutKids,
            sub: fill(t.stats.calloutKidsSub, {
              millions: s.malnutrition.pregnantBreastfeedingMillions,
            }),
          },
        ].map((item, i) => (
          <FadeIn key={item.label} delay={0.08 * i}>
            <p className="font-display text-4xl text-saffron sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-2 font-display text-xl text-night">{item.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.sub}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <h3 className="font-display text-2xl text-night sm:text-3xl">
          {t.stats.shareTitle}
        </h3>
        <p className="mt-2 max-w-2xl text-ink/65">{t.stats.shareLead}</p>
        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          <RingStat
            percent={s.hunger.leanSeasonPercent}
            label={t.stats.ringHunger}
            detail={fill(t.stats.ringHungerDetail, {
              millions: s.hunger.leanSeasonMillions,
            })}
          />
          <RingStat
            percent={s.humanitarian.percentOfPopulation}
            label={t.stats.ringAid}
            detail={fill(t.stats.ringAidDetail, {
              millions: s.humanitarian.peopleInNeedMillions,
              year: s.humanitarian.year,
            })}
            accent="sand"
          />
          <RingStat
            percent={s.livelihoods.povertyPercent}
            label={t.stats.ringPoverty}
            detail={t.stats.povertyNote}
          />
        </div>
      </FadeIn>

      <FadeIn>
        <h3 className="font-display text-2xl text-night sm:text-3xl">
          {t.stats.depthTitle}
        </h3>
        <p className="mt-2 max-w-2xl text-ink/65">
          {fill(t.stats.depthLead, { millions: s.hunger.emergencyMillions })}
        </p>

        <div className="mt-8">
          <div className="flex h-14 w-full overflow-hidden">
            {hungerShare.map((slice) => (
              <div
                key={slice.label}
                style={{
                  width: `${(slice.millions / hungerTotal) * 100}%`,
                  backgroundColor: slice.color,
                }}
                title={`${slice.label}: ${slice.millions}M`}
              />
            ))}
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {hungerShare.map((slice) => (
              <li key={slice.label} className="flex gap-3">
                <span
                  className="mt-1 h-3 w-3 shrink-0"
                  style={{ backgroundColor: slice.color }}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-medium text-night">{slice.label}</p>
                  <p className="font-display text-2xl text-ink">
                    {slice.millions}M
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-6">
          <BarRow
            label={t.stats.barLean}
            value={s.hunger.leanSeasonMillions}
            max={s.populationApproxMillions}
            suffix="M"
            note={t.stats.periodLean}
          />
          <BarRow
            label={t.stats.barHarvest}
            value={s.hunger.harvestSeasonMillions}
            max={s.populationApproxMillions}
            suffix="M"
            note={t.stats.periodHarvest}
          />
        </div>
      </FadeIn>

      <FadeIn>
        <h3 className="font-display text-2xl text-night sm:text-3xl">
          {t.stats.jobsTitle}
        </h3>
        <p className="mt-2 max-w-2xl text-ink/65">{t.stats.jobsLead}</p>

        <div className="mt-10 space-y-7">
          <BarRow
            label={t.stats.barPoverty}
            value={s.livelihoods.povertyPercent}
            max={100}
            suffix="%"
          />
          <BarRow
            label={t.stats.barUnemployment}
            value={s.livelihoods.unemploymentPercent}
            max={100}
            suffix="%"
            note={t.stats.unemploymentNote}
          />
          <BarRow
            label={t.stats.barYouth}
            value={s.livelihoods.youthUnemploymentPercent}
            max={100}
            suffix="%"
          />
        </div>
      </FadeIn>

      <FadeIn>
        <div className="border-t border-night/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
            {t.stats.sourcesEyebrow}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink/65">
            <li>
              <a
                href={s.hunger.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {t.stats.sourceIpc}
              </a>
            </li>
            <li>
              <a
                href={s.malnutrition.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {t.stats.sourceMalnutrition}
              </a>
            </li>
            <li>
              <a
                href={s.humanitarian.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {s.humanitarian.source}
              </a>
            </li>
            <li>
              <a
                href={s.livelihoods.povertySourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {s.livelihoods.povertySource}
              </a>
            </li>
            <li>
              <a
                href={s.livelihoods.unemploymentSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {s.livelihoods.unemploymentSource}
              </a>
            </li>
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}
