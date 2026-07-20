import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU, buildGenericOrderUrl } from "@/data/menu";
import { OrderButton } from "./OrderButton";
import { BobaPearl, TeaLeaf, Splash } from "./decor";
import logo from "@/assets/logo.png.asset.json";

const bestSellers = MENU.flatMap((c) => c.drinks).filter((d) => d.bestSeller);

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % bestSellers.length), 3800);
    return () => clearInterval(t);
  }, []);

  const current = bestSellers[idx];

  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-24" style={{ backgroundColor: "var(--caramel)" }}>
      {/* Scattered decor */}
      <BobaPearl className="absolute top-24 left-6 text-[#3a1e0f]/40 animate-pulse" size={16} />
      <BobaPearl className="absolute top-40 right-10 text-[#3a1e0f]/50" size={22} />
      <TeaLeaf className="absolute top-32 left-1/3 text-[#8bc34a] rotate-12" size={34} />
      <Splash className="absolute -top-6 -right-6 text-[var(--peach)]" size={140} />
      <Splash className="absolute bottom-4 -left-8 text-[var(--pink)]/70" size={120} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <div className="relative z-10 text-center md:text-left">
          <div className="mb-6 flex items-center justify-center gap-5 p-4 sm:p-6 md:justify-start md:p-8">
            <img
              src={logo.url}
              alt="bobaman logo"
              className="h-28 w-28 shrink-0 object-contain drop-shadow-2xl sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52"
            />
            <span className="font-script text-2xl text-[#F8F6F0] sm:text-3xl md:text-4xl">just sip and chop.</span>
          </div>
          <h1 className="font-display text-[64px] leading-[0.9] text-[#F8F6F0] sm:text-[88px] md:text-[110px]">
            boba<span className="text-[var(--peach)]">man</span>
          </h1>
          <p className="mt-4 text-lg text-[#F8F6F0]/90 sm:text-xl">
            70+ handcrafted bubble tea drinks, frappes, refreshers & more.
            <br className="hidden sm:inline" />
            Freshly shaken on <strong>Spintex Road, Accra.</strong>
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#menu"
              className="inline-flex items-center rounded-full bg-[var(--cream)] px-6 py-3 font-bold text-[var(--berry-ink)] shadow-lg transition-transform hover:scale-105"
            >
              View Full Menu →
            </a>
            <a
              href={buildGenericOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-white shadow-lg transition-transform hover:scale-105"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Best seller carousel */}
        <div className="relative mx-auto flex h-[440px] w-full max-w-sm items-center justify-center sm:h-[500px]">
          <Splash className="absolute inset-0 m-auto text-[var(--peach)]" size={380} />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -30, rotate: 4 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <span className="mb-3 inline-flex rotate-[-4deg] rounded-full bg-[var(--berry-ink)] px-4 py-1 text-xs font-black uppercase tracking-wider text-[var(--peach)] shadow-md">
                ★ Best Seller
              </span>
              <img
                src={current.image}
                alt={current.name}
                width={340}
                height={340}
                className="h-[300px] w-auto object-contain drop-shadow-2xl sm:h-[360px]"
              />
              <p className="mt-3 max-w-[280px] text-center font-display text-xl text-[var(--cream)]">
                {current.name}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className="rounded-full bg-[var(--cream)]/95 px-3 py-1 text-sm font-bold text-[var(--berry-ink)]">
                  ₵{current.large}
                </span>
                <OrderButton drink={current.name} size="Large" price={current.large} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* dots */}
          <div className="absolute -bottom-2 left-0 right-0 flex justify-center gap-2">
            {bestSellers.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setIdx(i)}
                aria-label={`Show ${d.name}`}
                className={`h-2.5 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--peach)]" : "w-2.5 bg-[var(--cream)]/50"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
