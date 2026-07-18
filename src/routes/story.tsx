import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/home/Nav";
import { Footer } from "@/components/home/Footer";
import { FloatingWhatsApp } from "@/components/home/FloatingWhatsApp";
import { buildGenericOrderUrl } from "@/data/menu";
import spark from "@/assets/story/spark.jpg.asset.json";
import craft from "@/assets/story/craft.jpg.asset.json";
import community from "@/assets/story/community.jpg.asset.json";
import promise from "@/assets/story/promise.png.asset.json";

export const Route = createFileRoute("/story")({
  component: StoryPage,
  head: () => ({
    meta: [
      { title: "Our Story — bobaman Bubble Tea, Spintex Road Accra" },
      { name: "description", content: "How bobaman started, the care in every cup, the regulars who make it home. Bubble tea handcrafted with love on Spintex Road, Accra." },
      { property: "og:title", content: "Our Story — bobaman" },
      { property: "og:description", content: "A craving, a corner of Spintex Road, and a whole lot of boba. This is us." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: spark.url },
      { property: "twitter:image", content: spark.url },
    ],
  }),
});

type Beat = {
  kicker: string;
  title: string;
  body: string[];
  image: { url: string };
  alt: string;
  reverse?: boolean;
  bg: string;
  textColor: string;
  kickerColor: string;
};

const beats: Beat[] = [
  {
    kicker: "the spark",
    title: "It started with a craving.",
    body: [
      "We were the ones circling Accra late at night, looking for a proper cup of bubble tea and coming up empty. The kind of drink where the pearls actually chew right and the milk tea doesn't taste like it's been sitting since morning.",
      "So we stopped waiting for someone else to open it. We picked a spot on Spintex Road, learned the recipes till our hands knew them, and put up a little counter for anyone who was looking for the same thing we were.",
    ],
    image: spark,
    alt: "A pair of hands holding a fresh cup of brown sugar milk tea at golden hour on Spintex Road",
    bg: "var(--caramel)",
    textColor: "var(--cream)",
    kickerColor: "var(--peach)",
  },
  {
    kicker: "the craft",
    title: "Every cup, made like it's ours.",
    body: [
      "We cook the pearls in small batches through the day so the chew is always right — never gummy, never stale. The tea gets brewed fresh, the milk goes in cold, and the brown sugar gets swirled the way it's meant to.",
      "It's not fancy. It's just care, over and over, one cup at a time. That's the difference you taste on the first sip.",
    ],
    image: craft,
    alt: "Close-up of glossy black tapioca pearls falling into creamy milk tea",
    reverse: true,
    bg: "var(--peach)",
    textColor: "var(--berry-ink)",
    kickerColor: "var(--berry)",
  },
  {
    kicker: "the community",
    title: "The regulars made it home.",
    body: [
      "Somewhere between the first week and now, this stopped being just a shop. It's the friends who come in every Friday and already know their order. It's the first-timers who scrunch their face at the pearls and then order two more.",
      "It's the little handwritten names on the cups, the birthday shout-outs, the couples who fight over the last sip. That's the part we didn't plan for — and it's our favourite part.",
    ],
    image: community,
    alt: "Two friends laughing together and cheersing bobaman cups with names written on them",
    bg: "var(--pink)",
    textColor: "var(--cream)",
    kickerColor: "var(--peach)",
  },
  {
    kicker: "the promise",
    title: "Every time you order, we mean it.",
    body: [
      "Same care whether it's your first cup or your fiftieth. Same pearls, same shake, same little joy in a cup. That's what we're here for — a small daily treat on Spintex worth looking forward to.",
      "Come thirsty. We'll take it from there.",
    ],
    image: promise,
    alt: "A playful shot of a customer carrying an oversized bobaman cup down the street",
    reverse: true,
    bg: "var(--berry)",
    textColor: "var(--cream)",
    kickerColor: "var(--peach)",
  },
];

function BeatSection({ beat }: { beat: Beat }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" style={{ backgroundColor: beat.bg }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: beat.reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={beat.reverse ? "md:order-2" : ""}
        >
          <span className="font-script text-2xl" style={{ color: beat.kickerColor }}>
            {beat.kicker}
          </span>
          <h2 className="mt-2 font-display text-4xl leading-tight sm:text-5xl" style={{ color: beat.textColor }}>
            {beat.title}
          </h2>
          {beat.body.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed" style={{ color: beat.textColor, opacity: 0.92 }}>
              {p}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={beat.reverse ? "md:order-1" : ""}
        >
          <div className="overflow-hidden rounded-3xl border-4 border-[var(--berry-ink)] shadow-[10px_10px_0_0_var(--berry-ink)]">
            <img
              src={beat.image.url}
              alt={beat.alt}
              loading="lazy"
              width={1600}
              height={1200}
              className="block h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StoryPage() {
  return (
    <div id="top" className="min-h-screen">
      <Nav />

      {/* Hero */}
      <header className="relative overflow-hidden pt-32 pb-16 text-center sm:pt-40 sm:pb-24" style={{ backgroundColor: "var(--caramel)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl px-4"
        >
          <span className="font-script text-2xl text-[var(--peach)]">our story</span>
          <h1 className="mt-2 font-display text-5xl leading-[0.95] text-[var(--cream)] sm:text-7xl">
            A craving, a corner<br />of Spintex, and<br />a whole lot of boba.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--cream)]/90">
            This is how bobaman got here — and why every cup we hand across the counter still means something to us.
          </p>
        </motion.div>
      </header>

      {beats.map((b) => (
        <BeatSection key={b.kicker} beat={b} />
      ))}

      {/* Closing CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "var(--cream)" }}>
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-display text-4xl text-[var(--berry-ink)] sm:text-5xl">
            Ready to sip and chop?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[var(--berry-ink)]/80">
            Slide through the full menu or ping us on WhatsApp — we'll have it ready when you pull up.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center rounded-full bg-[var(--berry-ink)] px-6 py-3 font-bold text-[var(--cream)] shadow-lg transition-transform hover:scale-105"
            >
              See the full menu →
            </Link>
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
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
