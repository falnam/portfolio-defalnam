import { motion } from 'framer-motion'
import { footer, profile } from '../data/content'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
      className="mx-auto max-w-6xl px-6 pb-8 pt-16 phone:px-4"
    >
      <div className="dash-line mb-12" />

      <div className="grid grid-cols-3 gap-10 tablet:grid-cols-1 tablet:gap-8">
        <div>
          <p className="text-base font-semibold text-ink">{profile.name}</p>
          <p className="eyebrow mt-1">{profile.role}</p>
          <div className="mt-4 flex gap-4 font-mono text-xs text-muted">
            <a href={profile.linkedin} className="hover:text-terracotta">
              LinkedIn
            </a>
            <a href={profile.instagram} className="hover:text-terracotta">
              Instagram
            </a>
          </div>
        </div>

        {footer.navGroups.map((group) => (
          <div key={group.title}>
            <p className="font-mono text-[0.65rem] uppercase tracking-widest2 text-muted">
              {group.title}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {group.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink/80 hover:text-terracotta"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="dash-line mb-6 mt-12" />
      <p className="font-mono text-[0.62rem] uppercase tracking-widest2 text-muted">
        © {footer.year} {profile.name} — {footer.tagline}
      </p>
    </motion.footer>
  )
}
