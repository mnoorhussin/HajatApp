import { useState, useRef } from 'react';
import { Upload, CheckCircle, Truck, ArrowRight, Camera, FileText, AlertCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  nationalId: string;
  city: string;
  area: string;
  vehicleType: string;
  plateNumber: string;
  emergencyName: string;
  emergencyPhone: string;
  idFrontFile: File | null;
  idBackFile: File | null;
  licenseFile: File | null;
  profilePhoto: File | null;
  agreed: boolean;
}

const initialForm: FormData = {
  fullName: '',
  phone: '',
  whatsapp: '',
  nationalId: '',
  city: 'الخرطوم',
  area: '',
  vehicleType: '',
  plateNumber: '',
  emergencyName: '',
  emergencyPhone: '',
  idFrontFile: null,
  idBackFile: null,
  licenseFile: null,
  profilePhoto: null,
  agreed: false,
};

const cities = ['الخرطوم', 'بحري', 'أمدرمان', 'كسلا', 'بورتسودان', 'مدني', 'الأبيض', 'أخرى'];
const vehicleTypes = [
  { value: 'motorcycle', label: 'موتر (دراجة نارية)', icon: '🏍️' },
  { value: 'tukTuk', label: 'ركشة', icon: '🛺' },
  { value: 'car', label: 'عربية', icon: '🚗' },
  { value: 'bicycle', label: 'عجلة', icon: '🚲' },
];

