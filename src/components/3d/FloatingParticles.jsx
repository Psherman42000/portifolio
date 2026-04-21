import { PointMaterial, Points } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

export default function FloatingParticles({ count = 1200, reducedMotion = false }) {
  const particlesRef = useRef(null)

  const positions = useMemo(() => {
    const data = new Float32Array(count * 3)

    for (let index = 0; index < count; index += 1) {
      const stride = index * 3
      data[stride] = (Math.random() - 0.5) * 11
      data[stride + 1] = (Math.random() - 0.5) * 8
      data[stride + 2] = (Math.random() - 0.5) * 8
    }

    return data
  }, [count])

  useFrame((_, delta) => {
    if (!particlesRef.current || reducedMotion) {
      return
    }

    particlesRef.current.rotation.y += delta * 0.015
    particlesRef.current.rotation.x -= delta * 0.008
  })

  return (
    <Points ref={particlesRef} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#00FFD1" size={0.015} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  )
}
