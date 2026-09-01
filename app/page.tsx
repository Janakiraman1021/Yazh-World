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

const steps = [
  {
    num: "01",
    title: "இயல்பான குரல் / உரை கட்டளை",
    desc: "தூய தமிழ் அல்லது தங்கிலீஷில் நீங்கள் செய்ய நினைக்கும் பணியை இயல்பாகச் சொல்லுங்கள்.",
  },
  {
    num: "02",
    title: "சூழல் & திரை புரிதல் (AI Vision)",
    desc: "வலைத்தளம் அல்லது கணினித் திரையைப் பார்த்து தேவையான படிவங்களையும் தகவல்களையும் யாழ் துல்லியமாக அடையாளம் காண்கிறது.",
  },
  {
    num: "03",
    title: "தானியங்கி பல-படி இயக்கம்",
    desc: "இணையதளங்களை திறந்து, தகவல்களைத் தேடி, படிவங்களை நிரப்பி, கோப்புகளை பதிவேற்றி தானாகவே பணிகளை நிறைவேற்றுகிறது.",
  },
  {
    num: "04",
    title: "மனித ஒப்புதலுடன் பாதுகாப்பான முடிவு",
    desc: "Submit மற்றும் Payment போன்ற முக்கியமான இறுதி நடவடிக்கைகளுக்கு முன் உங்கள் தெளிவான ஒப்புதல் பெற்று முடிக்கிறது.",
  },
];

const tamilTools = [
  { name: "உரையாடல்", desc: "இயல்பான தமிழ் & தங்கிலீஷ் உரையாடல்", category: "AI Chat" },
  { name: "தங்கிலீஷ்", desc: "Tanglish to Pure Tamil மாற்றி & மொழிபெயர்ப்பு", category: "Language" },
  { name: "மொழிபெயர்ப்பு", desc: "ஆழமான சூழல் உணர்ந்த இருமொழி மொழிபெயர்ப்பு", category: "Language" },
  { name: "பேச்சு", desc: "இயற்கையான தமிழ் பேச்சு-உரை (Speech-to-Text)", category: "Voice" },
  { name: "தமிழ் கற்றல்", desc: "தமிழ் சொல்லகராதி, உச்சரிப்பு & கற்றல் துணை", category: "Education" },
  { name: "ஒலிச்சேர்க்கை", desc: "உயிரோட்டமான குரல் வடிவமைப்பு (Text-to-Speech)", category: "Voice" },
  { name: "வட்டார வழக்கு", desc: "கொங்கு, மதுரை, சென்னை, நெல்லை, யாழ்ப்பாண வழக்குகள்", category: "Dialects" },
  { name: "இலக்கணம்", desc: "பிழையற்ற தமிழ் இலக்கணச் சரிபார்ப்பு & திருத்தம்", category: "Grammar" },
  { name: "மறுசொல்லாக்கம்", desc: "சொற்களை நயம்பட மாற்றி எழுதும் திறன் (Paraphrase)", category: "Content" },
  { name: "பயிற்சி விளக்கம்", desc: "பாடங்கள் & தொழில்நுட்ப கருத்துகளுக்கு எளிய விளக்கம்", category: "Education" },
  { name: "தானியங்கி பணிகள்", desc: "திட்டமிடப்பட்ட தொடர் வேலைகள் (Automated Tasks)", category: "Automation" },
  { name: "திட்டப் பணி", desc: "செயல் திட்ட உருவாக்கம் & பணி மேலாண்மை", category: "Productivity" },
  { name: "ஆவண அறிவு", desc: "பெரிய தமிழ் ஆவணங்களை படித்து பதிலளிக்கும் RAG", category: "Knowledge" },
  { name: "நில & சட்ட பகுப்பு", desc: "பட்டா/சிட்டா, வில்லங்கம் & சட்ட ஆவண பகுப்பாய்வு", category: "Govt & Legal" },
  { name: "தலைப்புப்படுத்தல்", desc: "நீண்ட உரைகளிலிருந்து தலைப்பு & சுருக்கம் எடுத்தல்", category: "Content" },
  { name: "ஆவண பகுப்பு", desc: "PDF, படிவங்கள் & ஆவணங்களில் இருந்து தரவு பிரித்தெடுத்தல்", category: "Analysis" },
  { name: "Developer API Hub", desc: "Python/JS SDKகள் & Custom AI Skills பதிவேற்றம்", category: "Developer" },
  { name: "சேமிக்கப்பட்ட வரலாறு", desc: "பயனர் விருப்பங்கள் & முந்தைய சூழல் சேமிப்பு", category: "Memory" },
];

