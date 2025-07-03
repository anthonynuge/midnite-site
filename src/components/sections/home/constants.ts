interface Project {
  id: string
  image: string
  title: string
  description: string
  tags?: string[]
}

export const PROJECTS: Project[] = [
  {
    id: 'unsplash-1',
    image: '/projects/Taco1.jpg',
    title: 'Creative Strategy',
    description:
      'We develop strategies that align your brand with your audience and business goals.',
    tags: ['Creative Strategy', 'Brand Strategy', 'Marketing Strategy'],
  },
  {
    id: 'unsplash-2',
    image: '/projects/PinkSwan1.jpg',
    title: 'Content Production',
    description:
      'High-quality photo and video content designed to tell your story across platforms.',
    tags: ['Content Production', 'Video Production', 'Photo Production'],
  },
  {
    id: 'unsplash-3',
    image: '/projects/BaeIceCream1.jpg',
    title: 'Social Media Management',
    description: 'We grow your online presence through strategy and content.',
    tags: ['Social Media Management', 'Social Media Strategy', 'Social Media Content'],
  },
  {
    id: 'unsplash-4',
    image: '/projects/EastSide1.jpg',
    title: 'Paid Advertising',
    description: 'Data-driven campaigns that convert and scale.',
    tags: ['Paid Advertising', 'Advertising Strategy', 'Advertising Content'],
  },
  {
    id: 'unsplash-5',
    image: '/projects/ReturnSender1.jpg',
    title: 'Email & SMS Marketing',
    description: 'Build customer loyalty and retention with automated flows.',
    tags: ['Email Marketing', 'SMS Marketing', 'Automated Flows'],
  },
  {
    id: 'unsplash-6',
    image: '/projects/PostLNY2025-26.jpg',
    title: 'SEO & Web Optimization',
    description: 'Improve ranking, site speed, and conversion performance.',
    tags: ['SEO', 'Web Optimization', 'Conversion Rate Optimization'],
  },
  {
    id: 'unsplash-7',
    image: '/projects/Taco1.jpg',
    title: 'Brand Identity',
    description: 'Logo, typography, and visual systems that make you stand out.',
    tags: ['Brand Identity', 'Logo Design', 'Typography', 'Visual Systems'],
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
