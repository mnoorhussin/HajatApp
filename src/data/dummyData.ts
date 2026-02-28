// Dummy data for the admin dashboard

export const statsOverview = {
  totalOrders: 3842,
  activeOrders: 47,
  completedToday: 312,
  cancelledToday: 8,
  totalRevenue: 18_750_000,
  todayRevenue: 1_245_000,
  totalUsers: 6231,
  newUsersToday: 89,
  totalCaptains: 184,
  activeCaptains: 62,
  avgDeliveryTime: 24, // minutes
  avgRating: 4.7,
};

export const recentOrders = [
  { id: 'HJT-4021', user: 'أحمد محمد', captain: 'عبدالله عمر', type: 'مطعم', item: '2 شاورما دجاج + بيبسي', amount: 4500, fee: 1500, status: 'delivered', area: 'الخرطوم بحري', time: '14:32' },
  { id: 'HJT-4020', user: 'سارة حسن', captain: 'محمد علي', type: 'صيدلية', item: 'بنادول + فيتامين C', amount: 3200, fee: 1500, status: 'in_transit', area: 'أمدرمان', time: '14:28' },
  { id: 'HJT-4019', user: 'خالد إبراهيم', captain: 'يوسف أحمد', type: 'بقالة', item: 'طماطم 2 كيلو + بصل + زيت', amount: 6800, fee: 1500, status: 'negotiating', area: 'كسلا', time: '14:25' },
  { id: 'HJT-4018', user: 'فاطمة عثمان', captain: '—', type: 'مرسال', item: 'طرد مستندات → شارع النيل', amount: 0, fee: 2000, status: 'pending', area: 'الخرطوم', time: '14:20' },
  { id: 'HJT-4017', user: 'عمر بكري', captain: 'حسام الدين', type: 'مطعم', item: 'فول + طعمية + عصير', amount: 3500, fee: 1500, status: 'delivered', area: 'بحري', time: '14:15' },
  { id: 'HJT-4016', user: 'مريم آدم', captain: 'أنس محمد', type: 'صيدلية', item: 'أدوية ضغط + سكر', amount: 12500, fee: 1500, status: 'delivered', area: 'أمدرمان', time: '14:01' },
  { id: 'HJT-4015', user: 'حسن عبدالرحمن', captain: 'بشير خالد', type: 'بقالة', item: 'مقاضي أسبوعية كاملة', amount: 28000, fee: 1500, status: 'cancelled', area: 'كسلا', time: '13:55' },
  { id: 'HJT-4014', user: 'نورا صالح', captain: 'طارق حسين', type: 'مطعم', item: '3 برقر + كولا كبير', amount: 7200, fee: 1500, status: 'delivered', area: 'الخرطوم', time: '13:48' },
  { id: 'HJT-4013', user: 'عادل محمود', captain: 'عبدالله عمر', type: 'إسبيرات', item: 'فلتر زيت تويوتا كورولا', amount: 8500, fee: 1500, status: 'delivered', area: 'بحري', time: '13:40' },
  { id: 'HJT-4012', user: 'هالة يوسف', captain: 'محمد علي', type: 'صيدلية', item: 'كريم واقي شمس + مرطب', amount: 9800, fee: 1500, status: 'delivered', area: 'أمدرمان', time: '13:32' },
];

export const topCaptains = [
  { name: 'عبدالله عمر', orders: 487, rating: 4.9, earnings: 730_500, area: 'بحري', vehicle: 'موتر', status: 'online' },
  { name: 'محمد علي', orders: 412, rating: 4.8, earnings: 618_000, area: 'أمدرمان', vehicle: 'ركشة', status: 'online' },
  { name: 'يوسف أحمد', orders: 389, rating: 4.7, earnings: 583_500, area: 'كسلا', vehicle: 'موتر', status: 'busy' },
  { name: 'حسام الدين', orders: 356, rating: 4.8, earnings: 534_000, area: 'الخرطوم', vehicle: 'عربية', status: 'online' },
  { name: 'أنس محمد', orders: 298, rating: 4.6, earnings: 447_000, area: 'أمدرمان', vehicle: 'موتر', status: 'offline' },
  { name: 'بشير خالد', orders: 275, rating: 4.5, earnings: 412_500, area: 'بحري', vehicle: 'ركشة', status: 'online' },
];

export const weeklyRevenue = [
  { day: 'السبت', revenue: 1_120_000, orders: 287 },
  { day: 'الأحد', revenue: 1_340_000, orders: 341 },
  { day: 'الإثنين', revenue: 980_000, orders: 248 },
  { day: 'الثلاثاء', revenue: 1_050_000, orders: 269 },
  { day: 'الأربعاء', revenue: 1_480_000, orders: 378 },
  { day: 'الخميس', revenue: 1_680_000, orders: 429 },
  { day: 'الجمعة', revenue: 1_890_000, orders: 482 },
];

export const ordersByCategory = [
  { category: 'مطاعم', count: 1520, percentage: 39.5, color: '#FF6B4A' },
  { category: 'صيدلية', count: 890, percentage: 23.2, color: '#00D2A0' },
  { category: 'بقالة', count: 780, percentage: 20.3, color: '#1E2A45' },
  { category: 'مرسال', count: 412, percentage: 10.7, color: '#f59e0b' },
  { category: 'إسبيرات', count: 240, percentage: 6.3, color: '#6366f1' },
];

