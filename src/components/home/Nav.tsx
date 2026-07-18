import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg.asset.json";
import { buildGenericOrderUrl } from "@/data/menu";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "bg-[var(--caramel)]/95 backdrop-blur shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <img src={logo.url} alt="bobaman" className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-[var(--cream)]" />
          <span className="truncate font-display text-2xl text-[var(--cream)]">bobaman</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="#menu" className="hidden text-sm font-bold text-[var(--cream)] hover:text-[var(--peach)] sm:inline">Menu</a>
          <a href="#story" className="hidden text-sm font-bold text-[var(--cream)] hover:text-[var(--peach)] sm:inline">Story</a>
          <a href="#location" className="hidden text-sm font-bold text-[var(--cream)] hover:text-[var(--peach)] sm:inline">Visit</a>
          <a
            href={buildGenericOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-full bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md sm:text-sm"
          >
            Order
          </a>
        </div>
      </div>
    </nav>
  );
}
