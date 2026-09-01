"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CheckCircle, Download, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/context";

type ProductCardProps = {
  id?: string;
  icon?: ReactNode;
  logoSrc?: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  tools?: string[];
  href?: string;
  downloadUrl?: string;
  downloadLabel?: string;
  badge?: string;
  edition?: string;
};

export function ProductCard({
  id,
  icon,
  logoSrc,
  name,
  tagline,
  description,
  features,
  tools,
  href = "/contact",
  downloadUrl,
  downloadLabel,
  badge,
  edition = "EDITION",
}: ProductCardProps) {
  const { t } = useI18n();
  const resolvedDownloadLabel = downloadLabel || t.productCardDownload;
  const resolvedBadge = badge || t.productCardBadge;

  return (
    <article
      id={id}
      className="living-card p-7 sm:p-9 scroll-mt-28 group relative overflow-hidden flex flex-col h-full"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a8e063]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative flex flex-col flex-1">
        {/* Top Header */}
        <div className="border-b border-[rgba(238,243,231,0.1)] pb-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono font-medium tracking-wider text-[#a8e063] uppercase">
              {edition}
            </span>
            <span className="living-badge text-[10px]">
              {resolvedBadge}
            </span>
          </div>

          <div className="mt-5 flex flex-col items-center text-center">
            {/* Logo Container */}
            <div className="relative mb-5">
              <div className="absolute inset-0 bg-[#a8e063]/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative size-20 rounded-2xl bg-gradient-to-br from-[rgba(168,224,99,0.12)] to-[rgba(168,224,99,0.04)] border border-[rgba(168,224,99,0.2)] flex items-center justify-center shadow-[0_8px_32px_rgba(168,224,99,0.1)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#a8e063]/40 group-hover:shadow-[0_12px_48px_rgba(168,224,99,0.2)] group-hover:scale-105">
                {logoSrc ? (
                  <Image
                    src={logoSrc}
                    alt={`${name} logo`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : icon ? (
                  <div className="text-[#a8e063]">{icon}</div>
                ) : null}
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white tracking-tight">
              {name}
            </h3>
            <p className="mt-1.5 text-xs font-normal text-[#c6f19d]/80 leading-relaxed max-w-xs">
              {tagline}
            </p>
          </div>
        </div>

        <div className="mt-6 flex-1">
          <p className="text-sm sm:text-base leading-relaxed text-[#a4aaa0]">
            {description}
          </p>

          {tools && tools.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tools.slice(0, 6).map((toolName) => (
                <span
                  key={toolName}
                  className="inline-flex items-center gap-1 rounded-md bg-[rgba(238,243,231,0.05)] border border-[rgba(238,243,231,0.08)] px-2 py-0.5 text-[11px] text-[#f2f3ef]/80 hover:border-[#a8e063]/30 hover:bg-[#a8e063]/10 transition-colors"
                >
                  <Sparkles className="size-2 text-[#a8e063]" />
                  {toolName}
                </span>
              ))}
              {tools.length > 6 && (
                <span className="rounded-md bg-[rgba(168,224,99,0.1)] border border-[#a8e063]/20 px-2 py-0.5 text-[11px] text-[#a8e063]">
                  +{tools.length - 6} {t.productCardMore}
                </span>
              )}
            </div>
          )}

          <ul className="mt-6 grid gap-2.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm font-normal text-[#f2f3ef]">
                <CheckCircle className="mt-0.5 size-4 shrink-0 text-[#a8e063]" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative mt-8 border-t border-[rgba(238,243,231,0.08)] pt-5 flex flex-wrap items-center justify-between gap-4">
        {downloadUrl ? (
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={downloadUrl}
              download={downloadUrl.split("/").pop() || "download"}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#23261f] shadow-[0_6px_20px_rgba(168,224,99,0.35)] transition-all duration-200 hover:bg-[#c6f19d] hover:scale-105"
            >
              <Download className="size-4" aria-hidden="true" />
              <span>{resolvedDownloadLabel}</span>
            </a>
            <Link
              href={href}
              className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-medium text-[#f2f3ef]/80 hover:text-white hover:bg-white/10 transition"
            >
              <span>{t.productCardDetails}</span>
              <ArrowRight className="size-3" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <Link
            href={href}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-[rgba(168,224,99,0.15)] border border-[#a8e063]/30 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#c6f19d] transition hover:bg-[#a8e063] hover:text-[#23261f] hover:gap-3"
          >
            <span>{t.productCardFullDetails}</span>
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        )}

        <span className="font-mono text-[10px] text-[#a4aaa0]/70">
          YAAZH AUTONOMOUS CORE
        </span>
      </div>
    </article>
  );
}
