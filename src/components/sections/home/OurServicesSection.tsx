'use client'

import { useEffect, useRef, useState } from 'react'

const mockImages = [
  'https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1718183120769-ece47f31045b?w=500&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=500&auto=format&fit=crop',
]

const servicesData = [
  {
    title: 'Social Media Management',
    description:
      'We craft and execute tailored social media strategies that grow your online presence, drive engagement, and build community across all major platforms. From posting schedules to daily interactions, we handle it all so you don’t have to.',
    image: mockImages[0],
  },
  {
    title: 'Content Production',
    description:
      "We produce high-quality content that resonates with your brand's voice. This includes photos, videos, graphics, and copy that engage and convert. Whether for social media, your website, or marketing campaigns, we provide content that drives results.",
    image: mockImages[1],
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Our SEO strategies help your business get found by the right people at the right time. From keyword research to backend optimization, we position your site to rank higher and perform better on search engines.',
    image: mockImages[2],
  },
  {
    title: 'Paid Ads Management',
    description:
      'Maximize ROI with strategic ad campaigns across Google, Meta, and beyond. We handle everything from targeting, A/B testing, and creative, ensuring your brand reaches the right audience with every dollar spent.',
    image: mockImages[3],
  },
  {
    title: 'Online Reputation Management',
    description:
      'We simplify the management of your online reputation, allowing you to relax without lifting a finger. We handle reviews across all major platforms, including Google, Yelp, and Facebook, as well as various locations. Our services include responding to feedback, following up with satisfied customers, and enhancing your online presence, ensuring your business remains trusted, visible, and thriving.',
    image: mockImages[0],
  },
  {
    title: 'Website Design & Development',
    description:
      'We simplify the management of your online reputation, allowing you to relax without lifting a finger. We handle reviews across all major platforms, including Google, Yelp, and Facebook, as well as various locations. Our services include responding to feedback, following up with satisfied customers, and enhancing your online presence, ensuring your business remains trusted, visible, and thriving.',
    image: mockImages[1],
  },
  {
    title: 'Event Management',
    description:
      "From concept to execution, we create events that make an impact. Whether it's a product launch, pop-up, or cultural celebration, we manage logistics, vendors, and marketing to bring your vision to life.",
    image: mockImages[2],
  },
  {
    title: 'Brand Architecture',
    description:
      'We craft and execute email campaigns that convert. From drip campaigns to newsletters, we create personalized messages that drive engagement and conversions.',
    image: mockImages[3],
  },
  {
    title: 'Social Media Management',
    description:
      'We handle all aspects of social media, from content creation to community engagement. We create a consistent, engaging presence across platforms, ensuring your brand stays top of mind with your target audience.',
    image: mockImages[0],
  },
]

export default function OurServicesSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const refs = sectionRefs.current
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveImageIndex(index)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    )

    // Once the component mounts, we observe the sections
    refs.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    // Cleanup function to unobserve the sections when the component unmounts
    return () => {
      refs.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 gap-4 px-0 md:grid-cols-2 md:px-8">
        {/* left side */}
        <div className="top-0 grid place-content-start md:sticky md:h-screen md:place-content-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl">Our Services</h2>
            <p>Full-service marketing built to grow your brand</p>
            <figure className="rounded-md">
              <img
                src={servicesData[activeImageIndex].image}
                alt=""
                className="hidden h-140 w-140 rounded-md object-cover align-bottom transition-all duration-300 md:block"
              />
            </figure>
          </div>
        </div>

        {/* right side discriptions*/}
        <div className="grid snap-y snap-mandatory space-y-24 md:space-y-0">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="top-0 grid h-auto snap-center place-content-center space-y-2 px-4 md:h-screen"
              data-index={index}
              ref={el => {
                sectionRefs.current[index] = el
              }}
            >
              <div className="block md:hidden">
                <img
                  src={service.image}
                  alt=""
                  className="h-auto w-full rounded-md object-cover align-bottom transition-all duration-300"
                />
              </div>
              <h4 className="text-lg font-medium md:text-4xl">{service.title}</h4>
              <p className="max-w-full text-slate-100 xl:max-w-3/4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
