import termsAndConditions from './terms-and-conditions.md?raw';
import privacyPolicy from './privacy-policy.md?raw';
import cancellationPolicy from './cancellation-policy.md?raw';
import contentPolicy from './content-policy.md?raw';
import consumerProtection from './consumer-protection.md?raw';
import antiFraudPolicy from './anti-fraud-policy.md?raw';
import merchantAgreement from './merchant-agreement.md?raw';
import captainAgreement from './captain-agreement.md?raw';

export const policiesMap: Record<string, { title: string; content: string }> = {
  'terms-and-conditions': {
    title: 'الشروط والأحكام',
    content: termsAndConditions,
  },
  'privacy-policy': {
    title: 'سياسة الخصوصية',
    content: privacyPolicy,
  },
  'cancellation-policy': {
    title: 'سياسة الإلغاء',
    content: cancellationPolicy,
  },
  'content-policy': {
    title: 'سياسة المحتوى',
    content: contentPolicy,
  },
  'consumer-protection': {
    title: 'سياسة حماية المستهلك',
    content: consumerProtection,
  },
  'anti-fraud-policy': {
    title: 'سياسة مكافحة الاحتيال',
    content: antiFraudPolicy,
  },
  'merchant-agreement': {
    title: 'اتفاقية المتاجر',
    content: merchantAgreement,
  },
  'captain-agreement': {
    title: 'اتفاقية مندوبي التوصيل',
    content: captainAgreement,
  },
};
