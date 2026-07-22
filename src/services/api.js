/**
 * API Service - Front-end integration layer
 * All methods return promises and are ready to connect to a real backend.
 * Currently uses mock data / simulated delays for UI development.
 */

import { SAMPLE_TRACKING, TRACKING_ID_PATTERN } from '@/constants/tracking';
import { VALIDATION_MESSAGES } from '@/utils/validators';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';
const MOCK_DELAY = 800;

function delay(ms = MOCK_DELAY) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || VALIDATION_MESSAGES.generic);
  }

  return response.json();
}

/* ---- Public Endpoints ---- */

export async function submitQuote(data) {
  // return request('/quotes', { method: 'POST', body: JSON.stringify(data) });
  await delay();
  return {
    success: true,
    trackingId: `SWC-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 90000) + 10000)}`,
    message: 'Your quote request has been submitted. Our team will contact you shortly.',
  };
}

export async function lookupTracking(trackingId) {
  // return request(`/quotes/${encodeURIComponent(trackingId)}`);
  await delay(600);
  const normalized = trackingId.trim().toUpperCase();
  if (!TRACKING_ID_PATTERN.test(normalized)) {
    throw new Error(VALIDATION_MESSAGES.trackingFormat);
  }
  const result = SAMPLE_TRACKING[normalized];
  if (!result) {
    throw new Error(VALIDATION_MESSAGES.trackingNotFound);
  }
  return result;
}

export async function submitContact(data) {
  // return request('/contact', { method: 'POST', body: JSON.stringify(data) });
  await delay();
  return { success: true, message: 'Thank you for contacting us. We will respond within 24 hours.' };
}

export async function submitCareerApplication(data) {
  // return request('/careers/apply', { method: 'POST', body: JSON.stringify(data) });
  await delay();
  return { success: true, message: 'Your application has been submitted successfully.' };
}

export async function subscribeNewsletter(email) {
  // return request('/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
  await delay(500);
  return { success: true, message: 'You have been subscribed to our newsletter.' };
}

/* ---- Admin Endpoints (UI mock) ---- */

export async function adminLogin(credentials) {
  // return request('/admin/login', { method: 'POST', body: JSON.stringify(credentials) });
  await delay();
  if (credentials.email && credentials.password) {
    return {
      success: true,
      token: 'mock-jwt-token',
      user: { name: 'Operations Manager', role: 'ops_manager', email: credentials.email },
    };
  }
  throw new Error('Invalid credentials');
}

export async function getAdminQuotes() {
  // return request('/admin/quotes', { headers: { Authorization: `Bearer ${token}` } });
  await delay();
  return [
    {
      id: 1,
      customerName: 'Chidi Okafor',
      phone: '08032147765',
      pickup: 'Ikeja, Lagos',
      delivery: 'Wuse, Abuja',
      cargoType: 'Palletized Goods',
      preferredDate: '2026-07-25',
      status: 'pending',
      trackingId: 'SWC-2026-00142',
      createdAt: '2026-07-20T08:00:00',
      expiresAt: '2026-07-21T08:00:00',
    },
    {
      id: 2,
      customerName: 'Amina Bello',
      phone: '08099887766',
      pickup: 'Surulere, Lagos',
      delivery: 'Bodija, Ibadan',
      cargoType: 'E-commerce Parcels',
      preferredDate: '2026-07-22',
      status: 'confirmed',
      trackingId: 'SWC-2026-00089',
      createdAt: '2026-07-19T14:30:00',
      expiresAt: '2026-07-20T14:30:00',
    },
    {
      id: 3,
      customerName: 'Emeka Nwosu',
      phone: '08155443322',
      pickup: 'Apapa, Lagos',
      delivery: 'Garki, Abuja',
      cargoType: 'Industrial Materials',
      preferredDate: '2026-07-24',
      status: 'in_transit',
      trackingId: 'SWC-2026-00156',
      createdAt: '2026-07-18T11:00:00',
      expiresAt: '2026-07-19T11:00:00',
    },
    {
      id: 4,
      customerName: 'Fatima Yusuf',
      phone: '07011223344',
      pickup: 'Victoria Island, Lagos',
      delivery: 'Challenge, Ibadan',
      cargoType: 'Retail Inventory',
      preferredDate: '2026-07-23',
      status: 'expired',
      trackingId: 'SWC-2026-00067',
      createdAt: '2026-07-17T09:00:00',
      expiresAt: '2026-07-18T09:00:00',
    },
  ];
}

export async function updateQuoteStatus(id, status) {
  // return request(`/admin/quotes/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
  await delay(400);
  return { success: true, id, status };
}

export async function getDashboardStats() {
  await delay(300);
  return {
    totalQuotes: 47,
    pendingQuotes: 8,
    confirmedThisWeek: 12,
    conversionRate: 68,
  };
}