export const ordersByArea = [
  { area: 'الخرطوم', orders: 1240, percentage: 32.3 },
  { area: 'بحري', orders: 980, percentage: 25.5 },
  { area: 'أمدرمان', orders: 872, percentage: 22.7 },
  { area: 'كسلا', orders: 520, percentage: 13.5 },
  { area: 'مناطق أخرى', orders: 230, percentage: 6.0 },
];

export const voiceVsText = {
  voice: 42, // percentage
  text: 58,
};

export const recentFeedback = [
  { user: 'أحمد محمد', rating: 5, comment: 'خدمة ممتازة! الكابتن وصل في 15 دقيقة', time: '14:30' },
  { user: 'سارة حسن', rating: 4, comment: 'جيد لكن التغليف ممكن يتحسن', time: '13:45' },
  { user: 'عمر بكري', rating: 5, comment: 'أحسن تطبيق توصيل في كسلا والله', time: '12:20' },
  { user: 'فاطمة عثمان', rating: 3, comment: 'الكابتن اتأخر شوية', time: '11:55' },
  { user: 'نورا صالح', rating: 5, comment: 'ميزة الصوت رهيبة! ما محتاجة اكتب', time: '10:30' },
];

export const hourlyOrders = [
  { hour: '6AM', orders: 12 },
  { hour: '8AM', orders: 35 },
  { hour: '10AM', orders: 48 },
  { hour: '12PM', orders: 72 },
  { hour: '2PM', orders: 65 },
  { hour: '4PM', orders: 45 },
  { hour: '6PM', orders: 58 },
  { hour: '8PM', orders: 82 },
  { hour: '10PM', orders: 68 },
  { hour: '12AM', orders: 25 },
];

export const negotiationStats = {
  avgNegotiationTime: 8, // seconds
  acceptRate: 78, // percentage
  counterOfferRate: 45, // percentage
  avgPriceIncrease: 12, // percentage from min
};

export const captainApplications = [
  {
    id: 'HJT-CPT-3201',
    name: 'عثمان حسين محمد',
    phone: '0911234567',
    nationalId: '28837291034',
    city: 'الخرطوم',
    area: 'حي الثورة',
    vehicleType: 'موتر',
    plateNumber: 'KRT 4521',
    emergencyContact: 'أحمد حسين - 0918765432',
    idUploaded: true,
    licenseUploaded: true,
    status: 'pending',
    submittedAt: '2026-02-19 14:30',
  },
  {
    id: 'HJT-CPT-3200',
    name: 'محمد الأمين عبدالله',
    phone: '0923456789',
    nationalId: '29012837465',
    city: 'أمدرمان',
    area: 'أبو سعد',
    vehicleType: 'ركشة',
    plateNumber: 'OMD 7832',
    emergencyContact: 'خالد عبدالله - 0912345678',
    idUploaded: true,
    licenseUploaded: true,
    status: 'pending',
    submittedAt: '2026-02-19 13:45',
  },
  {
    id: 'HJT-CPT-3199',
    name: 'إبراهيم آدم موسى',
    phone: '0934567890',
    nationalId: '27654321098',
    city: 'بحري',
    area: 'الحلفايا',
    vehicleType: 'عربية',
    plateNumber: 'BHR 1290',
    emergencyContact: 'موسى آدم - 0909876543',
    idUploaded: true,
    licenseUploaded: false,
    status: 'incomplete',
    submittedAt: '2026-02-19 12:20',
  },
  {
    id: 'HJT-CPT-3198',
    name: 'عبدالرحمن صالح',
    phone: '0945678901',
    nationalId: '30198765432',
    city: 'كسلا',
    area: 'حي الجامعة',
    vehicleType: 'موتر',
    plateNumber: 'KSL 8823',
    emergencyContact: 'صالح عبدالرحمن - 0956789012',
    idUploaded: true,
    licenseUploaded: true,
    status: 'approved',
    submittedAt: '2026-02-18 16:10',
  },
  {
    id: 'HJT-CPT-3197',
    name: 'حسام الدين عوض',
    phone: '0967890123',
    nationalId: '28475610293',
    city: 'الخرطوم',
    area: 'الرياض',
    vehicleType: 'موتر',
    plateNumber: 'KRT 9012',
    emergencyContact: 'عوض حسام - 0978901234',
    idUploaded: true,
    licenseUploaded: true,
    status: 'approved',
    submittedAt: '2026-02-18 11:30',
  },
  {
    id: 'HJT-CPT-3196',
    name: 'يحيى أحمد نور',
    phone: '0912340987',
    nationalId: '29384756102',
    city: 'بحري',
    area: 'الخوجلاب',
    vehicleType: 'ركشة',
    plateNumber: 'BHR 4567',
    emergencyContact: 'نور أحمد - 0923456780',
    idUploaded: true,
    licenseUploaded: true,
    status: 'rejected',
    submittedAt: '2026-02-17 09:15',
  },
  {
    id: 'HJT-CPT-3195',
    name: 'معتصم بابكر',
    phone: '0956781234',
    nationalId: '27019283746',
    city: 'أمدرمان',
    area: 'أم بدة',
    vehicleType: 'عجلة',
    plateNumber: '—',
    emergencyContact: 'بابكر معتصم - 0967892345',
    idUploaded: true,
    licenseUploaded: true,
    status: 'pending',
    submittedAt: '2026-02-19 10:00',
  },
];
