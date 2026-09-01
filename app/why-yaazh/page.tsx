"use client";

import {
  FileText,
  Lock,
  ReceiptText,
  Users,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  Zap,
  Layers,
  ArrowRight,
  GraduationCap,
  Landmark,
  Briefcase,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { FeatureCard } from "../components/FeatureCard";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export default function WhyYaazhPage() {
  const { t } = useI18n();

  const scenarios = t.whyScenarios.map((s, i) => ({
    ...s,
    icon: [<Landmark className="size-6" aria-hidden="true" />, <GraduationCap className="size-6" aria-hidden="true" />, <Briefcase className="size-6" aria-hidden="true" />][i],
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Sparkles className="size-3.5" />
              {t.whyBadge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              {t.whyTitle1} <span className="text-[#a8e063] font-normal">{t.whyTitle2}</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              {t.whyDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deep Comparison Table */}
      <section className="pb-20 bg-[#383b34]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card overflow-hidden border-[rgba(238,243,231,0.12)]">
              {/* Header row */}
              <div className="grid grid-cols-1 md:grid-cols-12 bg-[#282b24] border-b border-[rgba(238,243,231,0.1)] p-5 sm:p-7 text-sm font-semibold text-white">
                <div className="md:col-span-4 text-[#a4aaa0] uppercase tracking-wider font-mono text-xs">
                  {t.whyTableFeature}
                </div>
                <div className="hidden md:block md:col-span-4 text-[#a4aaa0]/70 uppercase tracking-wider font-mono text-xs">
                  {t.whyTableOther}
                </div>
                <div className="hidden md:block md:col-span-4 text-[#c6f19d] uppercase tracking-wider font-mono text-xs flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#a8e063] animate-pulse" />
                  {t.whyTableYaazh}
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[rgba(238,243,231,0.06)]">
                {t.whyComparisons.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-7 gap-4 transition-colors hover:bg-[rgba(168,224,99,0.03)]"
                  >
                    <div className="md:col-span-4 font-medium text-white text-base">
                      {row.feature}
                    </div>
                    <div className="md:col-span-4 text-sm leading-relaxed text-[#a4aaa0] flex items-start gap-2">
                      <XCircle className="size-4 shrink-0 text-red-400/70 mt-0.5" />
                      <span>{row.other}</span>
                    </div>
                    <div className="md:col-span-4 text-sm leading-relaxed text-[#f2f3ef] font-medium flex items-start gap-2 bg-[rgba(168,224,99,0.06)] p-3.5 rounded-xl border border-[#a8e063]/20">
                      <CheckCircle2 className="size-4 shrink-0 text-[#a8e063] mt-0.5" />
                      <span>{row.yaazh}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Real-World Everyday Scenarios */}
      <section className="section-padding bg-[#2f332a] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              {t.whyScenariosBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.whyScenariosTitle}
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              {t.whyScenariosDescription}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <Reveal key={scenario.title} delay={index * 0.08}>
                <FeatureCard {...scenario} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Trust Architecture Banner */}
      <section className="section-padding bg-[#383b34] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-14 relative overflow-hidden bg-gradient-to-br from-[#2a2e25] to-[#1c1e19] border-[#a8e063]/30">
              <div className="max-w-3xl">
                <div className="living-badge mb-5 border-[#a8e063]/40 bg-[#a8e063]/15 text-[#c6f19d]">
                  {t.whySafetyBadge}
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#a8e063]/15 text-[#a8e063] border border-[#a8e063]/30 shrink-0">
                    <ShieldCheck className="size-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-medium text-white">
                      {t.whySafetyTitle}
                    </h2>
                  </div>
                </div>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
                  {t.whySafetyDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-[#c6f19d]">
                  <span className="rounded-lg bg-[#383b34] px-3.5 py-2 border border-[rgba(238,243,231,0.1)]">✓ ZERO-DATA RETENTION</span>
                  <span className="rounded-lg bg-[#383b34] px-3.5 py-2 border border-[rgba(238,243,231,0.1)]">✓ ON-DEVICE ENCRYPTION</span>
                  <span className="rounded-lg bg-[#383b34] px-3.5 py-2 border border-[rgba(238,243,231,0.1)]">✓ EXPLICIT HUMAN-IN-THE-LOOP</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Handshake */}
      <section className="section-padding bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-light text-white">
                  {t.whyCtaTitle}
                </h3>
                <p className="mt-1 text-sm text-[#a4aaa0]">
                  {t.whyCtaDescription}
                </p>
              </div>
              <Link
                href="/products"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-7 py-3.5 text-sm font-semibold text-[#23261f] transition hover:bg-white hover:scale-105 shrink-0"
              >
                {t.whyCtaButton}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
