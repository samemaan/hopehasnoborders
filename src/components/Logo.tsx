import Link from "next/link";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  href?: string;
  onClick?: () => void;
  light?: boolean;
};

/** Rising sun over open horizons — hope crossing borders */
export function LogoMark({
  className = "h-9 w-9",
  title = "Hope Has No Borders",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="64" height="64" rx="12" fill="#0B1F33" />
      {/* Soft dawn glow */}
      <circle cx="32" cy="28" r="16" fill="#C4783A" opacity="0.2" />
      {/* Sun — hope */}
      <circle cx="32" cy="26" r="8" fill="#C4783A" />
      {/* Sun rays */}
      <g stroke="#E8DCC8" strokeWidth="1.4" strokeLinecap="round" opacity="0.7">
        <path d="M32 12v3.5" />
        <path d="M20.5 18.5l2.5 2.5" />
        <path d="M43.5 18.5L41 21" />
      </g>
      {/* Open horizons — borders parting */}
      <path
        d="M8 44c7-9 14-13 24-13"
        stroke="#E8DCC8"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M32 31c10 0 17 4 24 13"
        stroke="#E8DCC8"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Connecting path of kindness */}
      <path
        d="M14 50c8-6 13-8 18-8s10 2 18 8"
        stroke="#C4783A"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  showWordmark = true,
  href = "/",
  onClick,
  light = true,
}: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      {showWordmark ? (
        <span
          className={`max-w-[9.5rem] font-display text-[0.95rem] leading-tight tracking-tight sm:max-w-none sm:text-xl ${
            light ? "text-cream" : "text-night"
          }`}
        >
          Hope Has No Borders
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="focus-ring rounded-md" onClick={onClick}>
      {content}
    </Link>
  );
}
