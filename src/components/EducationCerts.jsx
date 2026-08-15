import { motion } from 'framer-motion'
import Headline from './Headline'
import { education, certifications, educationSection } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function EducationCerts() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 phone:px-4 phone:py-16">
      <p className="eyebrow mb-4">[ {educationSection.eyebrow} ]</p>
      <Headline
        segments={educationSection.headline}
        as="h2"
        className="mb-14 text-4xl font-semibold text-ink tablet:text-3xl phone:mb-8 phone:text-2xl"
      />

      <div className="grid grid-cols-2 gap-16 tablet:gap-10 phone:grid-cols-1 phone:gap-10">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest2 text-muted">Education</h3>
          <div className="mt-6 space-y-6">
            {education.map((ed) => (
              <div key={ed.school} className="rounded-2xl bg-cream-dim p-6">
                <p className="text-base font-semibold text-ink">{ed.school}</p>
                <p className="mt-1 text-sm text-terracotta">{ed.program}</p>
                <p className="mt-1 font-mono text-xs text-muted">{ed.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest2 text-muted">
            Certifications &amp; Awards
          </h3>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1 }}
            className="mt-6 space-y-3"
          >
            {certifications.map((c) => (
              <motion.div
                key={c.title}
                variants={item}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex items-start justify-between gap-4 border-b border-dashed border-line pb-3"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{c.title}</p>
                  <p className="mt-0.5 text-xs text-muted">{c.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-widest2 text-terracotta">
                  {c.type}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
