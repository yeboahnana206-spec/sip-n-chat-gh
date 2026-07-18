import { motion } from "framer-motion";
import cup from "@/assets/personalized-cup.jpg";
import { Splash } from "./decor";

export function Personalization() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "var(--peach)" }}>
      <Splash className="absolute -left-10 top-10 text-[var(--pink)]/60" size={180} />
      <Splash className="absolute -right-10 bottom-10 text-[var(--cream)]" size={160} />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto"
        >
          <img
            src={cup}
            alt="A personalized bobaman cup with a handwritten name"
            width={480}
            height={480}
            loading="lazy"
            className="mx-auto h-[380px] w-auto rounded-3xl object-cover shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <span className="font-script text-3xl text-[var(--berry)]">made for you</span>
          <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--berry-ink)] sm:text-5xl">
            Your name. Your cup. Your moment.
          </h2>
          <p className="mt-4 text-lg text-[var(--berry-ink)]/80">
            Drop your name when you order on WhatsApp and we'll write it right on the cup.
            Because a drink with your name on it just hits different — and yes, it's very
            Instagram-worthy. 📸
          </p>
        </motion.div>
      </div>
    </section>
  );
}
