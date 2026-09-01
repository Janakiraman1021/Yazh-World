"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductCard } from "../components/ProductCard";
import { Reveal } from "../components/Reveal";

const products = [
  {
    id: "web",
    index: "01",
    name: "யாழ் Web Platform",
    tagline: "தமிழ் AI அறிவுத் தளம் & 18+ பிரத்யேக கருவிகள்",
    logoSrc: "/yaazh-logo.png",
    description:
      "இயற்கையான தமிழில் குரல் மற்றும் உரை வழியே உரையாடும் ஆற்றல், 18+ உள்ளமைந்த பிரத்யேக தமிழ் AI கருவிகள், சங்க இலக்கிய வரலாற்று நூல்களுக்கான சிறப்பு LangLM மாதிரி, திட்டமிடப்பட்ட பணிகள் (Scheduled Tasks), MCP Skill Support மற்றும் Developer API Hub ஆகியவற்றை உள்ளடக்கிய முழுமையான வலைத்தள தளம்.",
    features: [
      "18+ சிறப்பு தமிழ் AI கருவிகள் (உரையாடல், இலக்கணம், நில/சட்ட பகுப்பு, தங்கிலீஷ், ஆவண அறிவு)",
      "சங்க இலக்கிய LangLM மாதிரி (புறநானூறு, திருக்குறள், சிலப்பதிகாரம், தொல்காப்பியம் வரலாற்று அறிவு)",
      "குரல் உரையாடல் (Real-time Speech & Audio Synthesis) மற்றும் வட்டார வழக்கு புரிதல்",
      "Model Context Protocol (MCP) Skill Support & Developer Skill Upload Hub",
      "திட்டமிடப்பட்ட பணிகள் (Scheduled Tasks) மற்றும் தொடர் வரலாற்று சேமிப்பு (Context Memory)",
    ],
    toolsOrHighlights: [
      "உரையாடல்",
      "தங்கிலீஷ்",
      "மொழிபெயர்ப்பு",
      "பேச்சு (Speech-to-Text)",
      "தமிழ் கற்றல்",
      "ஒலிச்சேர்க்கை",
      "வட்டார வழக்கு",
      "இலக்கணம்",
      "மறுசொல்லாக்கம்",
      "பயிற்சி விளக்கம்",
      "தானியங்கி பணிகள்",
      "திட்டப் பணி",
      "ஆவண அறிவு (RAG)",
      "நில & சட்ட பகுப்பு",
      "தலைப்புப்படுத்தல்",
      "ஆவண பகுப்பு",
      "Developer API Hub",
      "சேமிக்கப்பட்ட வரலாறு",
    ],
    useCases: [
      {
        title: "சங்க இலக்கிய ஆய்வு (LangLM)",
        desc: "புறநானூறு மற்றும் திருக்குறள் பாடல்களின் ஆழமான உரை, நயவுரை மற்றும் தற்காலப் பொருத்தப்பாடுகளை நொடியில் பெறலாம்.",
      },
      {
        title: "நில & சட்ட ஆவண பகுப்பாய்வு",
        desc: "பட்டா, சிட்டா, பத்திரப் பதிவு மற்றும் சட்ட ஆவணங்களை பதிவேற்றி, முக்கிய சரத்துக்களை தமிழில் பகுத்தறியலாம்.",
      },
      {
        title: "டெவலப்பர் API & MCP Skills",
        desc: "உங்கள் சொந்த மென்பொருட்களில் தமிழ் AI-ஐ இணைக்க REST APIs மற்றும் Custom Skills-ஐ உருவாக்கலாம்.",
      },
      {
        title: "வட்டார பேச்சு மொழிபெயர்ப்பு",
        desc: "கொங்கு, மதுரை, சென்னை, நெல்லை மற்றும் யாழ்ப்பாண பேச்சுவழக்குகளை உணர்ந்து இலக்கணத் தமிழாக மாற்றும்.",
      },
    ],
    href: "/contact?product=web",
    badge: "WEB PLATFORM • EDITION 01",
    edition: "தயாரிப்பு 01",
  },
  {
    id: "extension",
    index: "02",
    name: "யாழ் Chrome Extension",
    tagline: "நூற்றுக்கணக்கான இணைய பணிகளை தானாக முடிக்கும் AI Browser Agent",
    description:
      "Browser-க்குள் இயங்கி, நூற்றுக்கணக்கான web-based tasks-ஐ user சார்பாக புரிந்து, execute மற்றும் automate செய்யக்கூடிய AI browser agent. ஒரு எளிய கட்டளையைக் கொடுத்தால், யாழ் இணையதளத்தை திறந்து → தகவலைக் கண்டுபிடித்து → படிகளை நிறைவேற்றி → முடிவை சரிபார்த்து → முக்கிய இறுதி சமர்ப்பிப்புக்கு (Submit/Payment) மட்டும் மனித உறுதிப்படுத்தல் கேட்கும்.",
    features: [
      "TN Government e-Sevai portals: Community, Income, Nativity, Patta/Chitta, Birth/Death Certificates & Schemes",
      "மாணவர் பணிகள்: கல்லூரி சேர்க்கை படிவங்கள், கல்வி உதவித்தொகை, தேர்வு பதிவு, பாடத்திட்டம் & குறிப்புகள் சேகரிப்பு",
      "வேலை வாய்ப்பு: Job applications, தொடர் தரவு பதிவு (Data Entry), பல வலைத்தளங்கள் இடையே தகவல் ஒப்பீடு",
      "ஒரே கட்டளையில் முழு வழிசெலுத்தல்: Open → Find Info → Execute Steps → Verify Result → User Confirmation",
      "Chrome, Edge, Brave உள்ளிட்ட Chromium பிரவுசர்களுக்கான முழு ஆதரவு",
    ],
    toolsOrHighlights: [
      "e-Sevai Portal Auto-fill",
      "Patta / Chitta Lookup",
      "College Admissions",
      "Scholarship Finder & Apply",
      "Multi-Site Comparison",
      "Document Auto-Upload",
      "Exam-Date Tracker",
      "Zero-Data Security",
    ],
    useCases: [
      {
        title: "அரசு e-Sevai விண்ணப்பங்கள்",
        desc: "வருமானச் சான்றிதழ், இருப்பிடச் சான்றிதழ், பட்டா/சிட்டா படிவங்களுக்கு தேவையான தகவல்களைக் கண்டறிந்து தானாக நிரப்பும்.",
      },
      {
        title: "மாணவர் சேர்க்கை & உதவித்தொகை",
        desc: "College Admission படிவங்கள், Scholarship Applications, Assignment Submission மற்றும் தேர்வுத் தேதி கண்காணிப்பு.",
      },
      {
        title: "வலைத்தள ஆராய்ச்சி & ஒப்பீடு",
        desc: "பல்வேறு இணையதளங்களில் உள்ள தகவல்கள், கட்டணங்கள், வேலைவாய்ப்பு விவரங்களை ஒப்பிட்டு சுருக்கம் தரும்.",
      },
      {
        title: "பாதுகாப்பான மனித ஒப்புதல்",
        desc: "Payment அல்லது Final Submit செய்வதற்கு முன்பு திரையில் துல்லியமாக தகவல்களைக் காட்டி அனுமதி கேட்கும்.",
      },
    ],
    logoSrc: "/yaazh-logo.png",
    href: "/contact?product=extension",
    downloadUrl: "/EXE/yazh-ai.crx",
    downloadLabel: "Chrome Extension பதிவிறக்குக (.CRX)",
    badge: "BROWSER AGENT • EDITION 02",
    edition: "தயாரிப்பு 02",
  },
  {
    id: "desktop",
    index: "03",
    name: "யாழ் Computer Automation",
    tagline: "மனிதரைப் போல முழு கணினியையும் இயக்கும் Desktop AI Agent",
    description:
      "யாழ் AI-க்கு முழு computer-ஐ மனிதரைப் போல operate செய்து, நூற்றுக்கணக்கான repetitive மற்றும் multi-step tasks-ஐ automatically execute செய்யும் capability. இது screen-ஐ பார்த்து context-ஐ புரிந்துகொண்டு (Vision), mouse மற்றும் keyboard-ஐ பயன்படுத்தி applications மற்றும் websites-ஐ open செய்து, click, scroll, type, form filling, file selection/upload போன்ற வேலைகளை செய்யும்.",
    features: [
      "Screen Vision: கணினித் திரையைப் பார்த்து பொத்தான்கள், புலங்கள் மற்றும் உள்ளடக்கங்களை துல்லியமாக உணர்தல்",
      "Human-like OS Control: மவுஸ் கிளிக், ஸ்க்ரோல், தட்டச்சு மற்றும் கோப்பு மேலாண்மையை நேரடியாக செய்தல்",
      "எடுத்துக்காட்டு கட்டளை: 'Chrome open பண்ணி Tamil Nadu Government e-Sevai portal-க்கு சென்று Income Certificate application-ஐ fill பண்ணு'",
      "Office & Enterprise Automation: Excel, Word, கோப்பு வகைப்படுத்துதல், மின்னஞ்சல் தயாரிப்பு & மென்பொருள் இயக்கம்",
      "Windows 11/10 மற்றும் macOS சாதனங்களில் வேகமான, பாதுகாப்பான நேரடி இயக்கம்",
    ],
    toolsOrHighlights: [
      "Multimodal Screen Vision",
      "Native Mouse & Keyboard",
      "Application Launcher",
      "File Processing & Upload",
      "Excel/Sheets Data Entry",
      "Local Encrypted Storage",
      "Deterministic Safety Gate",
      "Windows / macOS Agent",
    ],
    useCases: [
      {
        title: "அரசு e-Sevai கணினி இயக்கம்",
        desc: "'Chrome open பண்ணி e-Sevai-ல் Income Certificate போடு' என்றால், பிரவுசர் திறந்து, ஃபார்ம் நிரப்பி, சான்றிதழ் அப்லோட் செய்து உறுதி கேட்கும்.",
      },
      {
        title: "கோப்பு & ஆவண மேலாண்மை",
        desc: "பதிவிறக்க கோப்புறையில் உள்ள ஆவணங்களை படித்து, வரிசைப்படுத்தி, சரியான பெயருடன் புதிய ஃபோல்டரில் அடுக்கும்.",
      },
      {
        title: "Excel & அலுவலக தரவு பதிவு",
        desc: "PDF அல்லது புகைப்படத்தில் உள்ள தமிழ்/ஆங்கில தரவுகளை படித்து Excel அல்லது Word ஆவணங்களில் துல்லியமாக உள்ளிடும்.",
      },
      {
        title: "தொடர் கணினி பணிமுறைகள்",
        desc: "தினசரி மீண்டும் மீண்டும் செய்யும் 100+ கணினி வேலைகளை ஒற்றை தமிழ் குரல் கட்டளையில் முடித்துக் காட்டும்.",
      },
    ],
    logoSrc: "/yaazh-logo.png",
    href: "/contact?product=desktop",
    downloadUrl: "/EXE/TamilComputerAgent.exe",
    downloadLabel: "Desktop Agent பதிவிறக்குக (.EXE)",
    badge: "DESKTOP AGENT • EDITION 03",
    edition: "தயாரிப்பு 03",
  },
];

