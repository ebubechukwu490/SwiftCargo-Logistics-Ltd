export const TRACKING_STATUSES = {
  pending: {
    label: 'Pending Confirmation',
    description: 'Your quote request is being reviewed by our operations team.',
    color: 'warning',
    step: 0,
  },
  confirmed: {
    label: 'Confirmed',
    description: 'Your shipment has been confirmed and is scheduled for pickup.',
    color: 'info',
    step: 1,
  },
  picked_up: {
    label: 'Picked Up',
    description: 'Your cargo has been collected and is being prepared for transit.',
    color: 'info',
    step: 2,
  },
  in_transit: {
    label: 'In Transit',
    description: 'Your shipment is currently en route to the delivery location.',
    color: 'info',
    step: 3,
  },
  out_for_delivery: {
    label: 'Out for Delivery',
    description: 'Your shipment is on its way to the final delivery point.',
    color: 'accent',
    step: 4,
  },
  delivered: {
    label: 'Delivered',
    description: 'Your shipment has been successfully delivered.',
    color: 'success',
    step: 5,
  },
  cancelled: {
    label: 'Cancelled',
    description: 'This shipment has been cancelled.',
    color: 'error',
    step: -1,
  },
  expired: {
    label: 'Expired',
    description: 'This quote was not confirmed within 24 hours and has expired.',
    color: 'error',
    step: -1,
  },
};

export const TRACKING_STEPS = [
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'picked_up', label: 'Picked Up' },
  { key: 'in_transit', label: 'In Transit' },
  { key: 'out_for_delivery', label: 'Out for Delivery' },
  { key: 'delivered', label: 'Delivered' },
];

export const SAMPLE_TRACKING = {
  'SWC-2026-00142': {
    trackingId: 'SWC-2026-00142',
    status: 'in_transit',
    customerName: 'Chidi Okafor',
    pickup: 'Ikeja, Lagos',
    delivery: 'Wuse, Abuja',
    cargoType: 'Palletized Goods',
    estimatedDelivery: '2026-07-22',
    lastUpdated: '2026-07-20T09:30:00',
    timeline: [
      { status: 'confirmed', date: '2026-07-18T14:00:00', note: 'Shipment confirmed by operations team' },
      { status: 'picked_up', date: '2026-07-19T08:15:00', note: 'Cargo collected from pickup location' },
      { status: 'in_transit', date: '2026-07-19T22:30:00', note: 'En route to Abuja via Lokoja corridor' },
    ],
  },
  'SWC-2026-00089': {
    trackingId: 'SWC-2026-00089',
    status: 'delivered',
    customerName: 'Amina Bello',
    pickup: 'Surulere, Lagos',
    delivery: 'Bodija, Ibadan',
    cargoType: 'E-commerce Parcels',
    estimatedDelivery: '2026-07-17',
    lastUpdated: '2026-07-17T16:45:00',
    timeline: [
      { status: 'confirmed', date: '2026-07-15T10:00:00', note: 'Shipment confirmed' },
      { status: 'picked_up', date: '2026-07-16T07:30:00', note: 'Parcels collected' },
      { status: 'in_transit', date: '2026-07-16T14:00:00', note: 'In transit to Ibadan' },
      { status: 'out_for_delivery', date: '2026-07-17T09:00:00', note: 'Out for final delivery' },
      { status: 'delivered', date: '2026-07-17T16:45:00', note: 'Delivered and signed off' },
    ],
  },
};

export const TRACKING_ID_PATTERN = /^SWC-\d{4}-\d{5}$/;
