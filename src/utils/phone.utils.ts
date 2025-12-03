/**
 * Format phone number for Malaysia
 * Converts: 0123456789 → 60123456789
 * Keeps: 60123456789 → 60123456789
 */
export function formatPhoneForBackend(phone: string): number {
  // Remove any non-digit characters
  const digitsOnly = phone.replace(/\D/g, '');
  
  // If starts with 0, replace with 60
  if (digitsOnly.startsWith('0')) {
    return parseInt(`6${digitsOnly}`, 10);
  }
  
  // If already starts with 60, use as is
  if (digitsOnly.startsWith('60')) {
    return parseInt(digitsOnly, 10);
  }
  
  // Otherwise, add 60 prefix
  return parseInt(`60${digitsOnly}`, 10);
}

/**
 * Validate phone number format
 * Accepts: 10-11 digits, no + symbol
 */
export function isValidPhoneNumber(phone: string): boolean {
  // Remove any whitespace
  const cleaned = phone.trim();
  
  // Check for + symbol
  if (cleaned.includes('+')) {
    return false;
  }
  
  // Only digits allowed
  const digitsOnly = cleaned.replace(/\D/g, '');
  
  // Must be 10-11 digits
  return digitsOnly.length >= 10 && digitsOnly.length <= 11;
}