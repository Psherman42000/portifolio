import { Download, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'

export default function Navbar({
  nodes,
  cv,
  onOpenNode,
  stackPath,
  isDimmed = false,
  systemLabel,
  currentLocale,
  locales,
  localeLabel,
  onChangeLocale,
}) {
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
          <span>{systemLabel}</span>
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

        <div className="nav-locale" aria-label={localeLabel}>
          {locales.map((item) => (
            <button
              key={item.code}
              type="button"
              className={`nav-locale__button ${currentLocale === item.code ? 'nav-locale__button-active' : ''}`}
              onClick={() => onChangeLocale(item.code)}
              data-interactive="true"
            >
              {item.label}
            </button>
          ))}
        </div>

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
          <motion.div className="nav-mobile-panel" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
            <div className="nav-mobile-locales">
              {locales.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  className={`nav-mobile-locale ${currentLocale === item.code ? 'nav-mobile-locale-active' : ''}`}
                  onClick={() => onChangeLocale(item.code)}
                >
                  {item.label}
                </button>
              ))}
            </div>

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
