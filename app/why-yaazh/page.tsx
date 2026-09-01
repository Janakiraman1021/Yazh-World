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

const comparisons = [
  {
    feature: "இயங்கு திறன் & தானியங்கி (Agentic Execution)",
    other: "கேள்விக்கு வெறும் உரை பதில் மட்டுமே அளிக்கும் (Text only)",
    yaazh: "இணையதளங்கள், e-Sevai போர்ட்டல்கள் மற்றும் கணினித் திரையில் நேரடியாக மனிதரைப் போல வேலையை முடிக்கும்",
  },
  {
    feature: "தமிழ் பண்பாடு & இலக்கிய அறிவு (LangLM Heritage)",
    other: "ஆங்கிலத்தில் சிந்தித்து மொழிபெயர்த்து இயங்கும் (அர்த்த இழப்பு)",
    yaazh: "புறநானூறு, திருக்குறள் உள்ளிட்ட சங்க இலக்கிய LangLM மற்றும் 18+ பிரத்யேக தமிழ் AI கருவிகளுடன் இயங்கும்",
  },
  {
    feature: "அரசு e-Sevai & மாணவர் சேவைகள் (Public Services)",
    other: "படிவங்களை பயனரே தனியாக பார்த்து நிரப்ப வேண்டும்",
    yaazh: "வருமானச் சான்றிதழ், சாதிச் சான்றிதழ், பட்டா/சிட்டா, கல்லூரி சேர்க்கை, உதவித்தொகை படிவங்களை தானாகவே நிரப்பும்",
  },
  {
    feature: "முழு கணினி & பிரவுசர் கட்டுப்பாடு (Computer Vision OS)",
    other: "தனி சாட்பாட் சாளரத்தில் மட்டுமே அடைபட்டு இருக்கும்",
    yaazh: "Chrome Extension மற்றும் Desktop Agent வழியாக மவுஸ், கீபோர்டு, மென்பொருட்களை நேரடியாக இயக்கும்",
  },
  {
    feature: "பாதுகாப்பு & மனித ஒப்புதல் (Deterministic Safety Gate)",
    other: "தெளிவற்ற அல்லது தன்னிச்சையான நடவடிக்கை",
    yaazh: "Submit மற்றும் Payment போன்ற முக்கியமான எந்தவொரு இறுதி நடவடிக்கைக்கும் மனித ஒப்புதல் கட்டாயம்",
  },
];

const scenarios = [
  {
    title: "TN Govt e-Sevai & நில ஆவணங்கள்",
    description: "வருமானம், சாதி, இருப்பிடச் சான்றிதழ், பட்டா/சிட்டா மற்றும் அரசு நலத்திட்ட விண்ணப்பங்களை யாழ் தேவையான விவரங்களைக் கண்டறிந்து தானாக நிரப்பி சமர்ப்பிக்கும்.",
    icon: <Landmark className="size-6" aria-hidden="true" />,
    badge: "E-SEVAI & PATTA",
  },
  {
    title: "மாணவர் சேர்க்கை & உதவித்தொகை",
    description: "கல்லூரி சேர்க்கை படிவங்கள், மத்திய/மாநில கல்வி உதவித்தொகை, தேர்வு பதிவு, பாடத்திட்டம் & குறிப்புகள் சேகரிப்பு போன்றவற்றை எளிய தமிழ் பேச்சில் முடிக்கலாம்.",
    icon: <GraduationCap className="size-6" aria-hidden="true" />,
    badge: "STUDENTS & ACADEMICS",
  },
  {
    title: "வேலை விண்ணப்பங்கள் & தொடர் தரவு பதிவு",
    description: "Job applications, repetitive data entry, Excel/Office ஆவணப் பதிவு மற்றும் பல இணையதளங்களுக்கு இடையே தகவல்களை ஒப்பிட்டு சுருக்கம் தயாரித்தல்.",
    icon: <Briefcase className="size-6" aria-hidden="true" />,
    badge: "WORKFLOW & COMMERCE",
  },
];

export default function WhyYaazhPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Sparkles className="size-3.5" />
              தனித்துவ வேறுபாடு • THE YAAZH ADVANTAGE
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              ஏன் <span className="text-[#a8e063] font-normal">யாழ் AI?</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              பொதுவான AI சாட்பாட்கள் பதில்களை மட்டுமே பேசுகின்றன; யாழ் உங்கள் தாய்மொழியைக் கேட்டு, இணையதளங்கள், e-Sevai போர்ட்டல்கள் மற்றும் கணினியில் நேரடியாக உங்கள் வேலைகளை முடித்துக் காட்டுகிறது.
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
                  அம்சம் / கட்டமைப்பு
                </div>
                <div className="hidden md:block md:col-span-4 text-[#a4aaa0]/70 uppercase tracking-wider font-mono text-xs">
                  பொதுவான Chatbots & LLM Tools
                </div>
                <div className="hidden md:block md:col-span-4 text-[#c6f19d] uppercase tracking-wider font-mono text-xs flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-[#a8e063] animate-pulse" />
                  யாழ் Autonomous Agent
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[rgba(238,243,231,0.06)]">
                {comparisons.map((row) => (
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
              நிஜ பயன்பாடுகள் • REAL USE CASES
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              அன்றாட வாழ்வில் <span className="text-[#a8e063] font-normal">யாழ் செய்யும் மாற்றங்கள்</span>
            </h2>
            <p className="mt-4 text-base text-[#a4aaa0]">
              அரசு சேவைகள், கல்லூரி சேர்க்கை மற்றும் தினசரி கணினி பணிமுறைகளை எளிதாக்கும் நிஜ உதாரணங்கள்.
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
                  பாதுகாப்பு அரண் • ZERO-COMPROMISE PRIVACY & SAFETY
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#a8e063]/15 text-[#a8e063] border border-[#a8e063]/30 shrink-0">
                    <ShieldCheck className="size-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-medium text-white">
                      உங்களின் முழுமையான கட்டுப்பாட்டில் இயங்கும் மனித ஒப்புதல் கட்டமைப்பு
                    </h2>
                  </div>
                </div>

                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
                  பணம் செலுத்துதல் (Payment Gateway), அரசு ஆவணங்கள் மற்றும் சான்றிதழ் சமர்ப்பித்தல் (Final Submit) அல்லது தனிப்பட்ட ஆவண பதிவேற்றம் போன்ற முக்கியமான எந்தவொரு செயலையும் உங்கள் இறுதி உறுதிப்படுத்தல் மற்றும் ஒப்புதல் இன்றி யாழ் ஒருபோதும் செய்யாது.
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
                  யாழ்-இன் 3 தயாரிப்புகளை ஆராயுங்கள்
                </h3>
                <p className="mt-1 text-sm text-[#a4aaa0]">
                  Web Platform, Chrome Extension மற்றும் Desktop Computer Automation என மூன்று வடிவங்களிலும் கிடைக்கும் ஒருங்கிணைந்த நுண்ணறிவு.
                </p>
              </div>

              <Link
                href="/products"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-[#a8e063] px-7 py-3.5 text-sm font-semibold text-[#23261f] transition hover:bg-white hover:scale-105 shrink-0"
              >
                தயாரிப்புகள் காண்க
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
