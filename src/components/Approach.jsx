import { motion } from 'framer-motion'
import Headline from './Headline'
import { approach } from '../data/content'

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.32, duration: 0.6 },
  },
}

export default function Approach() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 phone:px-4 phone:py-16">
      <p className="eyebrow mb-4">[ {approach.eyebrow} ]</p>
      <Headline
        segments={approach.headline}
        as="h2"
        className="mb-14 text-4xl font-semibold text-ink tablet:text-3xl phone:mb-10 phone:text-2xl"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
        className="flex items-stretch gap-4 tablet:flex-col phone:flex-col"
      >
        {approach.phases.map((phase, i) => (
          <div key={phase.title} className="flex flex-1 items-stretch gap-4 tablet:flex-col">
            <motion.div
              variants={card}
              className={`flex-1 rounded-2xl p-7 ${
                phase.dark ? 'bg-navy text-cream' : 'bg-cream-dim text-ink'
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 88% 100%, 0 100%)' }}
            >
              <p
                className={`font-mono text-[0.65rem] uppercase tracking-widest2 ${
                  phase.dark ? 'text-terracotta' : 'text-terracotta'
                }`}
              >
                {phase.no}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{phase.title}</h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  phase.dark ? 'text-cream/70' : 'text-muted'
                }`}
              >
                {phase.description}
              </p>
            </motion.div>

            {i < approach.phases.length - 1 && (
              <div className="flex shrink-0 items-center font-mono text-sm text-muted tablet:hidden">
                - - →
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
