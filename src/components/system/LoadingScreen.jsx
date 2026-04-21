import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

export default function LoadingScreen({ lines, onFinish }) {
  useEffect(() => {
    const timer = window.setTimeout(onFinish, lines.length * 420 + 1000)
    return () => window.clearTimeout(timer)
  }, [lines.length, onFinish])

  return (
    <AnimatePresence>
      <motion.div className="loading-screen" initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}>
        <div className="loading-screen__panel">
          {lines.map((line, index) => (
            <motion.p
              key={line}
              className="loading-screen__line"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.4, duration: 0.35, ease: 'easeOut' }}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

