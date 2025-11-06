'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [message, setMessage] = useState<string>('');

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    // optional: preserve where to go after login
    const params = new URLSearchParams(window.location.search);
    const redirectTo = params.get('redirectTo') || '/';

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?redirectTo=${encodeURIComponent(redirectTo)}`
      }
    });

    if (error) {
      setStatus('error');
      setMessage(error.message);
    } else {
      setStatus('sent');
      setMessage('Check your email for the sign-in link.');
    }
  }

  return (
    <main style={{
      minHeight: '100svh',
      display: 'grid',
      placeItems: 'center',
      background: '#0B0C0F'
    }}>
      <div style={{
        width: 'min(420px, 92vw)',
        background: 'white',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: '0 10px 30px rgba(0,0,0,.25)'
      }}>
        <header style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: '#E50914' }}>{'</>'} ProjectSensei</div>
          <div style={{ color: '#555', marginTop: 4 }}>Build Fearlessly — Sensei Has You</div>
        </header>

        <form onSubmit={sendMagicLink} style={{ display: 'grid', gap: 12 }}>
          <label style={{ fontSize: 14, color: '#222' }}>Email address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              padding: '12px 14px',
              borderRadius: 12,
              border: '1px solid #ddd',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            style={{
              marginTop: 8,
              padding: '12px 14px',
              borderRadius: 12,
              border: 'none',
              background: '#E50914',
              color: 'white',
              fontWeight: 700,
              cursor: 'pointer',
              opacity: status === 'sending' ? 0.7 : 1
            }}
          >
            {status === 'sending' ? 'Sending…' : 'Send magic link'}
          </button>
        </form>

        {message && (
          <p style={{ marginTop: 12, color: status === 'error' ? '#B00020' : '#0A7F3F' }}>
            {message}
          </p>
        )}

        <footer style={{ marginTop: 16, fontSize: 12, color: '#666' }}>
          Aryan, let’s build greatness.
        </footer>
      </div>
    </main>
  );
}
