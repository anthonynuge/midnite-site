'use client'
import React, { FormEvent, useRef } from 'react'
import { motion, useInView, Variants } from 'motion/react'

// import useNewsLetter, { ClientData } from '@/lab/hooks/useNewsLetter'
import Link from 'next/link'

const Footer = () => {
  const container = useRef<HTMLDivElement>(null)
  // const [Send, cilentData] = useNewsLetter()
  // const [openPopup, setOpenPopUp] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref)

  const logoString = 'MIDNITE-MIDNITE-MIDNITE'

  const variants: Variants = {
    visible: (i: number) => ({
      translateY: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.4,
        delay: i * 0.03,
      },
    }),

    hidden: { translateY: 200 },
  }

  const handleNewsLetterData = (e: FormEvent) => {
    e.preventDefault()
    console.log(e)
    e.preventDefault()
    // const target = e.target as HTMLFormElement
    // const formData = new FormData(target)

    // const clientEmail = formData.get('newsletter_email')!

    // const data: ClientData = {
    //   email: clientEmail.toString(),
    // }

    // Send(data)
    // setOpenPopUp(true)
    // target.reset()
    // if (setOpenPopUp) {
    //   setTimeout(() => {
    //     setOpenPopUp(false)
    //   }, 2000)
    // }
  }

  return (
    <>
      {/* <Toast.Provider>
        <Toast.Provider swipeDirection="right">
          <Toast.Root
            className="ToastRoot"
            open={openPopup}
            onOpenChange={setOpenPopUp}
          >
            <Toast.Title className="ToastTitle">
              We Received Your Message, Thanks
            </Toast.Title>
            <Toast.Action
              className="ToastAction"
              asChild
              altText="Goto schedule to undo"
            >
              <button className="bg-white text-black px-3 py-1 rounded-lg">
                ok
              </button>
            </Toast.Action>
          </Toast.Root>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
        <Toast.Viewport />
      </Toast.Provider> */}

      <div className="relative h-full w-full pt-8 sm:pt-14" ref={container}>
        <div className="mx-auto px-4 sm:container">
          <div className="w-full justify-between md:flex">
            {/* Left Side */}
            <div>
              {/* Title */}
              <h1 className="text-2xl font-semibold md:text-4xl">
                Let&lsquo;s do great work together
              </h1>

              {/* Newsletter */}
              <div className="pt-2 pb-6 md:w-99">
                <p className="py-4 text-xl md:text-2xl">Sign up for our newsletter*</p>
                <div className="hover-button relative flex items-center justify-between overflow-hidden rounded-full border-2 md:text-2xl">
                  <form
                    onSubmit={e => handleNewsLetterData(e)}
                    className="relative z-2 grid h-full w-full grid-cols-6"
                  >
                    <input
                      type="email"
                      name="newsletter_email"
                      className="col-span-5 border-none bg-transparent px-6 py-3 text-slate-100 placeholder:text-slate-100"
                      placeholder="Your Email * "
                    />{' '}
                    <button
                      type="submit"
                      className="hover:bg-primaryColor cols-span-1 h-full w-full cursor-pointer bg-slate-300 text-white"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        className="h-[80%] w-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                          fill="#000"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Site map */}
            <div className="mb-4 flex gap-10">
              <ul>
                <li className="pb-2 text-2xl font-semibold">SITEMAP</li>
                <li className="text-xl font-medium">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/about">About us</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/services">Our Services</Link>
                </li>

                <li className="text-xl font-medium">
                  <Link href="/projects">Projects</Link>
                </li>
                <li className="text-xl font-medium">
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
              <ul>
                <li className="pb-2 text-2xl font-semibold">SOCIAL</li>
                <li className="text-xl font-medium">
                  <a href="" target="_blank" className="underline">
                    LinkedIn
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a href="" target="_blank" className="underline">
                    Twitter
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a href="" target="_blank" className="underline">
                    Instagram
                  </a>
                </li>
                <li className="text-xl font-medium">
                  <a href="" target="_blank" className="underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo Animation */}
          <div className="flex items-center justify-center border-y-2 md:py-4">
            <motion.div
              className="flex items-center justify-center overflow-hidden"
              ref={ref}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              variants={variants}
            >
              {logoString.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="font-serif text-9xl font-extrabold text-slate-100"
                  variants={variants}
                  custom={index}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col-reverse justify-between gap-3 py-2 md:flex-row">
            <span className="font-medium">&copy; 2025 Midnite. All Rights Reserved.</span>
            <a href="#" className="font-semibold">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
