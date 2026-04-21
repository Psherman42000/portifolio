import { useEffect, useState } from 'react'

export function useTypingText(text, speed = 110, delay = 250) {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let index = 0
    let timeoutId

    const tick = () => {
      setTypedText(text.slice(0, index))
      index += 1

      if (index <= text.length) {
        timeoutId = window.setTimeout(tick, speed)
      }
    }

    timeoutId = window.setTimeout(tick, delay)

    return () => window.clearTimeout(timeoutId)
  }, [delay, speed, text])

  return typedText || text.slice(0, 1)
}
