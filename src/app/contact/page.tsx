import ContactForm from '@/components/forms/ContactForm'
import ContactSection from '@/components/sections/contact/ContactSection'
import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'
import { IconLink } from '@/components/ui/IconLink'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import FadeInSection from '@/components/animations/FadeInSection'

export default function ContactPage() {
  return (
    <>
      <ResponsiveWrapper fullHeight className="max-w-screen-2xl">
        <FadeInSection>
          <div className="grid grid-cols-1 gap-4 py-6 pt-24 md:grid-cols-2 md:pt-42">
            <div className="flex flex-col place-content-center space-y-2 lg:max-w-3/4">
              <ContactSection />

              {/* Contact Info */}
              <div className="flex flex-col space-y-2">
                <div className="text-base font-semibold md:text-lg">
                  outreach@midnite-agency.com
                </div>
                <div className="text-base font-semibold md:text-lg">+49 176 777 777 77</div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <IconLink
                    href={'https://www.instagram.com/midnite_agency/'}
                    icon={FaInstagram}
                    newTab
                    size={25}
                  />
                  <IconLink
                    href={'https://www.facebook.com/people/Midnite-Agency/61557421103969/?_rdr'}
                    icon={FaFacebook}
                    newTab
                    size={25}
                  />
                </div>
              </div>
            </div>

            <div className="bg-card/75 rounded-lg px-6 py-8 backdrop-blur-lg">
              <ContactForm />
            </div>
          </div>
        </FadeInSection>
      </ResponsiveWrapper>
    </>
  )
}
