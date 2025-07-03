interface Project {
  id: string
  image: string
  name: string
  description: string
  tags?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'taco1',
    image: '/projects/Taco1.jpg',
    name: 'Taco 1',
    description: 'Brand strategy and creative direction for a modern taqueria.',
    tags: ['Creative Strategy', 'Branding', 'Visual Identity'],
  },
  {
    id: 'pinkswan1',
    image: '/projects/PinkSwan1.jpg',
    name: 'Pink Swan Jewelry',
    description: 'Product and lifestyle content for social and e-commerce.',
    tags: ['Content Production', 'Photography', 'Visual Content'],
  },
  {
    id: 'baeicecream1',
    image: '/projects/BaeIceCream1.jpg',
    name: 'Bae Ice Cream',
    description: 'Social content and campaigns to boost engagement.',
    tags: ['Social Media', 'Content Creation', 'Campaigns'],
  },
  {
    id: 'eastside1',
    image: '/projects/EastSide1.jpg',
    name: 'East Side Social',
    description: 'Paid ads to drive traffic and local event awareness.',
    tags: ['Paid Ads', 'Ad Strategy', 'Geo-targeting'],
  },
  {
    id: 'returnsender1',
    image: '/projects/ReturnSender1.jpg',
    name: 'Return to Sender',
    description: 'Email and SMS flows to boost retention and sales.',
    tags: ['Email Marketing', 'SMS Campaigns', 'Automation'],
  },
]

interface Service {
  title: string
  description: string
  image: string
}

export const servicesData: Service[] = [
  {
    title: 'Social Media Management',
    description:
      'We craft and execute tailored social media strategies that grow your online presence, drive engagement, and build community across all major platforms. From posting schedules to daily interactions, we handle it all so you don’t have to.',
    image: '/services/SocialMedia.jpg',
  },
  {
    title: 'Content Production',
    description:
      "We produce high-quality content that resonates with your brand's voice. This includes photos, videos, graphics, and copy that engage and convert. Whether for social media, your website, or marketing campaigns, we provide content that drives results.",
    image: '/services/Content.jpg',
  },
  {
    title: 'Search Engine Optimization',
    description:
      'Our SEO strategies help your business get found by the right people at the right time. From keyword research to backend optimization, we position your site to rank higher and perform better on search engines.',
    image: '/services/SEO.png',
  },
  {
    title: 'Paid Ads Management',
    description:
      'Maximize ROI with strategic ad campaigns across Google, Meta, and beyond. We handle everything from targeting, A/B testing, and creative, ensuring your brand reaches the right audience with every dollar spent.',
    image: '/services/PaidAds.png',
  },
  {
    title: 'Online Reputation Management',
    description:
      'We simplify the management of your online reputation, allowing you to relax without lifting a finger. We handle reviews across all major platforms, including Google, Yelp, and Facebook, as well as various locations. Our services include responding to feedback, following up with satisfied customers, and enhancing your online presence, ensuring your business remains trusted, visible, and thriving.',
    image: '/services/Reputation.png',
  },
  {
    title: 'Website Design & Development',
    description:
      'We simplify the management of your online reputation, allowing you to relax without lifting a finger. We handle reviews across all major platforms, including Google, Yelp, and Facebook, as well as various locations. Our services include responding to feedback, following up with satisfied customers, and enhancing your online presence, ensuring your business remains trusted, visible, and thriving.',
    image: '/services/WebsiteDesign.png',
  },
  {
    title: 'Event Management',
    description:
      "From concept to execution, we create events that make an impact. Whether it's a product launch, pop-up, or cultural celebration, we manage logistics, vendors, and marketing to bring your vision to life.",
    image: '/services/Event.jpg',
  },
  {
    title: 'Brand Architecture',
    description:
      'We craft and execute email campaigns that convert. From drip campaigns to newsletters, we create personalized messages that drive engagement and conversions.',
    image: '/services/Brand.png',
  },
]
