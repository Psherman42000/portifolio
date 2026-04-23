import * as THREE from 'three'

function hashString(input) {
  let hash = 0
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index)
    hash |= 0
  }
  return hash >>> 0
}

export function getNodeOrbit(node, time, isMobile = false) {
  const [baseX, baseY, baseZ] = node.position
  const phase = (hashString(node.id) % 360) * (Math.PI / 180)
  const speed = (isMobile ? 0.18 : 0.24) + (hashString(`${node.id}-speed`) % 9) * 0.012
  const orbitRadius = Math.max(Math.hypot(baseX, baseY) * 0.9, isMobile ? 2.2 : 3.05)
  const angle = phase + time * speed
  const vertical = Math.sin(time * (speed * 1.4) + phase * 0.7) * (isMobile ? 0.08 : 0.12)
  const depth = Math.cos(time * (speed * 1.1) + phase * 1.2) * (isMobile ? 0.05 : 0.08)

  return [
    Math.cos(angle) * orbitRadius,
    Math.sin(angle) * orbitRadius,
    baseZ + vertical + depth,
  ]
}

export function getNodeOrbitMeta(node) {
  const phase = (hashString(node.id) % 360) * (Math.PI / 180)
  return {
    phase,
    radius: Math.max(Math.hypot(node.position[0], node.position[1]), 0.9),
    speed: 0.14 + (hashString(`${node.id}-speed`) % 12) * 0.004,
    wobble: 0.08,
  }
}

export function getRootBodyRadius(isMobile = false) {
  return isMobile ? 0.56 : 0.66
}

export function getNodeBodyRadius(node, isMobile = false) {
  if (node.id === 'root') {
    return getRootBodyRadius(isMobile)
  }

  return isMobile ? 0.31 : 0.38
}

export function getConnectionEndpoints(centerPosition, node, time, isMobile = false) {
  const target = getNodeOrbit(node, time, isMobile)
  const startVector = new THREE.Vector3(...centerPosition)
  const endVector = new THREE.Vector3(...target)
  const direction = endVector.clone().sub(startVector)
  const distance = direction.length() || 1
  direction.multiplyScalar(1 / distance)

  const rootRadius = getRootBodyRadius(isMobile)
  const nodeRadius = getNodeBodyRadius(node, isMobile)

  const start = startVector.clone().addScaledVector(direction, rootRadius * 0.98)
  const end = endVector.clone().addScaledVector(direction, -nodeRadius * 0.98)

  return { start, end, target }
}
