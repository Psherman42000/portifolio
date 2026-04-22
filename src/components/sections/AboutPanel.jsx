import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCountUp } from '../../hooks/useCountUp'
import AboutTorusKnot from '../3d/AboutTorusKnot'

function StatChip({ stat, start }) {
  const value = useCountUp(stat.value, { start, duration: 1600 })

  return (
    <div className="about-stat">
      <strong>
        {stat.prefix}
        {value}
        {stat.suffix}
      </strong>
      <span>{stat.label}</span>
    </div>
  )
}

export default function AboutPanel({ section }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div className="panel-section about-panel" ref={ref}>
      <div className="about-panel__content">
        {section.blocks.map((block, index) => (
          <motion.div
            key={block.content}
            className={`about-block about-block-${block.type}`}
            initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0.2 }}
            animate={inView ? { clipPath: 'inset(0% 0 0 0)', opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
          >
            {block.content.split('\n').map((line) => (
              <p key={line}>{line}</p>
            ))}
          </motion.div>
        ))}

        <div className="about-stats-grid">
          {section.stats.map((stat) => (
            <StatChip key={stat.label} stat={stat} start={inView} />
          ))}
        </div>
      </div>

      <motion.div className="about-panel__visual" initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.75, delay: 0.15 }}>
        <AboutTorusKnot />
        <div className="about-panel__visual-copy">
          <span>{section.visualLabel}</span>
          <span>{section.visualDescription}</span>
        </div>
      </motion.div>
    </div>
  )
}

