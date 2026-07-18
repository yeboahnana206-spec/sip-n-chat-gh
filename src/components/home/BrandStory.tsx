import { motion } from "framer-motion";
import { BobaPearl } from "./decor";

export function BrandStory() {
  return (
    <section id="story" className="relative overflow-hidden py-20" style={{ backgroundColor: "var(--caramel)" }}>
      <BobaPearl className="absolute top-10 right-1/4 text-[var(--cream)]/30" size={18} />
      <BobaPearl className="absolute bottom-16 left-12 text-[var(--peach)]/60" size={26} />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <span className="font-script text-2xl text-[var(--peach)]">more than just boba</span>
        <h2 className="mt-2 font-display text-4xl leading-tight text-[var(--cream)] sm:text-5xl">
          Every cup, a small adventure.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--cream)]/90">
          bobaman started with a simple idea — Accra deserves bubble tea that actually
          slaps. So we shake, brew, and pour every drink to order, chew the pearls till
          they're perfect, and put a little joy in every cup that leaves the counter.
          No shortcuts, no dusty syrups. Just sip and chop. 🧋
        </p>
      </motion.div>
    </section>
  );
}
