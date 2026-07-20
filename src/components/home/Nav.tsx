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
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:py-5">
        <Link to="/" className="flex min-w-0 items-center p-2 sm:p-3">
          <img
            src={logo.url}
            alt="bobaman — just sip and chop"
            className={`h-auto w-[140px] shrink-0 object-contain drop-shadow-lg transition-opacity duration-[250ms] sm:w-[180px] md:w-[220px] lg:w-[240px] ${
              scrolled ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          />
        </Link>
        <div className="flex items-center gap-4 sm:gap-7">
          <Link to="/menu" className="nav-link hidden sm:inline">Menu</Link>
          <Link to="/story" className="nav-link hidden sm:inline">Our Story</Link>
          <a
            href={buildGenericOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
          >
            Order
          </a>
        </div>
      </div>
    </nav>
  );
}
