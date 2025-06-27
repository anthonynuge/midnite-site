import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'
import HeroSection from '@/components/sections/home/HeroSection'

export default function HomePage() {
  return (
    <>
      <section>
        <ResponsiveWrapper className="flex items-center justify-center pt-16" fullHeight>
          <HeroSection />
        </ResponsiveWrapper>
      </section>
    </>
  )
}
