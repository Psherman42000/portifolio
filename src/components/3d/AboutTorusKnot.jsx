import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function KnotMesh() {
  const ref = useRef(null)

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.22
    ref.current.rotation.y += delta * 0.34
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.16
  })

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.1, 0.26, 220, 24]} />
      <meshBasicMaterial color="#00FFD1" wireframe transparent opacity={0.76} />
    </mesh>
  )
}

export default function AboutTorusKnot() {
  return (
    <div className="mini-canvas-shell" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 38 }} dpr={[1, 1.4]}>
        <ambientLight intensity={0.35} />
        <KnotMesh />
      </Canvas>
    </div>
  )
}

