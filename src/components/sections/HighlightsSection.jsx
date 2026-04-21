import HighlightCard from '../ui/HighlightCard'
import SectionHeading from '../ui/SectionHeading'

export default function HighlightsSection({ highlights }) {
  return (
    <section id="realizacoes" className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow={highlights.eyebrow} title={highlights.title} description={highlights.description} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {highlights.items.map((item, index) => (
            <HighlightCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
