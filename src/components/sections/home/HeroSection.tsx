import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="mx-auto flex h-full flex-col items-center justify-center gap-12">
      <h1 className="text-center text-9xl font-bold">
        MIDNITE
        <br />
        AGENCY
      </h1>
      <h2 className="max-w-md text-center text-3xl font-bold">
        Where Business Come to Grow. <br /> No one can miss you now.
      </h2>

      {/* Call to Actions */}
      <div className="flex gap-8">
        <Button asChild className="w-[10rem] rounded-full" size="lg">
          <Link href="/contact" className="text-lg">
            See Our Work
          </Link>
        </Button>

        <Button className="w-[10rem] rounded-full" asChild size="lg" variant="outline">
          <Link href="/contact" className="text-lg">
            Lets Chat
          </Link>
        </Button>
      </div>
    </div>
  )
}
