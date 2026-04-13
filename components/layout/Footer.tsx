import { config } from "@/lib/config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">{config.company.name}</h3>
          <p className="text-sm">{config.company.claim}</p>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-4">Kontakt</h3>
          <p className="text-sm">{config.company.address.street}</p>
          <p className="text-sm mb-2">{config.company.address.zip} {config.company.address.city}</p>
          <p className="text-sm">Tel: <a href={`tel:${config.company.phone}`} className="hover:text-white">{config.company.phone}</a></p>
          <p className="text-sm">Email: <a href={`mailto:${config.company.email}`} className="hover:text-white">{config.company.email}</a></p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Öffnungszeiten</h3>
          <ul className="text-sm space-y-1">
            {config.company.openingHours.slice(0, 5).map((oh) => (
              <li key={oh.day} className="flex justify-between">
                <span className="text-slate-400">{oh.day.substring(0, 2)}:</span>
                <span>{oh.hours}</span>
              </li>
            ))}
          </ul>
          {config.company.emergencyHours && (
            <p className="text-sm mt-3 text-[#f0fdfa] font-medium">{config.company.emergencyHours}</p>
          )}
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Rechtliches</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/impressum" className="text-sm hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="text-sm hover:text-white">Datenschutz</Link>
          </nav>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
        © {new Date().getFullYear()} {config.company.name}. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
