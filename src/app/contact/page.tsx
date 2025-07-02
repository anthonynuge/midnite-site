import ContactForm from '@/components/forms/ContactForm'
import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'
import { IconLink } from '@/components/ui/IconLink'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'

export default function ContactPage() {
  return (
    <>
      {/* <main className="w-full max-w-screen-2xl bg-amber-300 pt-24">
        <section className="bg-amber-700"> */}
      <ResponsiveWrapper fullHeight className="max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-4 py-6 pt-24 md:grid-cols-2 md:pt-42">
          <div className="flex flex-col place-content-center space-y-2 lg:max-w-3/4">
            <h2 className="font-serif text-4xl font-bold md:text-6xl">Contact Us</h2>
            <p className="text-sm md:text-base">
              We&apos;re here to help you with any questions or concerns you may have. Please fill
              out the form below and we&apos;ll get back to you as soon as possible.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col space-y-2">
              <div className="text-base font-semibold md:text-lg">midenit-agency@gmail.com</div>
              <div className="text-base font-semibold md:text-lg">+49 176 777 777 77</div>

              {/* Social Links */}
              <div className="flex gap-4">
                <IconLink
                  href={'https://www.instagram.com/midenit_agency/'}
                  icon={FaInstagram}
                  newTab
                  size={25}
                />
                <IconLink
                  href={'https://www.facebook.com/midenit_agency/'}
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
      </ResponsiveWrapper>
      {/* </section>
      </main> */}
    </>
  )
}
