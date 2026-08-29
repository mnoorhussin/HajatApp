/*
 * Store links + platform detection for the download CTAs.
 *
 * Both apps went live on 2026-08-29:
 *   iOS      Hajati, Apple ID 6789207716
 *   Android  com.hajatapp
 */

export const APP_STORE_URL = 'https://apps.apple.com/app/id6789207716';
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.hajatapp';

export type Platform = 'ios' | 'android' | 'other';

/**
 * Best-effort platform detection.
 *
 * Order matters: Android user agents contain "Linux", and some contain strings
 * that also appear on desktop, so Android is tested first.
 *
 * iPadOS 13+ deliberately reports a desktop Safari user agent containing
 * "Macintosh", so a UA test alone sends every iPad to the desktop fallback.
 * The maxTouchPoints check is the standard way to tell a real Mac (0) from an
 * iPad pretending to be one (5).
 */
export function detectPlatform(): Platform {
  if (typeof navigator === 'undefined') return 'other';

  const ua = navigator.userAgent || '';

  if (/android/i.test(ua)) return 'android';
  if (/iPhone|iPod|iPad/i.test(ua)) return 'ios';
  if (/Macintosh/.test(ua) && (navigator.maxTouchPoints ?? 0) > 1) return 'ios';

  return 'other';
}

export function storeUrlFor(platform: Platform): string | null {
  if (platform === 'ios') return APP_STORE_URL;
  if (platform === 'android') return PLAY_STORE_URL;
  return null;
}

/**
 * Send a phone straight to its own store; on anything else fall back to the
 * download section, which shows both links rather than guessing wrong.
 *
 * Returns true when it navigated, so callers can decide whether to also let
 * the anchor's default #download jump happen.
 */
export function goToStore(): boolean {
  const url = storeUrlFor(detectPlatform());
  if (!url) return false;
  window.location.href = url;
  return true;
}
