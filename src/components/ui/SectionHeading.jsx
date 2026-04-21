export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(0,255,209,0.72)]">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl md:text-[2.9rem]">{title}</h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p>
    </div>
  )
}
