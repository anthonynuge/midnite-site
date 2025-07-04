// context/CameraZoomContext.tsx
'use client'

import { createContext, useContext, useState } from 'react'

export const CameraZoomContext = createContext({
  zoom: 5,
  setZoom: (v: number) => {
    console.log('setZoom', v)
  },
  mode: 'locked', // 'home' or 'locked'
  setMode: (m: 'home' | 'locked') => {
    console.log('setMode', m)
  },
})

export function CameraZoomProvider({ children }: { children: React.ReactNode }) {
  const [zoom, setZoom] = useState(5)
  const [mode, setMode] = useState<'home' | 'locked'>('locked')

  return (
    <CameraZoomContext.Provider value={{ zoom, setZoom, mode, setMode }}>
      {children}
    </CameraZoomContext.Provider>
  )
}

export function useCameraZoom() {
  return useContext(CameraZoomContext)
}
