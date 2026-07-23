/**
 * API Service - Front-end integration layer
 * All methods return promises and are ready to connect to a real backend.
 * Backend integration pending. This feature has been fully prepared on the frontend 
 * and will become functional once the backend services are connected.
 */

import { VALIDATION_MESSAGES } from '@/utils/validators';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';

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

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function submitQuote(data) {
  // return request('/quotes', { method: 'POST', body: JSON.stringify(data) });
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function lookupTracking(trackingId) {
  // return request(`/tracking/${encodeURIComponent(trackingId)}`);
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function submitContact(data) {
  // return request('/contact', { method: 'POST', body: JSON.stringify(data) });
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function submitCareerApplication(data) {
  // return request('/careers/apply', { method: 'POST', body: JSON.stringify(data) });
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function subscribeNewsletter(email) {
  // return request('/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

/* ---- Admin Endpoints ---- */

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function adminLogin(credentials) {
  // return request('/admin/login', { method: 'POST', body: JSON.stringify(credentials) });
  // Temporary: Allow any login for development/testing
  if (credentials.email && credentials.password) {
    return {
      success: true,
      token: 'temp-jwt-token',
      user: { name: 'Operations Manager', role: 'ops_manager', email: credentials.email },
    };
  }
  throw new Error('Invalid credentials');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function getAdminQuotes() {
  // return request('/admin/quotes', { headers: { Authorization: `Bearer ${token}` } });
  // Temporary: Mock data for development/testing
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

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function updateQuoteStatus(id, status) {
  // return request(`/admin/quotes/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
  // Temporary: Mock success for development/testing
  return { success: true, id, status };
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function getDashboardStats() {
  // Temporary: Mock stats for development/testing
  return {
    totalQuotes: 47,
    pendingQuotes: 8,
    confirmedThisWeek: 12,
    conversionRate: 68,
  };
}
