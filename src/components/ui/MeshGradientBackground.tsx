'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'
import { useEffect } from 'react'
import { useCameraZoom } from '../context/CameraZoomContext'

function MeshGradientBackground({ onLoaded }: { onLoaded?: () => void }) {
  const { mode, zoom, setZoom } = useCameraZoom()

  // Once mounted delay load text
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onLoaded])

  // Handle scroll zoom for home page
  useEffect(() => {
    if (mode !== 'home') return

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const screenHeight = window.innerHeight
      const scrollThreshold = 0.6
      const maxScroll = screenHeight * scrollThreshold

      const progress = Math.min(scrollTop / maxScroll, 1)
      const startZoom = 5
      const endZoom = 15.1
      const newZoom = startZoom + progress * (endZoom - startZoom)
      setZoom(newZoom)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mode, setZoom])

  // Animate zoom to 15.1 when mode is locked
  // useEffect(() => {
  //   if (mode !== 'locked') return

  //   const target = 15.1
  //   const duration = 500 // ms
  //   const start = zoom
  //   const startTime = performance.now()

  //   const animate = (time: number) => {
  //     const elapsed = time - startTime
  //     const t = Math.min(elapsed / duration, 1)

  //     // Easing: easeInOutQuad
  //     const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

  //     const newZoom = start + (target - start) * eased
  //     setZoom(newZoom)

  //     if (t < 1) {
  //       requestAnimationFrame(animate)
  //     } else {
  //       setZoom(target) // ensure final snap
  //     }
  //   }

  //   requestAnimationFrame(animate)
  // }, [mode, zoom, setZoom])

  return (
    <ShaderGradientCanvas
      lazyLoad={undefined}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="sphere"
        wireframe={false}
        shader="defaults"
        uTime={0}
        uSpeed={0.25}
        uStrength={0.3}
        uDensity={0.8}
        uFrequency={5.5}
        uAmplitude={3.2}
        positionX={-0.1}
        positionY={0}
        positionZ={0}
        rotationX={0}
        rotationY={130}
        rotationZ={70}
        // built in
        // color1="#73bfc4"
        // color2="#ff810a"
        // color3="#8da0ce"

        // custom
        // color1="#92dbe0"
        // color1="#6da7ab"
        color1="#45676a"
        // color1="#006770"
        color2="#0b7bff"
        color3="#3865cf"
        reflection={0.4}
        // View (camera) props
        cAzimuthAngle={270}
        cPolarAngle={180}
        cDistance={0.5}
        // cameraZoom={15.1}
        // cameraZoom={5}
        cameraZoom={zoom}
        // Effect props
        lightType="env"
        brightness={0.8}
        envPreset="city"
        grain="on"
        // Tool props
        toggleAxis={false}
        zoomOut={false}
        hoverState=""
        // Optional - if using transition features
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  )
}

export default MeshGradientBackground
