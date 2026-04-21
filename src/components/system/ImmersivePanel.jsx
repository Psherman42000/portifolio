import { X } from 'lucide-react'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import ScrollProgress from './ScrollProgress'

export default function ImmersivePanel({ panel, depth, isTop, isMobile, onClose, children }) {
  const [progress, setProgress] = useState(0)
  const panelStyle = useMemo(
    () => ({
      right: isMobile ? 0 : `${depth * 28}px`,
      zIndex: 30 + depth,
      width: isMobile ? '100vw' : depth === 0 ? '55vw' : '50vw',
    }),
    [depth, isMobile],
  )

  return (
    <motion.aside
      className={`immersive-panel ${isTop ? 'immersive-panel-top' : 'immersive-panel-layered'}`}
      style={panelStyle}
      initial={{ x: isMobile ? 0 : 120, y: isMobile ? 42 : 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: isMobile ? 0 : 160, y: isMobile ? 32 : 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 180, damping: 24 }}
    >
      <ScrollProgress progress={progress} />
      <header className="immersive-panel__header">
        <div>
          {panel.eyebrow ? <p className="immersive-panel__eyebrow">{panel.eyebrow}</p> : null}
          <h2 className="immersive-panel__title">{panel.title}</h2>
        </div>
        <button type="button" className="panel-close" onClick={onClose} aria-label="Fechar painel" data-interactive="true">
          <X size={18} />
        </button>
      </header>
      <div
        className="immersive-panel__body"
        onScroll={(event) => {
          const target = event.currentTarget
          const maxScroll = target.scrollHeight - target.clientHeight
          setProgress(maxScroll <= 0 ? 0 : target.scrollTop / maxScroll)
        }}
      >
        {children}
      </div>
    </motion.aside>
  )
}

