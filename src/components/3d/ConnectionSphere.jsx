import { useMemo, useRef } from 'react'
import { Float, Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ConnectionSphere({ reducedMotion = false, detail = 2 }) {
  const groupRef = useRef(null)

  const nodes = useMemo(() => {
    const count = 44
    const radius = 1.55
    const points = []

    for (let index = 0; index < count; index += 1) {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5)
      points.push(
        new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        ),
      )
    }

    return points
  }, [])

  const connections = useMemo(() => {
    const output = []

    nodes.forEach((point, index) => {
      for (let offset = index + 1; offset < nodes.length; offset += 1) {
        const candidate = nodes[offset]
        if (point.distanceTo(candidate) < 1.2) {
          output.push([point.toArray(), candidate.toArray()])
        }
      }
    })

    return output.slice(0, 72)
  }, [nodes])

  useFrame((state, delta) => {
    if (!groupRef.current || reducedMotion) {
      return
    }

    groupRef.current.rotation.y += delta * 0.12
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12
  })

  return (
    <Float speed={reducedMotion ? 0 : 0.9} rotationIntensity={0.35} floatIntensity={0.5}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[1.55, detail]} />
          <meshBasicMaterial color="#7B61FF" wireframe transparent opacity={0.18} />
        </mesh>

        {connections.map((points, index) => (
          <Line key={`line-${index}`} points={points} color="#00FFD1" transparent opacity={0.22} lineWidth={0.8} />
        ))}

        {nodes.map((position, index) => (
          <mesh key={`node-${index}`} position={position.toArray()}>
            <sphereGeometry args={[0.038, 10, 10]} />
            <meshBasicMaterial color="#F0F4FF" transparent opacity={0.85} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}
