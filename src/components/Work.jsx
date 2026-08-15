import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Headline from './Headline'
import ProjectCard from './ProjectCard'
import { workItems, workSection } from '../data/content'

export default function Work() {
  // Homepage hanya menampilkan proyek dengan featured: true.
  // Proyek dengan featured: false tetap ada, hanya disembunyikan dari
  // sini dan bisa dilihat di halaman "More Projects" (/projects).
  const featured = workItems
    .filter((p) => p.featured !== false)
    .sort((a, b) => a.order - b.order)

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 phone:px-4 phone:py-16">
      <p className="eyebrow mb-4">[ {workSection.eyebrow} ]</p>
      <Headline
        segments={workSection.headline}
        as="h2"
        className="text-4xl font-semibold text-ink tablet:text-3xl phone:text-2xl"
      />
      <p className="mt-4 max-w-md text-sm text-muted">{workSection.description}</p>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.08 }}
        className="mt-12 grid grid-cols-3 gap-6 tablet:grid-cols-2 phone:grid-cols-1"
      >
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Link
          to="/projects"
          className="rounded-full border border-ink/20 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest2 text-ink transition-colors hover:border-terracotta hover:text-terracotta"
        >
          More Projects →
        </Link>
      </div>
    </section>
  )
}