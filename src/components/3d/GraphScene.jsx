import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import GraphConnections from './GraphConnections'
import GraphNode from './GraphNode'

function GraphRig({ graph, activeNodeId, onOpenNode, graphIntensity, isMobile, glitchOn }) {
  const groupRef = useRef(null)
  const [hoveredNodeId, setHoveredNodeId] = useState(null)
  const cameraTarget = useRef(new THREE.Vector3(0, 0, 8.6))
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0))
  const centerNode = graph.center

  const graphNodes = useMemo(
    () =>
      graph.nodes.map((node) => ({
        ...node,
        position: isMobile ? node.mobilePosition : node.position,
      })),
    [graph.nodes, isMobile],
  )

  useEffect(() => {
    const activeNode = graphNodes.find((node) => node.id === activeNodeId)
    if (activeNode) {
      cameraTarget.current.set(activeNode.position[0] * 0.44, activeNode.position[1] * 0.28, isMobile ? 7.8 : 6.7)
      lookTarget.current.set(activeNode.position[0] * 0.18, activeNode.position[1] * 0.12, 0)
      return
    }

    cameraTarget.current.set(0, 0.12, isMobile ? 8.8 : 8.2)
    lookTarget.current.set(0, 0, 0)
  }, [activeNodeId, graphNodes, isMobile])

  useFrame((state, delta) => {
    if (groupRef.current && !isMobile) {
      groupRef.current.rotation.y += delta * 0.06 * graphIntensity
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.09
    }

    state.camera.position.lerp(cameraTarget.current, 0.06)
    state.camera.lookAt(lookTarget.current)
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.65} />
      <pointLight position={[0, 3, 7]} intensity={12} color="#00FFD1" />
      <pointLight position={[3, -4, 4]} intensity={8} color="#7B61FF" />
      <GraphConnections centerPosition={centerNode.position} nodes={graphNodes} intensity={graphIntensity} />
      <GraphNode
        node={centerNode}
        isActive={!activeNodeId}
        isHovered={hoveredNodeId === 'root'}
        onHover={setHoveredNodeId}
        onBlur={() => setHoveredNodeId(null)}
        onSelect={() => {}}
        glitchOn={glitchOn}
      />
      {graphNodes.map((node) => (
        <GraphNode
          key={node.id}
          node={node}
          isActive={activeNodeId === node.id}
          isHovered={hoveredNodeId === node.id}
          onHover={setHoveredNodeId}
          onBlur={() => setHoveredNodeId(null)}
          onSelect={onOpenNode}
        />
      ))}
    </group>
  )
}

export default function GraphScene({ graph, activeNodeId, onOpenNode, graphIntensity = 1, dpr = 1.25, isMobile = false, glitchOn = false }) {
  return (
    <div className="graph-canvas-shell">
      <Canvas camera={{ position: [0, 0.12, isMobile ? 8.8 : 8.2], fov: isMobile ? 52 : 42 }} dpr={[1, dpr]}>
        <Suspense fallback={null}>
          <GraphRig graph={graph} activeNodeId={activeNodeId} onOpenNode={onOpenNode} graphIntensity={graphIntensity} isMobile={isMobile} glitchOn={glitchOn} />
        </Suspense>
      </Canvas>
    </div>
  )
}

