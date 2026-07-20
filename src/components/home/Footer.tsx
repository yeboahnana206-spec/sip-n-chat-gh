import logo from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-[var(--berry-ink)] py-10 text-center text-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4">
        <img src={logo.url} alt="bobaman — just sip and chop" className="h-auto w-32 object-contain" />
        <p className="text-xs text-[var(--cream)]/60">© {new Date().getFullYear()} bobaman · Total Energies Filling Station Dome, Spintex Road, Accra, Ghana</p>
      </div>
    </footer>
  );
}
