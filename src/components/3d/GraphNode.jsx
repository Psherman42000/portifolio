import { Html } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/three'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { getNodeOrbit } from './orbit'

export default function GraphNode({ node, isActive, isHovered, onHover, onBlur, onSelect, glitchOn = false, isMobile = false }) {
  const orbitRef = useRef(null)
  const labelRef = useRef(null)
  const coreRef = useRef(null)
  const glowRef = useRef(null)
  const isRoot = node.id === 'root'
  const hitRadius = isRoot ? (isMobile ? 1.02 : 1.16) : isMobile ? 1.02 : 0.92
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
    if (isRoot) {
      if (coreRef.current) {
        coreRef.current.rotation.y += delta * 0.22
        coreRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.12
      }

      if (glowRef.current) {
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.35) * 0.035
        glowRef.current.scale.setScalar(outerGlowSize * pulse)
      }
      return
    }

    if (orbitRef.current) {
      const [x, y, z] = getNodeOrbit(node, state.clock.elapsedTime, isMobile)
      orbitRef.current.position.set(x, y, z)

      if (labelRef.current) {
        const direction = new THREE.Vector3(x, y, z).normalize()
        const labelDistance = isMobile ? 0.9 : 1.12
        labelRef.current.position.copy(direction.multiplyScalar(labelDistance))
      }
    }
  })

  return (
    <>
      {isRoot ? (
        <group position={node.position}>
          <Html center distanceFactor={isMobile ? 10.4 : 8.4} position={[0, labelOffsetY, 0]}>
            <div className={`graph-center-label ${isMobile ? 'graph-center-label-mobile' : ''} ${isActive ? 'graph-center-label-active' : ''} ${glitchOn ? 'graph-center-label-glitch' : ''}`}>
              <span>{node.label}</span>
            </div>
          </Html>

          <animated.mesh
            ref={coreRef}
            scale={scaleSpring.scale}
            onClick={triggerSelect}
            onPointerOver={(event) => {
              event.stopPropagation()
              onHover(node.id)
            }}
            onPointerOut={(event) => {
              event.stopPropagation()
              onBlur()
            }}
          >
            <sphereGeometry args={[coreRadius, 36, 36]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={emissiveIntensity} roughness={0.22} metalness={0.2} />
          </animated.mesh>

          <mesh ref={glowRef} scale={outerGlowSize} onClick={triggerSelect}>
            <sphereGeometry args={[glowRadius, 26, 26]} />
            <meshBasicMaterial color={node.color} transparent opacity={isActive ? 0.14 : isHovered ? 0.1 : 0.04} />
          </mesh>
        </group>
      ) : null}

      {!isRoot ? (
        <group ref={orbitRef} position={[0, 0, 0]}>
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

          {!isMobile ? (
            <group ref={labelRef}>
              <Html center distanceFactor={10.2} position={[0, 0, 0]}>
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
              </Html>
            </group>
          ) : null}

          <animated.mesh
            ref={coreRef}
            scale={scaleSpring.scale}
            onClick={triggerSelect}
            onPointerOver={(event) => {
              event.stopPropagation()
              onHover(node.id)
            }}
            onPointerOut={(event) => {
              event.stopPropagation()
              onBlur()
            }}
          >
            <sphereGeometry args={[coreRadius, 28, 28]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={emissiveIntensity} roughness={0.28} metalness={0.2} />
          </animated.mesh>

          <mesh ref={glowRef} scale={outerGlowSize} onClick={triggerSelect}>
            <sphereGeometry args={[glowRadius, 22, 22]} />
            <meshBasicMaterial color={node.color} transparent opacity={isActive ? 0.14 : isHovered ? 0.1 : 0.04} />
          </mesh>
        </group>
      ) : null}
    </>
  )
}
