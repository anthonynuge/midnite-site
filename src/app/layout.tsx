import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MeshGradientBackground from '@/components/ui/MeshGradientBackground'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Midnite Marketing Agency',
  description: 'Marketing that never sleeps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative flex w-full max-w-screen flex-col items-center justify-center antialiased`}
      >
        <div className="fixed inset-0 -z-50 flex h-screen w-screen items-center justify-center overflow-hidden">
          <MeshGradientBackground />
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
