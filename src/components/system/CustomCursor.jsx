import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(false)
  const [pressed, setPressed] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const outerX = useSpring(x, { damping: 22, stiffness: 320, mass: 0.45 })
  const outerY = useSpring(y, { damping: 22, stiffness: 320, mass: 0.45 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const onPointerChange = () => setEnabled(finePointer.matches)
    onPointerChange()

    const handleMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    const handleOver = (event) => {
      const interactive = event.target.closest('a, button, input, textarea, [data-interactive="true"]')
      setActive(Boolean(interactive))
    }

    const handleDown = () => setPressed(true)
    const handleUp = () => setPressed(false)

    finePointer.addEventListener('change', onPointerChange)
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('mouseover', handleOver)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup', handleUp)

    return () => {
      finePointer.removeEventListener('change', onPointerChange)
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup', handleUp)
    }
  }, [outerX, outerY, x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className={`cursor-outer ${active ? 'cursor-outer-active' : ''}`}
        style={{ x: outerX, y: outerY }}
        animate={{ scale: pressed ? 0.82 : active ? 1.85 : 1 }}
        transition={{ type: 'spring', stiffness: 380, damping: 26 }}
      />
      <motion.div className="cursor-inner" style={{ x, y }} animate={{ scale: pressed ? 1.6 : 1 }} transition={{ duration: 0.18 }} />
    </>
  )
}

