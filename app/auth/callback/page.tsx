'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function AuthCallbackPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const code = search.get('code');
    if (!code) {
      setError('No auth code found in the URL.');
      return;
    }

    (async () => {
      const { error } = await supabase.auth.exchangeCodeForSession({ code });
      if (error) {
        setError(error.message);
      } else {
        router.replace('/'); // go to home
      }
    })();
  }, [search, router]);

  return (
    <main style={{ padding: 32 }}>
      <h1>Signing you in…</h1>
      {error && <p style={{ color: 'crimson' }}>⚠️ {error}</p>}
    </main>
  );
}
