import { HeartPulse, Stethoscope, Activity, FileText, Bone } from "lucide-react";

export const services = [
  {
    slug: "chirotherapie",
    titel: "Chirotherapie / Manuelle Medizin",
    icon: Bone,
    kurz: "Diagnostik und Therapie bei Funktionsstörungen am Haltungs- und Bewegungsapparat.",
    beschreibung: "Als Chirotherapeut befreien wir Sie schonend von Blockaden und helfen bei Rücken- sowie Gelenkschmerzen.",
    kundenprobleme: [
      "Leiden Sie unter akuten Rückenschmerzen?",
      "Haben Sie das Gefühl einer Blockade in der Wirbelsäule?",
      "Schmerzen bei bestimmten Bewegungen?"
    ],
    vorteile: [
      { titel: "Schonende Behandlung", text: "Wirkt direkt an der Ursache im Gelenk." },
      { titel: "Schnelle Schmerzlinderung", text: "Oft spüren Sie nach der Behandlung sofortige Besserung." }
    ]
  },
  {
    slug: "palliativmedizin",
    titel: "Palliativmedizin",
    icon: HeartPulse,
    kurz: "Ganzheitliche Betreuung bei fortschreitenden, unheilbaren Erkrankungen.",
    beschreibung: "Im Zentrum unserer palliativmedizinischen Versorgung stehen Schmerzlinderung und der Erhalt der Lebensqualität. Wir begleiten Sie und Ihre Angehörigen in dieser schweren Zeit.",
    kundenprobleme: [
      "Benötigen Sie oder ein Angehöriger Schmerztherapie im fortgeschrittenen Stadium?",
      "Suchen Sie nach ganzheitlicher medizinischer Begleitung zuhause?"
    ],
    vorteile: [
      { titel: "Empathische Begleitung", text: "Immer ein offenes Ohr für Patienten und Angehörige." },
      { titel: "Schmerztherapie", text: "Individuell angepasste Medikation zur Symptomlinderung." }
    ]
  },
  {
    slug: "hausarzt-versorgung",
    titel: "Internistische Hausarztversorgung",
    icon: Stethoscope,
    kurz: "Ihr erster Ansprechpartner in allen Gesundheitsfragen.",
    beschreibung: "Wir bieten das gesamte hausärztliche Spektrum an, von der Erstdiagnostik bis zur Betreuung chronisch Kranker. Auch naturheilkundliche Ansätze beziehen wir ein.",
    kundenprobleme: [
      "Suchen Sie einen verlässlichen ersten Hausarzt?",
      "Benötigen Sie regelmäßige Medikamenteneinstellung?"
    ],
    vorteile: [
      { titel: "Ganzheitlich", text: "Wir betrachten Sie als Mensch mit individuellen Bedürfnissen." },
      { titel: "Prävention", text: "Wir legen großen Wert auf Vorbeugung." }
    ]
  },
  {
    slug: "rezept-service",
    titel: "Rezept- & Überweisung",
    icon: FileText,
    kurz: "Einfache Wiederholungsrezepte telefonisch bestellen.",
    beschreibung: "Folge-Rezepte für dauerhaft einzunehmende Medikamente können Sie bei uns bequem telefonisch für den Folgetag bestellen.",
    kundenprobleme: [
      "Brauchen Sie ein Folgerezept ohne lange Wartezeit in der Praxis?"
    ],
    vorteile: [
      { titel: "Zeitsparend", text: "Abholung am nächsten Werktag." },
      { titel: "eRezept", text: "Digitale Ausstellung auf Ihre Gesundheitskarte." }
    ]
  }
];