const coreSpecs = [
  {
    label: "Heritage Grounded LLM",
    title: "சங்க இலக்கிய LangLM",
    desc: "புறநானூறு, திருக்குறள் முதல் நவீன வரலாற்று ஆவணங்கள் வரை ஆழமான தமிழ் இலக்கிய அறிவுடன் இயங்கும் நரம்பியல் கட்டமைப்பு.",
  },
  {
    label: "Multimodal Agentic Loop",
    title: "திரை பார்வை & தானியங்கி இயக்கம்",
    desc: "Browser DOM மற்றும் கணினித் திரையைப் புரிந்து மவுஸ், கீபோர்டு மூலம் 100+ multi-step பணிகளை சுயமாக நிறைவேற்றும் திறன்.",
  },
  {
    label: "Human-in-the-Loop Safety",
    title: "மனித ஒப்புதல் & 100% தனியுரிமை",
    desc: "Submit, Payment அல்லது தனிப்பட்ட தரவுப் பரிமாற்றங்களுக்கு முன் மனித ஒப்புதல் கட்டாயம். தரவு ஒருபோதும் விளம்பரங்களுக்குப் பயன்படாது.",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[85svh] flex-col items-center justify-center overflow-hidden bg-[#23261f] px-6 text-center">
        <Reveal>
          <span className="mb-6 inline-block text-[10px] font-mono font-medium tracking-[0.15em] uppercase text-[#a8e063]/80">
            தயாரிப்புகள் • FLAGSHIP PRODUCTS
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-[1.1] tracking-tight text-white">
            மூன்று வடிவங்கள்.
            <br />
            <span className="text-[#a8e063]">ஒரே ஒருங்கிணைந்த மூளை.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#a4aaa0] leading-relaxed">
            Web Platform • Chrome Extension • Desktop Computer Automation — உங்கள் பணிச் சூழலுக்கேற்ற வடிவில் யாழ் உங்கள் சார்பில் இயங்கும்.
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
              Technical Architecture & Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              மூன்று தயாரிப்புகளையும் இயக்கும்{" "}
              <span className="text-[#a8e063] font-normal">யாழ் Core Architecture</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#a4aaa0]">
              பண்டைய சங்க இலக்கிய ஆழம், அதிநவீன திரைப்பார்வை தானியங்கி மற்றும் பாதுகாப்பான மனித ஒப்புதல் கட்டமைப்பு.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coreSpecs.map((spec, i) => (
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
              இன்றே தொடங்குங்கள்.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-lg text-base text-[#a4aaa0]">
              யாழ் Extension அல்லது Desktop App-ஐ பதிவிறக்கம் செய்து உங்கள் அன்றாட வேலைகளை தானியங்கியாக்குங்கள்.
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
                டெவலப்பர் API தொடர்பு
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
