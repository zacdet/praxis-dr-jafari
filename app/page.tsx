import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <ServicesGrid />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
