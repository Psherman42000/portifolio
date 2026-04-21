import { useMemo, useState } from 'react'

export default function SkillsHexPanel({ section }) {
  const allSkills = useMemo(() => section.groups.flatMap((group) => group.items.map((item) => ({ ...item, group: group.title, color: group.color }))), [section.groups])
  const [selectedSkill, setSelectedSkill] = useState(allSkills[0])

  return (
    <div className="panel-section skills-panel">
      <div className="skills-panel__layout">
        <div className="skills-hex-grid">
          {section.groups.map((group) => (
            <div key={group.title} className="skills-group-block">
              <div className="skills-group-header">
                <span className="skills-group-signal" style={{ background: group.color }} />
                <h4>{group.title}</h4>
              </div>
              <div className="skills-group-grid">
                {group.items.map((skill) => {
                  const Icon = skill.icon
                  const active = selectedSkill.name === skill.name
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      className={`hex-skill ${active ? 'hex-skill-active' : ''}`}
                      style={{ '--skill-color': group.color }}
                      onClick={() => setSelectedSkill({ ...skill, group: group.title, color: group.color })}
                      data-interactive="true"
                    >
                      <span className="hex-skill__inner">
                        <Icon size={18} />
                        <span>{skill.name}</span>
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <aside className="skill-detail-panel">
          <p className="skill-detail-panel__group" style={{ color: selectedSkill.color }}>
            {selectedSkill.group}
          </p>
          <h4>{selectedSkill.name}</h4>
          <p>{selectedSkill.description}</p>
          <div className="skill-level-pill">Nivel: {selectedSkill.level}</div>
        </aside>
      </div>
    </div>
  )
}
