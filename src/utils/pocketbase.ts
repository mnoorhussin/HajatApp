import PocketBase from 'pocketbase';

// Where the data lives. In dev, set VITE_PB_URL / VITE_API_URL in .env; both are
// unset in production so they fall back to the real hosts (same pattern as the
// chat widget's VITE_CHAT_API_URL).
const PB_URL = import.meta.env.VITE_PB_URL || 'https://db.hajatapp.com';

export const BACKEND_URL = import.meta.env.VITE_API_URL || 'https://api.hajatapp.com';

// Single shared client. The captain application authenticates against this via
// email OTP, exactly as the mobile apps do.
export const pb = new PocketBase(PB_URL);
