import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import GraphConnections from './GraphConnections'
import GraphNode from './GraphNode'

function GraphRig({ graph, activeNodeId, onOpenNode, graphIntensity, isMobile, glitchOn }) {
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
      cameraTarget.current.set(activeNode.position[0] * (isMobile ? 0.24 : 0.44), activeNode.position[1] * (isMobile ? 0.16 : 0.28), isMobile ? 9.4 : 6.7)
      lookTarget.current.set(activeNode.position[0] * 0.18, activeNode.position[1] * 0.12, 0)
      return
    }

    cameraTarget.current.set(0, isMobile ? 0.44 : 0.12, isMobile ? 10.9 : 8.2)
    lookTarget.current.set(0, 0, 0)
  }, [activeNodeId, graphNodes, isMobile])

  useFrame((state) => {
    state.camera.position.lerp(cameraTarget.current, 0.06)
    state.camera.lookAt(lookTarget.current)
  })

  return (
    <group>
      <ambientLight intensity={0.65} />
      <pointLight position={[0, 3, 7]} intensity={12} color="#00FFD1" />
      <pointLight position={[3, -4, 4]} intensity={8} color="#7B61FF" />
      <GraphConnections centerPosition={centerNode.position} nodes={graphNodes} intensity={graphIntensity} isMobile={isMobile} />
      <GraphNode
        node={centerNode}
        isActive={!activeNodeId}
        isHovered={hoveredNodeId === 'root'}
        onHover={setHoveredNodeId}
        onBlur={() => setHoveredNodeId(null)}
        onSelect={() => {}}
        glitchOn={glitchOn}
        isMobile={isMobile}
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
          isMobile={isMobile}
        />
      ))}
    </group>
  )
}

export default function GraphScene({ graph, activeNodeId, onOpenNode, graphIntensity = 1, dpr = 1.25, isMobile = false, glitchOn = false }) {
  return (
    <div className="graph-canvas-shell">
      <Canvas camera={{ position: [0, isMobile ? 0.44 : 0.12, isMobile ? 10.9 : 8.2], fov: isMobile ? 61 : 42 }} dpr={[1, dpr]}>
        <Suspense fallback={null}>
          <GraphRig graph={graph} activeNodeId={activeNodeId} onOpenNode={onOpenNode} graphIntensity={graphIntensity} isMobile={isMobile} glitchOn={glitchOn} />
        </Suspense>
      </Canvas>
    </div>
  )
}

