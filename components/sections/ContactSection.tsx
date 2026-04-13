"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { fadeUp } from "@/lib/animations";
import { config } from "@/lib/config";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto max-w-6xl px-4">
        
        <RevealOnScroll variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1a365d] mb-4">
            Kontakt & Sprechzeiten
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Wir sind für Sie da. Vereinbaren Sie bequem Ihren Termin oder kommen Sie während der Akutsprechstunde vorbei.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sprechzeiten & Infos */}
          <RevealOnScroll variants={fadeUp} className="space-y-8">
            <div className="bg-slate-50 p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-[#0d9488]" />
                <h3 className="text-2xl font-bold text-[#0f172a]">Unsere Sprechzeiten</h3>
              </div>
              
              <ul className="space-y-3">
                {config.company.openingHours.map((oh) => (
                  <li key={oh.day} className={`flex justify-between py-2 border-b border-slate-200 last:border-0 ${oh.day === 'Wochenende' ? 'text-slate-400' : 'text-slate-700'}`}>
                    <span className="font-medium text-[#1a365d]">{oh.day}</span>
                    <span>{oh.hours}</span>
                  </li>
                ))}
              </ul>
              
              {config.company.emergencyHours && (
                <div className="mt-6 p-4 bg-[#e8f0fe] rounded-sm border border-[#2b5ea7]/20">
                  <p className="font-semibold text-[#1a365d]">{config.company.emergencyHours}</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#0d9488] font-semibold">
                  <Phone className="w-5 h-5" />
                  Telefon
                </div>
                <a href={`tel:${config.company.phone}`} className="text-lg hover:text-[#0d9488] transition-colors">{config.company.phone}</a>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-2 text-[#0d9488] font-semibold">
                  <Mail className="w-5 h-5" />
                  E-Mail
                </div>
                <a href={`mailto:${config.company.email}`} className="hover:text-[#0d9488] transition-colors">{config.company.email}</a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Google Maps Karte */}
          <RevealOnScroll variants={fadeUp} className="w-full h-[400px] lg:h-auto min-h-[400px] bg-slate-200 border border-slate-200 relative">
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(config.company.address.street + ", " + config.company.address.zip + " " + config.company.address.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="Google Maps"
            ></iframe>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
}