const langLMBooks = [
  { title: "புறநானூறு", desc: "பண்டைத் தமிழரின் வீரம், கொடை, அரசியல் & வாழ்வியல் அறநெறி உரைகள்" },
  { title: "திருக்குறள்", desc: "1330 குறட்பாக்களின் ஆழமான உரை, நயவுரை மற்றும் நவீன சூழல் ஒப்பீடு" },
  { title: "சிலப்பதிகாரம் & மணிமேகலை", desc: "காப்பிய நயம், வரலாற்றுப் பின்னணி மற்றும் பண்பாட்டுச் சொற்களஞ்சியம்" },
  { title: "தொல்காப்பியம் & சங்கப் பாடல்கள்", desc: "மூலத் தமிழ் இலக்கணம், அகநானூறு, நற்றிணை இலக்கியக் களஞ்சியம்" },
];

const features = [
  {
    title: "18+ தனித்துவ தமிழ் AI கருவிகள்",
    description: "உரையாடல், இலக்கணம், நில/சட்ட பகுப்பு, தங்கிலீஷ், ஆவண அறிவு என தமிழ் மொழிக்காகவே பிரத்யேகமாக செதுக்கப்பட்ட கருவிகள்.",
    icon: <Sparkles className="size-6" aria-hidden="true" />,
    badge: "18+ NATIVE TOOLS",
  },
  {
    title: "LangLM சங்க இலக்கிய அறிவு",
    description: "புறநானூறு, திருக்குறள் முதல் நவீன வரலாற்று ஆவணங்கள் வரை ஆழ்ந்த வரலாற்றுப் புரிதலுடன் இயங்கும் சிறப்பு மொழி மாதிரி.",
    icon: <BookOpen className="size-6" aria-hidden="true" />,
    badge: "LANGLM HERITAGE",
  },
  {
    title: "அரசு e-Sevai & மாணவர் சேவைகள்",
    description: "வருமானச் சான்றிதழ், பட்டா/சிட்டா, சாதிச் சான்றிதழ், கல்லூரி சேர்க்கை, கல்வி உதவித்தொகை படிவங்களை தானாகவே நிரப்பும் ஆற்றல்.",
    icon: <Landmark className="size-6" aria-hidden="true" />,
    badge: "E-SEVAI & STUDENTS",
  },
  {
    title: "முழு கணினி & பிரவுசர் கட்டுப்பாடு",
    description: "மனிதரைப் போல திரையைப் பார்த்து மவுஸ், கீபோர்டு, பிரவுசர் மற்றும் மென்பொருட்களை இயக்கும் தானியங்கி ஏஜென்ட்.",
    icon: <Laptop className="size-6" aria-hidden="true" />,
    badge: "DESKTOP & BROWSER",
  },
];

