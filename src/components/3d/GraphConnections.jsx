import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { getConnectionEndpoints } from './orbit'

const FLOW_COLORS = {
  catalog: '#00FFD1',
  orders: '#7B61FF',
  billing: '#FF6B35',
}

function getLinePoints(start, end) {
  const startVec = new THREE.Vector3(...start)
  const endVec = new THREE.Vector3(...end)
  const mid = startVec.clone().lerp(endVec, 0.5)
  mid.y += 0.22
  const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
  return curve.getPoints(26)
}

function DataPulse({ points, edge, index, intensity = 1 }) {
  const pulseRef = useRef(null)
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])

  useFrame((state) => {
    if (!pulseRef.current) return
    const speed = edge.type === 'orders' ? 0.36 : edge.type === 'catalog' ? 0.2 : 0.14
    const offset = index * 0.2 + (edge.offset ?? 0) * 0.002
    const t = (state.clock.elapsedTime * speed + offset) % 1
    const position = curve.getPointAt(t)
    pulseRef.current.position.copy(position)
  })

  return (
    <mesh ref={pulseRef}>
      <sphereGeometry args={[0.055 * intensity, 18, 18]} />
      <meshBasicMaterial color={FLOW_COLORS[edge.type]} />
    </mesh>
  )
}

export default function GraphConnections({ centerPosition, nodes, intensity = 1, isMobile = false }) {
  const pulseCount = intensity < 0.7 ? 1 : 2
  const [orbitTick, setOrbitTick] = useState(0)

  useFrame((state) => {
    setOrbitTick(state.clock.elapsedTime)
  })

  return nodes.map((node) => {
    const { start, end } = getConnectionEndpoints(centerPosition, node, orbitTick, isMobile)
    const points = getLinePoints(start.toArray(), end.toArray())

    return (
      <group key={`edge-${node.id}`}>
        <Line points={points} color={node.color} transparent opacity={0.32 * intensity} lineWidth={1.2} />
        {Array.from({ length: pulseCount }, (_, pulseIndex) => (
          <DataPulse
            key={`${node.id}-pulse-${pulseIndex}`}
            points={points}
            edge={{ type: pulseIndex % 2 === 0 ? 'catalog' : 'orders' }}
            index={pulseIndex}
            intensity={intensity}
          />
        ))}
      </group>
    )
  })
}
