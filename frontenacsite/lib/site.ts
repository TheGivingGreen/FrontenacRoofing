/**
 * Centralized, mutable brand data.
 *
 * Per DESIGN.md §20 and PROJECT_BRIEF.md §18 (Source-of-Truth Priority), this is
 * the ONLY place brand facts should live. Do not hard-code the company name,
 * phone, address, etc. across components — read them from here.
 *
 * Fields marked UNVERIFIED / CONFIRM correspond to open items in
 * PROJECT_BRIEF.md §17 (Required Ownership Decisions). They must not be presented
 * as polished published claims until ownership confirms them.
 */
export const site = {
  name: "Frontenac Roofing & Construction",
  shortName: "Frontenac",

  // Newly registered domain. Replaces the legacy frontenac.construction.
  // CONFIRM: redirect strategy for the legacy domain + whether email moves here.
  domain: "frontenacroofing.com",

  legalName: "Frontenac Roofing & Construction, LLC", // BBB-corroborated

  // Corroborated by site + BBB + LinkedIn. Confirm still current before launch.
  phone: "(314) 300-0280",
  phoneHref: "+13143000280",

  // CONFIRM: may move to info@frontenacroofing.com once the new domain is live.
  email: "info@frontenac.construction",

  // UNVERIFIED: PROJECT_BRIEF.md §17 Q1 — 201 Hughes Ln vs 1610 Des Peres Rd.
  // Left blank intentionally rather than guessing a public address.
  address: "",

  // BBB-corroborated management contact (PROJECT_BRIEF.md §4). Do not surface
  // publicly until ownership confirms the correct public leadership contact (§17 Q3).
  ownerContact: "",

  social: {
    // Corroborated company-controlled profiles (PROJECT_BRIEF.md §2).
    linkedin: "https://www.linkedin.com/company/frontenac-roofing-construction",
    facebook: "https://www.facebook.com/frontenacroofing/",
    instagram: "https://www.instagram.com/frontenacroofing/",
  },

  // Region language stays broad until service territory is confirmed
  // (PROJECT_BRIEF.md §16, HOMEPAGE_WIREFRAME.md §5).
  region: "Greater St. Louis, Missouri",

  // Owner-confirmed per HOMEPAGE_WIREFRAME.md §02: framed as TEAM experience,
  // never as company age (company began 2018 — PROJECT_BRIEF.md §4).
  teamExperienceYears: 20,
} as const;

export type Site = typeof site;
