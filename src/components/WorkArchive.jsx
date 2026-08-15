import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProjectCard from './ProjectCard'
import { workItems } from '../data/content'

export default function WorkArchive() {
  const items = [...workItems].sort((a, b) => a.order - b.order)

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.44, 0, 0.56, 1] }}
      className="mx-auto max-w-6xl px-6 py-16 phone:px-4 phone:py-10"
    >
      <Link
        to="/#work"
        className="font-mono text-[0.68rem] uppercase tracking-widest2 text-terracotta hover:opacity-70"
      >
        ← Back to Home
      </Link>

      <p className="eyebrow mb-4 mt-8">[ All Projects ]</p>
      <h1 className="text-4xl font-semibold text-ink tablet:text-3xl phone:text-2xl">
        Beyond <span className="accent-serif text-terracotta">the Highlights.</span>
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        Explore the full spectrum of my creative and technical journey. This complete archive features every project I have brought to life, including extended works not showcased on the homepage.
      </p>

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.06 }}
        className="mt-12 grid grid-cols-3 gap-6 tablet:grid-cols-2 phone:grid-cols-1"
      >
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </motion.section>
  )
}