"use client";

import {
  FileText,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Terminal,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Mail,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export default function TermsPage() {
  const { t } = useI18n();

  const corePillars = [
    {
      icon: <Terminal className="size-6 text-[#a8e063]" />,
      title: "Automation Authorization",
      description:
        "You grant permission for the AI agent to simulate user interactions (mouse, keyboard, window focus, process execution) on your explicit instruction.",
    },
    {
      icon: <ShieldCheck className="size-6 text-[#a8e063]" />,
      title: "Human Supervision Duty",
      description:
        "Large Language Models are probabilistic. Users agree to supervise active automation and utilize instant pause/killswitches when necessary.",
    },
    {
      icon: <Scale className="size-6 text-[#a8e063]" />,
      title: "100% Output Ownership",
      description:
        "All code, spreadsheets, processed forms, and creative artifacts generated through the platform belong entirely to the user.",
    },
    {
      icon: <ShieldAlert className="size-6 text-[#a8e063]" />,
      title: "Strict Safety Safeguards",
      description:
        "Destructive actions (such as permanent file deletions, system alterations, and financial checkouts) trigger mandatory confirmation prompts.",
    },
  ];

  const sections = [
    {
      id: "acceptance",
      badge: "01. SCOPE & ELIGIBILITY",
      title: "Acceptance of Terms of Service",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            By installing, downloading, browsing, or executing commands through the <strong className="text-white">Yaazh AI</strong> Web Platform, Chrome Extension, or Desktop Agent (collectively, the &ldquo;Services&rdquo;), you enter into a binding agreement governed by these Terms and Conditions.
          </p>
          <p className="mt-3 text-[#a4aaa0] leading-relaxed">
            If you do not agree with any portion of these terms, you must immediately discontinue use of the software and uninstall the desktop client and browser extensions.
          </p>
        </>
      ),
    },
    {
      id: "agent-authorization",
      badge: "02. OPERATING CONSENT",
      title: "User Authorization for Computer Automation",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            Yaazh operates as an autonomous agent designed to assist with digital workflows. When you issue a task (via voice or text):
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[#f2f3ef]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-[#a8e063] shrink-0 mt-0.5" />
              <span><strong>Input Simulation:</strong> You authorize the application to programmatically position the mouse cursor, perform single/double clicks, type characters, press hotkeys, and switch active windows.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-[#a8e063] shrink-0 mt-0.5" />
              <span><strong>Process Execution:</strong> You authorize the agent to launch designated local applications, browse permitted URLs, and interact with operating system APIs within your user account privileges.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "supervision",
      badge: "03. SAFETY PROTOCOL",
      title: "User Supervision & Safety Responsibility",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            Because AI reasoning models generate actions based on probabilistic inference:
          </p>
          <div className="mt-4 rounded-xl border border-[#a8e063]/30 bg-[#23261f] p-5">
            <h4 className="text-sm font-semibold text-[#c6f19d] flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-400" />
              Real-Time Human-in-the-Loop Supervision
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#a4aaa0]">
              You agree to remain attentive while the agent is executing multi-step workflows, especially when interacting with confidential data, banking portals, or vital production systems.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 text-xs text-white">
              <div className="rounded-lg bg-[#282b24] p-3 border border-[rgba(238,243,231,0.08)]">
                <strong className="text-[#a8e063] block">Mouse Move Pause:</strong>
                Moving your physical mouse immediately pauses the autonomous runner.
              </div>
              <div className="rounded-lg bg-[#282b24] p-3 border border-[rgba(238,243,231,0.08)]">
                <strong className="text-[#a8e063] block">Emergency Killswitch:</strong>
                Pressing <kbd className="px-1.5 py-0.5 font-mono bg-[#1c1e19] text-[#a8e063] rounded">Esc</kbd> instantly terminates all running processes.
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "prohibited",
      badge: "04. ACCEPTABLE USE",
      title: "Prohibited Uses & Violations",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            You expressly agree not to utilize Yaazh AI for:
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[#f2f3ef]">
            <li className="flex items-start gap-2.5">
              <span className="size-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>Unauthorized intrusion, penetration testing without consent, or credential brute-forcing.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="size-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>Developing, distributing, or executing malicious scripts, rootkits, or surveillance tools.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="size-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>Conducting automated fraudulent financial transactions or scam campaigns.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="size-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
              <span>Bypassing CAPTCHA systems or terms of third-party platforms in violation of applicable laws.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "disclaimer",
      badge: "05. LEGAL DISCLAIMER",
      title: "Disclaimer of Warranties & Limitation of Liability",
      content: (
        <>
          <p className="text-xs uppercase font-mono tracking-wider text-[#a4aaa0] leading-relaxed">
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
          </p>
          <p className="mt-3 text-xs uppercase font-mono tracking-wider text-[#a4aaa0] leading-relaxed">
            IN NO EVENT SHALL THE AUTHORS, CREATORS, OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, LOSS OF DATA, SYSTEM DOWNTIME, OR OTHER LIABILITY ARISING OUT OF THE USE OR INABILITY TO USE THIS SOFTWARE.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <FileText className="size-3.5" />
              Terms of Service &amp; Usage
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              Transparent Rules for <span className="text-[#a8e063] font-normal">Intelligent Autonomy.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              Our terms establish a clear, safe, and trustworthy operating framework for autonomous computer use, web intelligence, and multi-modal developer tooling.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#a8e063]">
              <span>EFFECTIVE DATE: SEPTEMBER 2026</span>
              <span>•</span>
              <span>LIVING WORLD EDITION</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="pb-16 bg-[#383b34]">
        <div className="section-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corePillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="living-card p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="grid size-12 place-items-center rounded-xl bg-[#a8e063]/12 border border-[#a8e063]/25 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#a4aaa0]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="section-padding bg-[#2f332a] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell max-w-4xl">
          <div className="space-y-10">
            {sections.map((section, idx) => (
              <Reveal key={section.id} delay={idx * 0.05}>
                <article className="living-card p-8 sm:p-10">
                  <span className="text-[11px] font-mono text-[#a8e063] tracking-wider uppercase">
                    {section.badge}
                  </span>
                  <h2 className="mt-2 text-2xl font-medium text-white mb-5">
                    {section.title}
                  </h2>
                  <div className="border-t border-[rgba(238,243,231,0.08)] pt-5">
                    {section.content}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Questions Banner */}
      <section className="section-padding bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-12 bg-gradient-to-br from-[#2f332a] to-[#1c1e19] flex flex-col md:flex-row items-center justify-between gap-8 border-[#a8e063]/25">
              <div className="max-w-2xl">
                <div className="living-badge mb-4">
                  <Mail className="size-3.5" />
                  Legal &amp; Compliance Inquiries
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Need customized enterprise licensing or SLA terms?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0]">
                  Contact our administrative team for commercial distribution rights, on-premise governance agreements, and compliance certifications.
                </p>
                <div className="mt-4">
                  <a
                    href="mailto:yazh@nanotom.in"
                    className="inline-block text-base font-mono text-[#c6f19d] hover:text-white transition"
                  >
                    yazh@nanotom.in
                  </a>
                </div>
              </div>

              <Link
                href="/contact"
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full bg-[#a8e063] px-8 py-4 font-semibold text-[#23261f] transition hover:bg-white hover:scale-105 shadow-lg"
              >
                {t.navGetStarted}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
