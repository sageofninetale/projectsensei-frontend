'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function CallbackPage() {
  const router = useRouter();
  const [status, setStatus] = useState('Verifying link…');

  useEffect(() => {
    async function verify() {
      const { data, error } = await supabase.auth.getSession();

      if (error || !data?.session) {
        setStatus('Link expired or invalid ❌ Try logging in again.');
        return;
      }

      setStatus('✅ Signed in! Redirecting…');
      setTimeout(() => router.push('/'), 800);
    }

    verify();
  }, [router]);

  return (
    <div className="min-h-dvh grid place-items-center">
      <p className="text-lg">{status}</p>
    </div>
  );
}
