import { Html } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useMemo } from 'react'

export default function GraphNode({ node, isActive, isHovered, onHover, onBlur, onSelect, glitchOn = false }) {
  const scaleSpring = useSpring({
    scale: isActive ? 1.4 : isHovered ? 1.18 : 1,
    config: { mass: 1, tension: 220, friction: 18 },
  })

  const emissiveIntensity = isActive ? 2.8 : isHovered ? 1.85 : 0.94
  const outerGlowSize = node.id === 'root' ? (isActive ? 1.6 : 1.4) : isActive ? 1.34 : 1.18
  const labelClass = useMemo(
    () => `graph-node-chip ${isActive ? 'graph-node-chip-active' : ''} ${isHovered ? 'graph-node-chip-hovered' : ''}`,
    [isActive, isHovered],
  )

  const triggerSelect = (event) => {
    event.stopPropagation()
    onSelect(node.id)
  }

  return (
    <group position={node.position}>
      <mesh
        onPointerOver={(event) => {
          event.stopPropagation()
          onHover(node.id)
        }}
        onPointerOut={(event) => {
          event.stopPropagation()
          onBlur()
        }}
        onClick={triggerSelect}
      >
        <sphereGeometry args={[node.id === 'root' ? 1.16 : 0.82, 24, 24]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <animated.mesh scale={scaleSpring.scale} onClick={triggerSelect}>
        <sphereGeometry args={[node.id === 'root' ? 0.66 : 0.38, node.id === 'root' ? 36 : 28, node.id === 'root' ? 36 : 28]} />
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={emissiveIntensity} roughness={0.28} metalness={0.2} />
      </animated.mesh>

      <mesh scale={outerGlowSize}>
        <sphereGeometry args={[node.id === 'root' ? 0.72 : 0.42, 22, 22]} />
        <meshBasicMaterial color={node.color} transparent opacity={isActive ? 0.14 : isHovered ? 0.1 : 0.04} />
      </mesh>

      <Html center distanceFactor={node.id === 'root' ? 8.4 : 10.2} position={[0, node.id === 'root' ? 0.98 : -0.72, 0]}>
        {node.id === 'root' ? (
          <div className={`graph-center-label ${isActive ? 'graph-center-label-active' : ''} ${glitchOn ? 'graph-center-label-glitch' : ''}`}>
            <span>{node.label}</span>
          </div>
        ) : (
          <button
            type="button"
            className={labelClass}
            style={{ '--node-color': node.color }}
            onClick={triggerSelect}
            onMouseEnter={() => onHover(node.id)}
            onMouseLeave={() => onBlur()}
            data-interactive="true"
          >
            {node.label}
          </button>
        )}
      </Html>
    </group>
  )
}
