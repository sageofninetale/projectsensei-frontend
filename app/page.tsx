import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import KpiCard from "@/components/KpiCard";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-[16rem_1fr]">
      {/* Sidebar */}
      <aside className="hidden md:block border-r border-white/5 bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
        <Sidebar />
      </aside>

      {/* Main column */}
      <div className="flex flex-col">
        <header className="sticky top-0 z-20 border-b border-white/5 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
          <Topbar />
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="mx-auto w-full max-w-7xl space-y-8">
            {/* KPIs */}
            <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <KpiCard label="Active Users" value="12,480" delta="+3.2%" />
              <KpiCard label="Sessions" value="54,201" delta="+1.1%" />
              <KpiCard label="Conversion" value="4.8%" delta="+0.4%" />
              <KpiCard label="Revenue" value="£28,930" delta="+6.9%" />
            </section>

            {/* Content grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <h3 className="text-base/6 font-medium text-white">Traffic (last 7 days)</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Replace this placeholder with a chart later.
                </p>
                <div className="mt-6 h-60 rounded-xl bg-gradient-to-tr from-neutral-800 to-neutral-900/70 ring-1 ring-white/5" />
              </div>

              {/* Sources */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
                <h3 className="text-base/6 font-medium text-white">Top Sources</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    { name: "Google", v: 42 },
                    { name: "Direct", v: 29 },
                    { name: "Referrals", v: 18 },
                    { name: "Social", v: 11 },
                  ].map((s) => (
                    <li key={s.name} className="flex items-center justify-between">
                      <span className="text-neutral-300">{s.name}</span>
                      <span className="text-sm text-neutral-400">{s.v}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Table placeholder */}
            <section className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex items-center justify-between">
                <h3 className="text-base/6 font-medium text-white">Recent Projects</h3>
                <button className="inline-flex items-center rounded-lg border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:bg-white/5">
                  View all
                </button>
              </div>
              <div className="mt-4 h-32 rounded-xl bg-neutral-900/80 ring-1 ring-white/5" />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
