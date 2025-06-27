import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'
import HeroSection from '@/components/sections/home/HeroSection'

export default function HomePage() {
  return (
    <>
      <main className="flex w-full max-w-screen-2xl flex-col">
        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <HeroSection />
          </ResponsiveWrapper>
        </section>

        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <h1>Hello</h1>
          </ResponsiveWrapper>
        </section>
      </main>
    </>
  )
}