export default function CaptainRegistration() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const idFrontRef = useRef<HTMLInputElement>(null);
  const idBackRef = useRef<HTMLInputElement>(null);
  const licenseRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLInputElement>(null);

  const updateField = (field: keyof FormData, value: string | boolean | File | null) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.fullName.trim()) newErrors.fullName = 'الاسم الكامل مطلوب';
    if (!form.phone.trim()) newErrors.phone = 'رقم الهاتف مطلوب';
    else if (!/^(09|01)\d{8}$/.test(form.phone.trim())) newErrors.phone = 'رقم هاتف غير صحيح (مثال: 0912345678)';
    if (!form.nationalId.trim()) newErrors.nationalId = 'الرقم الوطني مطلوب';
    if (!form.city) newErrors.city = 'المدينة مطلوبة';
    if (!form.area.trim()) newErrors.area = 'الحي/المنطقة مطلوب';
    if (!form.vehicleType) newErrors.vehicleType = 'نوع المركبة مطلوب';
    if (!form.plateNumber.trim()) newErrors.plateNumber = 'رقم اللوحة مطلوب';
    if (!form.emergencyName.trim()) newErrors.emergencyName = 'اسم جهة الاتصال مطلوب';
    if (!form.emergencyPhone.trim()) newErrors.emergencyPhone = 'رقم الطوارئ مطلوب';
    if (!form.idFrontFile) newErrors.idFrontFile = 'صورة الهوية (الأمام) مطلوبة';
    if (!form.idBackFile) newErrors.idBackFile = 'صورة الهوية (الخلف) مطلوبة';
    if (!form.licenseFile) newErrors.licenseFile = 'صورة رخصة القيادة مطلوبة';
    if (!form.agreed) newErrors.agreed = 'يجب الموافقة على الشروط والأحكام';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 font-ar flex items-center justify-center p-4" dir="rtl">
        <div className="bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-xl border border-gray-100">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-accent" />
          </div>
          <h2 className="text-2xl font-extrabold text-secondary mb-3">تم إرسال طلبك بنجاح! 🎉</h2>
          <p className="text-gray-600 mb-2">
            شكراً لك <span className="font-bold text-primary">{form.fullName}</span>
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            فريقنا حيراجع طلبك خلال 24-48 ساعة. حنتواصل معاك على الرقم
            <span className="font-bold text-secondary"> {form.phone} </span>
            لإكمال الإجراءات.
          </p>
          <div className="bg-orange-50 rounded-xl p-4 text-sm text-gray-600 mb-6">
            <p className="font-bold text-primary mb-1">رقم الطلب: HJT-CPT-{Math.floor(Math.random() * 9000 + 1000)}</p>
            <p>احتفظ بهذا الرقم للمتابعة</p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all"
          >
            <ArrowRight size={18} />
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-ar" dir="rtl">
      {/* Header */}
      <header className="bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold">ح</div>
            <div>
              <h1 className="text-lg font-bold">انضم لأسرة حاجات</h1>
              <p className="text-xs text-gray-400">سجل ككابتن توصيل</p>
            </div>
          </div>
          <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1">
            <ArrowRight size={14} />
            الرئيسية
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="bg-gradient-to-l from-primary to-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4 backdrop-blur-sm">
            <Truck size={16} />
            فرصة عمل مميزة
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">كن كابتن حاجات</h2>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            عندك ركشة، موتر، أو عربية؟ كن فهلوي وزيد دخلك. سجل الآن وابدأ التوصيل في مدينتك.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 py-10">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Personal Info */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">1</span>
              المعلومات الشخصية
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="الاسم الكامل" required value={form.fullName} onChange={v => updateField('fullName', v)} error={errors.fullName} placeholder="مثال: محمد أحمد عبدالله" />
              <InputField label="رقم الهاتف" required value={form.phone} onChange={v => updateField('phone', v)} error={errors.phone} placeholder="0912345678" type="tel" />
              <InputField label="رقم الواتساب (اختياري)" value={form.whatsapp} onChange={v => updateField('whatsapp', v)} placeholder="لو مختلف عن رقم الهاتف" type="tel" />
              <InputField label="الرقم الوطني" required value={form.nationalId} onChange={v => updateField('nationalId', v)} error={errors.nationalId} placeholder="رقم البطاقة الشخصية" />
            </div>
          </div>

          {/* Section 2: Location */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">2</span>
              الموقع والمنطقة
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-secondary mb-2">المدينة <span className="text-red-500">*</span></label>
                <select
                  value={form.city}
                  onChange={e => updateField('city', e.target.value)}
                  className={`w-full border rounded-xl px-4 py-3 text-secondary bg-gray-50 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${errors.city ? 'border-red-400' : 'border-gray-200'}`}
                >
                  {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
                {errors.city && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.city}</p>}
              </div>
              <InputField label="الحي / المنطقة" required value={form.area} onChange={v => updateField('area', v)} error={errors.area} placeholder="مثال: حي الثورة" />
            </div>
          </div>

          {/* Section 3: Vehicle */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">3</span>
              معلومات المركبة
            </h3>
            <div className="mb-6">
              <label className="block text-sm font-bold text-secondary mb-3">نوع المركبة <span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {vehicleTypes.map(v => (
                  <button
                    key={v.value}
                    type="button"
                    onClick={() => updateField('vehicleType', v.value)}
                    className={`p-4 rounded-xl border-2 text-center transition-all ${
                      form.vehicleType === v.value
                        ? 'border-primary bg-orange-50 shadow-md shadow-primary/10'
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                    }`}
                  >
                    <div className="text-3xl mb-2">{v.icon}</div>
                    <div className={`text-sm font-bold ${form.vehicleType === v.value ? 'text-primary' : 'text-secondary'}`}>
                      {v.label}
                    </div>
                  </button>
                ))}
              </div>
              {errors.vehicleType && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12} /> {errors.vehicleType}</p>}
            </div>
            <InputField label="رقم اللوحة" required value={form.plateNumber} onChange={v => updateField('plateNumber', v)} error={errors.plateNumber} placeholder="مثال: ABC 1234" />
          </div>

          {/* Section 4: Documents */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-secondary mb-2 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">4</span>
              المستندات المطلوبة
            </h3>
            <p className="text-sm text-gray-500 mb-6">يرجى رفع صور واضحة للمستندات التالية. الصيغ المقبولة: JPG, PNG, PDF</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FileUploadField
                label="صورة الهوية (الأمام)"
                required
                icon={<FileText size={24} />}
                file={form.idFrontFile}
                inputRef={idFrontRef}
                onChange={f => updateField('idFrontFile', f)}
                error={errors.idFrontFile}
              />
              <FileUploadField
                label="صورة الهوية (الخلف)"
                required
                icon={<FileText size={24} />}
                file={form.idBackFile}
                inputRef={idBackRef}
                onChange={f => updateField('idBackFile', f)}
                error={errors.idBackFile}
              />
              <FileUploadField
                label="رخصة القيادة"
                required
                icon={<Truck size={24} />}
                file={form.licenseFile}
                inputRef={licenseRef}
                onChange={f => updateField('licenseFile', f)}
                error={errors.licenseFile}
              />
              <FileUploadField
                label="صورة شخصية (اختياري)"
                icon={<Camera size={24} />}
                file={form.profilePhoto}
                inputRef={profileRef}
                onChange={f => updateField('profilePhoto', f)}
              />
            </div>
          </div>

          {/* Section 5: Emergency Contact */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-secondary mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold">5</span>
              جهة الاتصال للطوارئ
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <InputField label="اسم جهة الاتصال" required value={form.emergencyName} onChange={v => updateField('emergencyName', v)} error={errors.emergencyName} placeholder="مثال: أحمد (أخ)" />
              <InputField label="رقم هاتف الطوارئ" required value={form.emergencyPhone} onChange={v => updateField('emergencyPhone', v)} error={errors.emergencyPhone} placeholder="0912345678" type="tel" />
            </div>
          </div>

          {/* Agreement & Submit */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <label className="flex items-start gap-3 cursor-pointer mb-6">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={e => updateField('agreed', e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-600 leading-relaxed">
                أوافق على <span className="text-primary font-bold">الشروط والأحكام</span> وأقر بأن جميع البيانات المدخلة صحيحة.
                أتفهم أن تقديم بيانات خاطئة قد يؤدي إلى رفض الطلب.
              </span>
            </label>
            {errors.agreed && <p className="text-red-500 text-xs mb-4 flex items-center gap-1"><AlertCircle size={12} /> {errors.agreed}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
            >
              <Upload size={20} />
              إرسال طلب الانضمام
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ========== Reusable Input Field ========== */
function InputField({ label, value, onChange, placeholder, type = 'text', required, error }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-secondary mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3 text-secondary bg-gray-50 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all ${error ? 'border-red-400' : 'border-gray-200'}`}
      />
      {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
    </div>
  );
}

/* ========== Reusable File Upload Field ========== */
function FileUploadField({ label, file, inputRef, onChange, icon, required, error }: {
  label: string;
  file: File | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (f: File | null) => void;
  icon: React.ReactNode;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-secondary mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        className="hidden"
        onChange={e => onChange(e.target.files?.[0] || null)}
      />
      {file ? (
        <div className="flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
          <CheckCircle size={20} className="text-accent flex-shrink-0" />
          <span className="text-sm text-secondary font-medium flex-1 truncate">{file.name}</span>
          <button
            type="button"
            onClick={() => {
              onChange(null);
              if (inputRef.current) inputRef.current.value = '';
            }}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className={`w-full border-2 border-dashed rounded-xl p-6 text-center transition-all hover:bg-gray-50 hover:border-primary/30 ${error ? 'border-red-300 bg-red-50/30' : 'border-gray-200'}`}
        >
          <div className="text-gray-400 flex flex-col items-center gap-2">
            {icon}
            <span className="text-sm font-medium">اضغط لرفع الملف</span>
            <span className="text-xs text-gray-300">JPG, PNG, PDF — أقصى حجم 5MB</span>
          </div>
        </button>
      )}
      {error && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
    </div>
  );
}
