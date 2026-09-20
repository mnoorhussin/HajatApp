import { pb, BACKEND_URL } from './pocketbase';

/**
 * Ask the backend to mint a captain_id that is unique across all captains.
 *
 * This deliberately does NOT check uniqueness from here any more. The previous
 * implementation ran `captains.getList(filter: captain_id = "...")` with the
 * applicant's own token; the captains read rule is locked to owner + staff and
 * an applicant has no captains row yet, so that query returned an empty page
 * for EVERY candidate — the check silently always passed and duplicate ids
 * could be issued. captain_id is the reference captains quote in their Bankak
 * transfer note, so a duplicate means commission credited to the wrong
 * captain.
 *
 * The server runs as a superuser and can actually see every existing id, and
 * a unique partial index on captains.captain_id backs it up. This is the same
 * endpoint the Android app uses (utils/generateCaptainId.ts there).
 */
export async function generateUniqueCaptainId(): Promise<string> {
  const res = await fetch(`${BACKEND_URL}/auth/captain-id`, {
    headers: { Authorization: `Bearer ${pb.authStore.token}` },
  });

  if (!res.ok) {
    throw new Error('تعذّر إنشاء رقم كابتن، حاول مرة أخرى');
  }

  const data = await res.json();
  if (!data?.captainId) {
    throw new Error('تعذّر إنشاء رقم كابتن، حاول مرة أخرى');
  }

  return String(data.captainId);
}
