"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
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
  const hungerShare = [
    {
      label: "Emergency hunger (IPC Phase 4)",
      millions: s.hunger.emergencyMillions,
      color: "#8B4518",
    },
    {
      label: "Crisis hunger (IPC Phase 3)",
      millions:
        Math.round(
          (s.hunger.leanSeasonMillions - s.hunger.emergencyMillions) * 10,
        ) / 10,
      color: "#C4783A",
    },
    {
      label: "Not in acute crisis (estimate)",
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
          Graphical analysis
        </p>
        <h2 className="mt-3 font-display text-3xl text-night sm:text-4xl md:text-5xl">
          The scale of need — in numbers
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
          These charts use public humanitarian and economic data so you can see
          how widespread hunger, poverty, and joblessness are. Behind every bar
          is a family.
        </p>
        <p className="mt-2 text-sm text-ink/50">{s.updatedLabel}</p>
      </FadeIn>

      {/* Big callouts */}
      <div className="grid gap-8 border-y border-night/10 py-10 sm:grid-cols-3">
        {[
          {
            value: `${s.hunger.leanSeasonMillions}M`,
            label: "People in acute food insecurity",
            sub: s.hunger.periodLean,
          },
          {
            value: `${s.humanitarian.peopleInNeedMillions}M`,
            label: "People needing humanitarian aid",
            sub: `About ${s.humanitarian.percentOfPopulation}% of the country (${s.humanitarian.year})`,
          },
          {
            value: `${s.malnutrition.childrenUnderFiveMillions}M`,
            label: "Children under five with acute malnutrition",
            sub: `Plus ${s.malnutrition.pregnantBreastfeedingMillions}M pregnant & breastfeeding women`,
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

      {/* Ring stats */}
      <FadeIn>
        <h3 className="font-display text-2xl text-night sm:text-3xl">
          Share of the population affected
        </h3>
        <p className="mt-2 max-w-2xl text-ink/65">
          Roughly one in three people face crisis-level hunger in the lean
          season. Nearly half the country needs humanitarian assistance.
        </p>
        <div className="mt-12 grid gap-12 sm:grid-cols-3">
          <RingStat
            percent={s.hunger.leanSeasonPercent}
            label="Acute hunger"
            detail={`${s.hunger.leanSeasonMillions} million people — IPC Phase 3 or worse during winter.`}
          />
          <RingStat
            percent={s.humanitarian.percentOfPopulation}
            label="Need aid"
            detail={`${s.humanitarian.peopleInNeedMillions} million people projected to require humanitarian assistance in ${s.humanitarian.year}.`}
            accent="sand"
          />
          <RingStat
            percent={s.livelihoods.povertyPercent}
            label="In poverty"
            detail={s.livelihoods.povertyNote}
          />
        </div>
      </FadeIn>

      {/* Stacked hunger composition */}
      <FadeIn>
        <h3 className="font-display text-2xl text-night sm:text-3xl">
          How deep is the hunger crisis?
        </h3>
        <p className="mt-2 max-w-2xl text-ink/65">
          During the winter lean season, {s.hunger.emergencyMillions} million
          people are projected to face emergency-level hunger (IPC Phase 4) —
          the most severe category short of famine.
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
            label="Lean season — people in crisis or worse"
            value={s.hunger.leanSeasonMillions}
            max={s.populationApproxMillions}
            suffix="M"
            note={s.hunger.periodLean}
          />
          <BarRow
            label="Harvest season — projected (still severe)"
            value={s.hunger.harvestSeasonMillions}
            max={s.populationApproxMillions}
            suffix="M"
            note={s.hunger.periodHarvest}
          />
        </div>
      </FadeIn>

      {/* Jobs & livelihoods */}
      <FadeIn>
        <h3 className="font-display text-2xl text-night sm:text-3xl">
          Jobs, livelihoods & poverty
        </h3>
        <p className="mt-2 max-w-2xl text-ink/65">
          Official unemployment does not capture the full picture. Many people
          work informally or not at all — and still cannot provide basic
          necessities for their families.
        </p>

        <div className="mt-10 space-y-7">
          <BarRow
            label="Population living in poverty"
            value={s.livelihoods.povertyPercent}
            max={100}
            suffix="%"
          />
          <BarRow
            label="Unemployment (ILO modelled estimate)"
            value={s.livelihoods.unemploymentPercent}
            max={100}
            suffix="%"
            note={s.livelihoods.unemploymentNote}
          />
          <BarRow
            label="Youth unemployment (ages 15–24)"
            value={s.livelihoods.youthUnemploymentPercent}
            max={100}
            suffix="%"
          />
        </div>
      </FadeIn>

      {/* Sources */}
      <FadeIn>
        <div className="border-t border-night/10 pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
            Data sources
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink/65">
            <li>
              <a
                href={s.hunger.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                {s.hunger.source} — IPC Acute Food Insecurity Analysis
              </a>
            </li>
            <li>
              <a
                href={s.malnutrition.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-saffron/40 underline-offset-4 hover:decoration-saffron focus-ring"
              >
                WFP Afghanistan Situation Report — malnutrition figures
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
