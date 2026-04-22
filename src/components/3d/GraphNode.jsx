import { Html } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

export default function GraphNode({ node, isActive, isHovered, onHover, onBlur, onSelect, glitchOn = false, isMobile = false }) {
  const coreRef = useRef(null)
  const glowRef = useRef(null)
  const isRoot = node.id === 'root'
  const hitRadius = isRoot ? (isMobile ? 1.02 : 1.16) : isMobile ? 0.94 : 0.82
  const coreRadius = isRoot ? (isMobile ? 0.56 : 0.66) : isMobile ? 0.31 : 0.38
  const glowRadius = isRoot ? (isMobile ? 0.62 : 0.72) : isMobile ? 0.34 : 0.42
  const labelOffsetY = isRoot ? (isMobile ? 0.86 : 0.98) : isMobile ? -0.58 : -0.72
  const scaleSpring = useSpring({
    scale: isActive ? 1.4 : isHovered ? 1.18 : 1,
    config: { mass: 1, tension: 220, friction: 18 },
  })

  const emissiveIntensity = isActive ? 2.8 : isHovered ? 1.85 : 0.94
  const outerGlowSize = isRoot ? (isActive ? (isMobile ? 1.34 : 1.6) : isMobile ? 1.18 : 1.4) : isActive ? (isMobile ? 1.18 : 1.34) : isMobile ? 1.04 : 1.18
  const labelClass = useMemo(
    () => `graph-node-chip ${isMobile ? 'graph-node-chip-mobile' : ''} ${isActive ? 'graph-node-chip-active' : ''} ${isHovered ? 'graph-node-chip-hovered' : ''}`,
    [isActive, isHovered, isMobile],
  )

  const triggerSelect = (event) => {
    event.stopPropagation()
    onSelect(node.id)
  }

  useFrame((state, delta) => {
    if (!isRoot) return
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.22
      coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12
    }

    if (glowRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.35) * 0.035
      glowRef.current.scale.setScalar(outerGlowSize * pulse)
    }
  })

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
        <sphereGeometry args={[hitRadius, 24, 24]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <animated.mesh ref={coreRef} scale={scaleSpring.scale} onClick={triggerSelect}>
        <sphereGeometry args={[coreRadius, isRoot ? 36 : 28, isRoot ? 36 : 28]} />
        <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={emissiveIntensity} roughness={0.28} metalness={0.2} />
      </animated.mesh>

      <mesh ref={glowRef} scale={outerGlowSize}>
        <sphereGeometry args={[glowRadius, 22, 22]} />
        <meshBasicMaterial color={node.color} transparent opacity={isActive ? 0.14 : isHovered ? 0.1 : 0.04} />
      </mesh>

      <Html center distanceFactor={isRoot ? (isMobile ? 10.4 : 8.4) : isMobile ? 12.4 : 10.2} position={[0, labelOffsetY, 0]}>
        {isRoot ? (
          <div className={`graph-center-label ${isMobile ? 'graph-center-label-mobile' : ''} ${isActive ? 'graph-center-label-active' : ''} ${glitchOn ? 'graph-center-label-glitch' : ''}`}>
            <span>{node.label}</span>
          </div>
        ) : isMobile ? null : (
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
