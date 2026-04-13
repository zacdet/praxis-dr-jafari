"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { services } from "@/lib/services-data";
import { fadeUp, stagger } from "@/lib/animations";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesGrid() {
  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <RevealOnScroll variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a365d] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Als Ihre internistische Hausarztpraxis bieten wir ein breites medizinisches Spektrum, 
            um Sie in jeder Lebenslage optimal zu betreuen.
          </p>
        </RevealOnScroll>

        <RevealOnScroll variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.slug} className="border border-slate-200 bg-white p-6 hover:border-[#1a365d]/30 transition-colors rounded-sm group flex flex-col h-full">
              <CardHeader className="p-0 mb-4 h-full flex-grow">
                <div className="w-12 h-12 flex items-center justify-center bg-[#e8f0fe] rounded-md text-[#1a365d] mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-[#0f172a]">{service.titel}</CardTitle>
                <p className="text-sm font-medium text-[#0d9488] mt-2">{service.kurz}</p>
              </CardHeader>
              <CardContent className="p-0 mt-auto pt-4 border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed text-sm mb-4">{service.beschreibung}</p>
                <Button variant="ghost" className="p-0 text-[#1a365d] group-hover:underline justify-start font-semibold">
                  Mehr erfahren →
                </Button>
              </CardContent>
            </Card>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
