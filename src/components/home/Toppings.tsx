import { TOPPINGS } from "@/data/menu";

export function Toppings() {
  return (
    <section id="toppings" className="relative py-20" style={{ backgroundColor: "var(--pink)" }}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="font-script text-2xl text-[var(--cream)]">customize your drink</span>
        <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--cream)] sm:text-5xl">
          Toppings & Add-Ons
        </h2>
        <p className="mx-auto mt-2 max-w-md text-xs uppercase tracking-widest text-[var(--cream)]/70">
          Placeholder — confirm real toppings & prices before launch
        </p>
        <p className="mx-auto mt-4 max-w-xl text-[var(--cream)]/95">
          Just mention any toppings in your WhatsApp order and we'll load them in 🧋
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TOPPINGS.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 rounded-full border-2 border-[var(--berry-ink)] bg-[var(--cream)] px-4 py-2 text-sm font-bold text-[var(--berry-ink)] shadow-[3px_3px_0_0_var(--berry-ink)]"
            >
              <span className="text-base" aria-hidden>{t.emoji}</span>
              <span>{t.name}</span>
              <span className="rounded-full bg-[var(--berry-ink)] px-2 py-0.5 text-xs text-[var(--peach)]">+₵{t.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
