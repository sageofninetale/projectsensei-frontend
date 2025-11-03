"use client";

import { useEffect, useMemo, useState } from "react";

type Health = { ok: boolean; service: string; version: string } | null;
type PlanResp = { steps: string[]; note?: string } | null;

export default function Page() {
  // Public base URL for your backend (set in Vercel env as NEXT_PUBLIC_API_BASE)
  const API_BASE = useMemo(
    () => process.env.NEXT_PUBLIC_API_BASE ?? "",
    []
  );

  const [health, setHealth] = useState<Health>(null);
  const [loadingHealth, setLoadingHealth] = useState(false);

  const [goal, setGoal] = useState("Ship preview flow end-to-end");
  const [plan, setPlan] = useState<PlanResp>(null);
  const [running, setRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!API_BASE) return;
    const run = async () => {
      try {
        setLoadingHealth(true);
        const res = await fetch(`${API_BASE}/health`, { cache: "no-store" });
        const data = await res.json();
        setHealth(data);
      } catch (e:any) {
        setError(e?.message ?? "Health check failed");
      } finally {
        setLoadingHealth(false);
      }
    };
    run();
  }, [API_BASE]);

  const runPlan = async () => {
    setError(null);
    setRunning(true);
    setPlan(null);
    try {
      const res = await fetch(`${API_BASE}/plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal })
      });
      const data = await res.json();
      setPlan(data);
    } catch (e:any) {
      setError(e?.message ?? "Plan failed");
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          🚀 ProjectSensei — <span style={{color:"var(--accent)"}}>LIVE PREVIEW</span>
        </h1>
        <p className="muted">Playful launchpad UI (Next.js) with health checks and a plan runner.</p>
      </header>

      {/* Health */}
      <section className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Backend health</h2>
          <span className="pill mono">{API_BASE || "API base not set"}</span>
        </div>
        <div className="mt-4 mono">
          {loadingHealth ? (
            <div>Checking…</div>
          ) : health ? (
            <pre>{JSON.stringify(health, null, 2)}</pre>
          ) : (
            <div className="muted">No response yet.</div>
          )}
        </div>
      </section>

      {/* Plan Runner */}
      <section className="card p-6">
        <h2 className="text-xl font-bold mb-4">Create a plan</h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            className="flex-1 border rounded-lg px-3 py-2"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="What should Sensei plan?"
          />
          <button className="btn btn-primary" onClick={runPlan} disabled={running || !API_BASE}>
            {running ? "Thinking…" : "Run Plan"}
          </button>
        </div>
        {error && <p className="text-red-600 mt-3">{error}</p>}
        {plan && (
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Plan</h3>
            <ol className="list-decimal ml-6">
              {plan.steps?.map((s, i) => <li key={i}>{s}</li>)}
            </ol>
            {plan.note && <p className="muted mt-2">{plan.note}</p>}
          </div>
        )}
      </section>

      <footer className="muted text-sm">
        Preview deployments auto-build on every PR ✅
      </footer>
    </div>
  );
}
