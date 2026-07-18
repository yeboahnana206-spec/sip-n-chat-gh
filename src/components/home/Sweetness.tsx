import { motion } from "framer-motion";

const levels = [
  { label: "Light", pct: "25%", desc: "Barely sweet, all flavor.", tone: "var(--peach)" },
  { label: "Medium", pct: "50%", desc: "The house favorite.", tone: "var(--pink)" },
  { label: "Full", pct: "100%", desc: "For the sweet-tooth crew.", tone: "var(--berry)" },
];

export function Sweetness() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "var(--cream)" }}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="font-script text-2xl text-[var(--berry)]">your cup, your rules</span>
        <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--berry-ink)] sm:text-5xl">
          Sweeten Your Day, Your Way.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--berry-ink)]/70">
          Every drink comes with your choice of sweetness. Tell us in your WhatsApp order.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {levels.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-3xl border-4 border-[var(--berry-ink)] bg-white p-6 shadow-[6px_6px_0_0_var(--berry-ink)] transition-transform hover:-translate-y-1"
            >
              <div
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full font-display text-2xl text-white"
                style={{ backgroundColor: l.tone }}
              >
                {l.pct}
              </div>
              <h3 className="mt-4 font-display text-2xl text-[var(--berry-ink)]">{l.label}</h3>
              <p className="mt-1 text-sm text-[var(--berry-ink)]/70">{l.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
