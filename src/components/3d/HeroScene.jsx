import { AdaptiveDpr, Grid } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useDeviceTier } from '../../hooks/useDeviceTier'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import ConnectionSphere from './ConnectionSphere'
import FloatingParticles from './FloatingParticles'
import SceneLights from './SceneLights'

export default function HeroScene() {
  const device = useDeviceTier()
  const reducedMotion = usePrefersReducedMotion()
  const lowMotion = reducedMotion || device.tier === 'low'

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={device.dpr}
        camera={{ position: [0, 0, 5.4], fov: 48 }}
        gl={{ antialias: !lowMotion, alpha: true }}
      >
        <color attach="background" args={['#050810']} />
        <fog attach="fog" args={['#050810', 5.6, 11]} />
        <Suspense fallback={null}>
          <SceneLights />
          <ConnectionSphere reducedMotion={lowMotion} detail={device.tier === 'high' ? 2 : 1} />
          <FloatingParticles count={device.particleCount} reducedMotion={lowMotion} />
          {device.shouldRenderHeavyEffects && !reducedMotion ? (
            <Grid
              position={[0, -2.3, 0]}
              args={[20, 20]}
              cellColor="#091122"
              sectionColor="#00FFD1"
              fadeDistance={18}
              fadeStrength={1.5}
              cellThickness={0.7}
              sectionThickness={1.4}
              infiniteGrid
            />
          ) : null}
          <AdaptiveDpr pixelated />
        </Suspense>
      </Canvas>
    </div>
  )
}
