export default function Page() {
  const health = { ok: true, service: 'projectsensei-actions', version: '0.0.2' };
  return (
    <section>
      <h1>✅ ProjectSensei — Frontend Preview</h1>
      <p>This is the lightweight landing preview.</p>
      <h3>Backend health:</h3>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </section>
  );
}
