import { motion } from 'framer-motion'

export default function AnimatedDivider({ label }) {
  return (
    <div className="section-shell py-6 md:py-8">
      <div className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-[rgba(0,255,209,0.72)]">
        {label}
      </div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0.3 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-px origin-left bg-[linear-gradient(90deg,rgba(0,255,209,0.9),rgba(123,97,255,0.65),transparent)]"
      />
    </div>
  )
}
