import { motion } from "framer-motion";
import mango from "@/assets/fruits/mango.png.asset.json";
import banana from "@/assets/fruits/banana.png.asset.json";
import pineapple from "@/assets/fruits/pineapple.png.asset.json";
import grapes from "@/assets/fruits/grapes.png.asset.json";
import strawberry from "@/assets/fruits/strawberry.png.asset.json";
import passion from "@/assets/fruits/passion.png.asset.json";
import splashMagenta from "@/assets/fruits/splash-magenta.png.asset.json";
import splashLime from "@/assets/fruits/splash-lime.png.asset.json";
import { BobaPearl } from "./decor";

const flavors = ["Mango", "Strawberry", "Pineapple", "Grape", "Banana", "Passion Fruit"];

type Item = {
  src: string;
  alt: string;
  style: React.CSSProperties;
  rotate: number;
  float: number;
  delay: number;
};

const fruits: Item[] = [
  { src: banana.url, alt: "Banana", style: { top: "8%", left: "6%", width: "22%" }, rotate: -8, float: 12, delay: 0 },
  { src: grapes.url, alt: "Grapes", style: { top: "4%", left: "42%", width: "16%" }, rotate: 4, float: -10, delay: 0.15 },
  { src: pineapple.url, alt: "Pineapple", style: { top: "6%", right: "5%", width: "22%" }, rotate: 10, float: 14, delay: 0.3 },
  { src: mango.url, alt: "Mango", style: { bottom: "8%", left: "28%", width: "18%" }, rotate: -6, float: -12, delay: 0.45 },
  { src: passion.url, alt: "Passion fruit", style: { bottom: "12%", left: "48%", width: "16%" }, rotate: 8, float: 10, delay: 0.6 },
  { src: strawberry.url, alt: "Strawberry", style: { bottom: "6%", right: "8%", width: "18%" }, rotate: -4, float: -14, delay: 0.75 },
];

const splashes: { src: string; style: React.CSSProperties; opacity: number }[] = [
  { src: splashMagenta.url, style: { top: "50%", left: "38%", width: "22%" }, opacity: 0.65 },
  { src: splashLime.url, style: { bottom: "20%", left: "18%", width: "20%" }, opacity: 0.55 },
  { src: splashMagenta.url, style: { top: "15%", right: "22%", width: "16%" }, opacity: 0.5 },
];

export function Craveworthy() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ backgroundColor: "var(--pink)" }}>
      <div className="relative mx-auto w-full max-w-6xl px-4">
        <div className="relative mx-auto aspect-[16/10] min-h-[520px] w-full sm:min-h-[600px]">
          {/* Watercolor splashes */}
          {splashes.map((s, i) => (
            <motion.img
              key={`splash-${i}`}
              src={s.src}
              alt=""
              aria-hidden
              loading="lazy"
              className="pointer-events-none absolute select-none"
              style={{ ...s.style, opacity: s.opacity }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: s.opacity, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 * i }}
            />
          ))}

          {/* Fruits — scattered, floating */}
          {fruits.map((f, i) => (
            <motion.img
              key={f.alt}
              src={f.src}
              alt={f.alt}
              loading="lazy"
              className="pointer-events-none absolute select-none drop-shadow-xl"
              style={f.style}
              initial={{ opacity: 0, y: 40, rotate: f.rotate - 10, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, rotate: f.rotate, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: f.delay, ease: "easeOut" }}
            >
            </motion.img>
          ))}

          {/* Floating pearls */}
          <BobaPearl className="absolute left-[12%] top-[42%] text-[var(--berry-ink)]" size={22} />
          <BobaPearl className="absolute left-[30%] top-[18%] text-[var(--berry-ink)]" size={16} />
          <BobaPearl className="absolute right-[26%] top-[46%] text-[var(--berry-ink)]" size={20} />
          <BobaPearl className="absolute right-[14%] bottom-[24%] text-[var(--berry-ink)]" size={18} />
          <BobaPearl className="absolute left-[46%] bottom-[6%] text-[var(--berry-ink)]" size={14} />
          <BobaPearl className="absolute left-[22%] bottom-[30%] text-[var(--berry-ink)]" size={12} />

          {/* Centered text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute left-1/2 top-1/2 z-10 w-[min(90%,420px)] -translate-x-1/2 -translate-y-1/2 text-center"
          >
            <span className="font-script text-2xl text-[var(--berry-ink)]">craveworthy flavors</span>
            <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--cream)] sm:text-5xl">
              Real fruit.<br />Real chew.<br />Real moments.
            </h2>
            <p className="mt-4 text-[var(--cream)]/95">
              From classic milk tea to crazy fruit fusions — pick your mood, we'll pour the cup.
            </p>
          </motion.div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {flavors.map((f) => (
            <span
              key={f}
              className="rounded-full border-2 border-[var(--berry-ink)] bg-white px-4 py-1.5 text-sm font-bold text-[var(--berry-ink)] shadow-[3px_3px_0_0_var(--berry-ink)]"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
