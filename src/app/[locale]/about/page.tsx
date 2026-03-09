'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

/** 关于页已移除，重定向到常见问题 */
export default function AboutRedirect() {
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale ?? 'zh';

  useEffect(() => {
    router.replace(`/${locale}/faq`);
  }, [router, locale]);

  return (
    <div className="min-h-screen flex items-center justify-center text-[hsl(var(--color-muted-foreground))]">
      正在跳转到常见问题…
    </div>
  );
}
