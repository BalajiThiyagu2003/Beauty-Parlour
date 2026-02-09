/**
 * Contact details used across the app (Footer, Contact page, WhatsApp).
 * Use same number for tel: links and WhatsApp.
 */

/** Full number with country code, no + or spaces (e.g. 911234567890 for India) */
export const WHATSAPP_NUMBER = '1234567890';

/** Display format for tel: and UI */
export const PHONE_DISPLAY = '+1 234 567 890';

/** tel: link (use for click-to-call) */
export const TEL_HREF = 'tel:+1234567890';

/** WhatsApp URL base: wa.me/{number} */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/**
 * Build WhatsApp link with optional pre-filled message.
 */
export function getWhatsAppLink(message?: string): string {
  if (!message?.trim()) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message.trim())}`;
}
