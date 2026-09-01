import { en } from "./en";
import { ta } from "./ta";
import { te } from "./te";
import { hi } from "./hi";
import { kn } from "./kn";
import { ml } from "./ml";
import type { TranslationKeys, Locale } from "./types";

export const translations: Record<Locale, TranslationKeys> = { en, ta, te, hi, kn, ml };
