import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/globals.css'
// import BackgroundLoadGate from '@/components/layout/BackgroundLoadGate'
import { CameraZoomProvider } from '@/components/context/CameraZoomContext'
import BackgroundProvider from '@/components/layout/BackgroundProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

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
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative max-w-screen antialiased`}
      >
        <CameraZoomProvider>
          <BackgroundProvider>
            {/* <div className="relative z-10 flex min-h-screen flex-col"> */}
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* </div> */}
          </BackgroundProvider>
        </CameraZoomProvider>
        {/* <CameraZoomProvider>
          <BackgroundLoadGate>{children}</BackgroundLoadGate>
        </CameraZoomProvider> */}
      </body>
    </html>
  )
}
