'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n/config';

// Root page handles client-side redirection based on browser language
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    try {
      const browserLang = navigator.language;
      const primaryLang = browserLang.split('-')[0].toLowerCase();
      // 仅支持中英：zh-* -> zh，其余 -> en
      const target = primaryLang === 'zh' ? 'zh' : 'en';
      router.replace(`/${target}`);
    } catch {
      router.replace(`/${defaultLocale}`);
    }
  }, [router]);

  // Render nothing while redirecting
  return null;
}
