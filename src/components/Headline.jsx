import { motion } from 'framer-motion'

const EASE = [0.44, 0, 0.56, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

/**
 * Renders a headline word-by-word, revealing each word with a fade + slide-up
 * as the headline scrolls into view. `segments` is an array of
 * { text, accent } — accent segments render in the italic serif accent face.
 */
export default function Headline({ segments, as: Tag = 'h2', className = '' }) {
  const words = []
  segments.forEach((seg, si) => {
    seg.text.split(' ').forEach((w, wi) => {
      if (w === '') return
      words.push({ word: w, accent: seg.accent, key: `${si}-${wi}` })
    })
  })

  return (
    <Tag className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        style={{ display: 'inline' }}
      >
        {words.map((w) => (
          <motion.span
            key={w.key}
            variants={item}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
            className={w.accent ? 'accent-serif' : ''}
          >
            {w.word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}
