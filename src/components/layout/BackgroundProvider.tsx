'use client'

import { useEffect, useState } from 'react'
import MeshGradientBackground from '../ui/MeshGradientBackground' // or wherever it's located
import Image from 'next/image'
import { RevealContext } from '../context/RevealContext'
import { useCameraZoom } from '../context/CameraZoomContext'
import { usePathname } from 'next/navigation'

interface BackgroundProviderProps {
  children: React.ReactNode
}

export default function BackgroundProvider({ children }: BackgroundProviderProps) {
  const [isReady, setIsReady] = useState(false)
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
    if (isReady) {
      const timeout = setTimeout(() => {
        setShowContent(true)
      }, 1000)

      return () => clearTimeout(timeout)
    }
  }, [isReady])

  return (
    <RevealContext.Provider value={showContent}>
      <div
        className={`pointer-events-none fixed inset-0 z-500 flex items-center justify-center bg-black transition-opacity duration-1000 ${
          isReady ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image src="/LogoWhite.png" alt="Midnite Logo" width={100} height={100} priority />
      </div>
      {/* Background WebGL/Shader/Canvas */}
      <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
        <MeshGradientBackground onLoaded={() => setIsReady(true)} />
      </div>

      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center transition-opacity duration-700 ${
          isReady ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {children}
      </div>
    </RevealContext.Provider>
  )
}
