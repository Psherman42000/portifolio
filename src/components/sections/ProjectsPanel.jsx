import IntegrationMap from '../projects/IntegrationMap'

export default function ProjectsPanel({ section, onOpenProject, isMobile }) {
  return (
    <div className="panel-section projects-panel">
      <p className="panel-lead">{section.description}</p>

      <div className="projects-grid">
        {section.cards.map((project) => (
          <article key={project.id} className={`project-card ${project.size === 'full' ? 'project-card-full' : ''}`}>
            <header className="project-card__header">
              <div>
                <h4>{project.name}</h4>
                <p>{project.badge}</p>
              </div>
              {project.traffic ? <span className="project-traffic">{project.traffic}</span> : null}
            </header>

            <p className="project-card__summary">{project.summary}</p>
            <IntegrationMap project={project} compact={isMobile} showLegend={project.size === 'full'} compactArrow={section.compactArrow} />

            <div className="project-card__actions">
              {project.environment ? <span className="project-pill">{section.environmentLabel}: {project.environment}</span> : null}
              <button type="button" className="project-open-button" onClick={() => onOpenProject(project)} data-interactive="true">
                {section.detailsLabel}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
