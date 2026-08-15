import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { workItems } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]

export default function WorkDetail() {
  const { id } = useParams()
  const project = workItems.find((p) => p.id === id)

  // Scroll to top whenever a new project detail page mounts.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Unknown id → send back to the work list instead of showing a blank page.
  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const items = [...workItems].sort((a, b) => a.order - b.order)
  const index = items.findIndex((p) => p.id === project.id)
  const prev = items[(index - 1 + items.length) % items.length]
  const next = items[(index + 1) % items.length]

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="mx-auto max-w-3xl px-6 py-16 phone:px-4 phone:py-10"
    >
      <Link
        to="/#work"
        className="font-mono text-[0.68rem] uppercase tracking-widest2 text-terracotta hover:opacity-70"
      >
        ← Back to Selected Work
      </Link>

      <p className="eyebrow mt-8">{project.category}</p>
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-ink tablet:text-3xl phone:text-2xl">
        {project.title}
      </h1>

      <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-cream-dim">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-widest2 text-muted/60">
            {project.category}
          </div>
        )}
      </div>

      <div className="mt-8 grid grid-cols-3 gap-6 border-y border-dashed border-line py-6 phone:grid-cols-1 phone:gap-3">
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-widest2 text-muted">
            Client
          </p>
          <p className="mt-1 text-sm text-ink">{project.client}</p>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-widest2 text-muted">Role</p>
          <p className="mt-1 text-sm text-ink">{project.role}</p>
        </div>
        <div>
          <p className="font-mono text-[0.62rem] uppercase tracking-widest2 text-muted">Year</p>
          <p className="mt-1 text-sm text-ink">{project.year}</p>
        </div>
      </div>

      <div className="mt-10 space-y-4 text-sm leading-relaxed text-muted">
        <p>{project.description}</p>
        {project.longDescription && <p>{project.longDescription}</p>}
      </div>

      {project.tools?.length > 0 && (
        <div className="mt-8">
          <p className="font-mono text-[0.62rem] uppercase tracking-widest2 text-muted">
            Tools &amp; Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-cream-dim px-3 py-1 font-mono text-[0.65rem] text-ink"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 phone:grid-cols-1">
          {project.gallery.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} — ${i + 1}`}
              className="w-full rounded-xl object-cover"
            />
          ))}
        </div>
      )}

      {project.link && project.link !== '#' && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-block rounded-full bg-terracotta px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest2 text-cream"
        >
          Visit Live Project →
        </a>
      )}

      <div className="mt-16 flex items-center justify-between border-t border-dashed border-line pt-6">
        <Link
          to={`/work/${prev.id}`}
          className="font-mono text-[0.65rem] uppercase tracking-widest2 text-muted hover:text-terracotta"
        >
          ← {prev.title}
        </Link>
        <Link
          to={`/work/${next.id}`}
          className="text-right font-mono text-[0.65rem] uppercase tracking-widest2 text-muted hover:text-terracotta"
        >
          {next.title} →
        </Link>
      </div>
    </motion.article>
  )
}
