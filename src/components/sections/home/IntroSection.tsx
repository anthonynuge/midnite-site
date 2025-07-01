import Image from 'next/image'

export default function IntroSection() {
  return (
    <div className="grid grid-cols-1 place-items-center items-center gap-2 sm:grid-cols-2">
      {/* Left section */}
      <div className="flex max-w-full flex-col gap-4 md:max-w-3/4">
        <h2 className="text-2xl font-bold md:text-4xl">
          The Creative Force Behind
          <br className="hidden xl:block" />
          Your Brand Success
        </h2>
        <p className="text-slate-100">
          We are a results-driven marketing agency dedicated to helping brands unlock their full
          potential and achieve sustainable revenue growth. We specialize in crafting tailored
          strategies that amplify your brand&apos;s presence, engage your target audience, and
          deliver measurable results. At Midnite Agency, we partner with you to illuminate your path
          to success, combining creativity, data, and innovation to drive your business forward.
        </p>
      </div>

      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
          alt="Intro section"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
