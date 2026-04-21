import { useEffect, useMemo, useState } from 'react'

export default function useTerminalTyping(source, speed = 14, active = true) {
  const [output, setOutput] = useState(active ? '' : source)

  useEffect(() => {
    if (!active) {
      setOutput(source)
      return undefined
    }

    setOutput('')
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setOutput(source.slice(0, index))
      if (index >= source.length) {
        window.clearInterval(interval)
      }
    }, speed)

    return () => window.clearInterval(interval)
  }, [source, speed, active])

  return useMemo(() => ({ output, isFinished: output.length >= source.length }), [output, source.length])
}

