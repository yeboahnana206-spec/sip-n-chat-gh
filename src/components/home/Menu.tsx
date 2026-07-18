import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MENU } from "@/data/menu";
import { OrderButton } from "./OrderButton";

export function Menu() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return MENU;
    return MENU.map((c) => ({
      ...c,
      drinks: c.drinks.filter((d) => d.name.toLowerCase().includes(t)),
    })).filter((c) => c.drinks.length > 0);
  }, [q]);

  return (
    <section id="menu" className="relative py-20" style={{ backgroundColor: "var(--pink)" }}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="font-script text-2xl text-[var(--cream)]">the full menu</span>
          <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--cream)] sm:text-5xl">
            Pick your poison 🧋
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--cream)]/90">
            Every drink is made to order. Tap "Order Now" and we'll pop up in your WhatsApp.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-md">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search drinks… e.g. taro, oreo"
            className="w-full rounded-full border-4 border-[var(--berry-ink)] bg-white px-5 py-3 text-base font-medium text-[var(--berry-ink)] shadow-[5px_5px_0_0_var(--berry-ink)] outline-none placeholder:text-[var(--berry-ink)]/40"
          />
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-[var(--cream)]">No drinks match "{q}". Try another word 👀</p>
        )}

        {filtered.map((cat) => (
          <div key={cat.id} className="mt-14">
            <div className="mb-6 flex flex-col items-center text-center">
              <h3 className="font-display text-3xl text-[var(--cream)]">
                <span className="mr-2">{cat.emoji}</span>
                {cat.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--cream)]/85">{cat.tagline}</p>
              {cat.id === "cheese" && (
                <p className="mt-2 rounded-full bg-[var(--berry-ink)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--peach)]">
                  More cheese drinks coming soon
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.drinks.map((d, i) => (
                <motion.article
                  key={d.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border-4 border-[var(--berry-ink)] bg-white shadow-[6px_6px_0_0_var(--berry-ink)] transition-transform hover:-translate-y-1"
                >
                  {d.bestSeller && (
                    <span className="absolute left-3 top-3 z-10 rotate-[-6deg] rounded-full bg-[var(--berry-ink)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[var(--peach)] shadow-md">
                      ★ Best Seller
                    </span>
                  )}
                  <div className="aspect-square w-full overflow-hidden bg-[var(--cream)]">
                    <img
                      src={d.image}
                      alt={d.name}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-4">
                    <h4 className="font-display text-lg leading-tight text-[var(--berry-ink)]">{d.name}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-[var(--cream)] px-3 py-2 text-center">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--berry-ink)]/60">Large</div>
                        <div className="font-display text-lg text-[var(--berry-ink)]">₵{d.large}</div>
                      </div>
                      <div className="rounded-xl bg-[var(--cream)] px-3 py-2 text-center">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--berry-ink)]/60">Medium</div>
                        <div className="font-display text-lg text-[var(--berry-ink)]">₵{d.medium}</div>
                      </div>
                    </div>
                    <div className="mt-auto grid grid-cols-2 gap-2">
                      <OrderButton drink={d.name} size="Large" price={d.large}>Large</OrderButton>
                      <OrderButton drink={d.name} size="Medium" price={d.medium}>Medium</OrderButton>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
