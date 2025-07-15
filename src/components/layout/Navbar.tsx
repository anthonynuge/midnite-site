'use client'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import HamburgerToggle from '../mobile/HamburgerToggle'
import { useEffect, useState } from 'react'
import {
  LuGamepad,
  LuImage,
  LuSearch,
  LuCreditCard,
  LuShieldCheck,
  LuCalendar,
  LuLayers,
  LuPrinter,
} from 'react-icons/lu'

export const servicesMenuData = [
  {
    label: 'Social Media Marketing',
    icon: LuGamepad,
    href: '/#social-media-marketing',
  },
  {
    label: 'Content Production',
    icon: LuImage,
    href: '/#content-production',
  },
  {
    label: 'Search Engine Optimization (SEO)',
    icon: LuSearch,
    href: '/#seo',
  },
  {
    label: 'Paid Ads Management',
    icon: LuCreditCard,
    href: '/#paid-ads',
  },
  {
    label: 'Online Reputation Management (ORM)',
    icon: LuShieldCheck,
    href: '/#orm',
  },
  {
    label: 'Event Management',
    icon: LuCalendar,
    href: '/#event-management',
  },
  {
    label: 'Brand Architecture',
    icon: LuLayers,
    href: '/#brand-architecture',
  },
  {
    label: 'Printing',
    icon: LuPrinter,
    href: '/#printing',
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 mt-4 px-1">
        <div
          className={`mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between rounded-full px-4 transition-all duration-500 ease-in-out ${
            isScrolled
              ? 'bg-slate-800/20 shadow-md backdrop-blur-md'
              : 'bg-transparent backdrop-blur-none'
          }`}
        >
          {/* Left Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex w-full items-center justify-between gap-6">
              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="rounded-full bg-transparent px-4 text-base font-semibold hover:bg-slate-800/80 lg:text-xl"
                >
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services */}
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-base font-semibold lg:text-xl">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] grid-cols-1 gap-2 p-1">
                    {servicesMenuData.map(service => (
                      <li
                        className="hover:bg-accent flex items-center justify-start gap-2 rounded-md p-2 text-center transition-colors duration-300"
                        key={service.href}
                      >
                        <service.icon className="size-5" />
                        <Link href={service.href} className="text-sm">
                          {service.label}
                        </Link>
                        <ChevronRight className="size-5" />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Work */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className="rounded-full bg-transparent px-4 py-2 text-base font-semibold hover:bg-slate-800/80 lg:text-xl"
                >
                  <Link href="/our-work">Our Work</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Center Logo */}
          <div>
            <Link href="/">
              <Image src="/LogoWhite.png" alt="Logo" width={45} height={45} />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden items-center gap-4 md:flex">
            <Link href="/" className="text-base font-semibold lg:text-xl">
              Midnite Social Network
            </Link>
            <Button
              variant="secondary"
              asChild
              className="rounded-full bg-transparent hover:bg-slate-800/80"
            >
              <Link href="/contact" className="text-base font-semibold lg:text-xl">
                Contact Us
              </Link>
            </Button>
          </div>

          {/* Toggle for mobile */}
          <div className="flex md:hidden">
            <HamburgerToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`bg-background/99 fixed top-0 bottom-0 left-0 z-30 h-full w-full transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pt-32">
          <ul className="flex flex-col space-y-4">
            <li className="text-4xl font-semibold">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="text-4xl font-semibold">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="text-4xl font-semibold">
              <Link href="/our-work" onClick={() => setIsOpen(false)}>
                Our Work
              </Link>
            </li>
            <li className="text-4xl font-semibold">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
