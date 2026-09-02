"use client";

import { useState, useMemo } from "react";
import {
  BookOpen,
  Search,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Mic,
  Laptop,
  AppWindow,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Copy,
  Check,
  FileCode,
  Layers,
  Keyboard,
  Compass,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "../components/Reveal";
import { useI18n } from "../i18n/context";

type DocCategory =
  | "all"
  | "getting-started"
  | "desktop"
  | "extension"
  | "shortcuts"
  | "safety"
  | "models-mcp"
  | "voice";

export default function DocsPage() {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  function handleCopy(text: string, key: string) {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  }

  const categories = [
    { id: "all", label: "All Docs", icon: Compass },
    { id: "getting-started", label: "Quickstart", icon: Zap },
    { id: "desktop", label: "Desktop Agent", icon: Laptop },
    { id: "extension", label: "Chrome Extension", icon: AppWindow },
    { id: "shortcuts", label: "Shortcuts", icon: Keyboard },
    { id: "safety", label: "Safety Controls", icon: ShieldCheck },
    { id: "models-mcp", label: "Models & MCP", icon: Cpu },
    { id: "voice", label: "Tamil Voice", icon: Mic },
  ] as const;

  const shortcuts = [
    {
      action: "New Chat / Task",
      keys: ["Ctrl", "Shift", "O"],
      alt: ["Ctrl", "N"],
      desc: "Start a fresh conversation and reset screen state",
    },
    {
      action: "Voice Recording",
      keys: ["Ctrl", "Space"],
      alt: [],
      desc: "Toggle microphone recording for voice task",
    },
    {
      action: "Toggle Sidebar",
      keys: ["Ctrl", "B"],
      alt: [],
      desc: "Collapse or expand the left sidebar",
    },
    {
      action: "History & Audit",
      keys: ["Ctrl", "H"],
      alt: ["Ctrl", "2"],
      desc: "Open past conversation transcripts and action log",
    },
    {
      action: "Plugins & MCP",
      keys: ["Ctrl", "P"],
      alt: ["Ctrl", "3"],
      desc: "View and connect external MCP tool servers",
    },
    {
      action: "Settings & Keys",
      keys: ["Ctrl", ","],
      alt: ["Ctrl", "Shift", "S"],
      desc: "Configure API keys, AI model, voice, and safety gates",
    },
    {
      action: "Theme Switcher",
      keys: ["Ctrl", "Shift", "T"],
      alt: [],
      desc: "Toggle between Living Moss Dark and Clean Light mode",
    },
    {
      action: "Emergency Stop",
      keys: ["Esc"],
      alt: [],
      desc: "Immediately abort running task or close open sheet",
    },
  ];

  const voiceExamples = [
    {
      lang: "Tamil / Tanglish",
      command: "Downloads-ல இருக்குற PDF-ஐ Desktop-க்கு move பண்ணு",
      purpose: "File System & Explorer Automation",
      result: "Locates recent PDF in Downloads folder and safely moves it to Desktop.",
    },
    {
      lang: "Tamil",
      command: "Chrome open பண்ணி இன்றைய வானிலை நிலவரத்தைப் பார்",
      purpose: "Browser & Web Search",
      result: "Launches browser, navigates to search, extracts local weather forecast.",
    },
    {
      lang: "Tanglish",
      command: "இந்த Excel sheet-ல் உள்ள sales data-வை summarize பண்ணி chart காட்டு",
      purpose: "Data Analysis & Spreadsheet",
      result: "Reads spreadsheet columns, computes totals and displays insights.",
    },
    {
      lang: "English",
      command: "Fill out the college scholarship application form with my profile",
      purpose: "Autonomous Web Form Automation",
      result: "Detects input fields, enters verified user details, pauses before submit for approval.",
    },
  ];

  const envSample = `# Model API Configuration (Stored locally in .env)
GEMINI_API_KEY="AIzaSy..."
ANTHROPIC_API_KEY="sk-ant-api03-..."
OPENAI_API_KEY="sk-proj-..."

# Local Model & Vision Settings
DEFAULT_VISION_MODEL="gemini-2.5-flash"
FALLBACK_VISION_MODEL="claude-sonnet-5"
LOCAL_OLLAMA_ENDPOINT="http://localhost:11434"

# Audio & Speech-to-Text
WHISPER_MODEL_SIZE="base"
ENABLE_TAMIL_TTS=true`;

  const mcpSample = `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:\\\\Users\\\\Workspace"]
    },
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}`;

  const docArticles = useMemo(() => {
    const list = [
      {
        id: "intro",
        category: "getting-started",
        title: "Introduction to Yaazh AI",
        badge: "GETTING STARTED",
        content: (
          <div className="space-y-4">
            <p className="text-[#a4aaa0] leading-relaxed">
              <strong className="text-white">Yaazh AI (தமிழ் AI)</strong> is a state-of-the-art autonomous multimodal AI platform. It unites three synchronized experiences:
            </p>
            <div className="grid gap-3 sm:grid-cols-3 pt-2">
              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-4">
                <span className="text-xs font-mono text-[#a8e063] block mb-1">01. WEB PLATFORM</span>
                <p className="text-xs text-[#a4aaa0]">20+ Universal AI tools, deep reasoning models, research and translation suite.</p>
              </div>
              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-4">
                <span className="text-xs font-mono text-[#a8e063] block mb-1">02. CHROME EXTENSION</span>
                <p className="text-xs text-[#a4aaa0]">Autonomous web browsing, intelligent form filling, and DOM manipulation.</p>
              </div>
              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-4">
                <span className="text-xs font-mono text-[#a8e063] block mb-1">03. DESKTOP AGENT</span>
                <p className="text-xs text-[#a4aaa0]">Voice-controlled computer automation that sees screens and clicks controls.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "desktop-pipeline",
        category: "desktop",
        title: "Desktop Agent Operating Pipeline",
        badge: "DESKTOP AGENT",
        content: (
          <div className="space-y-4">
            <p className="text-[#a4aaa0] leading-relaxed">
              The Desktop Automation Agent operates using a high-precision 4-stage loop:
            </p>
            <ol className="space-y-3 text-sm text-[#f2f3ef]">
              <li className="flex items-start gap-3 rounded-lg bg-[#23261f] p-3 border border-[rgba(238,243,231,0.06)]">
                <span className="grid size-6 place-items-center rounded-full bg-[#a8e063]/20 text-[#a8e063] text-xs font-mono font-bold shrink-0">1</span>
                <div>
                  <strong className="text-white">Multilingual Voice & Text Input:</strong> Processes user intent in Tamil, Tanglish, or English via real-time speech recognition.
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-[#23261f] p-3 border border-[rgba(238,243,231,0.06)]">
                <span className="grid size-6 place-items-center rounded-full bg-[#a8e063]/20 text-[#a8e063] text-xs font-mono font-bold shrink-0">2</span>
                <div>
                  <strong className="text-white">Visual Planning & Coordinate Estimation:</strong> Captures an ephemeral screen frame, parses bounding boxes for UI buttons, inputs, and icons.
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-[#23261f] p-3 border border-[rgba(238,243,231,0.06)]">
                <span className="grid size-6 place-items-center rounded-full bg-[#a8e063]/20 text-[#a8e063] text-xs font-mono font-bold shrink-0">3</span>
                <div>
                  <strong className="text-white">Batched Action Execution:</strong> Simulates smooth mouse movement, keystrokes, and window navigation while monitoring screen feedback.
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-lg bg-[#23261f] p-3 border border-[rgba(238,243,231,0.06)]">
                <span className="grid size-6 place-items-center rounded-full bg-[#a8e063]/20 text-[#a8e063] text-xs font-mono font-bold shrink-0">4</span>
                <div>
                  <strong className="text-white">Human Approval Gate:</strong> Pauses for manual confirmation before sensitive actions (file deletions, payments, form submission).
                </div>
              </li>
            </ol>
          </div>
        ),
      },
      {
        id: "shortcuts-section",
        category: "shortcuts",
        title: "Keyboard Shortcuts Cheatsheet",
        badge: "SHORTCUTS",
        content: (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[rgba(238,243,231,0.12)] bg-[#23261f] text-[#c6f19d] font-mono">
                  <th className="p-3.5">ACTION</th>
                  <th className="p-3.5">PRIMARY SHORTCUT</th>
                  <th className="p-3.5">ALTERNATIVE</th>
                  <th className="p-3.5">PURPOSE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(238,243,231,0.06)]">
                {shortcuts.map((sc) => (
                  <tr key={sc.action} className="hover:bg-[rgba(168,224,99,0.03)] transition">
                    <td className="p-3.5 font-medium text-white">{sc.action}</td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {sc.keys.map((k) => (
                          <kbd
                            key={k}
                            className="px-2 py-0.5 rounded bg-[#23261f] text-[#a8e063] border border-[#a8e063]/30 font-mono font-semibold text-[11px] shadow-sm"
                          >
                            {k}
                          </kbd>
                        ))}
                      </div>
                    </td>
                    <td className="p-3.5">
                      {sc.alt.length > 0 ? (
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {sc.alt.map((k) => (
                            <kbd
                              key={k}
                              className="px-2 py-0.5 rounded bg-[#23261f] text-[#a4aaa0] border border-[rgba(238,243,231,0.12)] font-mono text-[11px]"
                            >
                              {k}
                            </kbd>
                          ))}
                        </div>
                      ) : (
                        <span className="text-[#a4aaa0]/40">—</span>
                      )}
                    </td>
                    <td className="p-3.5 text-[#a4aaa0]">{sc.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "safety-section",
        category: "safety",
        title: "Safety Architecture & Killswitches",
        badge: "SAFETY PROTOCOL",
        content: (
          <div className="space-y-4">
            <p className="text-[#a4aaa0] leading-relaxed">
              Autonomy is safe only when the human always maintains supreme authority over the machine. Yaazh incorporates 4 protective layers:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                  <Zap className="size-4 text-[#a8e063]" />
                  Human Takeover Guard
                </div>
                <p className="text-xs leading-relaxed text-[#a4aaa0]">
                  Any physical movement of your mouse or hardware keyboard immediately pauses automation, preventing cursor conflicts.
                </p>
              </div>

              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                  <ShieldCheck className="size-4 text-[#a8e063]" />
                  Emergency Killswitch (Esc)
                </div>
                <p className="text-xs leading-relaxed text-[#a4aaa0]">
                  Pressing Escape immediately terminates all active subprocesses, cancels pending clicks, and restores complete desktop focus.
                </p>
              </div>

              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                  <ShieldCheck className="size-4 text-[#a8e063]" />
                  Destructive Action Confirmation
                </div>
                <p className="text-xs leading-relaxed text-[#a4aaa0]">
                  Actions involving file deletion, formatting, or financial checkouts trigger an explicit on-screen modal requiring user confirmation.
                </p>
              </div>

              <div className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                  <ShieldCheck className="size-4 text-[#a8e063]" />
                  System32 Protected Zone
                </div>
                <p className="text-xs leading-relaxed text-[#a4aaa0]">
                  Critical Windows system directories, registry hives, and security certificates are permanently locked from unauthorized agent writes.
                </p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "models-mcp-section",
        category: "models-mcp",
        title: "AI Models & Model Context Protocol (MCP)",
        badge: "CONFIGURATION",
        content: (
          <div className="space-y-6">
            <div>
              <h4 className="text-base font-semibold text-white mb-2">1. Local Configuration (.env)</h4>
              <p className="text-xs text-[#a4aaa0] mb-3">
                Configure your API credentials directly in your local environment file. Keys are encrypted and masked in the application UI:
              </p>
              <div className="relative rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#1c1e19] p-4 font-mono text-xs text-[#a8e063] overflow-x-auto">
                <button
                  type="button"
                  onClick={() => handleCopy(envSample, "env")}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#282b24] text-[#a4aaa0] hover:text-white hover:bg-[#383b34] transition"
                  aria-label="Copy code"
                >
                  {copiedKey === "env" ? <Check className="size-4 text-[#a8e063]" /> : <Copy className="size-4" />}
                </button>
                <pre>{envSample}</pre>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-white mb-2">2. MCP Server Integrations (mcp_config.json)</h4>
              <p className="text-xs text-[#a4aaa0] mb-3">
                Connect external tool servers using the open Model Context Protocol to grant the agent filesystem access, headless browser scraping, or database query capabilities:
              </p>
              <div className="relative rounded-xl border border-[rgba(238,243,231,0.12)] bg-[#1c1e19] p-4 font-mono text-xs text-[#c6f19d] overflow-x-auto">
                <button
                  type="button"
                  onClick={() => handleCopy(mcpSample, "mcp")}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#282b24] text-[#a4aaa0] hover:text-white hover:bg-[#383b34] transition"
                  aria-label="Copy code"
                >
                  {copiedKey === "mcp" ? <Check className="size-4 text-[#a8e063]" /> : <Copy className="size-4" />}
                </button>
                <pre>{mcpSample}</pre>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "voice-section",
        category: "voice",
        title: "Tamil, Tanglish & Multilingual Voice Commands",
        badge: "VOICE INTERACTION",
        content: (
          <div className="space-y-4">
            <p className="text-[#a4aaa0] leading-relaxed">
              Yaazh is natively optimized for Tamil, Tanglish, and Indian regional languages. Speak naturally without strict keyword syntax:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              {voiceExamples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[rgba(238,243,231,0.1)] bg-[#23261f] p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-[#a8e063] uppercase bg-[#a8e063]/10 px-2.5 py-0.5 rounded-full border border-[#a8e063]/25">
                        {ex.lang}
                      </span>
                      <span className="text-xs text-[#a4aaa0] font-mono">{ex.purpose}</span>
                    </div>
                    <p className="text-sm font-medium text-white italic">&ldquo;{ex.command}&rdquo;</p>
                  </div>
                  <div className="mt-4 border-t border-[rgba(238,243,231,0.06)] pt-3 text-xs text-[#a4aaa0]">
                    <strong className="text-[#c6f19d]">Action:</strong> {ex.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ];

    return list.filter((article) => {
      const matchCat = selectedCategory === "all" || article.category === selectedCategory;
      const matchQuery =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.badge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery, copiedKey]);

  return (
    <>
      {/* Hero Header */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <BookOpen className="size-3.5" />
              Documentation &amp; Knowledge Hub
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              System Guides, Architecture &amp; <span className="text-[#a8e063] font-normal">Docs.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              Everything you need to master Yaazh Web Platform, Chrome Extension, and the Voice-Controlled Desktop Automation Agent.
            </p>
          </Reveal>

          {/* Search Bar */}
          <Reveal delay={0.08} className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-[#a8e063]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documentation, shortcuts, safety controls, voice prompts..."
                className="w-full rounded-2xl border border-[rgba(238,243,231,0.15)] bg-[rgba(34,40,31,0.85)] pl-12 pr-4 py-4 text-sm text-white placeholder:text-[#a4aaa0]/50 shadow-xl backdrop-blur-xl focus:border-[#a8e063] focus:bg-[#23261f] focus:outline-none transition"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#a4aaa0] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Documentation Area */}
      <section className="pb-24 bg-[#383b34]">
        <div className="section-shell">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                    isSelected
                      ? "bg-[#a8e063] text-[#23261f] font-semibold shadow-lg shadow-[#a8e063]/20 scale-[1.02]"
                      : "bg-[#282b24] text-[#a4aaa0] hover:bg-[#31362d] hover:text-white border border-[rgba(238,243,231,0.08)]"
                  }`}
                >
                  <Icon className="size-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="space-y-10">
            {docArticles.length > 0 ? (
              docArticles.map((art, idx) => (
                <Reveal key={art.id} delay={idx * 0.04}>
                  <article className="living-card p-8 sm:p-10 border-[rgba(238,243,231,0.12)]">
                    <span className="text-[10px] font-mono text-[#a8e063] uppercase tracking-wider">
                      {art.badge}
                    </span>
                    <h2 className="text-2xl font-medium text-white mt-2 mb-6">
                      {art.title}
                    </h2>
                    <div className="border-t border-[rgba(238,243,231,0.08)] pt-6">
                      {art.content}
                    </div>
                  </article>
                </Reveal>
              ))
            ) : (
              <div className="living-card p-12 text-center">
                <Search className="size-10 text-[#a8e063] mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium text-white">No documentation results found</h3>
                <p className="mt-2 text-sm text-[#a4aaa0]">
                  Try searching for different terms like &ldquo;shortcuts&rdquo;, &ldquo;safety&rdquo;, &ldquo;gemini&rdquo;, or &ldquo;voice&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#a8e063] text-[#23261f] text-xs font-semibold"
                >
                  Reset Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Documentation Footer CTA */}
      <section className="section-padding bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-12 bg-gradient-to-br from-[#2f332a] to-[#1c1e19] flex flex-col md:flex-row items-center justify-between gap-8 border-[#a8e063]/25">
              <div className="max-w-2xl">
                <div className="living-badge mb-4">
                  <Sparkles className="size-3.5" />
                  Ready to Experience Autonomy?
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  Start using Yaazh on Web, Chrome, or Desktop.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0]">
                  Explore all 20+ universal AI tools, automated workflow agents, and desktop computer automation features.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 shrink-0">
                <Link
                  href="/products"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-7 py-3.5 text-sm font-semibold text-[#23261f] transition hover:bg-white hover:scale-105 shadow-lg"
                >
                  {t.navProducts}
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.navGetStarted}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
