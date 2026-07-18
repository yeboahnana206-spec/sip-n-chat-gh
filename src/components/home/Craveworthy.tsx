import { motion } from "framer-motion";
import fruits from "@/assets/craveworthy-fruits.jpg";

const flavors = ["Mango", "Strawberry", "Pineapple", "Grape", "Banana", "Passion Fruit"];

export function Craveworthy() {
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "var(--peach)" }}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="font-script text-2xl text-[var(--berry)]">craveworthy flavors</span>
        <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--berry-ink)] sm:text-5xl">
          Real fruit. Real chew. Real moments.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--berry-ink)]/80">
          From tropical bursts to creamy classics — pick your mood, we'll pour the cup.
        </p>

        <motion.img
          src={fruits}
          alt="Colorful fruit illustration"
          width={720}
          height={720}
          loading="lazy"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-8 h-auto w-full max-w-xl rounded-3xl"
        />

        <div className="mt-6 flex flex-wrap justify-center gap-2">
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
