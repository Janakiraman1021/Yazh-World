import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle, Download, Sparkles } from "lucide-react";

type ProductSplitProps = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  toolsOrHighlights?: string[];
  useCases?: { title: string; desc: string }[];
  icon: ReactNode;
  href?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  badge?: string;
  edition?: string;
  reverse?: boolean;
};

export function ProductSplit({
  index,
  name,
  tagline,
  description,
  features,
  toolsOrHighlights,
  useCases,
  icon,
  href = "/contact",
  downloadUrl,
  downloadLabel = "பதிவிறக்குக",
  badge,
  edition,
  reverse = false,
}: ProductSplitProps) {
  const numberBlock = (
    <div className="relative flex items-center justify-center select-none py-6 lg:py-0">
      <span
        className="text-[110px] sm:text-[170px] lg:text-[210px] font-light leading-none tracking-tighter text-[rgba(168,224,99,0.06)] select-none"
        aria-hidden="true"
      >
        {index}
      </span>
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid size-20 sm:size-24 place-items-center rounded-3xl border border-[rgba(168,224,99,0.3)] bg-[rgba(168,224,99,0.1)] text-[#a8e063] shadow-[0_0_30px_rgba(168,224,99,0.15)] backdrop-blur-md">
          {icon}
        </div>
      </div>
    </div>
  );

  const contentBlock = (
    <div className="flex flex-col justify-center gap-5">
      <div>
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          {edition && (
            <span className="text-[10px] font-mono font-medium tracking-wider text-[#a8e063] uppercase">
              {edition}
            </span>
          )}
          {badge && (
            <span className="living-badge text-[10px]">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
          {name}
        </h3>
        <p className="mt-1 text-sm sm:text-base font-normal text-[#c6f19d]/90">
          {tagline}
        </p>
      </div>

      <p className="text-sm sm:text-base leading-relaxed text-[#a4aaa0] max-w-xl">
        {description}
      </p>

      {/* Tools or Highlights Grid if provided */}
      {toolsOrHighlights && toolsOrHighlights.length > 0 && (
        <div className="mt-1">
          <span className="block text-[11px] font-mono font-medium tracking-wider text-[#a8e063] uppercase mb-2">
            சிறப்பு கருவிகள் & திறன்கள்:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {toolsOrHighlights.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1 rounded-lg bg-[rgba(238,243,231,0.05)] border border-[rgba(238,243,231,0.1)] px-2.5 py-1 text-xs text-[#f2f3ef]/90 hover:border-[#a8e063]/40 hover:bg-[#a8e063]/10 transition-colors"
              >
                <Sparkles className="size-2.5 text-[#a8e063]" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Key Use Cases if provided */}
      {useCases && useCases.length > 0 && (
        <div className="mt-1 grid gap-2.5 sm:grid-cols-2">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-xl border border-[rgba(238,243,231,0.08)] bg-[rgba(255,255,255,0.02)] p-3.5"
            >
              <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#a8e063]" />
                {uc.title}
              </h4>
              <p className="mt-1 text-[11px] leading-relaxed text-[#a4aaa0]">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Feature Bullet Points */}
      <ul className="grid gap-2.5 mt-1">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-xs sm:text-sm text-[#f2f3ef]/90"
          >
            <CheckCircle
              className="mt-0.5 size-4 shrink-0 text-[#a8e063]"
              aria-hidden="true"
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-3 pt-2">
        {downloadUrl ? (
          <>
            <a
              href={downloadUrl}
              download={downloadUrl.split("/").pop() || "download"}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-6 py-3 text-xs sm:text-sm font-semibold text-[#23261f] shadow-[0_6px_20px_rgba(168,224,99,0.3)] transition-all duration-200 hover:bg-[#c6f19d] hover:scale-105"
            >
              <Download className="size-4" aria-hidden="true" />
              <span>{downloadLabel}</span>
            </a>
            <Link
              href={href}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs sm:text-sm font-medium text-[#f2f3ef]/80 hover:bg-white/10 hover:text-white transition"
            >
              <span>விவரங்கள் அறிய</span>
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </>
        ) : (
          <Link
            href={href}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-6 py-3 text-xs sm:text-sm font-semibold text-[#23261f] shadow-[0_6px_20px_rgba(168,224,99,0.25)] transition hover:bg-[#c6f19d] hover:scale-105"
          >
            <span>முன்னோட்ட அணுகல் பெறுக</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </div>
  );

  return (
    <div
      className={`grid items-center gap-8 lg:gap-14 ${
        reverse ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"
      }`}
    >
      {reverse ? (
        <>
          {contentBlock}
          {numberBlock}
        </>
      ) : (
        <>
          {numberBlock}
          {contentBlock}
        </>
      )}
    </div>
  );
}
