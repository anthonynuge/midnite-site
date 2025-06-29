// @ts-nocheck
'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { PROJECTS } from './constants'

function Gallery({ items, setIndex, setOpen, index }) {
  return (
    <div className="mx-auto flex w-fit gap-1 rounded-md pt-10 pb-20 md:gap-2">
      {items.slice(0, items.length).map((item, i) => {
        return (
          <motion.img
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl ${
              index === i ? 'w-[250px]' : 'w-[14px] sm:w-[20px] md:w-[30px] xl:w-[50px]'
            } h-[300px] flex-shrink-0 object-cover transition-[width] duration-300 ease-in-out md:h-[500px]`}
            key={i}
            onMouseEnter={() => {
              setIndex(i)
            }}
            onMouseLeave={() => {
              setIndex(i)
            }}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            src={item?.url}
            layoutId={item.id}
          />
        )
      })}
    </div>
  )
}

export default function ImageAccordion() {
  const [index, setIndex] = useState(5)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])
  return (
    <div className="relative">
      <Gallery items={PROJECTS} index={index} setIndex={setIndex} setOpen={setOpen} />
      <AnimatePresence>
        {open !== false && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="overlay"
            className="fixed inset-0 top-0 right-0 bottom-0 left-0 z-50 grid h-full w-full place-content-center bg-white/40 backdrop-blur-sm dark:bg-black/40"
            onClick={() => {
              setOpen(false)
            }}
          >
            <div onClick={e => e.stopPropagation()}>
              <motion.div
                layoutId={PROJECTS[index].id}
                className="h-[400px] w-[400px] cursor-default rounded-2xl"
              >
                <Image
                  src={PROJECTS[index].url}
                  width={400}
                  height={400}
                  alt="single-image"
                  className="h-full w-full rounded-2xl object-cover"
                />
                <article className="dark:bg-primary-base mt-2 rounded-xl border bg-white p-2 text-black">
                  <motion.h1
                    initial={{ scaleY: 0.2 }}
                    animate={{ scaleY: 1 }}
                    exit={{ scaleY: 0.2 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="text-xl font-semibold"
                  >
                    {PROJECTS[index].title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ scaleY: -10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="py-2 text-sm leading-[100%]"
                  >
                    {PROJECTS[index].description}
                  </motion.p>
                </article>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
