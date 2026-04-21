import { useEffect, useMemo, useState } from 'react'

export default function useGlitchCycle() {
  const [glitchOn, setGlitchOn] = useState(false)

  useEffect(() => {
    let timeoutId

    const loop = () => {
      const wait = 5000 + Math.random() * 3000
      timeoutId = window.setTimeout(() => {
        setGlitchOn(true)
        window.setTimeout(() => setGlitchOn(false), 320)
        loop()
      }, wait)
    }

    loop()

    return () => window.clearTimeout(timeoutId)
  }, [])

  return useMemo(() => ({ glitchOn }), [glitchOn])
}

