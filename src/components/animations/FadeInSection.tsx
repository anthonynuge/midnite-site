'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function FadeInSection({
  children,
  delay = 0.2,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    amount: 0.3,
    once: true,
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  )
}
