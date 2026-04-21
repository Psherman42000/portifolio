import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SkillCard from '../ui/SkillCard'

export default function SkillsSection({ skills, sectionMeta }) {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow={sectionMeta.eyebrow} title={sectionMeta.title} description={sectionMeta.description} />

        <div className="mt-12 grid gap-6">
          {skills.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.05}>
              <div className="panel rounded-[2rem] p-6 md:p-7">
                <div className="max-w-2xl">
                  <h3 className="font-display text-2xl text-white">{group.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[var(--muted)]">{group.description}</p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {group.items.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} offset={index % 2 !== 0 && group.items.length > 2} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
