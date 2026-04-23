const TYPE_META = {
  catalog: { color: '#00FFD1', duration: '3s', label: 'Catalogo' },
  orders: { color: '#7B61FF', duration: '1.5s', label: 'Pedidos' },
  billing: { color: '#FF6B35', duration: '4s', label: 'Faturamento' },
}

function edgePath(from, to) {
  const controlY = Math.min(from.y, to.y) - 36
  const controlX = (from.x + to.x) / 2
  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`
}

function NodeBadge({ node }) {
  const initial = node.label.charAt(0)

  return (
    <g>
      <circle cx={node.x} cy={node.y} r={node.kind === 'hub' ? 24 : node.kind === 'primary' ? 22 : 18} className={`integration-node integration-node-${node.kind}`} />
      <text x={node.x} y={node.y + 4} textAnchor="middle" className="integration-node__initial">
        {initial}
      </text>
      <text x={node.x} y={node.y + (node.kind === 'partner' ? 32 : 38)} textAnchor="middle" className="integration-node__label">
        {node.label}
      </text>
    </g>
  )
}

export default function IntegrationMap({ project, compact = false, showLegend = true, compactArrow = '->' }) {
  if (compact) {
    return (
      <div className="integration-map-compact">
        <div className="integration-map-compact__header">
          <span className="integration-map-compact__pulse" />
          <span>Fluxo simplificado para mobile</span>
        </div>

        <div className="integration-map-compact__stack">
          {project.nodes.map((node) => (
            <div key={node.id} className={`compact-node compact-node-${node.kind}`} style={{ '--node-color': node.kind === 'hub' ? '#7B61FF' : node.kind === 'primary' ? '#00FFD1' : '#E8F0FF' }}>
              <span className="compact-node__dot" />
              <span>{node.label}</span>
            </div>
          ))}
        </div>

        {showLegend && project.legend ? (
          <div className="integration-legend integration-legend-compact">
            {project.legend.map((item) => (
              <span key={item.label} className="integration-legend__item">
                <i style={{ background: item.color }} />
                {item.label}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    )
  }

  const nodeMap = Object.fromEntries(project.nodes.map((node) => [node.id, node]))

  return (
    <div className="integration-map-shell">
      <svg viewBox="0 0 760 560" className="integration-map" role="img" aria-label={project.ariaLabel ?? project.name}>
        <defs>
          {project.edges.map((edge, index) => {
            const from = nodeMap[edge.from]
            const to = nodeMap[edge.to]
            return <path key={`path-${edge.from}-${edge.to}-${index}`} id={`path-${project.id}-${index}`} d={edgePath(from, to)} fill="none" />
          })}
        </defs>

        {project.edges.map((edge, index) => {
          const from = nodeMap[edge.from]
          const to = nodeMap[edge.to]
          const meta = TYPE_META[edge.type]
          return (
            <g key={`${project.id}-edge-${index}`}>
              <path d={edgePath(from, to)} className="integration-edge" stroke={meta.color} strokeWidth="2.4" fill="none" strokeOpacity="0.42" />
              {[0, 1, 2].map((pulseIndex) => (
                <circle key={`${project.id}-${index}-${pulseIndex}`} r="3.3" fill={meta.color}>
                  <animateMotion dur={meta.duration} repeatCount="indefinite" begin={`${pulseIndex * 0.45}s`}>
                    <mpath href={`#path-${project.id}-${index}`} />
                  </animateMotion>
                </circle>
              ))}
            </g>
          )
        })}

        {project.nodes.map((node) => (
          <NodeBadge key={node.id} node={node} />
        ))}
      </svg>

      {showLegend && project.legend ? (
        <div className="integration-legend">
          {project.legend.map((item) => (
            <span key={item.label} className="integration-legend__item">
              <i style={{ background: item.color }} />
              {item.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  )
}

