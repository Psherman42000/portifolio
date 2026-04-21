import { Html } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useMemo } from 'react'

export default function GraphNode({ node, isActive, isHovered, onHover, onBlur, onSelect, glitchOn = false }) {
  const scaleSpring = useSpring({
    scale: isActive ? 1.4 : isHovered ? 1.16 : 1,
    config: { mass: 1, tension: 220, friction: 18 },
  })

  const emissiveIntensity = isActive ? 2.6 : isHovered ? 1.6 : 0.92
  const glowSize = isActive ? 1.52 : 1.18
  const labelClass = useMemo(() => `graph-tooltip ${isHovered || isActive ? 'graph-tooltip-visible' : ''}`, [isActive, isHovered])

  return (
    <group position={node.position}>
      <animated.mesh
        scale={scaleSpring.scale}
        onPointerOver={(event) => {
          event.stopPropagation()
          onHover(node.id)
        }}
        onPointerOut={onBlur}
        onClick={(event) => {
          event.stopPropagation()
          onSelect(node.id)
        }}
      >
        <sphereGeometry args={[node.id === 'root' ? 0.66 : 0.36, node.id === 'root' ? 36 : 28, node.id === 'root' ? 36 : 28]} />
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={emissiveIntensity} roughness={0.3} metalness={0.18} />
      </animated.mesh>

      <mesh scale={glowSize}>
        <sphereGeometry args={[node.id === 'root' ? 0.72 : 0.42, 20, 20]} />
        <meshBasicMaterial color={node.color} transparent opacity={isActive ? 0.12 : isHovered ? 0.08 : 0.035} />
      </mesh>

      <Html center distanceFactor={node.id === 'root' ? 8.2 : 9.6} position={[0, node.id === 'root' ? 0.96 : 0.68, 0]}>
        <div className={node.id === 'root' ? `graph-center-label ${isActive ? 'graph-center-label-active' : ''} ${glitchOn ? 'graph-center-label-glitch' : ''}` : labelClass}>
          <span>{node.label}</span>
        </div>
      </Html>
    </group>
  )
}


