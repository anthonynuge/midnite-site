interface Project {
  id: string
  image: string
  name: string
  description: string
  tags?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'GoodBurger1',
    image: '/projects/GoodBurger1.jpg',
    name: 'Johnny Good Burger',
    description:
      'Produced engaging content for social media and high-impact promotional campaigns.',
    tags: ['Creative Strategy', 'Branding', 'Visual Identity'],
  },
  {
    id: 'pinkswan1',
    image: '/projects/PinkSwan.jpg',
    name: 'The Pink Swan Shop',
    description: 'Led SEO strategy and expanded e-commerce presence for scalable growth.',
    tags: ['Content Production', 'Photography', 'Visual Content'],
  },
  {
    id: 'baeicecream1',
    image: '/projects/BaeIceCream1.jpg',
    name: 'Bae Icecream & Co.',
    description: 'Drove social growth and engagement through strategic content production.',
    tags: ['Social Media', 'Content Creation', 'Campaigns'],
  },
  {
    id: 'PrestigeDental',
    image: '/projects/Prestige.jpg',
    name: 'Prestige Dental Humble',
    description: 'Managed targeted paid ad campaigns to drive new patient acquisition.',
    tags: ['Paid Ads', 'Ad Strategy', 'Geo-targeting'],
  },
  {
    id: 'returnsender1',
    image: '/projects/ReturnSender1.jpg',
    name: 'Return to Sender',
    description: 'Handled social media management, content creation, and brand-driven promotions.',
    tags: ['Email Marketing', 'SMS Campaigns', 'Automation'],
  },
]

interface Service {
  id: string
  title: string
  description: string
  image: string
}

export const servicesData: Service[] = [
  {
    id: 'social-media-marketing',
    title: 'Social Media Management',
    description:
      'We craft and execute tailored social media strategies that grow your online presence, drive engagement, and build community across all major platforms. From posting schedules to daily interactions, we handle it all so you don’t have to.',
    image: '/services/Social.jpg',
  },
  {
    id: 'content-production',
    title: 'Content Production',
    description:
      "We produce high-quality content that resonates with your brand's voice. This includes photos, videos, graphics, and copy that engage and convert. Whether for social media, your website, or marketing campaigns, we provide content that drives results.",
    image: '/services/Content.jpg',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description:
      'Our SEO strategies help your business get found by the right people at the right time. From keyword research to backend optimization, we position your site to rank higher and perform better on search engines.',
    image: '/services/SEO.png',
  },
  {
    id: 'paid-ads',
    title: 'Paid Ads Management',
    description:
      'Maximize ROI with strategic ad campaigns across Google, Meta, and beyond. We handle everything from targeting, A/B testing, and creative, ensuring your brand reaches the right audience with every dollar spent.',
    image: '/services/PaidAds.png',
  },
  {
    id: 'orm',
    title: 'Online Reputation Management',
    description:
      'We simplify the management of your online reputation, allowing you to relax without lifting a finger. We handle reviews across all major platforms, including Google, Yelp, and Facebook, as well as various locations. Our services include responding to feedback, following up with satisfied customers, and enhancing your online presence, ensuring your business remains trusted, visible, and thriving.',
    image: '/services/Reputation.png',
  },
  {
    id: 'website',
    title: 'Website Design & Development',
    description:
      "We design and build websites that are as functional as they are beautiful. Whether you're starting from scratch or refreshing your current site, we create fast, responsive, and user-friendly digital experiences tailored to your brand. From structure and design to performance and SEO, we ensure your website not only looks great — it works hard for your business.",
    image: '/services/WebsiteDesign.png',
  },
  {
    id: 'event-management',
    title: 'Event Management',
    description:
      "From concept to execution, we create events that make an impact. Whether it's a product launch, pop-up, or cultural celebration, we manage logistics, vendors, and marketing to bring your vision to life.",
    image: '/services/Event.jpg',
  },
  {
    id: 'brand-architecture',
    title: 'Brand Architecture',
    description:
      'We craft and execute email campaigns that convert. From drip campaigns to newsletters, we create personalized messages that drive engagement and conversions.',
    image: '/services/Brand.png',
  },
]
