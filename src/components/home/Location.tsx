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
            📍 Total Energies Filling Station Dome, Accra, Ghana
          </p>
          <a
            href="https://maps.app.goo.gl/V4ktWph1vVdhR7Bw7"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-[var(--peach)] px-5 py-2.5 font-bold text-[var(--berry)] shadow-lg transition-transform hover:scale-105"
          >
            Get directions →
          </a>
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
            title="bobaman at Total Energies Filling Station Dome, Accra"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127042.21764419563!2d-0.39171987264222774!3d5.703128244417858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9f0ded947901%3A0x1c6b4bac20057efb!2sTotal%20Energies%20Filling%20Station%20Dome!5e0!3m2!1sen!2sgh!4v1784559553647!5m2!1sen!2sgh"
            className="h-[450px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
