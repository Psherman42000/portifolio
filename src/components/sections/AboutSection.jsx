import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import StatCard from '../ui/StatCard'

export default function AboutSection({ about }) {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} description={about.description} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal className="space-y-6 text-base leading-8 text-[rgba(240,244,255,0.84)] sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel rounded-[2rem] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(0,255,209,0.72)]">{about.panel.title}</p>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">{about.panel.subtitle}</p>

              <div className="mt-6 space-y-4">
                {about.panel.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 rounded-2xl border border-white/7 bg-white/4 px-4 py-4">
                    <span className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">{item.label}</span>
                    <span className="font-display text-sm text-white">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {about.panel.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[rgba(0,255,209,0.18)] bg-[rgba(0,255,209,0.06)] px-3 py-2 text-xs font-semibold tracking-[0.12em] text-white/84"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {about.stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} delay={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
