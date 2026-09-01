export type Locale = "en" | "ta" | "te" | "hi" | "kn" | "ml";

export const locales: Locale[] = ["en", "ta", "te", "hi", "kn", "ml"];

export type LocaleInfo = {
  code: Locale;
  native: string;
  sub: string;
};

export const localeList: LocaleInfo[] = [
  { code: "en", native: "English", sub: "Global" },
  { code: "ta", native: "தமிழ்", sub: "Tamil" },
  { code: "te", native: "తెలుగు", sub: "Telugu" },
  { code: "hi", native: "हिन्दी", sub: "Hindi" },
  { code: "kn", native: "ಕನ್ನಡ", sub: "Kannada" },
  { code: "ml", native: "മലയാളം", sub: "Malayalam" },
];

export const localeNames: Record<Locale, string> = {
  en: "English",
  ta: "தமிழ்",
  te: "తెలుగు",
  hi: "हिन्दी",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
};

export type TranslationKeys = {
  navHome: string;
  navProducts: string;
  navWhyYaazh: string;
  navAbout: string;
  navGetStarted: string;
  navAriaLabel: string;
  navHomeAria: string;
  navLogoAlt: string;
  footerDescription: string;
  footerSocialAria: string;
  footerCopyright: string;
  footerLivingGreen: string;
  heroIframeTitle: string;
  workflowBadge: string;
  workflowTitle1: string;
  workflowTitle2: string;
  workflowDescription: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  flagshipBadge: string;
  flagshipTitle1: string;
  flagshipTitle2: string;
  flagshipDescription: string;
  flagshipViewAll: string;
  webPlatformName: string;
  webPlatformTagline: string;
  webPlatformDescription: string;
  webPlatformFeatures: string[];
  webPlatformTools: string[];
  webPlatformEdition: string;
  webPlatformBadge: string;
  extensionName: string;
  extensionTagline: string;
  extensionDescription: string;
  extensionFeatures: string[];
  extensionTools: string[];
  extensionEdition: string;
  extensionBadge: string;
  desktopName: string;
  desktopTagline: string;
  desktopDescription: string;
  desktopFeatures: string[];
  desktopTools: string[];
  desktopEdition: string;
  desktopBadge: string;
  tamilToolsBadge: string;
  tamilToolsTitle1: string;
  tamilToolsTitle2: string;
  tamilToolsDescription: string;
  tamilTools: { name: string; desc: string; category: string }[];
  langLMBadge: string;
  langLMTitle: string;
  langLMDescription: string;
  langLMBooks: { title: string; desc: string }[];
  featuresBadge: string;
  featuresTitle1: string;
  featuresTitle2: string;
  featuresDescription: string;
  features: { title: string; description: string; badge: string }[];
  culturalBadge: string;
  culturalQuote: string;
  culturalDescription: string;
  culturalDesign: string;
  culturalDesignValue: string;
  culturalLanguage: string;
  culturalLanguageValue: string;
  culturalPrivacy: string;
  culturalPrivacyValue: string;
  ctaBadge: string;
  ctaTitle1: string;
  ctaTitle2: string;
  ctaDescription: string;
  ctaViewProducts: string;
  ctaContactUs: string;
  aboutMissionBadge: string;
  aboutMissionTitle: string;
  aboutMissionDescription: string;
  aboutGenesisBadge: string;
  aboutGenesisTitle: string;
  aboutGenesisP1: string;
  aboutGenesisP2: string;
  aboutGenesisTech: string;
  aboutGenesisGrounded: string;
  aboutHeritageBadge: string;
  aboutHeritageTitle: string;
  aboutHeritageP1: string;
  aboutHeritageP2: string;
  aboutHeritageFooter1: string;
  aboutHeritageFooter2: string;
  aboutPillarsBadge: string;
  aboutPillarsTitle: string;
  aboutPillars: { title: string; subtitle: string; desc: string }[];
  aboutValuesBadge: string;
  aboutValuesTitle: string;
  aboutValues: { title: string; description: string; badge: string }[];
  aboutCtaBadge: string;
  aboutCtaTitle: string;
  aboutCtaDescription: string;
  aboutCtaButton: string;
  contactBadge: string;
  contactTitle1: string;
  contactTitle2: string;
  contactDescription: string;
  contactEmailTitle: string;
  contactEmailResponse: string;
  contactLocation: string;
  contactDeveloperTitle: string;
  contactDeveloperDescription: string;
  productsBadge: string;
  productsTitle1: string;
  productsTitle2: string;
  productsDescription: string;
  products: {
    name: string;
    tagline: string;
    description: string;
    features: string[];
    toolsOrHighlights: string[];
    useCases: { title: string; desc: string }[];
    badge: string;
    edition: string;
    downloadLabel: string;
  }[];
  productsCoreSpecsBadge: string;
  productsCoreSpecsTitle: string;
  productsCoreSpecsDescription: string;
  productsCoreSpecs: { label: string; title: string; desc: string }[];
  productsCtaTitle: string;
  productsCtaDescription: string;
  productsCtaDevApi: string;
  whyBadge: string;
  whyTitle1: string;
  whyTitle2: string;
  whyDescription: string;
  whyComparisons: { feature: string; other: string; yaazh: string }[];
  whyTableFeature: string;
  whyTableOther: string;
  whyTableYaazh: string;
  whyScenariosBadge: string;
  whyScenariosTitle: string;
  whyScenariosDescription: string;
  whyScenarios: { title: string; description: string; badge: string }[];
  whySafetyBadge: string;
  whySafetyTitle: string;
  whySafetyDescription: string;
  whyCtaTitle: string;
  whyCtaDescription: string;
  whyCtaButton: string;
  formMessagePortal: string;
  formName: string;
  formNamePlaceholder: string;
  formEmail: string;
  formEmailPlaceholder: string;
  formSubject: string;
  formSubjectPlaceholder: string;
  formProduct: string;
  formProductGeneral: string;
  formProductWeb: string;
  formProductExtension: string;
  formProductDesktop: string;
  formProductApi: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formSuccess: string;
  formErrorName: string;
  formErrorEmail: string;
  formErrorEmailInvalid: string;
  formErrorSubject: string;
  formErrorMessage: string;
  productCardDownload: string;
  productCardBadge: string;
  productCardDetails: string;
  productCardFullDetails: string;
  productCardMore: string;
  productSplitTools: string;
  productSplitDownload: string;
  productSplitDetails: string;
  productSplitPreview: string;
};
