'use client'
import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

function MeshGradientBackground() {
  return (
    <>
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
          cameraZoom={15.1}
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
    </>
  )
}

export default MeshGradientBackground
