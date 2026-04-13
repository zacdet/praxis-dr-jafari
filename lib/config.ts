export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    claim: string;
    foundedYear: number;
    phone: string;
    phoneEmergency?: string;
    email: string;
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: Array<{ day: string; hours: string }>;
    emergencyHours?: string;
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
    accentLighter: string;
  };
  seo: { title: string; description: string; keywords: string[] };
  features: Record<string, boolean | string>;
  socialProof: {
    googleRating: number;
    googleReviewCount: number;
    yearsExperience: number;
    completedProjects: number;
    emergencyResponseMinutes?: number;
  };
  navigation: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
}

export const config: SiteConfig = {
  company: {
    name: "Hausarztpraxis Dr. Jafari",
    owner: "Dr. med. Reza Haji Jafari",
    claim: "Ihre Gesundheit im Mittelpunkt – Internistische Hausarztpraxis in Bremen.",
    foundedYear: 2025,
    phone: "0421 - 394646",
    email: "info@hausarztpraxis-dr-jafari.de",
    address: {
      street: "Elisabeth Straße 41-42",
      zip: "28217",
      city: "Bremen"
    },
    region: "Bremen Walle",
    serviceRadius: "Bremen & Umgebung",
    openingHours: [
      { day: "Montag", hours: "08:00 – 12:00 | 14:00 – 18:00" },
      { day: "Dienstag", hours: "08:00 – 12:00 | 14:00 – 18:00" },
      { day: "Mittwoch", hours: "08:00 – 13:00" },
      { day: "Donnerstag", hours: "08:00 – 12:00 | 15:00 – 19:00" },
      { day: "Freitag", hours: "08:00 – 14:00" },
      { day: "Wochenende", hours: "Geschlossen" }
    ],
    emergencyHours: "Tägliche Akutsprechstunde: 11:00 - 12:00"
  },
  colors: {
    primary: "#1a365d",     
    primaryLight: "#2b5ea7",
    primaryLighter: "#e8f0fe",
    accent: "#0d9488",
    accentLight: "#14b8a6",
    accentLighter: "#f0fdfa",
  },
  seo: {
    title: "Hausarztpraxis Dr. Reza Haji Jafari | Facharzt für Allgemeinmedizin Bremen",
    description: "Moderne internistische Hausarztpraxis in Bremen-Walle. Schwerpunkt Chirotherapie und Palliativmedizin.",
    keywords: ["Hausarzt Bremen", "Dr. Jafari", "Allgemeinmedizin", "Chirotherapie Bremen", "Palliativmedizin"]
  },
  features: {
    akut_banner: true,
    whatsapp_button: false,
    google_maps: true,
    analytics: false,
    cookie_consent: false,
    faq: true,
    galerie: false,
    team_sektion: true,
  },
  socialProof: {
    googleRating: 4.9,
    googleReviewCount: 120,
    yearsExperience: 15,
    completedProjects: 5000,
  },
  navigation: [
    { label: "Praxis", href: "/" },
    { label: "Leistungen", href: "#leistungen" },
    { label: "Team", href: "#team" },
    { label: "Kontakt", href: "#kontakt" }
  ]
};
