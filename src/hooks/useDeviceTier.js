import { useEffect, useState } from 'react'

function readTier() {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false, quality: 'high', graphIntensity: 1, dpr: 1.5 }
  }

  const width = window.innerWidth
  const memory = navigator.deviceMemory ?? 8
  const cores = navigator.hardwareConcurrency ?? 8
  const isMobile = width < 768
  const isTablet = width >= 768 && width < 1024
  const lowPower = isMobile || memory <= 4 || cores <= 4
  const mediumPower = isTablet || memory <= 8

  return {
    isMobile,
    isTablet,
    quality: lowPower ? 'low' : mediumPower ? 'medium' : 'high',
    graphIntensity: lowPower ? 0.55 : mediumPower ? 0.8 : 1,
    dpr: lowPower ? 1 : mediumPower ? 1.25 : 1.5,
  }
}

export default function useDeviceTier() {
  const [tier, setTier] = useState(readTier)

  useEffect(() => {
    const onResize = () => setTier(readTier())
    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  return tier
}

