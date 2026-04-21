import { useEffect, useState } from 'react'

export function useCountUp(target, options = {}) {
  const { duration = 1600, start = true } = options
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) {
      return undefined
    }

    let frameId
    const startTime = performance.now()

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)
      setValue(Math.round(target * eased))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frameId)
  }, [duration, start, target])

  return value
}
