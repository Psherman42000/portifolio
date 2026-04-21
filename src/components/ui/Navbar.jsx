import { motion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '../../hooks/useActiveSection'

export default function Navbar({ nav, cv }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection(nav.map((item) => item.href.replace('#', '')))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkBase = 'text-sm font-medium text-[var(--muted)] hover:text-white'

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-5">
      <div
        className={`section-shell rounded-full border px-4 py-3 transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-[rgba(5,8,16,0.72)] shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'border-white/6 bg-[rgba(5,8,16,0.36)] backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="font-display text-lg font-bold tracking-[0.24em] text-[var(--accent)]" aria-label="Ir para o topo">
            PD
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = activeSection === id

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${linkBase} ${isActive ? 'text-white' : ''}`}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={cv.file}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,255,209,0.25)] bg-[rgba(0,255,209,0.08)] px-4 py-2 text-sm font-medium text-white"
            >
              <Download size={16} />
              {cv.label}
            </motion.a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 rounded-3xl border border-white/8 bg-[rgba(8,12,24,0.92)] p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={linkBase}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={cv.file}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(0,255,209,0.24)] bg-[rgba(0,255,209,0.08)] px-4 py-3 text-sm font-medium text-white"
              >
                <Download size={16} />
                {cv.label}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
