// components/context/RevealContext.tsx
'use client'

import { createContext, useContext } from 'react'

export const RevealContext = createContext(false)

export function useReveal() {
  return useContext(RevealContext)
}
