"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export default function ProductsPage() {
  const { t } = useI18n();

  const products = t.products.map((p, i) => ({
    id: ["web", "extension", "desktop"][i],
    index: `0${i + 1}`,
    ...p,
    logoSrc: "/yaazh-logo.png",
    href: `/contact?product=${["web", "extension", "desktop"][i]}`,
    downloadUrl: i === 1 ? "/EXE/yazh-ai.crx" : i === 2 ? "/EXE/TamilComputerAgent.exe" : undefined,
    tools: p.toolsOrHighlights,
  }));

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[85svh] flex-col items-center justify-center overflow-hidden bg-[#23261f] px-6 text-center">
        <Reveal>
          <span className="mb-6 inline-block text-[10px] font-mono font-medium tracking-[0.15em] uppercase text-[#a8e063]/80">
            {t.productsBadge}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight text-white">
            {t.productsTitle1}
            <br />
            <span className="text-[#a8e063]">{t.productsTitle2}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#a4aaa0] leading-relaxed">
            {t.productsDescription}
          </p>
        </Reveal>

        {/* Animated accent line */}
        <Reveal delay={0.35}>
          <motion.div
            className="mt-10 h-px w-48 bg-gradient-to-r from-transparent via-[#a8e063] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          />
        </Reveal>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="size-5 rounded-full border border-white/20"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <div className="mx-auto mt-1.5 size-1 rounded-full bg-[#a8e063]/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Product Grid Showcase ── */}
      <section className="bg-[#23261f]">
        <div className="section-shell py-16 sm:py-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <ProductCard
                  id={product.id}
                  logoSrc={product.logoSrc}
                  name={product.name}
                  tagline={product.tagline}
                  description={product.description}
                  features={product.features}
                  tools={product.toolsOrHighlights}
                  href={product.href}
                  downloadUrl={product.downloadUrl}
                  downloadLabel={product.downloadLabel}
                  badge={product.badge}
                  edition={product.edition}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Architecture & Core Specs ── */}
      <section className="bg-[#282b24] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell py-16 sm:py-24">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="mb-4 inline-block text-[10px] font-mono font-medium tracking-[0.15em] uppercase text-[#a8e063]/80">
              {t.productsCoreSpecsBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              {t.productsCoreSpecsTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#a4aaa0]">
              {t.productsCoreSpecsDescription}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.productsCoreSpecs.map((spec, i) => (
              <Reveal key={spec.title} delay={i * 0.08}>
                <div className="living-card p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="block text-[10px] font-mono font-medium tracking-[0.12em] uppercase text-[#a8e063]">
                      {spec.label}
                    </span>
                    <h3 className="mt-2 text-xl font-medium text-white">
                      {spec.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0]">
                      {spec.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[rgba(238,243,231,0.08)] text-[10px] font-mono text-[#c6f19d]/70">
                    VERIFIED AGENT SPECIFICATION
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell flex flex-col items-center py-20 sm:py-28 text-center">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight">
              {t.productsCtaTitle}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-base text-[#a4aaa0]">
              {t.productsCtaDescription}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/EXE/yazh-ai.crx"
                download="yazh-ai.crx"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-8 py-3.5 text-sm font-semibold text-[#23261f] shadow-lg transition hover:bg-white hover:scale-105"
              >
                Chrome Extension (.CRX)
              </a>
              <a
                href="/EXE/TamilComputerAgent.exe"
                download="TamilComputerAgent.exe"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#a8e063]/40 bg-[rgba(168,224,99,0.1)] px-8 py-3.5 text-sm font-semibold text-[#c6f19d] transition hover:bg-[#a8e063] hover:text-[#23261f]"
              >
                Desktop Agent (.EXE)
              </a>
              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {t.productsCtaDevApi}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
