import {
  doc,
  runTransaction,
} from "firebase/firestore";
import { db } from "../lib/firebase";

/**
 * Generates a unique sequential file number
 * Uses Firestore transactions to prevent duplicates
 * 
 * @param prefix - "CPT" | "ORD" | "TKT"
 * @param counterField - matching field in appConfig/counters
 * @returns "CPT-1001", "CPT-1002", etc.
 */
export async function generateFileNumber(
  prefix: "CPT" | "ORD" | "TKT",
  counterField: string
): Promise<string> {
  const counterRef = doc(db, "appConfig", "counters");

  const newNumber = await runTransaction(db, async (transaction) => {
    const counterDoc = await transaction.get(counterRef);

    if (!counterDoc.exists()) {
      throw new Error("Counter document does not exist!");
    }

    const currentCount = counterDoc.data()[counterField] || 0;
    const nextCount = currentCount + 1;

    // Update the counter atomically
    transaction.update(counterRef, {
      [counterField]: nextCount,
      updatedAt: new Date(),
    });

    return nextCount;
  });

  // Format: CPT-1001, CPT-1002, etc. (zero-padded to 4 digits)
  const paddedNumber = String(newNumber).padStart(4, "0");
  return `${prefix}-${paddedNumber}`;
}

/**
 * Shortcut for captain applications
 * Returns: "CPT-1001"
 */
export async function generateCaptainFileNumber(): Promise<string> {
  return generateFileNumber("CPT", "captainApplicationCounter");
}

/**
 * Shortcut for orders (future use)
 * Returns: "ORD-0001"
 */
export async function generateOrderNumber(): Promise<string> {
  return generateFileNumber("ORD", "orderCounter");
}

/**
 * Shortcut for support tickets (future use)
 * Returns: "TKT-0001"
 */
export async function generateTicketNumber(): Promise<string> {
  return generateFileNumber("TKT", "ticketCounter");
}