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

export const servicesMenuData = [
  {
    label: 'Social Media Marketing',
    icon: 'gamepad',
    href: '/services/social-media-marketing',
  },
  {
    label: 'Content Production',
    icon: 'image',
    href: '/services/content-production',
  },
  {
    label: 'Search Engine Optimization (SEO)',
    icon: 'search',
    href: '/services/seo',
  },
  {
    label: 'Paid Ads Management',
    icon: 'credit-card',
    href: '/services/paid-ads',
  },
  {
    label: 'Online Reputation Management (ORM)',
    icon: 'shield-check',
    href: '/services/orm',
  },
  {
    label: 'Event Management',
    icon: 'calendar',
    href: '/services/event-management',
  },
  {
    label: 'Brand Architecture',
    icon: 'layers',
    href: '/services/brand-architecture',
  },
  {
    label: 'Printing',
    icon: 'printer',
    href: '/services/printing',
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
      <header className="fixed top-0 right-0 left-0 z-50 mt-4">
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
                  <ul className="grid w-[400px] grid-cols-1 gap-2 px-4 py-2">
                    {servicesMenuData.map(service => (
                      <li
                        className="hover:bg-accent flex items-center gap-4 rounded-xl p-2"
                        key={service.href}
                      >
                        <span>icon</span>
                        <Link href={service.href}>{service.label}</Link>
                        <span>
                          <ChevronRight />
                        </span>
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
            <Image src="/LogoWhite.png" alt="Logo" width={45} height={45} />
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
        className={`bg-background/99 fixed top-0 left-0 z-30 h-screen w-full transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 pt-32">
          <ul className="flex flex-col space-y-4">
            <li className="text-4xl font-semibold">
              <Link href="/about">About</Link>
            </li>
            <li className="text-4xl font-semibold">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-4xl font-semibold">
              <Link href="/our-work">Our Work</Link>
            </li>
            <li className="text-4xl font-semibold">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
