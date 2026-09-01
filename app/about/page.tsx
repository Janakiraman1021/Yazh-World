import {
  HeartHandshake,
  Languages,
  Lock,
  Workflow,
  Sparkles,
  Leaf,
  Compass,
  Cpu,
  ShieldAlert,
  ArrowRight,
  BookOpen,
  Laptop,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FeatureCard } from "../components/FeatureCard";
import { Reveal } from "../components/Reveal";

const values = [
  {
    title: "தமிழ் முதன்மை & இலக்கிய ஆழம்",
    description: "ஆங்கிலத்தில் சிந்தித்து மொழிபெயர்ப்பது அல்ல; மூல மொழியிலேயே தமிழ் சிந்தனை, வட்டார வழக்குகள் மற்றும் சங்க இலக்கிய LangLM மரபை உணர்ந்து செயல்படும் AI.",
    icon: <Languages className="size-6" aria-hidden="true" />,
    badge: "TAMIL NATIVE & LANGLM",
  },
  {
    title: "அனைவருக்குமான டிஜிட்டல் அணுகல்",
    description: "தொழில்நுட்ப சிக்கல்கள் ஏதுமின்றி, மூத்த குடிமக்கள் முதல் மாணவர்கள் வரை e-Sevai, சான்றிதழ்கள், கல்லூரி விண்ணப்பங்களை குரல் வழியே முடிக்கலாம்.",
    icon: <HeartHandshake className="size-6" aria-hidden="true" />,
    badge: "UNIVERSAL ACCESS",
  },
  {
    title: "100% தனியுரிமை & மனித ஒப்புதல்",
    description: "பணம் செலுத்துதல், அரசு சான்றிதழ் சமர்ப்பிப்பு, மற்றும் தனிப்பட்ட தரவு பதிவேற்றம் அனைத்தும் மனித இறுதி ஒப்புதலுக்கு பிறகே நிகழும்.",
    icon: <Lock className="size-6" aria-hidden="true" />,
    badge: "SAFETY GATES",
  },
  {
    title: "முழு தானியங்கி Agentic கட்டமைப்பு",
    description: "தனி சாட்பாட் சாளரத்தில் அடைபடாமல், Chrome Extension மற்றும் Desktop Agent வழியாக நேரடியாக கணினி மற்றும் இணையதளங்களை இயக்கும் ஆற்றல்.",
    icon: <Workflow className="size-6" aria-hidden="true" />,
    badge: "AGENTIC AUTONOMY",
  },
];

