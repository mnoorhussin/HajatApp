import type PocketBase from 'pocketbase';

export async function generateUniqueCaptainId(pb: PocketBase): Promise<string> {
  const MAX_ATTEMPTS = 10;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    const id = Math.floor(100000 + Math.random() * 900000).toString();

    const result = await pb.collection('captains').getList(1, 1, {
      filter: `captain_id = "${id}"`,
    });

    if (result.items.length === 0) {
      return id;
    }
  }

  throw new Error('Could not generate unique ID, try again');
}
