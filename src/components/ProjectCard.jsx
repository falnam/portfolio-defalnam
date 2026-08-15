import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EASE = [0.44, 0, 0.56, 1]

export const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

const MotionLink = motion(Link)

export default function ProjectCard({ project }) {
  return (
    <MotionLink
      to={`/work/${project.id}`}
      variants={cardReveal}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line/70 bg-white/40"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-cream-dim">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="font-mono text-[0.62rem] uppercase tracking-widest2 text-muted/60">
            {project.category}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="eyebrow">{project.category}</span>
        <h3 className="text-base font-semibold text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-mono text-xs text-muted">{project.year}</span>
          <span className="font-mono text-[0.65rem] uppercase tracking-widest2 text-terracotta">
            View Project →
          </span>
        </div>
      </div>
    </MotionLink>
  )
}