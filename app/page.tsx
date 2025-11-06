'use client';

import { useEffect, useState } from 'react';
// CHANGE THIS:
// import { supabase } from '@/lib/supabaseClient';
// TO THIS:
import { supabase } from '../lib/supabaseClient';

export default function HomePage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setEmail(data.user?.email ?? null));
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  return (
    <main style={{ minHeight: '100svh', background: '#0B0C0F', color: 'white' }}>
      <div style={{ padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontWeight: 800, color: '#E50914' }}>{'</>'} ProjectSensei</div>
        <button
          onClick={handleSignOut}
          style={{
            padding: '8px 12px',
            borderRadius: 12,
            border: '1px solid #333',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Sign out
        </button>
      </div>

      <section style={{ padding: 28 }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Welcome{email ? `, ${email}` : ''}</h1>
        <p style={{ color: '#bdbdbd' }}>
          Next.js App Router is live on Vercel. Route protection is enabled. Magic link is set on /login.
        </p>
      </section>
    </main>
  );
}
