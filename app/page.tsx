export default function Page() {
  return (
    <main style={{ padding: 40 }}>
      <h1>🚀 ProjectSensei — LIVE PREVIEW Test!</h1>
      <p>This is the lightweight landing preview</p>
      <h3>Backend health:</h3>
      <p>Checking…</p>
      <pre>{`{ "ok": true, "service": "projectsensei-actions", "version": "0.0.2" }`}</pre>
    </main>
  );
}
