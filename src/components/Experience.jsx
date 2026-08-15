import { motion } from 'framer-motion'
import Headline from './Headline'
import { experience, experienceSection, skillCollage } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]

const tones = {
  navy: 'bg-navy text-cream',
  terracotta: 'bg-terracotta text-cream',
  clayblue: 'bg-clayblue text-cream',
  sage: 'bg-sage text-cream',
}

const row = {
  hidden: { opacity: 0, x: -26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 phone:px-4 phone:py-16">
      <p className="eyebrow mb-4">[ {experienceSection.eyebrow} ]</p>
      <Headline
        segments={experienceSection.headline}
        as="h2"
        className="mb-14 text-4xl font-semibold text-ink tablet:text-3xl phone:mb-8 phone:text-2xl"
      />

      <div className="grid grid-cols-[1fr_300px] gap-16 tablet:grid-cols-[1fr_220px] tablet:gap-8 phone:grid-cols-1 phone:gap-10">
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.08 }}
          className="relative border-l border-dashed border-line pl-8"
        >
          {experience.map((job) => (
            <motion.li key={`${job.role}-${job.org}`} variants={row} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+4px)] top-1.5 h-2 w-2 rounded-full bg-terracotta" />
              <p className="font-mono text-[0.68rem] uppercase tracking-widest2 text-terracotta tablet:text-[0.6rem]">
                {job.period}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-ink">{job.role}</h3>
              <p className="text-sm text-muted">{job.org}</p>
              {job.note && <p className="mt-1 text-xs text-muted/80">{job.note}</p>}
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', bounce: 0.3, duration: 0.7 }}
          className="grid h-fit grid-cols-2 gap-3 self-start phone:gap-2"
        >
          {skillCollage.map((cell, i) => (
            <div
              key={i}
              className={`flex aspect-square flex-col justify-between rounded-2xl p-4 ${tones[cell.tone]}`}
            >
              <span className="font-mono text-xs opacity-80">[ {cell.tag} ]</span>
              <span className="font-mono text-[0.62rem] uppercase tracking-widest2 opacity-80">
                {cell.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}