import { WHATSAPP_DISPLAY_PRIMARY, WHATSAPP_DISPLAY_SECONDARY, buildGenericOrderUrl } from "@/data/menu";

export function Location() {
  return (
    <section id="location" className="relative py-20" style={{ backgroundColor: "var(--berry)" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div className="text-center md:text-left">
          <span className="font-script text-2xl text-[var(--peach)]">come thru</span>
          <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--cream)] sm:text-5xl">
            Find us at Total Energies.
          </h2>
          <p className="mt-4 text-lg text-[var(--cream)]/90">
            📍 Total Energies Filling Station Dome, Spintex Road, Accra, Ghana
          </p>
          <div className="mt-4 space-y-1 text-[var(--cream)]/90">
            <p>📱 {WHATSAPP_DISPLAY_PRIMARY}</p>
            <p>📱 {WHATSAPP_DISPLAY_SECONDARY}</p>
          </div>
          <p className="mt-4 text-sm text-[var(--cream)]/70">Open daily · Pickup & delivery via WhatsApp</p>
          <a
            href={buildGenericOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-xl transition-transform hover:scale-105"
          >
            Order on WhatsApp →
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border-4 border-[var(--cream)] shadow-2xl">
          <iframe
            title="bobaman at Total Energies Filling Station Dome, Spintex Road, Accra"
            src="https://maps.app.goo.gl/V4ktWph1vVdhR7Bw7"
            className="h-[360px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
