import { motion } from 'framer-motion'
import Headline from './Headline'
import { skills } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 0.6 } },
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 phone:px-4 phone:py-16">
      <p className="eyebrow mb-4">[ {skills.eyebrow} ]</p>
      <Headline
        segments={skills.headline}
        as="h2"
        className="mb-12 text-4xl font-semibold text-ink tablet:text-3xl phone:mb-8 phone:text-2xl"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.12 }}
        className="flex flex-col gap-4"
      >
        <motion.div
          variants={reveal}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="flex items-center gap-5 rounded-2xl bg-navy p-8 text-cream phone:flex-col phone:items-start phone:gap-3"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream/10 text-xl">
            {skills.featured.icon}
          </span>
          <div>
            <h3 className="text-xl font-semibold">{skills.featured.title}</h3>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-cream/70">
              {skills.featured.description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 tablet:grid-cols-1">
          {skills.grid.map((s) => (
            <motion.div
              key={s.no}
              variants={reveal}
              whileHover={{ y: -3, backgroundColor: '#efece3' }}
              transition={{ duration: 0.25, ease: EASE }}
              className="rounded-2xl bg-cream-dim p-6"
            >
              <p className="eyebrow">[ {s.no} ]</p>
              <h4 className="mt-3 text-lg font-semibold text-ink">{s.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}