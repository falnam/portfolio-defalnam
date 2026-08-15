import { motion } from 'framer-motion'
import { stats } from '../data/content'

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.44, 0, 0.56, 1] } },
}

export default function Stats() {
  return (
    <section className="border-y border-dashed border-line">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: 0.09 }}
        className="mx-auto grid max-w-6xl grid-cols-4 phone:grid-cols-2 phone:gap-y-8"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={item}
            className={`px-6 py-10 text-center ${
              i !== 0 ? 'dash-line-v tablet:border-l tablet:border-dashed tablet:border-line' : ''
            } phone:border-l-0`}
          >
            <div className="font-mono text-4xl font-medium text-ink/25 tablet:text-3xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-widest2 text-muted">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
