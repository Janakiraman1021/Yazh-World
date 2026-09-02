"use client";

import { Mail, MessageCircle, Network, Sparkles, MapPin, Globe, Shield, Terminal, Code2 } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      {/* Hero Header */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Sparkles className="size-3.5" />
              {t.contactBadge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              {t.contactTitle1} <span className="text-[#a8e063] font-normal">{t.contactTitle2}</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              {t.contactDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-20 bg-[#383b34]">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6">
              {/* Direct Mail Card */}
              <aside className="living-card p-8 bg-gradient-to-br from-[#2a2e25] to-[#1e211a]">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-[#a8e063]/15 text-[#a8e063] border border-[#a8e063]/30">
                    <Mail className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#a8e063] uppercase tracking-wider">
                      {t.contactEmailTitle}
                    </span>
                    <h2 className="text-xl font-medium text-white">Email</h2>
                  </div>
                </div>

                <a
                  href="mailto:yazh@nanotom.in"
                  className="focus-ring mt-4 inline-block text-lg font-medium text-[#c6f19d] hover:text-white transition"
                >
                  yazh@nanotom.in
                </a>
                <p className="mt-2 text-xs text-[#a4aaa0]">
                  {t.contactEmailResponse}
                </p>

                <div className="mt-8 border-t border-[rgba(238,243,231,0.08)] pt-6">
                  <div className="flex items-center gap-3 text-xs text-[#a4aaa0]">
                    <MapPin className="size-4 text-[#a8e063] shrink-0" />
                    <span>{t.contactLocation}</span>
                  </div>
                </div>
              </aside>

              {/* Developer & MCP Skills Card */}
              <aside className="living-card p-8 bg-[#282b24]">
                <div className="flex items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-xl bg-[#a8e063]/15 text-[#a8e063] border border-[#a8e063]/30">
                    <Terminal className="size-6" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#a8e063] uppercase tracking-wider">
                      {t.contactDeveloperTitle}
                    </span>
                    <h2 className="text-xl font-medium text-white">Developer</h2>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-[#a4aaa0]">
                  {t.contactDeveloperDescription}
                </p>

                <div className="mt-6 flex gap-3">
                  {[MessageCircle, Network, Globe].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label="Community link"
                      className="focus-ring grid size-10 place-items-center rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#23261f] text-[#a4aaa0] transition hover:bg-[#a8e063] hover:text-[#23261f]"
                    >
                      <Icon className="size-4" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
