import Reveal from './Reveal'

export default function TimelineItem({ item, index }) {
  return (
    <Reveal className="relative pl-10 md:pl-14" delay={index * 0.08}>
      <span className="absolute left-[2px] top-10 h-4 w-4 rounded-full border border-[rgba(0,255,209,0.55)] bg-[var(--bg)] shadow-[0_0_0_6px_rgba(0,255,209,0.07)] md:left-[6px]" />
      <div className="panel rounded-[1.9rem] p-6 md:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(0,255,209,0.7)]">{item.period}</p>
        <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="font-display text-2xl text-white">{item.role}</h3>
            <p className="text-sm uppercase tracking-[0.26em] text-[var(--muted)]">{item.company}</p>
          </div>
        </div>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs font-medium tracking-wide text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
