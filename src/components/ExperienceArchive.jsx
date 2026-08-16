import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { experience } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]

const row = {
  hidden: { opacity: 0, x: -26 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
}

export default function ExperienceArchive() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="mx-auto max-w-3xl px-6 py-16 phone:px-4 phone:py-10"
    >
      <Link
        to="/#experience"
        className="font-mono text-[0.68rem] uppercase tracking-widest2 text-terracotta hover:opacity-70"
      >
        ← Back to Home
      </Link>

      <p className="eyebrow mb-4 mt-8">[ All Experience ]</p>
      <h1 className="text-4xl font-semibold text-ink tablet:text-3xl phone:text-2xl">
        Full <span className="accent-serif text-terracotta">professional journey.</span>
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        Termasuk peran yang tidak ditampilkan di halaman utama.
      </p>

      <motion.ol
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08 }}
        className="relative mt-12 border-l border-dashed border-line pl-8"
      >
        {experience.map((job) => (
          <motion.li
            key={`${job.role}-${job.org}`}
            variants={row}
            className="relative pb-10 last:pb-0"
          >
            <span className="absolute -left-[calc(2rem+4px)] top-1.5 h-2 w-2 rounded-full bg-terracotta" />
            <p className="font-mono text-[0.68rem] uppercase tracking-widest2 text-terracotta">
              {job.period}
            </p>
            <h3 className="mt-1.5 text-lg font-semibold text-ink">{job.role}</h3>
            <p className="text-sm text-muted">{job.org}</p>
            <p className="mt-1 text-xs text-muted/70">{job.location}</p>
            {job.note && <p className="mt-1 text-xs text-muted/80">{job.note}</p>}
          </motion.li>
        ))}
      </motion.ol>
    </motion.section>
  )
}