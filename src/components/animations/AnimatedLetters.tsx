'use client'

import { motion } from 'framer-motion'

const letterVariant = {
  hidden: { opacity: 0, translateY: 30 },
  visible: (i: number) => ({
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      duration: 0.4,
      delay: i * 0.03,
    },
  }),
}

const containerVariant = {
  hidden: {},
  visible: {},
}

type AnimatedLettersProps = {
  text: string
  className?: string
  animate?: boolean
}

export default function AnimatedLetters({
  text,
  className,
  animate = false,
}: AnimatedLettersProps) {
  return (
    <motion.span
      variants={containerVariant}
      initial="hidden"
      animate={animate ? 'visible' : 'hidden'}
      className={`inline-block ${className || ''}`}
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} custom={i} variants={letterVariant} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  )
}
