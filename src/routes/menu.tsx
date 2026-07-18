import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Menu } from "@/components/home/Menu";
import { Toppings } from "@/components/home/Toppings";
import { Footer } from "@/components/home/Footer";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Full Menu — bobaman Bubble Tea, Spintex Road" },
      { name: "description", content: "Explore every bobaman drink — signature milk teas, taro delights, cheese series & toppings. Order any drink in seconds via WhatsApp." },
      { property: "og:title", content: "Full Menu — bobaman Bubble Tea" },
      { property: "og:description", content: "Every drink, every size, every price. Order in seconds via WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function MenuPage() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />
      <header className="pt-28 pb-6 text-center" style={{ backgroundColor: "var(--pink)" }}>
        <span className="font-script text-2xl text-[var(--cream)]">the full lineup</span>
        <h1 className="mt-2 font-display text-5xl text-[var(--cream)] sm:text-6xl">Our Menu 🧋</h1>
        <p className="mx-auto mt-3 max-w-xl px-4 text-[var(--cream)]/90">
          Every drink is made fresh to order. Tap any "Order Now" button and we'll pop up in your WhatsApp.
        </p>
      </header>
      <Menu />
      <Toppings />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