const productTeasers = [
  {
    name: "யாழ் Web",
    tagline: "தமிழ் AI அறிவுத் தளம் & 18+ தனித்துவ கருவிகள்",
    description:
      "இயற்கையான தமிழில் குரல்/உரை உரையாடல், 18+ பிரத்யேக தமிழ் AI கருவிகள், சங்க இலக்கிய LangLM (புறநானூறு, திருக்குறள்), திட்டமிடப்பட்ட பணிகள், MCP Skill Support மற்றும் Developer API Hub ஆகியவற்றை உள்ளடக்கிய முழுமையான தளம்.",
    features: [
      "18+ சிறப்பு தமிழ் AI கருவிகள் (இலக்கணம், தங்கிலீஷ், நில/சட்ட பகுப்பு)",
      "சங்க இலக்கிய LangLM (புறநானூறு, திருக்குறள் வரலாற்று அறிவு)",
      "MCP Skill Support & Developer API Hub",
      "திட்டமிடப்பட்ட பணிகள் (Scheduled Tasks) & சேமிக்கப்பட்ட வரலாறு",
    ],
    tools: [
      "உரையாடல்",
      "தங்கிலீஷ்",
      "மொழிபெயர்ப்பு",
      "நில & சட்ட பகுப்பு",
      "இலக்கணம்",
      "ஆவண அறிவு",
      "LangLM",
      "Developer API",
    ],
    icon: <Globe className="size-7" aria-hidden="true" />,
    href: "/products#web",
    edition: "தயாரிப்பு 01 • WEB PLATFORM",
    badge: "வலைத்தள அணுகல்",
  },
  {
    name: "யாழ் Chrome Extension",
    tagline: "நூற்றுக்கணக்கான இணைய வேலைகளை தானாக முடிக்கும் Browser Agent",
    description:
      "Browser-க்குள் இயங்கி TN Government e-Sevai (Income, Community, Nativity, Patta/Chitta, Schemes), கல்லூரி சேர்க்கை, கல்வி உதவித்தொகை, வேலை விண்ணப்பங்கள் மற்றும் பல வலைத்தள ஒப்பீடுகளை ஒரு கட்டளையில் தானாக செய்து முடிக்கும் AI Browser Agent.",
    features: [
      "TN e-Sevai அரசு படிவங்கள் (Income, Community, Patta/Chitta) தானியங்கி நிரப்புதல்",
      "மாணவர்களுக்கான கல்லூரி சேர்க்கை, உதவித்தொகை & தேர்வு பதிவு",
      "வேலை விண்ணப்பங்கள், தரவு பதிவு & பல வலைத்தள தகவல் ஒப்பீடு",
      "Open → Find → Execute → Verify → Human Approval பணிமுறை",
    ],
    tools: [
      "e-Sevai ஆட்டோமேஷன்",
      "மாணவர் உதவித்தொகை",
      "படிவ நிரப்பி",
      "வலைத்தள ஒப்பீடு",
      "தானியங்கி வழிசெலுத்தல்",
    ],
    icon: <Puzzle className="size-7" aria-hidden="true" />,
    href: "/products#extension",
    downloadUrl: "/EXE/yazh-ai.crx",
    downloadLabel: "Extension (.CRX)",
    edition: "தயாரிப்பு 02 • BROWSER AGENT",
    badge: "பதிவிறக்கம் தயார்",
  },
  {
    name: "யாழ் Computer Automation",
    tagline: "மனிதரைப் போல முழு கணினியையும் இயக்கும் Desktop AI Agent",
    description:
      "கணினித் திரையைப் பார்த்து context-ஐ புரிந்து, மவுஸ் மற்றும் கீபோர்டைப் பயன்படுத்தி மென்பொருட்களை திறந்து, 'Chrome open பண்ணி e-Sevai Income Certificate application-ஐ fill பண்ணு' போன்ற நூற்றுக்கணக்கான multi-step வேலைகளை தானாக நிறைவேற்றும் Desktop Agent.",
    features: [
      "திரை பார்வை (Screen Vision) மற்றும் மவுஸ் / கீபோர்டு தானியங்கி கட்டுப்பாடு",
      "e-Sevai, Excel, Word, கோப்பு மேலாண்மை மற்றும் மென்பொருள் பயன்பாடு",
      "Multi-step பணிகளை முடித்து Submit/Payment-க்கு முன் மனித உறுதிப்படுத்தல்",
      "Windows மற்றும் macOS கணினிகளுக்கான நேரடி இயக்கம்",
    ],
    tools: [
      "Screen Vision",
      "Mouse/Keyboard Control",
      "Desktop Apps",
      "Office Data Entry",
      "Human-in-the-Loop",
    ],
    icon: <Laptop className="size-7" aria-hidden="true" />,
    href: "/products#desktop",
    downloadUrl: "/EXE/TamilComputerAgent.exe",
    downloadLabel: "Desktop (.EXE)",
    edition: "தயாரிப்பு 03 • DESKTOP AGENT",
    badge: "பதிவிறக்கம் தயார்",
  },
];

