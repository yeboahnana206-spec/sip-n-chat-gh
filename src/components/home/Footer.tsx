import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[var(--berry-ink)] py-10 text-center text-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4">
        <img src={logo.url} alt="bobaman" className="h-14 w-14 rounded-full object-cover ring-2 ring-[var(--peach)]" />
        <div className="font-display text-2xl">bobaman</div>
        <div className="font-script text-lg text-[var(--peach)]">just sip and chop.</div>
        <p className="text-xs text-[var(--cream)]/60">© {new Date().getFullYear()} bobaman · Spintex Road, Accra, Ghana</p>
      </div>
    </footer>
  );
}
