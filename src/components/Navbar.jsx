import { motion } from 'framer-motion'
import { nav, profile } from '../data/content'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 phone:px-4 phone:py-4">
        <a
          href="#top"
          className="font-mono text-xs font-medium uppercase tracking-widest2 text-ink"
        >
          {profile.name}
        </a>

        <nav className="flex items-center gap-8 tablet:hidden">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono text-[0.68rem] uppercase tracking-widest2 text-muted transition-colors hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          whileHover={{ y: -2, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.44, 0, 0.56, 1] }}
          className="rounded-full border border-terracotta px-5 py-2 font-mono text-[0.68rem] uppercase tracking-widest2 text-terracotta phone:hidden"
        >
          Let&rsquo;s Talk →
        </motion.a>
      </div>
      <div className="dash-line" />
    </header>
  )
}
