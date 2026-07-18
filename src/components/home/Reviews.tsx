import { REVIEWS } from "@/data/menu";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex text-[var(--gold)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>{i < n ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export function Reviews() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="relative overflow-hidden py-20" style={{ backgroundColor: "var(--peach)" }}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <span className="font-script text-2xl text-[var(--berry)]">real sippers, real love</span>
        <h2 className="mt-1 font-display text-4xl leading-tight text-[var(--berry-ink)] sm:text-5xl">
          What the streets are saying.
        </h2>
        <p className="mx-auto mt-2 max-w-md text-xs uppercase tracking-widest text-[var(--berry-ink)]/50">
          Placeholder — replace with real customer reviews before launch
        </p>
      </div>

      <div className="group mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
          {loop.map((r, i) => (
            <article
              key={`${r.name}-${i}`}
              className="w-[300px] shrink-0 rounded-3xl border-2 border-[var(--berry-ink)] bg-white p-5 text-left shadow-[5px_5px_0_0_var(--berry-ink)]"
            >
              <Stars n={r.stars} />
              <p className="mt-3 text-sm leading-relaxed text-[var(--berry-ink)]">"{r.text}"</p>
              <p className="mt-3 font-script text-lg text-[var(--berry)]">— {r.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
