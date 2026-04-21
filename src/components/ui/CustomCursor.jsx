import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return undefined
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const current = { ...target }
    let frameId

    const animate = () => {
      current.x += (target.x - current.x) * 0.34
      current.y += (target.y - current.y) * 0.34

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.x - 9}px, ${current.y - 9}px, 0)`
      }

      frameId = window.requestAnimationFrame(animate)
    }

    const handleMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY
      setVisible(true)
    }

    const handleLeave = () => setVisible(false)

    frameId = window.requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseout', handleLeave)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseout', handleLeave)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor fixed left-0 top-0 hidden md:block ${visible ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
