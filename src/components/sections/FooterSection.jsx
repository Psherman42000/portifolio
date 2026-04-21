export default function FooterSection({ footer }) {
  return (
    <footer className="relative z-10 border-t border-white/8 pb-8 pt-10">
      <div className="section-shell flex flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>{footer.signature}</p>
        <p className="font-display text-[var(--accent)]">{footer.terminal}</p>
      </div>
    </footer>
  )
}
