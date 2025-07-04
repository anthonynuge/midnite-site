'use client'

import AnimatedLetters from '@/components/animations/AnimatedLetters'
import { useReveal } from '@/components/context/RevealContext'

export default function ContactSection() {
  const showContent = useReveal()
  return (
    <>
      <h2 className="font-serif text-4xl font-bold md:text-6xl">
        <AnimatedLetters text="Contact Us" animate={showContent} />
      </h2>
      <p className="text-sm md:text-base">
        We&apos;re here to help you with any questions or concerns you may have. Please fill out the
        form below and we&apos;ll get back to you as soon as possible.
      </p>
    </>
  )
}
