export const SEO_DEFAULT = {
  baseUrl: 'https://swiftcargong.com',
  siteName: 'SwiftCargo Logistics Ltd',
  ogImage: '/og-image.jpg',
  twitterHandle: '@swiftcargo_ng',
};

export const SEO_PAGES = {
  home: {
    title: 'SwiftCargo Logistics Ltd | Reliable Logistics Across Nigeria',
    description: 'SwiftCargo Logistics Ltd — Reliable interstate cargo transport, warehousing, and last-mile delivery across Lagos, Ibadan, and Abuja.',
    path: '/',
  },
  about: {
    title: 'About Us | SwiftCargo Logistics Ltd',
    description: 'Learn about SwiftCargo Logistics Ltd — our mission, values, and how we serve businesses across Nigeria with reliable logistics solutions.',
    path: '/about',
  },
  services: {
    title: 'Our Services | SwiftCargo Logistics Ltd',
    description: 'Discover SwiftCargo Logistics services: interstate cargo transport, warehousing, last-mile delivery, and custom logistics solutions for Nigerian businesses.',
    path: '/services',
  },
  gallery: {
    title: 'Gallery | SwiftCargo Logistics Ltd',
    description: 'View our operations and fleet gallery showcasing SwiftCargo Logistics capabilities in cargo transport and logistics across Nigeria.',
    path: '/gallery',
  },
  testimonials: {
    title: 'Client Testimonials | SwiftCargo Logistics Ltd',
    description: 'Read testimonials from our clients — SMEs, e-commerce sellers, and corporate partners who trust SwiftCargo Logistics for their cargo needs.',
    path: '/testimonials',
  },
  careers: {
    title: 'Careers | SwiftCargo Logistics Ltd',
    description: 'Join the SwiftCargo Logistics team. Explore career opportunities in logistics, operations, and customer service across Nigeria.',
    path: '/careers',
  },
  contact: {
    title: 'Contact Us | SwiftCargo Logistics Ltd',
    description: 'Contact SwiftCargo Logistics Ltd for quotes, tracking, and inquiries. Reach us via phone, WhatsApp, or visit our Ikeja, Lagos office.',
    path: '/contact',
  },
  quote: {
    title: 'Get a Quote | SwiftCargo Logistics Ltd',
    description: 'Request a logistics quote from SwiftCargo. Fast quotes for interstate cargo transport, warehousing, and last-mile delivery services.',
    path: '/quote',
  },
  tracking: {
    title: 'Track Shipment | SwiftCargo Logistics Ltd',
    description: 'Track your shipment with SwiftCargo Logistics. Get real-time updates on your cargo movement across Nigeria.',
    path: '/tracking',
  },
  privacy: {
    title: 'Privacy Policy | SwiftCargo Logistics Ltd',
    description: 'Privacy Policy of SwiftCargo Logistics Ltd. Learn how we collect, use, and protect your personal information.',
    path: '/privacy',
    noIndex: true,
  },
  terms: {
    title: 'Terms & Conditions | SwiftCargo Logistics Ltd',
    description: 'Terms and Conditions of SwiftCargo Logistics Ltd. Read our service terms and conditions.',
    path: '/terms',
    noIndex: true,
  },
};

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'SwiftCargo Logistics Ltd',
  description: 'SwiftCargo Logistics is a leading logistics and haulage company specializing in interstate cargo movement, warehousing, and last-mile delivery across Nigeria.',
  url: 'https://swiftcargong.com',
  telephone: '+2348032147765',
  email: 'info@swiftcargong.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '14B Adeniyi Jones Avenue',
    addressLocality: 'Ikeja',
    addressRegion: 'Lagos',
    addressCountry: 'NG',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.6018,
    longitude: 3.3467,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
  ],
  areaServed: ['Lagos', 'Ibadan', 'Abuja'],
};