import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// ─── ESM equivalents of __dirname ───────────
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ─── Load service account key ───────────────
const serviceAccount = JSON.parse(
  readFileSync(resolve(__dirname, "./serviceAccountKey.json"), "utf-8")
);

// ─── Initialize Firebase Admin ──────────────
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();
const now = Timestamp.now();

// ─── Everything below stays EXACTLY the same ───
// Color Logging
// ─── Color Logging ──────────────────────────
const log = {
  success: (msg: string) => console.log(`\x1b[32m✅ ${msg}\x1b[0m`),
  info: (msg: string) => console.log(`\x1b[36m📝 ${msg}\x1b[0m`),
  warn: (msg: string) => console.log(`\x1b[33m⚠️  ${msg}\x1b[0m`),
  error: (msg: string) => console.log(`\x1b[31m❌ ${msg}\x1b[0m`),
  header: (msg: string) =>
    console.log(`\n\x1b[35m${"═".repeat(50)}\n   ${msg}\n${"═".repeat(50)}\x1b[0m`),
};

// ══════════════════════════════════════════════
//  1. APP CONFIG (REQUIRED)
// ══════════════════════════════════════════════
async function seedAppConfig() {
  log.header("Seeding App Config");

  // General Config
  await db.doc("appConfig/general").set({
    appName: "حاجات",
    appNameEn: "Hajat",
    appVersion: "1.0.0",
    minAppVersion: "1.0.0",
    maintenanceMode: false,
    maintenanceMessage: "",
    supportPhone: "+249123456789",
    supportEmail: "support@hajat.sd",
    supportWhatsApp: "+249123456789",
    termsUrl: "https://hajat.sd/terms",
    privacyUrl: "https://hajat.sd/privacy",
    defaultLanguage: "ar",
    defaultCurrency: "SDG",
    createdAt: now,
    updatedAt: now,
  });
  log.success("appConfig/general created");

  // Pricing Config
  await db.doc("appConfig/pricing").set({
    defaultBaseFare: 500,
    defaultPerKmRate: 200,
    defaultMinimumFare: 1000,
    defaultServiceFeePercent: 10,
    defaultCaptainCommission: 85,
    urgentMultiplier: 1.5,
    maxOrderValue: 500000,
    freeDeliveryThreshold: 50000,
    currency: "SDG",
    createdAt: now,
    updatedAt: now,
  });
  log.success("appConfig/pricing created");

  // Captain Config
  await db.doc("appConfig/captain").set({
    maxConcurrentOrders: 2,
    orderTimeoutSeconds: 60,
    autoAssignRadius: 5,
    minimumAcceptanceRate: 70,
    minimumRating: 3.5,
    payoutMinimum: 5000,
    payoutSchedule: "weekly",
    requireIdVerification: true,
    requireVehiclePhoto: false,
    autoApprove: false,
    createdAt: now,
    updatedAt: now,
  });
  log.success("appConfig/captain created");

  // Notification Config
  await db.doc("appConfig/notifications").set({
    newOrderSound: "default",
    orderUpdateSound: "default",
    chatMessageSound: "default",
    enableSMS: false,
    enableWhatsApp: true,
    smsFallback: true,
    orderReminderMinutes: 5,
    captainInactivityMinutes: 30,
    createdAt: now,
    updatedAt: now,
  });
  log.success("appConfig/notifications created");
}

