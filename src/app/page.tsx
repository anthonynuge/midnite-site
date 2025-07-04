import FadeInSection from '@/components/animations/FadeInSection'
import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'
import HeroSection from '@/components/sections/home/HeroSection'
import IntroSection from '@/components/sections/home/IntroSection'
import OurServicesSection from '@/components/sections/home/OurServicesSection'
import ProjectSection from '@/components/sections/home/ProjectSection'

export default function HomePage() {
  return (
    <>
      <div className="flex w-full max-w-screen-2xl flex-col">
        {/* Hero */}
        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <HeroSection />
          </ResponsiveWrapper>
        </section>

        {/* Intro */}
        <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
          <FadeInSection>
            <IntroSection />
          </FadeInSection>
        </ResponsiveWrapper>

        {/* Projects */}
        <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
          <FadeInSection>
            <ProjectSection />
          </FadeInSection>
        </ResponsiveWrapper>

        {/* Our Services */}
        <section>
          <ResponsiveWrapper className="flex items-center justify-center" fullHeight>
            <OurServicesSection />
          </ResponsiveWrapper>
        </section>
      </div>
    </>
  )
}
