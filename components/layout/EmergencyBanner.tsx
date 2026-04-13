"use client";

import { config } from "@/lib/config";
import { X } from "lucide-react";
import { useState } from "react";

export function EmergencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!config.features.akut_banner || !isVisible) return null;

  return (
    <div className="bg-[#dc2626] text-white px-4 py-2 flex items-center justify-center relative">
      <div className="flex items-center gap-3 text-sm font-medium">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        {config.company.emergencyHours} — Bitte vorab telefonisch anmelden: <a href={`tel:${config.company.phone}`} className="underline font-bold">{config.company.phone}</a>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
      >
        <X size={16} />
      </button>
    </div>
  );
}
