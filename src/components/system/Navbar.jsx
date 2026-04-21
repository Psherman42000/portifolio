import { Download, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

export default function Navbar({ nodes, cv, onOpenNode, stackPath, isDimmed = false }) {
  const [open, setOpen] = useState(false)

  const items = useMemo(() => nodes.filter((node) => node.id !== 'root'), [nodes])

  return (
    <header className={`system-nav ${isDimmed ? 'system-nav-dimmed' : ''}`}>
      <div className="system-nav__inner">
        <button type="button" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Ir para o mapa principal">
          <span className="nav-logo__glitch" data-text="PD">
            PD
          </span>
        </button>

        <div className="nav-meta">
          <span className="nav-status-dot" />
          <span>malha de integracao ativa</span>
          <span className="nav-divider">/</span>
          <span>{stackPath}</span>
        </div>

        <nav className="nav-links" aria-label="Secoes principais">
          {items.map((item) => (
            <button key={item.id} type="button" className="nav-link" onClick={() => onOpenNode(item.id)} data-interactive="true">
              {item.label}
            </button>
          ))}
        </nav>

        <a href={cv.file} target="_blank" rel="noreferrer" className="nav-cv" data-interactive="true">
          <Download size={15} />
          <span>{cv.label}</span>
        </a>

        <button type="button" className="nav-menu-button" onClick={() => setOpen((current) => !current)} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                className="nav-mobile-link"
                onClick={() => {
                  onOpenNode(item.id)
                  setOpen(false)
                }}
              >
                {item.label}
              </button>
            ))}
            <a href={cv.file} target="_blank" rel="noreferrer" className="nav-mobile-link nav-mobile-link-cv">
              {cv.label}
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

