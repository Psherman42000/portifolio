import { Download } from 'lucide-react'
import useTerminalTyping from '../../hooks/useTerminalTyping'

export default function ExperienceTerminalPanel({ section, cv }) {
  const { output } = useTerminalTyping(section.log, 9, true)

  return (
    <div className="panel-section experience-panel">
      <div className="terminal-shell">
        <div className="terminal-shell__bar">
          <span className="terminal-dot terminal-dot-red" />
          <span className="terminal-dot terminal-dot-yellow" />
          <span className="terminal-dot terminal-dot-green" />
          <span className="terminal-shell__title">pedro-career.log</span>
        </div>
        <div className="terminal-shell__body">
          <p className="terminal-command">{section.terminalCommand}</p>
          <pre>{output}</pre>
        </div>
      </div>

      <a href={cv.file} target="_blank" rel="noreferrer" className="terminal-download" data-interactive="true">
        <Download size={16} />
        <span>{section.downloadCommand}</span>
      </a>
    </div>
  )
}

