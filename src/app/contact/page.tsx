import ContactForm from '@/components/forms/ContactForm'
import ResponsiveWrapper from '@/components/layout/ResponsiveWrapper'

export default function ContactPage() {
  return (
    <>
      <main className="w-full max-w-screen-2xl pt-24">
        <section>
          <ResponsiveWrapper fullHeight>
            <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2">
              <div>Left side</div>

              <div className="bg-card/75 rounded-lg px-6 py-8 backdrop-blur-lg">
                <ContactForm />
              </div>
            </div>
          </ResponsiveWrapper>
        </section>
      </main>
    </>
  )
}
