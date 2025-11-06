'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function CallbackPage() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    async function run() {
      // Supabase handles tokens in URL automatically because detectSessionInUrl=true.
      // We still fetch the session to be sure and then redirect.
      const { data: { session } } = await supabase.auth.getSession();
      const redirectTo = params.get('redirectTo') || '/';
      if (session) router.replace(redirectTo);
      else router.replace('/login?error=no_session');
    }
    run();
  }, [router, params]);

  return (
    <main style={{ minHeight: '100svh', display: 'grid', placeItems: 'center' }}>
      <p>Finishing sign-in…</p>
    </main>
  );
}