// ══════════════════════════════════════════════
//  2. SERVICE AREAS
// ══════════════════════════════════════════════
async function seedServiceAreas() {
  log.header("Seeding Service Areas");

  const areas = [
    // ══════════════════════════════════════════
    //  ولاية الخرطوم (Khartoum State)
    // ══════════════════════════════════════════
    {
      id: "khartoum",
      name: "الخرطوم",
      nameAr: "الخرطوم",
      nameEn: "Khartoum",
      state: "ولاية الخرطوم",
      centerLat: 15.5007,
      centerLng: 32.5599,
      radiusKm: 15,
      baseFare: 500,
      perKmRate: 200,
      minimumFare: 1000,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: true,
      isPrimary: true,
      operatingHours: { start: "06:00", end: "23:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },
    {
      id: "bahri",
      name: "بحري",
      nameAr: "بحري",
      nameEn: "Bahri",
      state: "ولاية الخرطوم",
      centerLat: 15.6361,
      centerLng: 32.5511,
      radiusKm: 12,
      baseFare: 500,
      perKmRate: 200,
      minimumFare: 1000,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: true,
      isPrimary: true,
      operatingHours: { start: "06:00", end: "23:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },
    {
      id: "omdurman",
      name: "أم درمان",
      nameAr: "أم درمان",
      nameEn: "Omdurman",
      state: "ولاية الخرطوم",
      centerLat: 15.6445,
      centerLng: 32.4777,
      radiusKm: 12,
      baseFare: 500,
      perKmRate: 250,
      minimumFare: 1000,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: true,
      isPrimary: true,
      operatingHours: { start: "06:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  الولاية الشمالية (Northern State)
    // ══════════════════════════════════════════
    {
      id: "dongola",
      name: "دنقلا",
      nameAr: "دنقلا",
      nameEn: "Dongola",
      state: "الولاية الشمالية",
      centerLat: 19.1753,
      centerLng: 30.4766,
      radiusKm: 8,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية نهر النيل (River Nile State)
    // ══════════════════════════════════════════
    {
      id: "atbara",
      name: "عطبرة",
      nameAr: "عطبرة",
      nameEn: "Atbara",
      state: "ولاية نهر النيل",
      centerLat: 17.7024,
      centerLng: 33.9866,
      radiusKm: 8,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية البحر الأحمر (Red Sea State)
    // ══════════════════════════════════════════
    {
      id: "port_sudan",
      name: "بورتسودان",
      nameAr: "بورتسودان",
      nameEn: "Port Sudan",
      state: "ولاية البحر الأحمر",
      centerLat: 19.6158,
      centerLng: 37.2164,
      radiusKm: 10,
      baseFare: 500,
      perKmRate: 220,
      minimumFare: 1000,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "06:00", end: "23:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية كسلا (Kassala State)
    // ══════════════════════════════════════════
    {
      id: "kassala",
      name: "كسلا",
      nameAr: "كسلا",
      nameEn: "Kassala",
      state: "ولاية كسلا",
      centerLat: 15.4517,
      centerLng: 36.4000,
      radiusKm: 8,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية القضارف (Gedaref State)
    // ══════════════════════════════════════════
    {
      id: "gedaref",
      name: "القضارف",
      nameAr: "القضارف",
      nameEn: "Gedaref",
      state: "ولاية القضارف",
      centerLat: 14.0333,
      centerLng: 35.3833,
      radiusKm: 8,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية الجزيرة (Gezira State)
    // ══════════════════════════════════════════
    {
      id: "wad_madani",
      name: "ود مدني",
      nameAr: "ود مدني",
      nameEn: "Wad Madani",
      state: "ولاية الجزيرة",
      centerLat: 14.4000,
      centerLng: 33.5167,
      radiusKm: 10,
      baseFare: 450,
      perKmRate: 190,
      minimumFare: 900,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "06:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية سنار (Sennar State)
    // ══════════════════════════════════════════
    {
      id: "sennar",
      name: "سنار",
      nameAr: "سنار",
      nameEn: "Sennar",
      state: "ولاية سنار",
      centerLat: 13.5500,
      centerLng: 33.6167,
      radiusKm: 7,
      baseFare: 400,
      perKmRate: 170,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية النيل الأبيض (White Nile State)
    // ══════════════════════════════════════════
    {
      id: "rabak",
      name: "ربك",
      nameAr: "ربك",
      nameEn: "Rabak",
      state: "ولاية النيل الأبيض",
      centerLat: 13.1833,
      centerLng: 32.7333,
      radiusKm: 7,
      baseFare: 400,
      perKmRate: 170,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية النيل الأزرق (Blue Nile State)
    // ══════════════════════════════════════════
    {
      id: "damazin",
      name: "الدمازين",
      nameAr: "الدمازين",
      nameEn: "Ed Damazin",
      state: "ولاية النيل الأزرق",
      centerLat: 11.7667,
      centerLng: 34.3500,
      radiusKm: 7,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية شمال دارفور (North Darfur)
    // ══════════════════════════════════════════
    {
      id: "elfasher",
      name: "الفاشر",
      nameAr: "الفاشر",
      nameEn: "El Fasher",
      state: "ولاية شمال دارفور",
      centerLat: 13.6300,
      centerLng: 25.3500,
      radiusKm: 8,
      baseFare: 450,
      perKmRate: 200,
      minimumFare: 900,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية جنوب دارفور (South Darfur)
    // ══════════════════════════════════════════
    {
      id: "nyala",
      name: "نيالا",
      nameAr: "نيالا",
      nameEn: "Nyala",
      state: "ولاية جنوب دارفور",
      centerLat: 12.0500,
      centerLng: 24.8833,
      radiusKm: 8,
      baseFare: 450,
      perKmRate: 200,
      minimumFare: 900,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية غرب دارفور (West Darfur)
    // ══════════════════════════════════════════
    {
      id: "geneina",
      name: "الجنينة",
      nameAr: "الجنينة",
      nameEn: "El Geneina",
      state: "ولاية غرب دارفور",
      centerLat: 13.4500,
      centerLng: 22.4500,
      radiusKm: 7,
      baseFare: 450,
      perKmRate: 200,
      minimumFare: 900,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية شرق دارفور (East Darfur)
    // ══════════════════════════════════════════
    {
      id: "daein",
      name: "الضعين",
      nameAr: "الضعين",
      nameEn: "Ed Daein",
      state: "ولاية شرق دارفور",
      centerLat: 11.4667,
      centerLng: 26.1333,
      radiusKm: 7,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية وسط دارفور (Central Darfur)
    // ══════════════════════════════════════════
    {
      id: "zalingei",
      name: "زالنجي",
      nameAr: "زالنجي",
      nameEn: "Zalingei",
      state: "ولاية وسط دارفور",
      centerLat: 12.9000,
      centerLng: 23.4667,
      radiusKm: 6,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية شمال كردفان (North Kordofan)
    // ══════════════════════════════════════════
    {
      id: "elobeid",
      name: "الأبيض",
      nameAr: "الأبيض",
      nameEn: "El Obeid",
      state: "ولاية شمال كردفان",
      centerLat: 13.1833,
      centerLng: 30.2167,
      radiusKm: 8,
      baseFare: 450,
      perKmRate: 190,
      minimumFare: 900,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "22:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية جنوب كردفان (South Kordofan)
    // ══════════════════════════════════════════
    {
      id: "kadugli",
      name: "كادقلي",
      nameAr: "كادقلي",
      nameEn: "Kadugli",
      state: "ولاية جنوب كردفان",
      centerLat: 11.0167,
      centerLng: 29.7167,
      radiusKm: 7,
      baseFare: 400,
      perKmRate: 180,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    // ══════════════════════════════════════════
    //  ولاية غرب كردفان (West Kordofan)
    // ══════════════════════════════════════════
    {
      id: "elfula",
      name: "الفولة",
      nameAr: "الفولة",
      nameEn: "El Fula",
      state: "ولاية غرب كردفان",
      centerLat: 11.7333,
      centerLng: 28.3500,
      radiusKm: 6,
      baseFare: 400,
      perKmRate: 170,
      minimumFare: 800,
      surgePricing: false,
      surgeMultiplier: 1.0,
      isActive: false,
      isPrimary: false,
      operatingHours: { start: "07:00", end: "21:00" },
      availableDays: [0, 1, 2, 3, 4, 5, 6],
      totalCaptains: 0,
      activeCaptains: 0,
      totalOrders: 0,
    },

    
  ];

  for (const area of areas) {
    const { id, ...data } = area;
    await db.doc(`serviceAreas/${id}`).set({
      ...data,
      createdAt: now,
      updatedAt: now,
    });
    log.success(`serviceAreas/${id} — ${data.nameAr} (${data.state})`);
  }

  log.info(`Total: ${areas.length} service areas seeded`);
}
// ══════════════════════════════════════════════
//  3. TEST USERS (for development)
// ══════════════════════════════════════════════
async function seedTestUsers() {
  log.header("Seeding Test Users");

  const users = [
    {
      id: "admin_001",
      phone: "+249900000001",
      phoneVerified: true,
      name: "مدير النظام",
      displayName: "Admin",
      role: "superAdmin",
      isCaptain: false,
      captainApplicationStatus: "none",
      currentMode: "user",
      status: "active",
      language: "ar",
      stats: {
        totalOrders: 0,
        totalSpent: 0,
        cancelledOrders: 0,
        averageRating: 0,
        totalRatings: 0,
      },
      fcmTokens: [],
      notificationsEnabled: true,
      referralCode: "ADMIN001",
      totalReferrals: 0,
      referralEarnings: 0,
    },
    {
      id: "user_001",
      phone: "+249912345678",
      phoneVerified: true,
      name: "محمد أحمد",
      displayName: "محمد",
      role: "user",
      isCaptain: false,
      captainApplicationStatus: "none",
      currentMode: "user",
      status: "active",
      language: "ar",
      stats: {
        totalOrders: 5,
        totalSpent: 15000,
        cancelledOrders: 0,
        averageRating: 4.8,
        totalRatings: 5,
      },
      fcmTokens: [],
      notificationsEnabled: true,
      referralCode: "MOHA2024",
      totalReferrals: 2,
      referralEarnings: 1000,
      lastKnownLocation: {
        lat: 15.5007,
        lng: 32.5599,
        geohash: "scz0x",
        updatedAt: now,
      },
    },
    {
      id: "user_002",
      phone: "+249987654321",
      phoneVerified: true,
      name: "فاطمة علي",
      displayName: "فاطمة",
      role: "user",
      isCaptain: false,
      captainApplicationStatus: "none",
      currentMode: "user",
      status: "active",
      language: "ar",
      stats: {
        totalOrders: 3,
        totalSpent: 8500,
        cancelledOrders: 1,
        averageRating: 4.5,
        totalRatings: 2,
      },
      fcmTokens: [],
      notificationsEnabled: true,
      referralCode: "FATI2024",
      totalReferrals: 0,
      referralEarnings: 0,
    },
    {
      id: "captain_001",
      phone: "+249911111111",
      phoneVerified: true,
      name: "خالد عبدالله",
      displayName: "خالد",
      role: "user",
      isCaptain: true,
      captainApplicationStatus: "approved",
      currentMode: "captain",
      status: "active",
      language: "ar",
      captain: {
        fileNumber: "CPT-1001",
        applicationId: "app_001",
        approvedAt: now,
        approvedBy: "admin_001",
        nationalIdNumber: "12345678",
        nationalIdFrontUrl: "",
        nationalIdBackUrl: "",
        selfieWithIdUrl: "",
        vehicleType: "motorcycle",
        vehiclePlate: "أ ب ت 1234",
        vehicleModel: "باجاج 2023",
        vehicleColor: "أسود",
        isOnline: true,
        maxConcurrentOrders: 2,
        currentActiveOrders: 0,
        serviceAreaId: "khartoum",
        workingRadius: 10,
        commissionRate: 0.15,
        totalEarnings: 45000,
        currentBalance: 12000,
        mobileMoneyProvider: "بنكك",
        mobileMoneyNumber: "+249911111111",
        totalDeliveries: 35,
        totalCancellations: 2,
        averageRating: 4.7,
        totalRatings: 30,
        acceptanceRate: 92,
        completionRate: 95,
        averageDeliveryTime: 35,
        lastDeliveryAt: now,
      },
      stats: {
        totalOrders: 2,
        totalSpent: 5000,
        cancelledOrders: 0,
        averageRating: 4.9,
        totalRatings: 2,
      },
      fcmTokens: [],
      notificationsEnabled: true,
      referralCode: "KHAL2024",
      totalReferrals: 5,
      referralEarnings: 2500,
    },
    {
      id: "captain_002",
      phone: "+249922222222",
      phoneVerified: true,
      name: "سارة محمود",
      displayName: "سارة",
      role: "user",
      isCaptain: true,
      captainApplicationStatus: "approved",
      currentMode: "captain",
      status: "active",
      language: "ar",
      captain: {
        fileNumber: "CPT-1002",
        applicationId: "app_002",
        approvedAt: now,
        approvedBy: "admin_001",
        nationalIdNumber: "87654321",
        nationalIdFrontUrl: "",
        nationalIdBackUrl: "",
        selfieWithIdUrl: "",
        vehicleType: "car",
        vehiclePlate: "خ ر ط 5678",
        vehicleModel: "تويوتا كورولا 2020",
        vehicleColor: "أبيض",
        isOnline: false,
        maxConcurrentOrders: 3,
        currentActiveOrders: 0,
        serviceAreaId: "khartoum",
        workingRadius: 15,
        commissionRate: 0.12,
        totalEarnings: 78000,
        currentBalance: 25000,
        bankName: "بنك الخرطوم",
        bankAccountNumber: "1234567890",
        bankAccountName: "سارة محمود",
        totalDeliveries: 62,
        totalCancellations: 3,
        averageRating: 4.9,
        totalRatings: 55,
        acceptanceRate: 95,
        completionRate: 97,
        averageDeliveryTime: 28,
        lastDeliveryAt: now,
      },
      stats: {
        totalOrders: 8,
        totalSpent: 22000,
        cancelledOrders: 0,
        averageRating: 5.0,
        totalRatings: 8,
      },
      fcmTokens: [],
      notificationsEnabled: true,
      referralCode: "SARA2024",
      totalReferrals: 3,
      referralEarnings: 1500,
    },
    {
      id: "captain_003",
      phone: "+249933333333",
      phoneVerified: true,
      name: "عمر حسن",
      displayName: "عمر",
      role: "user",
      isCaptain: false,
      captainApplicationStatus: "pending",
      currentMode: "user",
      status: "active",
      language: "ar",
      stats: {
        totalOrders: 1,
        totalSpent: 3000,
        cancelledOrders: 0,
        averageRating: 0,
        totalRatings: 0,
      },
      fcmTokens: [],
      notificationsEnabled: true,
      referralCode: "OMAR2024",
      totalReferrals: 0,
      referralEarnings: 0,
    },
  ];

  for (const user of users) {
    const { id, ...data } = user;
    await db.doc(`users/${id}`).set({
      ...data,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
      lastActiveAt: now,
    });
    log.success(`users/${id} — ${data.name}`);

    // Add a default address for regular users
    if (id === "user_001") {
      await db.doc(`users/${id}/addresses/addr_001`).set({
        label: "البيت",
        fullAddress: "الخرطوم، الرياض، شارع 15",
        lat: 15.5007,
        lng: 32.5599,
        geohash: "scz0x",
        area: "الخرطوم",
        landmark: "بجانب مسجد النور",
        instructions: "الباب الأخضر، الطابق الثاني",
        isDefault: true,
        createdAt: now,
      });
      log.success(`  └── address for ${data.name}`);
    }
  }
}

// ══════════════════════════════════════════════
//  4. CAPTAIN APPLICATIONS
// ══════════════════════════════════════════════
async function seedCaptainApplications() {
  log.header("Seeding Captain Applications");

  const applications = [
    {
      id: "app_001",
      fileNumber: "CPT-1001",
      userId: "captain_001",
      userName: "خالد عبدالله",
      userPhone: "+249911111111",
      fullName: "خالد عبدالله محمد",
      age: 28,
      city: "الخرطوم",
      neighborhood: "الرياض",
      nationalIdNumber: "12345678",
      nationalIdFrontUrl: "",
      nationalIdBackUrl: "",
      selfieWithIdUrl: "",
      hasVehicle: true,
      vehicleType: "motorcycle",
      vehiclePlate: "أ ب ت 1234",
      previousDeliveryExperience: true,
      previousCompany: "طلبات",
      whyJoin: "أريد دخل إضافي وأحب العمل الحر",
      emergencyContactName: "أحمد عبدالله",
      emergencyContactPhone: "+249900000002",
      emergencyContactRelation: "أخ",
      status: "approved",
      reviewedBy: "admin_001",
      reviewedAt: now,
      reviewNotes: "مستندات كاملة، خبرة سابقة",
      submittedAt: now,
      updatedAt: now,
    },
    {
      id: "app_002",
      fileNumber: "CPT-1002",
      userId: "captain_002",
      userName: "سارة محمود",
      userPhone: "+249922222222",
      fullName: "سارة محمود أحمد",
      age: 25,
      city: "الخرطوم",
      neighborhood: "المنشية",
      nationalIdNumber: "87654321",
      nationalIdFrontUrl: "",
      nationalIdBackUrl: "",
      selfieWithIdUrl: "",
      hasVehicle: true,
      vehicleType: "car",
      vehiclePlate: "خ ر ط 5678",
      driverLicenseUrl: "",
      previousDeliveryExperience: false,
      whyJoin: "أبحث عن عمل مرن يناسب أوقاتي",
      emergencyContactName: "محمود أحمد",
      emergencyContactPhone: "+249900000003",
      emergencyContactRelation: "أب",
      status: "approved",
      reviewedBy: "admin_001",
      reviewedAt: now,
      reviewNotes: "موافقة — لديها سيارة ورخصة",
      submittedAt: now,
      updatedAt: now,
    },
    {
      id: "app_003",
      fileNumber: "CPT-1003",
      userId: "captain_003",
      userName: "عمر حسن",
      userPhone: "+249933333333",
      fullName: "عمر حسن إبراهيم",
      age: 22,
      city: "الخرطوم",
      neighborhood: "الصحافة",
      nationalIdNumber: "11223344",
      nationalIdFrontUrl: "",
      nationalIdBackUrl: "",
      selfieWithIdUrl: "",
      hasVehicle: false,
      vehicleType: "walking",
      previousDeliveryExperience: false,
      whyJoin: "طالب جامعي أريد دخل إضافي",
      emergencyContactName: "حسن إبراهيم",
      emergencyContactPhone: "+249900000004",
      emergencyContactRelation: "أب",
      status: "pending",
      submittedAt: now,
      updatedAt: now,
    },
  ];

  for (const app of applications) {
    const { id, ...data } = app;
    await db.doc(`captainApplications/${id}`).set(data);
    log.success(`captainApplications/${id} — ${data.userName} (${data.status})`);
  }
}
await db.doc("appConfig/counters").set({
  captainApplicationCounter: 1000,  // starts at CPT-1001
  orderCounter: 0,                   // for future: ORD-0001
  ticketCounter: 0,                  // for future: TKT-0001
  createdAt: now,
  updatedAt: now,
});
log.success("appConfig/counters created");
// ══════════════════════════════════════════════
//  5. CAPTAIN LOCATIONS (for God Mode map)
// ══════════════════════════════════════════════
async function seedCaptainLocations() {
  log.header("Seeding Captain Locations");

  const locations = [
    {
      id: "captain_001",
      lat: 15.5007,
      lng: 32.5599,
      geohash: "scz0x",
      heading: 180,
      speed: 25,
      accuracy: 10,
      isOnline: true,
      status: "available",
      name: "خالد عبدالله",
      phone: "+249911111111",
      vehicleType: "motorcycle",
      averageRating: 4.7,
      lastUpdated: now,
      wentOnlineAt: now,
      batteryLevel: 85,
      connectionType: "4g",
    },
    {
      id: "captain_002",
      lat: 15.5100,
      lng: 32.5400,
      geohash: "scz0y",
      heading: 90,
      speed: 0,
      accuracy: 15,
      isOnline: true,
      status: "busy",
      currentOrderId: "order_001",
      currentOrderStatus: "shopping",
      name: "سارة محمود",
      phone: "+249922222222",
      vehicleType: "car",
      averageRating: 4.9,
      lastUpdated: now,
      wentOnlineAt: now,
      batteryLevel: 62,
      connectionType: "4g",
    },
  ];

  for (const loc of locations) {
    const { id, ...data } = loc;
    await db.doc(`captainLocations/${id}`).set(data);
    log.success(`captainLocations/${id} — ${data.name} (${data.status})`);
  }
}

// ══════════════════════════════════════════════
//  6. TEST ORDERS
// ══════════════════════════════════════════════
async function seedOrders() {
  log.header("Seeding Test Orders");

  const orders = [
    {
      id: "order_001",
      type: "butler",
      customerId: "user_001",
      customerName: "محمد أحمد",
      customerPhone: "+249912345678",
      captainId: "captain_002",
      captainName: "سارة محمود",
      captainPhone: "+249922222222",
      captainVehicleType: "car",
      description: "أبي 2 كيلو طماطم و 1 كيلو بصل و خبز من أقرب سوق",
      specialInstructions: "الطماطم تكون صلبة مش طرية",
      deliveryLocation: {
        address: "الخرطوم، الرياض، شارع 15",
        lat: 15.5007,
        lng: 32.5599,
        geohash: "scz0x",
        landmark: "بجانب مسجد النور",
        instructions: "الباب الأخضر، الطابق الثاني",
      },
      estimatedDistance: 3.5,
      estimatedDuration: 25,
      status: "shopping",
      assignmentMethod: "auto",
      assignedAt: now,
      pricing: {
        estimatedItemsCost: 3000,
        deliveryFee: 1200,
        serviceFee: 300,
        tip: 0,
        discount: 0,
        subtotal: 4500,
        total: 4500,
        commissionRate: 0.12,
      },
      paymentMethod: "cash",
      paymentStatus: "pending",
      isScheduled: false,
      priority: "normal",
      isUrgent: false,
      trackingEnabled: true,
      flagged: false,
      createdAt: now,
      updatedAt: now,
      searchingStartedAt: now,
      acceptedAt: now,
      shoppingStartedAt: now,
    },
    {
      id: "order_002",
      type: "butler",
      customerId: "user_002",
      customerName: "فاطمة علي",
      customerPhone: "+249987654321",
      description: "محتاجة شحن رصيد سوداني 1000 جنيه لرقم 0912345678",
      deliveryLocation: {
        address: "الخرطوم، المنشية، شارع الجامعة",
        lat: 15.5100,
        lng: 32.5400,
        geohash: "scz0y",
      },
      status: "pending",
      assignmentMethod: "auto",
      pricing: {
        estimatedItemsCost: 1000,
        deliveryFee: 500,
        serviceFee: 150,
        tip: 0,
        discount: 0,
        subtotal: 1650,
        total: 1650,
      },
      paymentMethod: "cash",
      paymentStatus: "pending",
      isScheduled: false,
      priority: "normal",
      isUrgent: false,
      trackingEnabled: true,
      flagged: false,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: "order_003",
      type: "butler",
      customerId: "user_001",
      customerName: "محمد أحمد",
      customerPhone: "+249912345678",
      captainId: "captain_001",
      captainName: "خالد عبدالله",
      captainPhone: "+249911111111",
      description: "غداء من مطعم البركة — 2 وجبة فول + 2 عصير",
      deliveryLocation: {
        address: "الخرطوم، الرياض، شارع 15",
        lat: 15.5007,
        lng: 32.5599,
        geohash: "scz0x",
      },
      status: "delivered",
      assignmentMethod: "auto",
      pricing: {
        estimatedItemsCost: 2000,
        actualItemsCost: 2200,
        deliveryFee: 800,
        serviceFee: 220,
        tip: 500,
        discount: 0,
        subtotal: 3220,
        total: 3720,
        captainEarnings: 3162,
        platformRevenue: 558,
        commissionRate: 0.15,
      },
      paymentMethod: "cash",
      paymentStatus: "collected",
      isScheduled: false,
      priority: "normal",
      isUrgent: false,
      trackingEnabled: false,
      customerRating: 5,
      customerReview: "كابتن ممتاز والأكل وصل سخن",
      captainRating: 5,
      flagged: false,
      createdAt: Timestamp.fromDate(
        new Date(Date.now() - 2 * 60 * 60 * 1000)
      ),
      updatedAt: now,
      deliveredAt: now,
    },
  ];

  for (const order of orders) {
    const { id, ...data } = order;
    await db.doc(`orders/${id}`).set(data);
    log.success(`orders/${id} — ${data.status}`);

    // Add status history for delivered order
    if (id === "order_003") {
      const statuses = [
        { from: "", to: "pending", by: "system" },
        { from: "pending", to: "searching", by: "system" },
        { from: "searching", to: "captain_assigned", by: "captain_001" },
        { from: "captain_assigned", to: "shopping", by: "captain_001" },
        { from: "shopping", to: "picked_up", by: "captain_001" },
        { from: "picked_up", to: "delivered", by: "captain_001" },
      ];

      for (let i = 0; i < statuses.length; i++) {
        await db
          .collection(`orders/${id}/statusHistory`)
          .add({
            fromStatus: statuses[i].from,
            toStatus: statuses[i].to,
            changedBy: statuses[i].by,
            changedByRole: statuses[i].by === "system" ? "system" : "captain",
            timestamp: Timestamp.fromDate(
              new Date(Date.now() - (statuses.length - i) * 10 * 60 * 1000)
            ),
          });
      }
      log.success(`  └── statusHistory seeded (${statuses.length} entries)`);
    }

    // Add items for the shopping order
    if (id === "order_001") {
      const items = [
        {
          name: "طماطم",
          quantity: 2,
          unit: "kg",
          unitPrice: 800,
          totalPrice: 1600,
          isSubstitute: false,
          customerApproved: true,
          addedAt: now,
        },
        {
          name: "بصل",
          quantity: 1,
          unit: "kg",
          unitPrice: 600,
          totalPrice: 600,
          isSubstitute: false,
          customerApproved: true,
          addedAt: now,
        },
        {
          name: "خبز بلدي",
          quantity: 5,
          unit: "piece",
          unitPrice: 100,
          totalPrice: 500,
          isSubstitute: false,
          customerApproved: true,
          addedAt: now,
        },
      ];
      for (const item of items) {
        await db.collection(`orders/${id}/items`).add(item);
      }
      log.success(`  └── ${items.length} items added`);
    }
  }
}

// ══════════════════════════════════════════════
//  7. WALLETS
// ══════════════════════════════════════════════
async function seedWallets() {
  log.header("Seeding Wallets");

  const wallets = [
    {
      id: "user_001",
      userId: "user_001",
      balance: 5000,
      currency: "SDG",
      heldAmount: 0,
      totalDeposited: 20000,
      totalWithdrawn: 0,
      totalSpent: 15000,
      totalEarned: 0,
      isActive: true,
      isFrozen: false,
    },
    {
      id: "captain_001",
      userId: "captain_001",
      balance: 12000,
      currency: "SDG",
      heldAmount: 0,
      totalDeposited: 0,
      totalWithdrawn: 33000,
      totalSpent: 5000,
      totalEarned: 45000,
      isActive: true,
      isFrozen: false,
    },
    {
      id: "captain_002",
      userId: "captain_002",
      balance: 25000,
      currency: "SDG",
      heldAmount: 0,
      totalDeposited: 0,
      totalWithdrawn: 53000,
      totalSpent: 22000,
      totalEarned: 78000,
      isActive: true,
      isFrozen: false,
    },
  ];

  for (const wallet of wallets) {
    const { id, ...data } = wallet;
    await db.doc(`wallets/${id}`).set({
      ...data,
      createdAt: now,
      updatedAt: now,
    });
    log.success(`wallets/${id}`);
  }
}

// ══════════════════════════════════════════════
//  8. PROMOTIONS
// ══════════════════════════════════════════════
async function seedPromotions() {
  log.header("Seeding Promotions");

  const promos = [
    {
      id: "promo_welcome",
      code: "HAJAT50",
      type: "percentage",
      value: 50,
      maxDiscount: 5000,
      minOrderAmount: 2000,
      targetAudience: "new_users",
      maxTotalUses: 1000,
      maxUsesPerUser: 1,
      currentUses: 0,
      isActive: true,
      startsAt: now,
      expiresAt: Timestamp.fromDate(
        new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
      ),
      description: "خصم 50% على أول طلب — حد أقصى 5000 جنيه",
      descriptionAr: "خصم 50% على أول طلب — حد أقصى 5000 جنيه",
      createdBy: "admin_001",
    },
    {
      id: "promo_free_delivery",
      code: "FREE2024",
      type: "free_delivery",
      value: 0,
      minOrderAmount: 5000,
      targetAudience: "all",
      maxTotalUses: 500,
      maxUsesPerUser: 3,
      currentUses: 0,
      isActive: true,
      startsAt: now,
      expiresAt: Timestamp.fromDate(
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      ),
      description: "توصيل مجاني للطلبات فوق 5000 جنيه",
      descriptionAr: "توصيل مجاني للطلبات فوق 5000 جنيه",
      createdBy: "admin_001",
    },
  ];

  for (const promo of promos) {
    const { id, ...data } = promo;
    await db.doc(`promotions/${id}`).set({
      ...data,
      createdAt: now,
      updatedAt: now,
    });
    log.success(`promotions/${id} — ${data.code}`);
  }
}

// ══════════════════════════════════════════════
//  9. INITIAL ANALYTICS
// ══════════════════════════════════════════════
async function seedAnalytics() {
  log.header("Seeding Initial Analytics");

  const today = new Date().toISOString().split("T")[0];

  await db.doc(`analytics/${today}`).set({
    date: now,
    orders: {
      total: 3,
      completed: 1,
      cancelled: 0,
      averageValue: 3290,
      totalRevenue: 9870,
      totalDeliveryFees: 2500,
      totalServiceFees: 670,
      totalTips: 500,
    },
    captains: {
      totalOnline: 2,
      newApplications: 1,
      newApprovals: 0,
      totalPayouts: 0,
    },
    users: {
      newSignups: 3,
      activeUsers: 2,
      totalUsers: 4,
    },
    financials: {
      grossRevenue: 9870,
      platformRevenue: 558,
      captainPayouts: 0,
      refunds: 0,
      promoDiscounts: 0,
    },
    createdAt: now,
  });
  log.success(`analytics/${today}`);
}

// ══════════════════════════════════════════════
//  🚀 RUN EVERYTHING
// ══════════════════════════════════════════════
async function seedAll() {
  console.log("\n");
  log.header("🚀 HAJAT DATABASE SEEDER — STARTING");
  console.log("\n");

  try {
    await seedAppConfig();
    await seedServiceAreas();
    await seedTestUsers();
    await seedCaptainApplications();
    await seedCaptainLocations();
    await seedOrders();
    await seedWallets();
    await seedPromotions();
    await seedAnalytics();

    log.header("🎉 ALL DONE! Database seeded successfully");
    console.log("\n");
    log.info("Collections created:");
    log.info("  📁 appConfig        (4 docs)");
    log.info("  📁 serviceAreas     (3 docs)");
    log.info("  📁 users            (6 docs + subcollections)");
    log.info("  📁 captainApplications (3 docs)");
    log.info("  📁 captainLocations (2 docs)");
    log.info("  📁 orders           (3 docs + subcollections)");
    log.info("  📁 wallets          (3 docs)");
    log.info("  📁 promotions       (2 docs)");
    log.info("  📁 analytics        (1 doc)");
    console.log("\n");
    log.warn("Remember: Empty collections auto-create when the app writes to them:");
    log.warn("  📁 transactions     (created on payments)");
    log.warn("  📁 ratings          (created after delivery)");
    log.warn("  📁 supportTickets   (created by users)");
    log.warn("  📁 adminLogs        (created on admin actions)");
    console.log("\n");
  } catch (error) {
    log.error(`Seeding failed: ${error}`);
    console.error(error);
  }

  process.exit(0);
}

seedAll();