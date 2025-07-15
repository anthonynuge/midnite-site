import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import '@/styles/globals.css'
// import BackgroundLoadGate from '@/components/layout/BackgroundLoadGate'
import { CameraZoomProvider } from '@/components/context/CameraZoomContext'
import BackgroundProvider from '@/components/layout/BackgroundProvider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-comfortaa',
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
      <body className={`${comfortaa.variable} relative max-w-screen antialiased`}>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
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