export default function Home() {
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
              தானியங்கி செயல்முறை • AGENTIC WORKFLOW
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              ஒரு கட்டளை போதும். <span className="text-[#a8e063] font-normal">யாழ் செய்து முடிக்கும்.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              இணையதளங்கள், அரசு போர்ட்டல்கள் மற்றும் கணினி மென்பொருட்களை மனிதரைப் போல இயக்கி பணிகளை முடிக்கும் 4-படி பணிமுறை.
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
                முதன்மை தயாரிப்புகள் • FLAGSHIP PRODUCTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                யாழ் AI — <span className="text-[#a8e063] font-normal">3 பிரதான வடிவங்களில்</span>
              </h2>
              <p className="mt-3 text-base text-[#a4aaa0]">
                வலைத்தள அறிவுத் தளம், Chrome Extension பிரவுசர் ஏஜென்ட் மற்றும் Desktop கணினி தானியங்கி ஏஜென்ட்.
              </p>
            </div>
            <Link
              href="/products"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-[#a8e063]/40 bg-[rgba(168,224,99,0.12)] px-6 py-3.5 text-sm font-semibold text-[#c6f19d] transition hover:bg-[#a8e063] hover:text-[#23261f]"
            >
              அனைத்து தயாரிப்புகளும்
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
              தமிழ் பிரத்யேக கருவிகள் • 18+ NATIVE TAMIL TOOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              தமிழுக்கென உருவான <span className="text-[#a8e063] font-normal">உள்ளமைந்த AI கருவிகள்</span>
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              மொழிபெயர்ப்பு, இலக்கணச் சரிபார்ப்பு, தங்கிலீஷ், நில & சட்ட ஆவண பகுப்பாய்வு முதல் டெவலப்பர் API வரை அனைத்தும் ஒரே தளத்தில்.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {tamilTools.map((tool, idx) => (
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
              சங்க இலக்கிய LangLM • HISTORICAL KNOWLEDGE
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              ஆயிரமாயிரம் ஆண்டுகால <span className="text-[#a8e063] font-normal">சங்க இலக்கிய அறிவு</span>
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              புறநானூறு, திருக்குறள், தொல்காப்பியம் உள்ளிட்ட பழங்கால நூல்களின் ஆழமான உரை மற்றும் வரலாற்றுப் புரிதலுடன் பயிற்சி அளிக்கப்பட்ட சிறப்பு நரம்பியல் மாதிரி.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {langLMBooks.map((book, index) => (
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
              முக்கிய திறன்கள் • CORE CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              தமிழ் பயனர்களுக்கான <span className="text-[#a8e063] font-normal">முழுமையான AI துணைவன்</span>
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              ஆங்கில அறிவோ, இணையதள சிக்கல்களோ தேவையில்லை — எளிய குரல் பேச்சிலேயே அரசு சேவைகள் மற்றும் கணினிப் பணிகளை முடிக்கலாம்.
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
                  பண்பாட்டு உறுதிமொழி • CULTURAL ROOTS
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                  &ldquo;யாதும் ஊரே யாவரும் கேளிர்&rdquo;
                </h2>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
                  ஆயிரமாயிரம் ஆண்டு பழமையான தமிழ் மொழியின் இனிமையையும், நவீன செயற்கை நுண்ணறிவின் வேகத்தையும் ஒன்றிணைத்து — தமிழ் பேசும் ஒவ்வொரு மனிதரையும் டிஜிட்டல் உலகில் தற்சார்புடன் இயங்க வைப்பதே யாழ்-இன் நோக்கம்.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[rgba(238,243,231,0.1)] pt-6 text-xs text-[#a4aaa0]">
                  <div>வடிவமைப்பு: <strong className="text-white">சென்னை & உலகத் தமிழர்கள்</strong></div>
                  <div>மொழி ஏற்பு: <strong className="text-[#a8e063]">தூய தமிழ் & தங்கிலீஷ்</strong></div>
                  <div>தனியுரிமை: <strong className="text-[#c6f19d]">100% சாதனப் பாதுகாப்பு</strong></div>
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
                    EARLY ACCESS & DOWNLOAD
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-light text-white leading-snug">
                    இன்றே யாழ்-ஐ உங்கள் சாதனத்தில் <span className="text-[#a8e063] font-normal">அனுபவியுங்கள்.</span>
                  </h2>
                  <p className="mt-3 text-base text-[#a4aaa0]">
                    Chrome Extension அல்லது Desktop App பதிவிறக்கம் செய்து ஆரம்பக்கட்ட அணுகலைப் பெறுங்கள்.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/products"
                    className="focus-ring inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#a8e063] px-8 py-4 font-semibold text-[#23261f] shadow-lg transition hover:bg-white hover:scale-105"
                  >
                    தயாரிப்புகள் காண்க
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-medium text-white transition hover:bg-white/10"
                  >
                    தொடர்பு கொள்க
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
