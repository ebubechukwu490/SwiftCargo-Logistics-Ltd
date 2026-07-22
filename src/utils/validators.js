const NIGERIAN_PHONE_REGEX = /^(?:\+234|234|0)[789]\d{9}$/;

export function isRequired(value) {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  return true;
}

export function isValidEmail(value) {
  if (!value) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value.trim());
}

export function normalizeNigerianPhone(value) {
  return value.replace(/[\s\-()]/g, '');
}

export function isValidNigerianPhone(value) {
  if (!value) return false;
  const normalized = normalizeNigerianPhone(value);
  return NIGERIAN_PHONE_REGEX.test(normalized);
}

export function isValidTrackingId(value, pattern) {
  if (!value) return false;
  return pattern.test(value.trim().toUpperCase());
}

export const VALIDATION_MESSAGES = {
  required: 'This field is required.',
  email: 'Please enter a valid email address.',
  phone: 'Please enter a valid Nigerian phone number.',
  trackingNotFound: 'This tracking ID was not found. Please check and try again.',
  trackingFormat: 'Please enter a valid tracking ID (e.g., SWC-2026-00142).',
  bookingConflict: 'That route/date is already booked. Please choose another slot.',
  sessionExpired: 'Your session has expired, please log in again.',
  generic: 'Something went wrong. Please try again.',
};
