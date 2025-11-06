'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSent(false);

    const redirectTo =
      typeof window !== 'undefined'
        ? `${window.location.origin}/auth/callback`
        : undefined;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirectTo },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
  }

  return (
    <main style={{ padding: '32px', maxWidth: 420 }}>
      <h1>Sign in with magic link</h1>

      <form onSubmit={onSubmit} style={{ marginTop: 16 }}>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: 10, marginBottom: 12 }}
        />
        <button
          type="submit"
          disabled={loading || !email}
          style={{ padding: '10px 16px' }}
        >
          {loading ? 'Sending…' : 'Send magic link'}
        </button>
      </form>

      {sent && (
        <p style={{ marginTop: 12 }}>
          ✅ Check your email for the sign-in link.
        </p>
      )}
      {error && (
        <p style={{ marginTop: 12, color: 'crimson' }}>
          ⚠️ {error}
        </p>
      )}
    </main>
  );
}
