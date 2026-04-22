import IntegrationMap from '../projects/IntegrationMap'

export default function ProjectDetailPanel({ project, isMobile, section }) {
  return (
    <div className="panel-section project-detail-panel">
      <p className="panel-lead">{project.summary}</p>
      {project.traffic ? <div className="project-traffic-large">{project.traffic}</div> : null}
      <IntegrationMap project={project} compact={isMobile} showLegend compactArrow={section.compactArrow} />

      {project.metrics ? (
        <div className="project-metrics-list">
          {project.metrics.map((metric) => (
            <div key={metric} className="project-metrics-item">
              {metric}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

