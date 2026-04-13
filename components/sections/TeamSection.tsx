"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";

const team = [
  {
    name: "Dr. med. Reza Haji Jafari",
    role: "Facharzt für Allgemeinmedizin",
    specialty: "Manuelle Medizin und Palliativmedizin",
    image: "https://assets.coco-online.de/86681732800605-vSzKKDLO/reza-haji-jafari.webp"
  },
  {
    name: "Dilay Cihantemur",
    role: "MFA (seit März 2018)",
    specialty: "Rezeption & Organisation",
    image: "https://assets.coco-online.de/86681732891083-7YJVJVQt/platzhalter-frau.webp"
  },
  {
    name: "Frau Fatma Cevik",
    role: "Auszubildende",
    specialty: "Assistenz",
    image: "https://assets.coco-online.de/86681732891083-7YJVJVQt/platzhalter-frau.webp"
  },
  {
    name: "Frau Layla Sarai",
    role: "Praxis Aushilfe",
    specialty: "Unterstützung",
    image: "https://assets.coco-online.de/86681732891083-7YJVJVQt/platzhalter-frau.webp"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-4">
        <RevealOnScroll variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a365d] mb-4">
            Unser Praxisteam
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Als eingespieltes Team aus erfahrenen Ärzten und medizinischen Fachangestellten 
            sorgen wir für reibungslose Abläufe und eine persönliche Betreuung.
          </p>
        </RevealOnScroll>

        <RevealOnScroll variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-white shadow-sm">
                <Image
                  src={member.image}
                  alt={`Portrait von ${member.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">{member.name}</h3>
              <p className="text-sm font-medium text-[#0d9488] mb-1">{member.role}</p>
              <p className="text-sm text-slate-500">{member.specialty}</p>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
