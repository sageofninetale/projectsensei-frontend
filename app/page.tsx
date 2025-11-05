'use client';

import { supabase } from '@/lib/supabaseClient';

export default function HomePage() {
  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  return (
    <main style={{ padding: '40px' }}>
      <h1>Welcome to ProjectSensei UI</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </main>
  );
}
