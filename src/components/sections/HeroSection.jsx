import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowDownRight } from 'lucide-react'
import { useTypingText } from '../../hooks/useTypingText'
import MagneticButton from '../ui/MagneticButton'
import Reveal from '../ui/Reveal'

const HeroScene = lazy(() => import('../3d/HeroScene'))

export default function HeroSection({ hero }) {
  const typedName = useTypingText(hero.name)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % hero.roles.length)
    }, 2400)

    return () => window.clearInterval(intervalId)
  }, [hero.roles.length])

  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="hero-fallback absolute inset-0" />}>
          <HeroScene />
        </Suspense>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,16,0.96)_0%,rgba(5,8,16,0.72)_38%,rgba(5,8,16,0.35)_68%,rgba(5,8,16,0.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(5,8,16,0.92))]" />
      </div>

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
        <Reveal className="max-w-3xl">
          {hero.eyebrow ? (
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-[rgba(0,255,209,0.78)]">{hero.eyebrow}</p>
          ) : null}
          <h1
            className="glitch font-display text-5xl leading-none text-white sm:text-7xl md:text-[5.6rem]"
            data-text={typedName}
          >
            <span className="text-gradient">
              {typedName}
              <span className="terminal-caret">_</span>
            </span>
          </h1>

          <div className="mt-6 h-12 overflow-hidden text-xl font-medium text-white sm:text-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={hero.roles[roleIndex]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-3"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                {hero.roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[rgba(240,244,255,0.82)] sm:text-lg">{hero.summary}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowDownRight size={18} />
            </MagneticButton>
            <MagneticButton href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hidden lg:block">
          <div className="panel rounded-[2rem] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[rgba(0,255,209,0.72)]">{hero.commandCenterTitle}</p>
            <div className="mt-6 space-y-4">
              {hero.commandCenter.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 border-b border-white/8 pb-4 last:border-0 last:pb-0">
                  <span className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</span>
                  <span className="font-display text-base text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#sobre" className="scroll-indicator absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.24em]">
        <span className="wheel" />
        {hero.scrollLabel}
      </a>
    </section>
  )
}
