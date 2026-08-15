import { motion } from 'framer-motion'
import { hero, profile } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]


const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: 0.12 * i },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-16 phone:px-4 phone:pt-10">
      <div className="grid grid-cols-[1fr_280px] items-center gap-16 tablet:grid-cols-1 tablet:gap-10">
        {/* Text column */}
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="eyebrow mb-5"
          >
            [ {hero.eyebrow} ]
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-[3.4rem] font-semibold leading-[1.05] tracking-tight text-ink tablet:text-[2.75rem] phone:text-[2.1rem]"
          >
            {hero.headline.map((seg, i) => (
              <span key={i} className={seg.accent ? 'accent-serif text-terracotta' : ''}>
                {seg.text}
              </span>
            ))}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-md text-sm leading-relaxed text-muted"
          >
            {hero.paragraph}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex items-center gap-4 phone:flex-col phone:items-stretch"
          >
            <motion.a
              href={hero.ctaPrimary.href}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="rounded-full bg-terracotta px-6 py-3 text-center font-mono text-[0.7rem] uppercase tracking-widest2 text-cream shadow-sm"
            >
              {hero.ctaPrimary.label}
            </motion.a>
            <motion.a
              href={hero.ctaSecondary.href}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="rounded-full border border-ink/20 bg-cream px-6 py-3 text-center font-mono text-[0.7rem] uppercase tracking-widest2 text-ink"
            >
              {hero.ctaSecondary.label}
            </motion.a>
          </motion.div>
        </div>

        {/* Photo column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.2, type: 'spring', bounce: 0.28 }}
          className="rounded-2xl bg-cream-dim p-6 tablet:mx-auto tablet:w-full tablet:max-w-[280px] tablet:p-4"
        >
          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-navy">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col justify-between p-6">
                <span className="eyebrow text-cream/60">[ {profile.role} ]</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest2 text-cream/50">
                  Foto profil — ganti di src/data/content.js (profile.photo)
                </span>
              </div>
            )}
          </div>
          <p className="mt-4 text-sm font-semibold text-ink">{profile.name}</p>
          <p className="eyebrow mt-1">{profile.role}</p>
        </motion.div>
      </div>
    </section>
  )
}