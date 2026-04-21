import Reveal from './Reveal'

export default function HighlightCard({ item, index }) {
  const Icon = item.icon

  return (
    <Reveal delay={index * 0.08}>
      <div className="panel panel-hover rounded-[2rem] p-6">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(123,97,255,0.16)] p-3 text-[var(--accent-secondary)]">
          <Icon size={24} />
        </div>
        <h3 className="font-display text-xl text-white">{item.title}</h3>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">{item.description}</p>
      </div>
    </Reveal>
  )
}
