import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
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
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img src={logo.url} alt="bobaman" className="h-10 w-10 shrink-0 object-contain" />
          <span className="truncate font-display text-2xl text-[var(--cream)]">bobaman</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <Link to="/menu" className="hidden text-sm font-bold text-[var(--cream)] hover:text-[var(--peach)] sm:inline">Menu</Link>
          <Link to="/story" className="hidden text-sm font-bold text-[var(--cream)] hover:text-[var(--peach)] sm:inline">Our Story</Link>
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
