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
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function updateQuoteStatus(id, status) {
  // return request(`/admin/quotes/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}

// TODO: Backend developer:
// Connect this function to the appropriate API endpoint.
// Replace the temporary placeholder message with the actual server response.
export async function getDashboardStats() {
  throw new Error('Backend integration pending. This feature has been fully prepared on the frontend and will become functional once the backend services are connected.');
}
