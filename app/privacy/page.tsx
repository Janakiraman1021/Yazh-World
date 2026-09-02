"use client";

import {
  Shield,
  Lock,
  EyeOff,
  HardDrive,
  Cpu,
  Trash2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Mail,
  FileCheck2,
  ServerOff,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

export default function PrivacyPage() {
  const { t } = useI18n();

  const privacyHighlights = [
    {
      icon: <ServerOff className="size-6 text-[#a8e063]" />,
      title: "100% On-Device & Zero Telemetry",
      description:
        "No remote tracking servers, no usage analytics, and no behavioral surveillance. All process executions and decisions stay local to your computer.",
    },
    {
      icon: <Lock className="size-6 text-[#a8e063]" />,
      title: "Encrypted API Key Security",
      description:
        "Your model credentials (Gemini, Claude, OpenAI) remain securely inside your local .env file. Keys are masked in the UI and stripped from audit logs.",
    },
    {
      icon: <EyeOff className="size-6 text-[#a8e063]" />,
      title: "Ephemeral Visual Buffer",
      description:
        "Screenshots are captured strictly while a user-initiated task is running, held in temporary memory, and discarded immediately upon completion.",
    },
    {
      icon: <HardDrive className="size-6 text-[#a8e063]" />,
      title: "Full Data Sovereignty & Export",
      description:
        "All transcripts and action logs are saved locally in your own directory. You can inspect, export, or permanently erase records at any time.",
    },
  ];

  const sections = [
    {
      id: "local-first",
      badge: "01. ARCHITECTURE",
      title: "Local Execution & Infrastructure",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            Yaazh AI is architected from the ground up on a strict <strong className="text-white">Local-First</strong> foundation. When you run the Yaazh Desktop Agent, Web Tools, or Chrome Extension, our software interacts directly with your operating system, local browser, and target applications.
          </p>
          <p className="mt-3 text-[#a4aaa0] leading-relaxed">
            We operate <strong className="text-white">no centralized telemetry or logging servers</strong>. We never intercept, inspect, or monetize the commands you issue or the files you manipulate.
          </p>
        </>
      ),
    },
    {
      id: "api-security",
      badge: "02. CREDENTIALS",
      title: "API Keys & Direct Provider Communication",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            When you configure model providers (such as Google Gemini, Anthropic Claude, OpenAI, or local Ollama instances), your API keys remain stored exclusively on your local file system within your encrypted configuration files.
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[#f2f3ef]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-[#a8e063] shrink-0 mt-0.5" />
              <span><strong>Direct TLS Encryption:</strong> Requests travel directly from your computer to the AI provider endpoint via HTTPS/TLS 1.3 without intermediary proxies.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-[#a8e063] shrink-0 mt-0.5" />
              <span><strong>Log Scrubbing:</strong> Secret keys and sensitive credentials are automatically sanitized from in-app logs and diagnostics.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="size-4 text-[#a8e063] shrink-0 mt-0.5" />
              <span><strong>Offline Model Support:</strong> You can connect local LLM instances (Ollama / vLLM) for complete air-gapped, zero-cloud execution.</span>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "visual-privacy",
      badge: "03. SCREEN VISION",
      title: "Screen Captures & Vision Safety",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            To click buttons, navigate portals, and fill forms, Yaazh captures visual screen coordinates. We adhere to rigorous visual privacy safeguards:
          </p>
          <div className="mt-4 rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-5">
            <h4 className="text-sm font-semibold text-[#c6f19d] flex items-center gap-2">
              <Shield className="size-4 text-[#a8e063]" />
              Zero Cloud Screenshot Archival
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-[#a4aaa0]">
              Visual frames exist in temporary system RAM only for the duration of the active visual calculation. Frames are instantly discarded once action coordinates are computed and are never saved to external cloud databases.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "voice-processing",
      badge: "04. AUDIO",
      title: "Voice Commands & Audio Privacy",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            When you use voice mode in Tamil, English, or Tanglish, microphone audio is passed to your configured Speech-to-Text engine (such as local Whisper models).
          </p>
          <p className="mt-3 text-[#a4aaa0] leading-relaxed">
            Audio streams are never continuously monitored or passively recorded in the background. The microphone is active <em>only</em> while you hold the Push-to-Talk button or activate recording (<kbd className="px-2 py-0.5 text-[11px] font-mono bg-[#282b24] text-[#a8e063] rounded border border-[#a8e063]/30">Ctrl + Space</kbd>).
          </p>
        </>
      ),
    },
    {
      id: "user-sovereignty",
      badge: "05. USER RIGHTS",
      title: "Data Sovereignty, Export & Deletion",
      content: (
        <>
          <p className="text-[#a4aaa0] leading-relaxed">
            You retain 100% ownership and sovereignty over your data:
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[rgba(238,243,231,0.08)] bg-[#23261f] p-4">
              <span className="text-xs font-mono text-[#a8e063]">AUDIT TRANSPARENCY</span>
              <p className="mt-1 text-xs text-[#a4aaa0]">
                Every action, keystroke, and step executed by the agent is recorded in local audit trails accessible via <kbd className="font-mono text-[#c6f19d]">Ctrl + H</kbd>.
              </p>
            </div>
            <div className="rounded-xl border border-[rgba(238,243,231,0.08)] bg-[#23261f] p-4">
              <span className="text-xs font-mono text-[#a8e063]">INSTANT PURGE</span>
              <p className="mt-1 text-xs text-[#a4aaa0]">
                You can delete individual conversations or wipe your entire history at any time with a single click in Settings.
              </p>
            </div>
          </div>
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
              <Shield className="size-3.5" />
              Privacy &amp; Data Sovereignty
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              Your Data. Your Machine. <span className="text-[#a8e063] font-normal">Your Privacy.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              We believe autonomous AI should empower you without compromising your personal privacy or system security. Read how Yaazh protects your data with local-first engineering.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-[#a8e063]">
              <span>LAST UPDATED: SEPTEMBER 2026</span>
              <span>•</span>
              <span>VERSION 2.5 STABLE</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="pb-16 bg-[#383b34]">
        <div className="section-shell">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {privacyHighlights.map((item, index) => (
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

      {/* Main Policy Content Sections */}
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

      {/* Contact & Inquiries Banner */}
      <section className="section-padding bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-12 bg-gradient-to-br from-[#2f332a] to-[#1c1e19] flex flex-col md:flex-row items-center justify-between gap-8 border-[#a8e063]/25">
              <div className="max-w-2xl">
                <div className="living-badge mb-4">
                  <Mail className="size-3.5" />
                  Privacy Inquiries &amp; Legal
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Have questions regarding our privacy architecture?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0]">
                  Our security and engineering team is here to provide full transparency on data flow, zero-retention policies, and enterprise on-premises deployments.
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
