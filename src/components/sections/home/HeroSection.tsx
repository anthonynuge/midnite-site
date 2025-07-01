import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="mx-auto flex h-full flex-col items-center justify-center space-y-4">
      <h1 className="text-center font-serif text-6xl font-bold md:text-9xl">
        MIDNITE
        <br />
        AGENCY
      </h1>
      <h2 className="max-w-md text-center text-base font-bold md:text-2xl">
        Where Business Come to Grow. <br /> No one can miss you now.
      </h2>

      {/* Call to Actions */}
      <div className="flex gap-2 md:gap-8">
        <Button asChild className="w-1/2 rounded-full md:w-[10rem]" size="lg">
          <Link href="/contact" className="text-lg">
            See Our Work
          </Link>
        </Button>

        <Button className="w-1/2 rounded-full md:w-[10rem]" asChild size="lg" variant="outline">
          <Link href="/contact" className="text-lg">
            Lets Chat
          </Link>
        </Button>
      </div>
    </div>
  )
}
