import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../../hooks/useCountUp'

export default function StatCard({ stat, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(stat.value, { start: isInView, duration: 1400 + delay * 300 })
  const Icon = stat.icon

  return (
    <div ref={ref} className="panel panel-hover rounded-[1.75rem] p-5">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,255,209,0.1)] text-[var(--accent)]">
        <Icon size={22} />
      </div>
      <div className="font-display text-3xl text-white">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{stat.label}</p>
    </div>
  )
}
