'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { servicesData } from './constants'
import { AnimatePresence, motion } from 'motion/react'

export default function OurServicesSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const refs = sectionRefs.current
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveImageIndex(index)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    )

    // Once the component mounts, we observe the sections
    refs.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    // Cleanup function to unobserve the sections when the component unmounts
    return () => {
      refs.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-0 md:grid-cols-2 md:px-8">
        {/* left side */}
        <div className="top-0 grid place-content-start md:sticky md:h-screen md:place-content-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Our Services</h2>
            <p>Full-service marketing built to grow your brand</p>
            <figure className="relative hidden md:block md:h-80 md:w-80 lg:h-100 lg:w-100 xl:h-140 xl:w-140">
              <AnimatePresence mode="wait">
                <motion.div
                  key={servicesData[activeImageIndex].image}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={servicesData[activeImageIndex].image}
                    alt={servicesData[activeImageIndex].title}
                    className="h-full w-full rounded-md object-cover"
                    fill
                  />
                </motion.div>
              </AnimatePresence>
            </figure>
          </div>
        </div>

        {/* right side discriptions*/}
        <div className="grid snap-y snap-mandatory space-y-24 md:space-y-0">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="top-0 grid h-auto snap-center place-content-center space-y-2 px-4 md:h-screen"
              data-index={index}
              id={service.id}
              ref={el => {
                sectionRefs.current[index] = el
              }}
            >
              <div className="relative block h-80 w-full md:hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="h-auto w-full rounded-md object-cover align-bottom transition-all duration-300"
                  fill
                />
              </div>
              <h4 className="text-lg font-medium md:text-4xl">{service.title}</h4>
              <p className="max-w-full text-slate-100 xl:max-w-3/4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
