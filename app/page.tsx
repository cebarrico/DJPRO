import { DJHero } from "@/components/hero/DJHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { StructureSection } from "@/components/sections/StructureSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DJNavbar } from "@/components/hero/DJNavbar";

export default function Home() {
  return (
    <>
      <DJNavbar />
      <main>
        <DJHero />
        <ServicesSection />
        <EventsSection />
        <StructureSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
