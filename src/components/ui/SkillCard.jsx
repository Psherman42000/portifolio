import { motion } from 'framer-motion'

export default function SkillCard({ skill, offset = false }) {
  const Icon = skill.icon

  return (
    <motion.div
      whileHover={{ y: -8, rotateX: 6, rotateY: -5 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`panel panel-hover rounded-[1.6rem] p-5 ${offset ? 'md:translate-y-6' : ''}`}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,rgba(0,255,209,0.15),rgba(123,97,255,0.14))] text-[var(--accent)]">
        <Icon size={20} />
      </div>
      <h4 className="font-display text-lg text-white">{skill.name}</h4>
    </motion.div>
  )
}
