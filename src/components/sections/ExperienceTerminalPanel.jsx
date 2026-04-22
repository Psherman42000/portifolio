import { Download } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ExperienceTerminalPanel({ section, cv }) {
  return (
    <div className="panel-section experience-panel">
      <div className="experience-shell">
        <div className="experience-shell__header">
          <div className="experience-shell__signal">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
          </div>
          <span className="experience-shell__title">{section.signalTitle}</span>
        </div>

        <div className="experience-shell__body">
          <p className="experience-shell__command">{section.signalCommand}</p>
          <p className="experience-shell__intro">{section.intro}</p>

          <div className="experience-highlights">
            {section.highlights.map((item) => (
              <div key={item} className="experience-highlight-pill">
                {item}
              </div>
            ))}
          </div>

          <div className="experience-timeline">
            {section.entries.map((entry, index) => (
              <motion.article
                key={`${entry.period}-${entry.role}`}
                className="experience-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              >
                <div className="experience-card__period">{entry.period}</div>
                <div className="experience-card__copy">
                  <h3>{entry.role}</h3>
                  <p className="experience-card__company">{entry.company}</p>
                  <p className="experience-card__summary">{entry.summary}</p>
                  <ul className="experience-card__bullets">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <a href={cv.file} target="_blank" rel="noreferrer" className="terminal-download" data-interactive="true">
        <Download size={16} />
        <span>{section.downloadCommand}</span>
      </a>
    </div>
  )
}
