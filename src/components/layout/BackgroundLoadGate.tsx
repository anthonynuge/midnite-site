'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import MeshGradientBackground from '../ui/MeshGradientBackground'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import { RevealContext } from '../context/RevealContext'
import { useCameraZoom } from '../context/CameraZoomContext'
import PageTransitionWrapper from '../animations/PageTransitionWrapper'

export default function BackgroundLoadGate({ children }: { children: React.ReactNode }) {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const pathname = usePathname()
  const { setMode } = useCameraZoom()

  useEffect(() => {
    if (pathname === '/') {
      setMode('home')
      console.log('home')
    } else {
      setMode('locked')
      console.log('locked')
    }
  }, [pathname, setMode])

  useEffect(() => {
    if (backgroundLoaded) {
      const timeout = setTimeout(() => {
        setShowContent(true)
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [backgroundLoaded])

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-0 z-500 flex items-center justify-center bg-black transition-opacity duration-1000 ${
          backgroundLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image src="/LogoWhite.png" alt="Midnite Logo" width={100} height={100} priority />
      </div>

      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
        <MeshGradientBackground onLoaded={() => setBackgroundLoaded(true)} />
      </div>

      {/* Content Render content but hide until ready for SEO*/}
      <RevealContext.Provider value={showContent}>
        <div
          className={`flex flex-col items-center justify-center ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
        >
          <Navbar />
          <PageTransitionWrapper>{children}</PageTransitionWrapper>
          <Footer />
        </div>
      </RevealContext.Provider>
    </>
  )
}
