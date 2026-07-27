import logo from "@/assets/logo.png.asset.json";
import { Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-6.63a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.47z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--berry-ink)] py-10 text-center text-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4">
        <img src={logo.url} alt="bobaman — just sip and chop" className="h-auto w-32 object-contain" />

        <div className="flex items-center gap-4">
          <a
            href="https://www.tiktok.com/@bobamangh?_r=1&_t=ZS-98N9kr9OW1a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow bobaman on TikTok"
            className="rounded-full p-2 text-[var(--cream)] transition hover:scale-110 hover:text-[var(--peach)]"
          >
            <TikTokIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/bobamangh?utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow bobaman on Instagram"
            className="rounded-full p-2 text-[var(--cream)] transition hover:scale-110 hover:text-[var(--peach)]"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        <p className="text-xs text-[var(--cream)]/60">© {new Date().getFullYear()} bobaman · Total Energies Filling Station Dome, Accra, Ghana</p>
      </div>
    </footer>
  );
}
