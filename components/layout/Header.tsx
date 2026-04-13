"use client";

import { config } from "@/lib/config";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto max-w-6xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder / Text */}
          <Link href="/" className="font-bold text-xl text-[#1a365d]">
            {config.company.name}
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-6">
          {config.navigation.map((nav) => (
            <Link key={nav.label} href={nav.href} className="text-sm font-medium text-slate-600 hover:text-[#0d9488]">
              {nav.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href={`tel:${config.company.phone}`} className="hidden md:block text-sm font-medium text-slate-600">
            {config.company.phone}
          </a>
          <Button className="bg-[#0d9488] hover:bg-[#14b8a6] text-white">
            Termin vereinbaren
          </Button>
        </div>
      </div>
    </header>
  );
}
