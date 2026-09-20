/**
 * Downscale a photo before it is uploaded.
 *
 * WHY THIS EXISTS
 * This page is the only way an iPhone user can apply to be a captain — the
 * app ships no application form (App Store guideline 5.1.1(ix)) — and every
 * applicant has to attach photos of an ID document. A picture of an ID card
 * taken on any recent phone is routinely 2-6MB, and a PocketBase file field
 * rejects anything over its configured maximum, 5MB by default.
 *
 * When that happened the applicant had already requested an OTP, verified it,
 * filled in every field and picked up to three documents. The upload failed at
 * the very last step, and the message told them nothing about the real reason.
 * There is no fallback path for them to try instead.
 *
 * The mobile apps never hit this because expo-image-picker re-encodes at
 * quality 0.8 on capture. This is the web equivalent.
 *
 * A long edge of 1600px is far more than a reviewer needs to read a name and
 * a number off an ID, and takes a 6MB photo to a few hundred KB.
 */

const MAX_EDGE = 1600;
const QUALITY = 0.82;

/** Anything at or under this is left alone — re-encoding it would only lose detail. */
const SKIP_BELOW_BYTES = 700 * 1024;

export const MAX_UPLOAD_BYTES = 5 * 1024 * 1024;

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('decode failed'));
    };
    img.src = url;
  });
}

/**
 * Returns a smaller JPEG when the input is a large image, and the original
 * file otherwise.
 *
 * Never throws: a picker that rejects a document because canvas misbehaved
 * would be worse than uploading the original and letting the server decide.
 */
export async function shrinkImage(file: File): Promise<File> {
  if (!file.type.startsWith('image/')) return file;   // PDFs pass through
  if (file.size <= SKIP_BELOW_BYTES) return file;

  try {
    const img = await loadImage(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(img.width, img.height));

    // Already small enough in pixels, but heavy in bytes — still worth
    // re-encoding, just at its own size.
    const width = Math.round(img.width * scale);
    const height = Math.round(img.height * scale);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return file;
    ctx.drawImage(img, 0, 0, width, height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, 'image/jpeg', QUALITY),
    );
    if (!blob || blob.size >= file.size) return file;   // no gain, keep the original

    const name = file.name.replace(/\.[^.]+$/, '') + '.jpg';
    return new File([blob], name, { type: 'image/jpeg', lastModified: Date.now() });
  } catch {
    return file;
  }
}
