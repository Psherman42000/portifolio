import { useEffect, useState } from 'react'

function getDeviceProfile() {
  if (typeof window === 'undefined') {
    return {
      tier: 'medium',
      particleCount: 1400,
      dpr: [1, 1.5],
      shouldRenderHeavyEffects: true,
      isTouch: false,
    }
  }

  const width = window.innerWidth
  const memory = navigator.deviceMemory ?? 4
  const cores = navigator.hardwareConcurrency ?? 4
  const isTouch = window.matchMedia('(pointer: coarse)').matches

  const low = width < 480 || memory <= 2 || cores <= 2
  const medium = width < 1024 || memory <= 4 || cores <= 4 || isTouch

  if (low) {
    return {
      tier: 'low',
      particleCount: 700,
      dpr: [1, 1.1],
      shouldRenderHeavyEffects: false,
      isTouch,
    }
  }

  if (medium) {
    return {
      tier: 'medium',
      particleCount: 1300,
      dpr: [1, 1.4],
      shouldRenderHeavyEffects: true,
      isTouch,
    }
  }

  return {
    tier: 'high',
    particleCount: 2200,
    dpr: [1, 2],
    shouldRenderHeavyEffects: true,
    isTouch,
  }
}

export function useDeviceTier() {
  const [profile, setProfile] = useState(getDeviceProfile)

  useEffect(() => {
    const handleResize = () => setProfile(getDeviceProfile())
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return profile
}
