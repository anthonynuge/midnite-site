// 'use client'

import ImageAccordion from './ImageAccordion'

export default function ProjectSection() {
  return (
    <div className="grid grid-cols-1 place-items-center items-center gap-2 lg:grid-cols-2">
      <div className="max-w-full space-y-2 md:max-w-3/4 md:space-y-4">
        <h2 className="text-2xl font-bold md:text-4xl">
          We Don&apos;t Just Work With You. <br className="hidden xl:block" />
          We Build With You.
        </h2>
        <p className="text-muted-foreground">
          We are not your typical agency. We won’t bore your audience, over-polish your message, or
          pretend we invented branding. We just know how to tell damn good stories that people
          remember and buy from.
        </p>
        <p className="text-muted-foreground">Check out what we have built for our clients</p>
      </div>

      {/* Carousel */}
      <div>
        <ImageAccordion />
      </div>
    </div>
  )
}
