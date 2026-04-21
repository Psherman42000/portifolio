import { motion } from 'framer-motion'
import { useState } from 'react'

const variants = {
  primary:
    'border-[rgba(0,255,209,0.32)] bg-[linear-gradient(120deg,rgba(0,255,209,0.14),rgba(123,97,255,0.16))] text-white shadow-[0_18px_40px_rgba(0,255,209,0.1)]',
  secondary: 'border-white/12 bg-white/5 text-white/88',
}

export default function MagneticButton({
  href,
  target,
  rel,
  onClick,
  children,
  variant = 'primary',
  className = '',
  disabled = false,
  ...props
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    if (disabled) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.06
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.08
    setPosition({ x, y })
  }

  const handleLeave = () => setPosition({ x: 0, y: 0 })

  const sharedProps = {
    whileHover: disabled ? undefined : { scale: 1.015 },
    whileTap: disabled ? undefined : { scale: 0.985 },
    animate: position,
    transition: { type: 'spring', stiffness: 520, damping: 26, mass: 0.45 },
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold tracking-wide ${variants[variant]} ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${className}`,
    ...props,
  }

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} aria-disabled={disabled} {...sharedProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" onClick={onClick} disabled={disabled} {...sharedProps}>
      {children}
    </motion.button>
  )
}
