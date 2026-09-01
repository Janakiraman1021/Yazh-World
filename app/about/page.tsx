"use client";

import {
  HeartHandshake,
  Languages,
  Lock,
  Workflow,
  Sparkles,
  Leaf,
  Compass,
  Cpu,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Laptop,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "../components/FeatureCard";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export default function AboutPage() {
  const { t } = useI18n();

  const values = [
    { title: t.aboutValues[0].title, description: t.aboutValues[0].description, icon: <Languages className="size-6" aria-hidden="true" />, badge: t.aboutValues[0].badge },
    { title: t.aboutValues[1].title, description: t.aboutValues[1].description, icon: <HeartHandshake className="size-6" aria-hidden="true" />, badge: t.aboutValues[1].badge },
    { title: t.aboutValues[2].title, description: t.aboutValues[2].description, icon: <Lock className="size-6" aria-hidden="true" />, badge: t.aboutValues[2].badge },
    { title: t.aboutValues[3].title, description: t.aboutValues[3].description, icon: <Workflow className="size-6" aria-hidden="true" />, badge: t.aboutValues[3].badge },
  ];

  const pillars = t.aboutPillars.map((p, i) => ({
    ...p,
    icon: [<BookOpen className="size-6 text-[#a8e063]" />, <Cpu className="size-6 text-[#a8e063]" />, <Leaf className="size-6 text-[#a8e063]" />][i],
  }));

  return (
    <>
      {/* Hero Header */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Sparkles className="size-3.5" />
              {t.aboutMissionBadge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              {t.aboutMissionTitle}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              {t.aboutMissionDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origin & Meaning Story */}
      <section className="pb-20 bg-[#383b34]">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="living-card p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="living-badge mb-5">
                  {t.aboutGenesisBadge}
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-white">
                  {t.aboutGenesisTitle}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#a4aaa0]">
                  {t.aboutGenesisP1}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#a4aaa0]">
                  {t.aboutGenesisP2}
                </p>
              </div>

              <div className="mt-8 border-t border-[rgba(238,243,231,0.08)] pt-5 flex items-center justify-between text-xs text-[#a4aaa0]">
                <span>{t.aboutGenesisTech} <strong>Multimodal Agentic AI</strong></span>
                <span className="text-[#a8e063]">{t.aboutGenesisGrounded}</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="living-card p-8 sm:p-10 h-full border-[#a8e063]/30 bg-gradient-to-br from-[#2f332a] to-[#23261f] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="living-badge border-[#a8e063]/40 bg-[#a8e063]/15 text-[#c6f19d]">
                    {t.aboutHeritageBadge}
                  </div>
                  <div className="size-12 rounded-2xl bg-white p-1 shadow-lg shadow-black/30 border border-white/20 shrink-0">
                    <Image
                      src="/yaazh-logo.png"
                      alt={t.navLogoAlt}
                      width={48}
                      height={48}
                      className="size-full object-contain rounded-xl"
                    />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-[#c6f19d]">
                  &ldquo;{t.aboutHeritageTitle}&rdquo;
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#f2f3ef]/85">
                  {t.aboutHeritageP1}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#f2f3ef]/85">
                  {t.aboutHeritageP2}
                </p>
              </div>

              <div className="mt-8 border-t border-[rgba(238,243,231,0.12)] pt-5 text-xs text-[#a8e063] font-mono flex items-center justify-between">
                <span>{t.aboutHeritageFooter1}</span>
                <span className="text-white/40">{t.aboutHeritageFooter2}</span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 3 Pillars of Innovation */}
      <section className="section-padding bg-[#2f332a] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              {t.aboutPillarsBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.aboutPillarsTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <div className="living-card p-8 h-full">
                  <div className="mb-5 grid size-12 place-items-center rounded-xl bg-[#a8e063]/12 border border-[#a8e063]/25">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono text-[#a8e063] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0]">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#383b34] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              {t.aboutValuesBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.aboutValuesTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <FeatureCard {...value} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Call to Action */}
      <section className="section-padding bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#2f332a] to-[#1c1e19] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="living-badge mb-4">
                  {t.aboutCtaBadge}
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  {t.aboutCtaTitle}
                </h2>
                <p className="mt-3 text-base text-[#a4aaa0]">
                  {t.aboutCtaDescription}
                </p>
              </div>

              <Link
                href="/contact"
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full bg-[#a8e063] px-8 py-4 font-semibold text-[#23261f] shadow-lg transition hover:bg-white hover:scale-105"
              >
                {t.aboutCtaButton}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
