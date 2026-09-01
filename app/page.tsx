"use client";

import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Globe,
  Leaf,
  Laptop,
  Mic,
  Puzzle,
  ShieldCheck,
  Smartphone,
  Sparkles,
  BookOpen,
  FileCheck2,
  Code2,
  Layers,
  GraduationCap,
  Landmark,
  FileText,
  Workflow,
  Clock,
  Terminal,
} from "lucide-react";
import { FeatureCard } from "./components/FeatureCard";
import { ProductCard } from "./components/ProductCard";
import { Reveal } from "./components/Reveal";
import { SylvaHero } from "./effects/sylva-hero/SylvaHero";
import { useI18n } from "./i18n/context";

export default function Home() {
  const { t } = useI18n();

  const steps = [
    { num: "01", title: t.step1Title, desc: t.step1Desc },
    { num: "02", title: t.step2Title, desc: t.step2Desc },
    { num: "03", title: t.step3Title, desc: t.step3Desc },
    { num: "04", title: t.step4Title, desc: t.step4Desc },
  ];

  const features = [
    { title: t.features[0].title, description: t.features[0].description, icon: <Sparkles className="size-6" aria-hidden="true" />, badge: t.features[0].badge },
    { title: t.features[1].title, description: t.features[1].description, icon: <BookOpen className="size-6" aria-hidden="true" />, badge: t.features[1].badge },
    { title: t.features[2].title, description: t.features[2].description, icon: <Landmark className="size-6" aria-hidden="true" />, badge: t.features[2].badge },
    { title: t.features[3].title, description: t.features[3].description, icon: <Laptop className="size-6" aria-hidden="true" />, badge: t.features[3].badge },
  ];

  const productTeasers = [
    {
      name: t.webPlatformName,
      tagline: t.webPlatformTagline,
      description: t.webPlatformDescription,
      features: t.webPlatformFeatures,
      tools: t.webPlatformTools,
      icon: <Globe className="size-7" aria-hidden="true" />,
      href: "/products#web",
      edition: t.webPlatformEdition,
      badge: t.webPlatformBadge,
    },
    {
      name: t.extensionName,
      tagline: t.extensionTagline,
      description: t.extensionDescription,
      features: t.extensionFeatures,
      tools: t.extensionTools,
      icon: <Puzzle className="size-7" aria-hidden="true" />,
      href: "/products#extension",
      downloadUrl: "/EXE/yazh-ai.crx",
      downloadLabel: t.productCardDownload,
      edition: t.extensionEdition,
      badge: t.extensionBadge,
    },
    {
      name: t.desktopName,
      tagline: t.desktopTagline,
      description: t.desktopDescription,
      features: t.desktopFeatures,
      tools: t.desktopTools,
      icon: <Laptop className="size-7" aria-hidden="true" />,
      href: "/products#desktop",
      downloadUrl: "/EXE/TamilComputerAgent.exe",
      downloadLabel: t.productCardDownload,
      edition: t.desktopEdition,
      badge: t.desktopBadge,
    },
  ];

  return (
    <>
      {/* 3D Sylva Hero Stage */}
      <section className="relative w-full h-[100svh] min-h-[700px] overflow-hidden bg-[#383b34]">
        <SylvaHero
          variant="living-green"
          headingFont="lexend"
          bodyFont="lexend"
          headingWeight="300"
          bodyWeight="300"
          primaryColor="#ffffff"
          headingSize={63}
          bodySize={16.5}
          headingLetterSpacing={-0.006}
        />
      </section>

      {/* SECTION: Process Workflow (4-Step Agentic Loop) */}
      <section className="section-padding relative border-t border-[rgba(238,243,231,0.08)] bg-[#2f332a]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Workflow className="size-3.5" />
              {t.workflowBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              {t.workflowTitle1} <span className="text-[#a8e063] font-normal">{t.workflowTitle2}</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              {t.workflowDescription}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.num} delay={index * 0.08}>
                <div className="living-card h-full p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-[rgba(238,243,231,0.08)] pb-4 mb-5">
                      <span className="grid size-10 place-items-center rounded-xl bg-[#a8e063] font-mono text-sm font-bold text-[#23261f]">
                        {step.num}
                      </span>
                      <span className="text-[11px] font-mono text-[#a8e063]">
                        STEP 0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-medium text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a4aaa0]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 3 Flagship Products */}
      <section className="section-padding bg-[radial-gradient(ellipse_at_bottom,rgba(168,224,99,0.08),transparent_65%),#282b24] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="living-badge mb-4">
                {t.flagshipBadge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                {t.flagshipTitle1} <span className="text-[#a8e063] font-normal">{t.flagshipTitle2}</span>
              </h2>
              <p className="mt-3 text-base text-[#a4aaa0]">
                {t.flagshipDescription}
              </p>
            </div>
            <Link
              href="/products"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#a8e063]/40 bg-[rgba(168,224,99,0.12)] px-6 py-3.5 text-sm font-semibold text-[#c6f19d] transition hover:bg-[#a8e063] hover:text-[#23261f]"
            >
              {t.flagshipViewAll}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {productTeasers.map((product, index) => (
              <Reveal key={product.name} delay={index * 0.08}>
                <ProductCard {...product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: 18+ Tamil AI Tools Interactive Showcase */}
      <section className="section-padding bg-[#383b34] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Sparkles className="size-3.5" />
              {t.tamilToolsBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.tamilToolsTitle1} <span className="text-[#a8e063] font-normal">{t.tamilToolsTitle2}</span>
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              {t.tamilToolsDescription}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {t.tamilTools.map((tool, idx) => (
              <Reveal key={tool.name} delay={idx * 0.03}>
                <div className="living-card p-5 h-full flex flex-col justify-between hover:border-[#a8e063]/40 transition-all duration-200 group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-base font-semibold text-white group-hover:text-[#c6f19d] transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(168,224,99,0.1)] text-[#a8e063] border border-[#a8e063]/20">
                        {tool.category}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed text-[#a4aaa0]">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: LangLM Ancient Tamil Literature */}
      <section className="section-padding bg-[#2f332a] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <BookOpen className="size-3.5" />
              {t.langLMBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.langLMTitle}
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              {t.langLMDescription}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.langLMBooks.map((book, index) => (
              <Reveal key={book.title} delay={index * 0.08}>
                <div className="living-card p-6 h-full flex flex-col justify-between bg-gradient-to-br from-[#282b24] to-[#1e211a] border-[#a8e063]/20">
                  <div>
                    <div className="grid size-10 place-items-center rounded-xl bg-[#a8e063]/15 text-[#a8e063] border border-[#a8e063]/30 mb-4">
                      <BookOpen className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {book.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#a4aaa0]">
                      {book.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[rgba(238,243,231,0.08)] text-[10px] font-mono text-[#a8e063]">
                    Grounded Historical Corpus
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Features & Capabilities */}
      <section id="features" className="section-padding bg-[#383b34] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Leaf className="size-3.5" />
              {t.featuresBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              {t.featuresTitle1} <span className="text-[#a8e063] font-normal">{t.featuresTitle2}</span>
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              {t.featuresDescription}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.06}>
                <FeatureCard {...feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: Cultural & Living Mission */}
      <section className="section-padding bg-[#282b24] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-14 relative overflow-hidden bg-[radial-gradient(circle_at_90%_20%,rgba(168,224,99,0.12),transparent_50%),rgba(40,43,36,0.85)]">
              <div className="relative z-10 max-w-3xl">
                <div className="living-badge mb-5">
                  {t.culturalBadge}
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                  &ldquo;{t.culturalQuote}&rdquo;
                </h2>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
                  {t.culturalDescription}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[rgba(238,243,231,0.1)] pt-6 text-xs text-[#a4aaa0]">
                  <div>{t.culturalDesign} <strong className="text-white">{t.culturalDesignValue}</strong></div>
                  <div>{t.culturalLanguage} <strong className="text-[#a8e063]">{t.culturalLanguageValue}</strong></div>
                  <div>{t.culturalPrivacy} <strong className="text-[#c6f19d]">{t.culturalPrivacyValue}</strong></div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION: Final CTA */}
      <section className="section-padding bg-[#23261f]">
        <div className="section-shell">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-[#a8e063]/30 bg-gradient-to-br from-[#2f332a] to-[#1c1e19] p-8 sm:p-14 shadow-2xl">
              <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#a8e063]/40 bg-[#a8e063]/10 px-4 py-1.5 text-xs font-mono font-medium text-[#c6f19d]">
                    <CheckCircle className="size-3.5 text-[#a8e063]" />
                    {t.ctaBadge}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-white leading-snug">
                    {t.ctaTitle1} <span className="text-[#a8e063] font-normal">{t.ctaTitle2}</span>
                  </h2>
                  <p className="mt-3 text-base text-[#a4aaa0]">
                    {t.ctaDescription}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/products"
                    className="focus-ring inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#a8e063] px-8 py-4 font-semibold text-[#23261f] shadow-lg transition hover:bg-white hover:scale-105"
                  >
                    {t.ctaViewProducts}
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-medium text-white transition hover:bg-white/10"
                  >
                    {t.ctaContactUs}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