const pillars = [
  {
    title: "சங்க இலக்கிய LangLM மரபு",
    subtitle: "புறநானூறு • திருக்குறள் • தொல்காப்பியம்",
    desc: "ஆயிரமாயிரம் ஆண்டுகால தமிழ் இலக்கியங்கள், அறநெறிகள் மற்றும் வரலாற்றுக் களஞ்சியங்களை துல்லியமாக உணர்ந்து பதிலளிக்கும் பிரத்யேக மொழி மாதிரி.",
    icon: <BookOpen className="size-6 text-[#a8e063]" />,
  },
  {
    title: "Computer Vision & Agentic OS",
    subtitle: "Real-time Multimodal Action",
    desc: "கணினி மற்றும் பிரவுசர் திரையைப் பார்த்து, மவுஸ் மற்றும் கீபோர்டைப் பயன்படுத்தி நூற்றுக்கணக்கான multi-step பணிகளை சுயமாக நிறைவேற்றும் தொழில்நுட்பம்.",
    icon: <Cpu className="size-6 text-[#a8e063]" />,
  },
  {
    title: "வட்டார வழக்கு & 18+ தமிழ் கருவிகள்",
    subtitle: "கொங்கு • மதுரை • சென்னை • நெல்லை • யாழ்ப்பாணம்",
    desc: "புத்தகத் தமிழ் மட்டுமின்றி, மக்கள் அன்றாடம் பேசும் இயல்பான பேச்சுத் தமிழ், தங்கிலீஷ் மற்றும் நில/சட்ட பகுப்பு போன்ற 18+ பிரத்யேக கருவிகளின் ஒருங்கிணைப்பு.",
    icon: <Leaf className="size-6 text-[#a8e063]" />,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="section-padding relative overflow-hidden bg-[#383b34]">
        <div className="section-shell relative">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              <Sparkles className="size-3.5" />
              எங்கள் பயணம் • OUR MISSION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight text-white">
              மொழி தடையற்ற <span className="text-[#a8e063] font-normal">டிஜிட்டல் உலகம்</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#a4aaa0]">
              உலகெங்கும் வாழும் 8 கோடிக்கும் மேற்பட்ட தமிழ் பேசும் மக்களுக்கு, அரசு சேவைகள், கல்வி, இணையம் மற்றும் கணினிப் பணிகளை தாய்மொழியின் இயல்பான குரல் வழியே தற்சார்புடன் முடிக்க வைப்பதே யாழ்-இன் நோக்கம்.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Origin & Meaning Story */}
      <section className="pb-20 bg-[#383b34]">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <article className="living-card p-8 sm:p-10 h-full flex flex-col justify-between">
              <div>
                <div className="living-badge mb-5">
                  தோற்றப் பின்னணி • GENESIS
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-white">
                  ஏன் யாழ் பிறந்தது?
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#a4aaa0]">
                  இன்றைய டிஜிட்டல் உலகில் பெரும்பாலான அரசு இணையதளங்கள் மற்றும் தொழில்முறை மென்பொருட்கள் ஆங்கிலத்திலேயே இயங்குகின்றன. இதனால் ஆங்கிலம் சரளமாக இல்லாத மூத்த குடிமக்கள், மாணவர்கள், மற்றும் பொதுமக்கள் எளிய வேலைகளுக்கும் இடைத்தரகர்களை சார்ந்திருக்க வேண்டியுள்ளது.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#a4aaa0]">
                  யாழ் இந்த நிலையை மாற்றுகிறது. நீங்கள் எதையும் சிக்கலாகத் தேட வேண்டியதில்லை — தமிழில் பேசினாலே போதும், உங்கள் சார்பில் தமிழ்நாடு e-Sevai போர்ட்டலில் Income Certificate நிரப்புவது முதல் கணினியில் கோப்புகளை வரிசைப்படுத்துவது வரை யாழ் செய்து முடிக்கும்.
                </p>
              </div>

              <div className="mt-8 border-t border-[rgba(238,243,231,0.08)] pt-5 flex items-center justify-between text-xs text-[#a4aaa0]">
                <span>கட்டமைப்பு: <strong>Multimodal Agentic AI</strong></span>
                <span className="text-[#a8e063]">100% Tamil Grounded</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="living-card p-8 sm:p-10 h-full border-[#a8e063]/30 bg-gradient-to-br from-[#2f332a] to-[#23261f] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="living-badge border-[#a8e063]/40 bg-[#a8e063]/15 text-[#c6f19d]">
                    பெயர்க் காரணம் • THE YAAZH HERITAGE
                  </div>
                  <div className="size-12 rounded-2xl bg-white p-1 shadow-lg shadow-black/30 border border-white/20 shrink-0">
                    <Image
                      src="/yaazh-logo.png"
                      alt="யாழ் Logo"
                      width={48}
                      height={48}
                      className="size-full object-contain rounded-xl"
                    />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-medium text-[#c6f19d]">
                  &ldquo;யாழ்&rdquo; — பெயரின் ஆழம்
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#f2f3ef]/85">
                  யாழ் என்பது சங்க காலத் தமிழர்களின் மிக உன்னதமான இசைக்கருவி. அதன் ஒவ்வொரு நரம்பின் தொடுதலும் ஒரு துல்லியமான ஒலியை எழுப்பும்.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#f2f3ef]/85">
                  அதே துல்லியத்துடன், நீங்கள் உச்சரிக்கும் ஒவ்வொரு தமிழ் வார்த்தையையும் உணர்ந்து, டிஜிட்டல் உலக நரம்புகளில் துல்லியமான தானியங்கி செயலாக மாற்றுவதால் இதற்கு <strong>&ldquo;யாழ்&rdquo;</strong> என்று பெயரிட்டோம்.
                </p>
              </div>

              <div className="mt-8 border-t border-[rgba(238,243,231,0.12)] pt-5 text-xs text-[#a8e063] font-mono flex items-center justify-between">
                <span>ACOUSTIC PRECISION TO SILICON ACTION</span>
                <span className="text-white/40">100% GROUNDED</span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 3 Pillars of Innovation */}
      <section className="section-padding bg-[#2f332a] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              அடித்தள தூண்கள் • ARCHITECTURAL PILLARS
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              மரபும் அதிநவீன அறிவியலும் <span className="text-[#a8e063] font-normal">இணையும் புள்ளி</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <div className="living-card p-8 h-full">
                  <div className="mb-5 grid size-12 place-items-center rounded-xl bg-[#a8e063]/12 border border-[#a8e063]/25">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-mono text-[#a8e063] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                  <h3 className="mt-2 text-xl font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#a4aaa0]">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#383b34] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal className="max-w-3xl">
            <div className="living-badge mb-4">
              கொள்கைகள் • CORE VALUES
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
              யாழ் இயங்கும் <span className="text-[#a8e063] font-normal">அறநெறி அடித்தளம்</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <FeatureCard {...value} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Call to Action */}
      <section className="section-padding bg-[#23261f] border-t border-[rgba(238,243,231,0.08)]">
        <div className="section-shell">
          <Reveal>
            <div className="living-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-[#2f332a] to-[#1c1e19] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="living-badge mb-4">
                  தொடர்பில் இருங்கள் • JOIN THE MOVEMENT
                </div>
                <h2 className="text-2xl sm:text-3xl font-light text-white">
                  எங்களுடன் இணைந்து தமிழ் AI புரட்சியை உருவாக்குங்கள்
                </h2>
                <p className="mt-3 text-base text-[#a4aaa0]">
                  ஆராய்ச்சியாளர்கள், டெவலப்பர்கள், மற்றும் மொழி ஆர்வலர்களுடன் இணைந்து பணியாற்ற நாங்கள் எப்போதும் தயாராக இருக்கிறோம்.
                </p>
              </div>

              <Link
                href="/contact"
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full bg-[#a8e063] px-8 py-4 font-semibold text-[#23261f] shadow-lg transition hover:bg-white hover:scale-105"
              >
                தொடர்பு கொள்க
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
