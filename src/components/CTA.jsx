import { motion } from 'framer-motion'
import Headline from './Headline'
import { cta } from '../data/content'

const EASE = [0.44, 0, 0.56, 1]

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-8 phone:px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ type: 'spring', bounce: 0.28, duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl bg-navy px-16 py-20 text-center phone:px-6 phone:py-14"
      >
        <span className="absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-cream/30" />
        <span className="absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-cream/30" />

        <Headline
          segments={cta.headline}
          as="h2"
          className="mx-auto max-w-2xl text-4xl font-semibold text-cream tablet:text-3xl phone:text-[1.9rem]"
        />

        <motion.a
          href={cta.buttonHref}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="mt-9 inline-block rounded-full bg-terracotta px-8 py-3.5 font-mono text-[0.7rem] uppercase tracking-widest2 text-cream"
        >
          {cta.buttonLabel}
        </motion.a>
      </motion.div>
    </section>
  )
}