import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { BrandStory } from "@/components/home/BrandStory";
import { Sweetness } from "@/components/home/Sweetness";
import { Personalization } from "@/components/home/Personalization";
import { Craveworthy } from "@/components/home/Craveworthy";
import { Reviews } from "@/components/home/Reviews";
import { Menu } from "@/components/home/Menu";
import { Toppings } from "@/components/home/Toppings";
import { Location } from "@/components/home/Location";
import { Footer } from "@/components/home/Footer";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { WaveDivider } from "@/components/home/decor";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "bobaman — Bubble Tea in Dome, Accra" },
      { name: "description", content: "70+ handcrafted bubble tea drinks, frappes & refreshers in Dome, Accra. Just sip and chop. Order in seconds via WhatsApp." },
    ],
  }),
});

function Home() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />
      <Hero />
      <BrandStory />
      <WaveDivider fromColor="var(--caramel)" toColor="var(--cream)" />
      <Sweetness />
      <WaveDivider fromColor="var(--cream)" toColor="var(--peach)" />
      <Personalization />
      <Craveworthy />
      <Reviews />
      <WaveDivider fromColor="var(--peach)" toColor="var(--pink)" />
      <Menu />
      <Toppings />
      <WaveDivider fromColor="var(--pink)" toColor="var(--berry)" />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
