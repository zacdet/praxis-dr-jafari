"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { fadeUp, heroReveal } from "@/lib/animations";
import { config } from "@/lib/config";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          // Fallback image since the scraped image is just a portrait and logos. We will use a solid medical color or portrait for Hero. Let's use a solid deep blue for now, or the portrait as background? No, portrait is for team. We'll simulate a nice background.
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80"
          alt="Praxis Hintergrund"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1a365d]/85 mix-blend-multiply" />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-6xl">
        <RevealOnScroll variants={heroReveal} className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            {config.company.claim}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            Willkommen in unserer Praxis im Herzen von {config.company.region}. 
            Wir verbinden spezielle internistische Medizin mit vertrauensvoller hausärztlicher Versorgung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#0d9488] hover:bg-[#14b8a6] text-white">
              Termin online buchen
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a365d]">
              Rezept bestellen
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
