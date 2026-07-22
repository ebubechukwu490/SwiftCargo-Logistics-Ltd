import interstateCargoImg from '@/assets/interstate_cargo_transport.png';
import warehousingImg from '@/assets/warehousing_storage.png';
import lastMileImg from '@/assets/last_mile_delivery.svg';
import customLogisticsImg from '@/assets/custom_logistics.svg';

export const SERVICES = [
  {
    id: 'cargo-transport',
    title: 'Interstate Cargo Transport',
    shortDescription:
      'Secure, scheduled cargo movement between Lagos, Ibadan, Abuja, and surrounding corridors for SMEs and corporate clients.',
    description:
      'Our interstate cargo transport service is built for businesses that need dependable, trackable movement of goods across Nigeria. From palletized freight to bulk shipments, SwiftCargo coordinates pickup, transit, and delivery with clear communication at every stage.',
    features: [
      'Dedicated route planning and dispatch coordination',
      'Real-time shipment status updates',
      'Flexible scheduling for recurring corporate routes',
      'Secure handling and documented handoffs',
    ],
    image: interstateCargoImg,
    imageLabel: 'Cargo transport, awaiting client photography',
    aspectRatio: '16/10',
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Storage',
    shortDescription:
      'Short and medium-term storage solutions with organized inventory handling at our Ikeja facility.',
    description:
      'SwiftCargo provides secure warehousing for businesses that need staging space before distribution. Our team manages inbound receiving, organized storage, and outbound dispatch, helping e-commerce sellers and distributors maintain consistent fulfillment.',
    features: [
      'Secure storage at our Ikeja facility',
      'Inbound and outbound coordination',
      'Inventory visibility on request',
      'Integration with last-mile delivery',
    ],
    image: warehousingImg,
    imageLabel: 'Warehousing, awaiting client photography',
    aspectRatio: '16/10',
  },
  {
    id: 'last-mile',
    title: 'Last-Mile Delivery',
    shortDescription:
      'Final-leg delivery to customers, retail outlets, and business locations across our service cities.',
    description:
      'When your goods need to reach the end customer, our last-mile delivery network ensures timely, professional handoffs. We support e-commerce sellers, distributors, and corporate clients with scheduled and on-demand delivery options.',
    features: [
      'Same-day and next-day delivery options',
      'Proof of delivery documentation',
      'Coverage across Lagos, Ibadan, and Abuja',
      'Professional delivery personnel',
    ],
    image: lastMileImg,
    imageLabel: 'Last-mile delivery, awaiting client photography',
    aspectRatio: '16/10',
  },
  {
    id: 'custom-logistics',
    title: 'Custom Logistics Solutions',
    shortDescription:
      'Tailored logistics programs for high-volume clients with unique routing, scheduling, and reporting needs.',
    description:
      'For businesses with complex or recurring logistics requirements, SwiftCargo designs custom programs that align with your operations. From dedicated routes to multi-stop deliveries and bespoke reporting, we work as an extension of your team.',
    features: [
      'Dedicated account coordination',
      'Custom route and schedule design',
      'Priority dispatch and support',
      'Volume-based pricing arrangements',
    ],
    image: customLogisticsImg,
    imageLabel: 'Custom logistics, awaiting client photography',
    aspectRatio: '16/10',
  },
];

export const SERVICE_AREAS = ['Lagos', 'Ibadan', 'Abuja'];

export const CARGO_TYPES = [
  'General Cargo',
  'Palletized Goods',
  'E-commerce Parcels',
  'Industrial Materials',
  'Retail Inventory',
  'Other',
];
