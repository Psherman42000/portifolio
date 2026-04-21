import SectionHeading from '../ui/SectionHeading'
import TimelineItem from '../ui/TimelineItem'

export default function ExperienceSection({ experience }) {
  return (
    <section id="experiencia" className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow={experience.eyebrow} title={experience.title} description={experience.description} />

        <div className="relative mt-14 pl-1 md:pl-4">
          <div className="absolute left-[10px] top-3 bottom-3 w-px bg-[linear-gradient(180deg,rgba(0,255,209,0.3),rgba(123,97,255,0.65),transparent)] md:left-[14px]" />
          <div className="space-y-6">
            {experience.items.map((item, index) => (
              <TimelineItem key={`${item.role}-${item.period}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
