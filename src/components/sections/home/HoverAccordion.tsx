'use client'
import React, { SetStateAction } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PROJECTS } from './constants'
import Image from 'next/image'

const article = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      delayChildren: 0.2,
      staggerChildren: 0.1, // Stagger duration for children
    },
  },
}

// For the parent container
export const articleContainer = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
}

type item = {
  id: string
  url: string
  title: string
  description: string
  tags?: string[]
}

interface GaleryProps {
  items: item[]
  setIndex: React.Dispatch<SetStateAction<number>>
  index: number | undefined
}

const MotionImage = motion(Image)

function Gallery({ items, setIndex, index }: GaleryProps) {
  return (
    <div className="mx-auto flex w-full max-w-6xl gap-1 pt-10 pb-20">
      {items.slice(0, 5).map((item: item, i: number) => {
        return (
          <motion.div
            whileTap={{ scale: 0.95 }}
            className={`ease-in-linear relative h-[300px] flex-shrink-0 origin-center rounded-xl transition-[width] duration-500 md:h-[500px]`}
            style={{ width: index === i ? '50%' : '12%' }}
            key={i}
            onClick={() => {
              setIndex(i)
            }}
            onMouseEnter={() => {
              setIndex(i)
            }}
          >
            <MotionImage
              src={item?.url}
              className={`${
                index === i ? 'cursor-default' : 'cursor-pointer'
              } h-full w-full rounded-xl object-cover`}
              alt={item?.title}
              width={500}
              height={500}
            />
            <AnimatePresence mode="wait">
              {index === i && (
                <motion.article
                  variants={article}
                  initial="hidden"
                  animate="show"
                  className="absolute inset-0 flex h-full w-full flex-col justify-end space-y-2 overflow-hidden rounded-xl bg-gradient-to-t from-gray-900/60 from-20% to-transparent to-80% p-4"
                >
                  <motion.h1 variants={article} className="text-lg font-semibold md:text-2xl">
                    {item?.title}
                  </motion.h1>
                  <motion.p variants={article} className="text-sm leading-[120%] sm:text-base">
                    {item?.description}
                  </motion.p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function HoverAccordion() {
  const [index, setIndex] = useState(2)

  return (
    <div className="relative">
      <Gallery items={PROJECTS} index={index} setIndex={setIndex} />
    </div>
  )
}
