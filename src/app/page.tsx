import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'
import HeroSection from '@/components/sections/home/HeroSection'
import OurServicesSection from '@/components/sections/home/OurServicesSection'
import ProjectSection from '@/components/sections/home/ProjectSection'

export default function HomePage() {
  return (
    <>
      <main className="flex w-full max-w-screen-2xl flex-col">
        {/* Hero */}
        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <HeroSection />
          </ResponsiveWrapper>
        </section>

        {/* Projects */}
        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <ProjectSection />
          </ResponsiveWrapper>
        </section>

        {/* Our Services */}
        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <OurServicesSection />
          </ResponsiveWrapper>
        </section>
      </main>
    </>
  )
}
