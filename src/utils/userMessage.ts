const ARABIC = /[؀-ۿ]/;

const NETWORK = 'تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت وحاول مرة أخرى.';

/**
 * A failure message that is safe to put in front of an Arabic-speaking user.
 *
 * Three kinds of error reach a catch block in this app and only one of them
 * speaks Arabic:
 *
 *   our API        — answers `{ error: "..." }` in Arabic, and is worth showing
 *   the PB SDK     — "Failed to authenticate.", "The requested resource wasn't
 *                    found." and friends
 *   fetch itself   — "Network request failed"
 *
 * `err.message || 'fallback'` covers all three and gets two of them wrong,
 * which is how English kept surfacing under Arabic headings.
 *
 * The test here is simply whether the text IS Arabic. That is more honest
 * than trying to guess the error's provenance from its shape: a message we
 * wrote is in Arabic, and anything from a library is not.
 */
export function userMessage(err: unknown, fallback: string): string {
  const e = err as any;

  // A ClientResponseError with status 0 never reached the server, and a bare
  // TypeError from fetch has no status at all.
  if (e?.status === 0) return NETWORK;
  if (typeof e?.message === 'string' && /network request failed/i.test(e.message)) {
    return NETWORK;
  }

  const candidates = [
    e?.response?.data?.error,
    e?.response?.error,
    e?.data?.error,
    e?.message,
  ];
  for (const c of candidates) {
    if (typeof c === 'string' && ARABIC.test(c)) return c;
  }

  return fallback;
}

/** The connection message, for callers that already know that is the case. */
export const NETWORK_MESSAGE = NETWORK;
