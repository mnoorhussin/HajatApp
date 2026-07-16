import { useState, useEffect, useMemo, useRef, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  ArrowRight, Mail, Upload, CheckCircle2, Loader2, Clock, BadgeCheck, X, Smartphone, LogOut,
} from 'lucide-react';
import { pb, BACKEND_URL } from '../utils/pocketbase';
import { generateUniqueCaptainId } from '../utils/generateCaptainId';

// A captain must already be a customer: the captains record is a relation to an
// existing user, so the whole data model assumes one account per person. This
// form therefore signs in only — it passes requireExisting to
// /auth/email/request-otp so the endpoint never mints a stub account — and sends
// anyone without one to install the app and sign up first, with the same email.
// After that it writes the same users + captains records the in-app form wrote,
// so the existing admin review queue picks these up with no changes.
type Step = 'auth' | 'otp' | 'form' | 'done' | 'pending' | 'captain' | 'no-account';

const VEHICLES = [
  { id: 'car', label: 'سيارة' },
  { id: 'bike', label: 'دراجة' },
  { id: 'motor', label: 'دباب' },
  { id: 'raksha', label: 'ركشة' },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** 18+ as of today, from a DD/MM/YYYY string. */
function isAdult(dob: string): boolean {
  const [d, m, y] = dob.split('/').map(Number);
  const birth = new Date(y, m - 1, d);
  if (Number.isNaN(birth.getTime())) return false;
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const md = today.getMonth() - birth.getMonth();
  if (md < 0 || (md === 0 && today.getDate() < birth.getDate())) age--;
  return age >= 18;
}

/** Routes an authenticated applicant to the right step for their current status. */
function stepForRecord(rec: Record<string, unknown> | null): Step {
  const role = rec?.role;
  const isCaptain = Array.isArray(role) ? role.includes('captain') : role === 'captain';
  if (isCaptain) return 'captain';
  if (rec?.application_status === 'pending') return 'pending';
  return 'form';
}

/** A live session from a previous visit, if any. Read once, at mount. */
function currentSession(): Record<string, unknown> | null {
  return pb.authStore.isValid ? pb.authStore.record : null;
}

export default function CaptainApplicationPage() {
  const navigate = useNavigate();

  // A returning applicant with a valid token skips the OTP and lands on the
  // step that matches their status.
  const [step, setStep] = useState<Step>(() => (currentSession() ? stepForRecord(currentSession()) : 'auth'));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ── Auth ──────────────────────────────────────────────────────────────────
  const [email, setEmail] = useState('');
  const [otpId, setOtpId] = useState('');
  const [code, setCode] = useState('');
  // Whose session is in play — shown on every signed-in screen so a shared
  // computer never silently applies as, or strands, the previous person.
  const [accountEmail, setAccountEmail] = useState<string | null>(
    () => (currentSession()?.email as string) || null,
  );

  // ── Application ───────────────────────────────────────────────────────────
  const [form, setForm] = useState(() => {
    const rec = currentSession();
    return {
      first_name: (rec?.name as string) || '',
      father_name: (rec?.father_name as string) || '',
      phone: (rec?.phone as string) || '',
      dob: '',
      vehicle_type: 'car', vehicle_model: '', vehicle_plate: '',
    };
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(() => {
    const rec = currentSession();
    return rec?.avatar ? pb.files.getURL(rec, rec.avatar as string) : null;
  });
  const [idFront, setIdFront] = useState<File | null>(null);
  const [idBack, setIdBack] = useState<File | null>(null);
  const [license, setLicense] = useState<File | null>(null);
  const [agreeTos, setAgreeTos] = useState(false);
  const [agreeBackground, setAgreeBackground] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  function hydrateFrom(rec: Record<string, unknown>) {
    setForm((prev) => ({
      ...prev,
      first_name: (rec.name as string) || '',
      father_name: (rec.father_name as string) || '',
      phone: (rec.phone as string) || '',
    }));
    if (rec.avatar) setAvatarUrl(pb.files.getURL(rec, rec.avatar as string));
    setAccountEmail((rec.email as string) || null);
  }

  // The PocketBase token lives in localStorage and lasts ~14 days, so without an
  // explicit way out the first applicant on a shared computer would leave every
  // later visitor stranded on their status screen.
  function signOut() {
    pb.authStore.clear();
    setForm({
      first_name: '', father_name: '', phone: '', dob: '',
      vehicle_type: 'car', vehicle_model: '', vehicle_plate: '',
    });
    setAvatar(null); setAvatarUrl(null);
    setIdFront(null); setIdBack(null); setLicense(null);
    setAgreeTos(false); setAgreeBackground(false); setAgreePrivacy(false);
    setEmail(''); setOtpId(''); setCode(''); setAccountEmail(null);
    setError(null);
    setStep('auth');
  }

  async function requestOtp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!EMAIL_RE.test(email.trim())) { setError('بريد إلكتروني غير صالح'); return; }

    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/auth/email/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), requireExisting: true }),
      });
      const data = await res.json();
      if (res.status === 404 || data.code === 'NO_ACCOUNT') { setStep('no-account'); return; }
      if (!res.ok) throw new Error(data.error || 'تعذر إرسال الرمز');
      setOtpId(data.otpId);
      setStep('otp');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'تعذر إرسال الرمز');
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (code.trim().length < 6) { setError('أدخل الرمز المكوّن من 6 أرقام'); return; }

    setLoading(true);
    try {
      await pb.collection('users').authWithOTP(otpId, code.trim());
      const rec = pb.authStore.record;
      if (rec) {
        hydrateFrom(rec);
        setStep(stepForRecord(rec));
      }
    } catch {
      setError('الرمز غير صحيح أو منتهي الصلاحية');
    } finally {
      setLoading(false);
    }
  }

  async function resendOtp() {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/auth/email/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'تعذر إعادة الإرسال');
      setOtpId(data.otpId);
      setError('تم إرسال رمز جديد إلى بريدك');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'تعذر إعادة الإرسال');
    } finally {
      setLoading(false);
    }
  }

  function validate(): string | null {
    if (form.first_name.trim().length < 2) return 'الاسم الأول مطلوب';
    if (form.father_name.trim().length < 2) return 'اسم الأب مطلوب';
    if (form.phone.trim().length < 9) return 'رقم الجوال مطلوب';
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(form.dob)) return 'تاريخ الميلاد غير صالح (يوم/شهر/سنة)';
    if (!isAdult(form.dob)) return 'يجب أن يكون عمرك 18 سنة على الأقل';
    if (!form.vehicle_type) return 'نوع المركبة مطلوب';
    if (!avatar && !avatarUrl) return 'الصورة الشخصية للكابتن مطلوبة';
    if (!idFront || !idBack) return 'صورة الهوية (الأمام والخلف) مطلوبة';
    if (form.vehicle_type === 'car' && !license) return 'رخصة القيادة مطلوبة للسيارات';
    if (!agreeTos || !agreeBackground || !agreePrivacy) return 'يرجى الموافقة على جميع الشروط والأحكام';
    return null;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const problem = validate();
    if (problem) { setError(problem); window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

    setError(null);
    setLoading(true);
    try {
      const userId = pb.authStore.record?.id;
      if (!userId) throw new Error('انتهت الجلسة، أعد تسجيل الدخول');

      // 1. User profile + application status
      await pb.collection('users').update(userId, {
        name: form.first_name.trim(),
        father_name: form.father_name.trim(),
        phone: form.phone.trim(),
        application_status: 'pending',
      });

      // 2. Captain profile
      const data = new FormData();
      data.append('user', userId);
      data.append('first_name', form.first_name.trim());
      data.append('father_name', form.father_name.trim());
      data.append('vehicle_type', form.vehicle_type);
      data.append('plate_number', form.vehicle_plate.trim());
      data.append('status', 'offline');
      data.append('captain_id', await generateUniqueCaptainId(pb));

      if (avatar) {
        data.append('avatar', avatar);
      } else if (avatarUrl) {
        // Reuse the avatar already on the user record.
        const blob = await (await fetch(avatarUrl)).blob();
        data.append('avatar', blob, 'avatar.jpg');
      }
      data.append('id_front', idFront!);
      data.append('id_back', idBack!);
      if (license) data.append('license', license);

      const existing = await pb.collection('captains').getList(1, 1, { filter: `user = "${userId}"` });
      if (existing.items.length > 0) {
        await pb.collection('captains').update(existing.items[0].id, data);
      } else {
        await pb.collection('captains').create(data);
      }

      setStep('done');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('[CaptainApplication]', err);
      setError(err instanceof Error ? err.message : 'فشل إرسال الطلب. حاول مرة أخرى.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] font-ar flex flex-col transition-colors duration-300" dir="rtl">
      <Navbar />

      <div className="bg-gradient-to-l from-[#6C5CE7] to-[#4B3FB0] text-white py-16 text-center mt-[72px]">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">انضم ككابتن حاجات</h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            قدّم طلبك في دقائق، وسنراجع بياناتك ونتواصل معك
          </p>
        </div>
      </div>

      <main className="flex-1 container-custom py-16">
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 md:p-10 shadow-sm max-w-3xl mx-auto">

          {error && (
            <div className="mb-8 flex items-start gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <X size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 dark:text-red-300 text-sm font-medium">{error}</p>
            </div>
          )}

          {step === 'auth' && (
            <form onSubmit={requestOtp}>
              <SectionTitle>تسجيل الدخول</SectionTitle>

              <div className="mb-8 p-5 rounded-2xl bg-[#6C5CE7]/5 border border-[#6C5CE7]/20">
                <div className="flex items-start gap-3">
                  <Smartphone size={20} className="text-[#6C5CE7] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[var(--text)] mb-2">قبل أن تبدأ: يجب أن يكون لديك حساب في تطبيق حاجات</p>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      كل كابتن هو عميل في حاجات أولاً. حمّل التطبيق وأنشئ حساباً، ثم عُد إلى هنا وقدّم طلبك
                      باستخدام <span className="font-bold text-[var(--text)]">نفس البريد الإلكتروني</span> الذي سجّلت به في التطبيق.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                أدخل بريدك الإلكتروني وسنرسل لك رمز تحقق للمتابعة.
              </p>
              <Field label="البريد الإلكتروني (نفس بريد التطبيق)">
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com" dir="ltr" autoComplete="email"
                  className={inputClass}
                />
              </Field>
              <SubmitButton loading={loading} icon={<Mail size={20} />}>إرسال رمز التحقق</SubmitButton>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={verifyOtp}>
              <SectionTitle>رمز التحقق</SectionTitle>
              <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
                أرسلنا رمزاً مكوّناً من 6 أرقام إلى <span className="font-bold text-[var(--text)]" dir="ltr">{email}</span>
              </p>
              <Field label="الرمز">
                <input
                  type="text" inputMode="numeric" value={code} maxLength={6}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  placeholder="000000" dir="ltr"
                  className={`${inputClass} text-center tracking-[0.5em] text-xl font-bold`}
                />
              </Field>
              <SubmitButton loading={loading} icon={<CheckCircle2 size={20} />}>تحقق ومتابعة</SubmitButton>
              <button
                type="button" onClick={resendOtp} disabled={loading}
                className="w-full mt-4 text-sm text-[#6C5CE7] font-bold hover:underline disabled:opacity-50"
              >
                إعادة إرسال الرمز
              </button>
            </form>
          )}

          {step === 'form' && (
            <form onSubmit={submit}>
              {accountEmail && (
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-[var(--border)]">
                  <p className="text-sm text-[var(--text-muted)]">
                    تقدّم الطلب باسم <span className="font-bold text-[var(--text)]" dir="ltr">{accountEmail}</span>
                  </p>
                  <button
                    type="button" onClick={signOut}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#6C5CE7] hover:underline"
                  >
                    <LogOut size={16} />
                    ليس أنت؟ تسجيل الخروج
                  </button>
                </div>
              )}

              {/* Section 1: Personal */}
              <SectionTitle>المعلومات الشخصية</SectionTitle>
              <div className="flex flex-col items-center mb-8">
                <AvatarPicker file={avatar} url={avatarUrl} onPick={setAvatar} />
              </div>
              <div className="grid md:grid-cols-2 gap-5 mb-10">
                <Field label="الاسم الأول">
                  <input value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                    placeholder="مثال: محمد" className={inputClass} />
                </Field>
                <Field label="اسم الأب / العائلة">
                  <input value={form.father_name} onChange={(e) => setForm({ ...form, father_name: e.target.value })}
                    placeholder="مثال: أحمد" className={inputClass} />
                </Field>
                <Field label="رقم الجوال">
                  <input value={form.phone} dir="ltr" inputMode="tel"
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/[^0-9+]/g, '') })}
                    placeholder="+249900000000" className={inputClass} />
                </Field>
                <Field label="تاريخ الميلاد (18+)">
                  <input value={form.dob} dir="ltr" inputMode="numeric" maxLength={10}
                    onChange={(e) => {
                      let v = e.target.value.replace(/\D/g, '');
                      if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2);
                      if (v.length >= 5) v = v.slice(0, 5) + '/' + v.slice(5, 9);
                      setForm({ ...form, dob: v });
                    }}
                    placeholder="DD / MM / YYYY" className={inputClass} />
                </Field>
              </div>

              {/* Section 2: Vehicle */}
              <SectionTitle>معلومات المركبة</SectionTitle>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {VEHICLES.map((v) => (
                  <button
                    key={v.id} type="button" onClick={() => setForm({ ...form, vehicle_type: v.id })}
                    className={`py-3 rounded-xl font-bold text-sm border transition-colors ${
                      form.vehicle_type === v.id
                        ? 'bg-[#6C5CE7] text-white border-[#6C5CE7]'
                        : 'bg-[var(--bg)] text-[var(--text-muted)] border-[var(--border)] hover:border-[#6C5CE7]/40'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
              {form.vehicle_type === 'car' && (
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                  <Field label="موديل المركبة">
                    <input value={form.vehicle_model} dir="ltr" inputMode="numeric"
                      onChange={(e) => setForm({ ...form, vehicle_model: e.target.value.replace(/[^0-9]/g, '') })}
                      placeholder="مثال: 2024" className={inputClass} />
                  </Field>
                  <Field label="رقم اللوحة">
                    <input value={form.vehicle_plate} dir="ltr"
                      onChange={(e) => setForm({ ...form, vehicle_plate: e.target.value.replace(/[^\x20-\x7E]/g, '') })}
                      placeholder="مثال: AB 1234" className={inputClass} />
                  </Field>
                </div>
              )}

              {/* Section 3: Documents */}
              <SectionTitle>المستندات المطلوبة</SectionTitle>
              <p className="text-sm text-[var(--text-muted)] mb-4">الهوية الوطنية / الإقامة</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <FilePicker label="الوجه الأمامي" file={idFront} onPick={setIdFront} />
                <FilePicker label="الوجه الخلفي" file={idBack} onPick={setIdBack} />
              </div>
              {form.vehicle_type === 'car' && (
                <>
                  <p className="text-sm text-[var(--text-muted)] mb-4">رخصة القيادة</p>
                  <div className="mb-10">
                    <FilePicker label="إرفاق صورة الرخصة" file={license} onPick={setLicense} />
                  </div>
                </>
              )}

              {/* Section 4: Consent */}
              <SectionTitle>الموافقات والتعهدات</SectionTitle>
              <div className="space-y-1 mb-10">
                <Consent checked={agreeTos} onChange={setAgreeTos}>
                  شروط الخدمة: أوافق على{' '}
                  <Link to="/policies/captains-agreement" target="_blank" className="text-[#6C5CE7] underline font-bold">
                    اتفاقية كباتن التوصيل
                  </Link>
                </Consent>
                <Consent checked={agreeBackground} onChange={setAgreeBackground}>
                  الفحص الأمني: أفوض حاجات بإجراء فحص للسجل الجنائي.
                </Consent>
                <Consent checked={agreePrivacy} onChange={setAgreePrivacy}>
                  سياسة الخصوصية: أتفهم كيف سيتم استخدام بياناتي.
                </Consent>
              </div>

              <SubmitButton loading={loading} icon={<CheckCircle2 size={20} />}>إرسال الطلب والموافقة</SubmitButton>
            </form>
          )}

          {step === 'no-account' && (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mx-auto mb-6">
                <Smartphone size={40} className="text-[#6C5CE7]" />
              </div>
              <h2 className="text-2xl font-extrabold text-[var(--text)] mb-4">حمّل التطبيق وأنشئ حسابك أولاً</h2>
              <p className="text-[var(--text-muted)] leading-relaxed max-w-lg mx-auto mb-2">
                لا يوجد حساب في حاجات بالبريد <span className="font-bold text-[var(--text)]" dir="ltr">{email}</span>
              </p>
              <p className="text-[var(--text-muted)] leading-relaxed max-w-lg mx-auto mb-8">
                كل كابتن هو عميل في حاجات أولاً. حمّل التطبيق وسجّل حساباً جديداً بهذا البريد نفسه،
                ثم عُد إلى هذه الصفحة وأكمل طلبك.
              </p>

              <div className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 max-w-lg mx-auto mb-8 text-right">
                <ol className="space-y-4">
                  {[
                    'حمّل تطبيق حاجات على هاتفك',
                    'أنشئ حساباً جديداً بنفس البريد الإلكتروني أعلاه',
                    'ارجع إلى هذه الصفحة وقدّم طلبك ككابتن',
                  ].map((t, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="w-7 h-7 rounded-full bg-[#6C5CE7] text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {i + 1}
                      </span>
                      <span className="text-[var(--text)] text-sm leading-relaxed pt-0.5">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <button
                onClick={() => { setStep('auth'); setError(null); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--border)] text-[var(--text)] rounded-lg font-bold hover:bg-[var(--border)]/80 transition-colors"
              >
                <ArrowRight size={20} />
                جرّب بريداً آخر
              </button>
            </div>
          )}

          {step === 'done' && (
            <Outcome
              icon={<CheckCircle2 size={40} className="text-[#A3E635]" />}
              title="تم تقديم طلبك بنجاح!"
              body="سنراجع بياناتك ونتواصل معك قريباً. بعد الموافقة، سجّل الدخول في تطبيق حاجات بنفس بريدك الإلكتروني وستجد وضع الكابتن مفعّلاً."
              account={accountEmail}
              onBack={() => navigate('/')}
              onSignOut={signOut}
            />
          )}

          {step === 'pending' && (
            <Outcome
              icon={<Clock size={40} className="text-[#6C5CE7]" />}
              title="طلبك قيد المراجعة"
              body="لديك طلب مقدَّم بالفعل بهذا البريد الإلكتروني. سيتم مراجعة بياناتك وتفعيل وضع الكابتن في القريب العاجل."
              account={accountEmail}
              onBack={() => navigate('/')}
              onSignOut={signOut}
            />
          )}

          {step === 'captain' && (
            <Outcome
              icon={<BadgeCheck size={40} className="text-[#A3E635]" />}
              title="أنت كابتن بالفعل"
              body="هذا الحساب مفعّل ككابتن حاجات. افتح التطبيق وسجّل الدخول للبدء في استقبال الطلبات."
              account={accountEmail}
              onBack={() => navigate('/')}
              onSignOut={signOut}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// ── Presentational bits ─────────────────────────────────────────────────────

const inputClass =
  'w-full h-12 px-4 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--text)] ' +
  'placeholder:text-[var(--text-muted)]/60 focus:outline-none focus:border-[#6C5CE7] transition-colors';

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-extrabold text-[var(--text)] mb-5">{children}</h2>;
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-bold text-[var(--text)] mb-2">{label}</span>
      {children}
    </label>
  );
}

function SubmitButton({ loading, icon, children }: { loading: boolean; icon: ReactNode; children: ReactNode }) {
  return (
    <button type="submit" disabled={loading} className="btn btn-primary w-full py-4 text-lg disabled:opacity-60">
      {loading ? <Loader2 size={20} className="animate-spin" /> : icon}
      <span>{children}</span>
    </button>
  );
}

function Consent({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode }) {
  return (
    <label className="flex items-start gap-3 py-3 border-b border-[var(--border)] last:border-0 cursor-pointer">
      <input
        type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-5 h-5 accent-[#6C5CE7] flex-shrink-0 cursor-pointer"
      />
      <span className="text-sm text-[var(--text)] leading-relaxed">{children}</span>
    </label>
  );
}

/** Object URL for a picked file, revoked when it changes or unmounts. */
function useObjectUrl(file: File | null): string | null {
  const url = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => () => { if (url) URL.revokeObjectURL(url); }, [url]);
  return url;
}

function AvatarPicker({ file, url, onPick }: { file: File | null; url: string | null; onPick: (f: File) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const preview = useObjectUrl(file) ?? url;

  return (
    <>
      <button
        type="button" onClick={() => ref.current?.click()}
        className="w-24 h-24 rounded-full overflow-hidden bg-[var(--bg)] border-2 border-dashed border-[var(--border)] hover:border-[#6C5CE7] flex items-center justify-center transition-colors"
      >
        {preview
          ? <img src={preview} alt="" className="w-full h-full object-cover" />
          : <Upload size={22} className="text-[var(--text-muted)]" />}
      </button>
      <span className="text-xs text-[var(--text-muted)] mt-2">الصورة الشخصية</span>
      <input
        ref={ref} type="file" accept="image/*" className="hidden"
        onChange={(e) => e.target.files?.[0] && onPick(e.target.files[0])}
      />
    </>
  );
}

function FilePicker({ label, file, onPick }: { label: string; file: File | null; onPick: (f: File) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const isPdf = file?.type === 'application/pdf';
  const preview = useObjectUrl(isPdf ? null : file);

  return (
    <>
      <button
        type="button" onClick={() => ref.current?.click()}
        className="w-full aspect-[4/3] rounded-2xl bg-[var(--bg)] border-2 border-dashed border-[var(--border)] hover:border-[#6C5CE7] flex flex-col items-center justify-center gap-2 overflow-hidden transition-colors"
      >
        {preview
          ? <img src={preview} alt="" className="w-full h-full object-cover" />
          : (
            <>
              {file
                ? <CheckCircle2 size={22} className="text-[#A3E635]" />
                : <Upload size={22} className="text-[var(--text-muted)]" />}
              <span className="text-xs text-[var(--text-muted)] px-2 text-center">
                {file ? file.name : label}
              </span>
            </>
          )}
      </button>
      <input
        ref={ref} type="file" accept="image/*,application/pdf" className="hidden"
        onChange={(e) => e.target.files?.[0] && onPick(e.target.files[0])}
      />
    </>
  );
}

function Outcome({ icon, title, body, account, onBack, onSignOut }: {
  icon: ReactNode; title: string; body: string;
  account?: string | null; onBack: () => void; onSignOut?: () => void;
}) {
  return (
    <div className="text-center py-8">
      <div className="w-20 h-20 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h2 className="text-2xl font-extrabold text-[var(--text)] mb-4">{title}</h2>
      <p className="text-[var(--text-muted)] leading-relaxed max-w-lg mx-auto mb-8">{body}</p>
      {account && (
        <p className="text-sm text-[var(--text-muted)] mb-6">
          أنت مسجّل الدخول باسم <span className="font-bold text-[var(--text)]" dir="ltr">{account}</span>
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onBack}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--border)] text-[var(--text)] rounded-lg font-bold hover:bg-[var(--border)]/80 transition-colors"
        >
          <ArrowRight size={20} />
          العودة للرئيسية
        </button>
        {onSignOut && (
          <button
            onClick={onSignOut}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text)] rounded-lg font-bold hover:border-[#6C5CE7] hover:text-[#6C5CE7] transition-colors"
          >
            <LogOut size={20} />
            تسجيل الخروج وتقديم طلب آخر
          </button>
        )}
      </div>
    </div>
  );
}
