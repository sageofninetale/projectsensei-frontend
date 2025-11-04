import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import KpiCard from "@/components/KpiCard";

export default function Home() {
  return (
    <div className="min-h-screen grid md:grid-cols-[16rem_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Topbar />
        <main className="p-4 md:p-6 space-y-6">
          {/* KPI row */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard label="Active Users" value="12,480" delta="+3.2%" />
            <KpiCard label="Sessions" value="54,201" delta="+1.1%" />
            <KpiCard label="Conversion" value="4.8%" delta="+0.4%" />
            <KpiCard label="Revenue" value="£28,930" delta="+6.9%" />
          </section>

          {/* Main content */}
          <section className="grid lg:grid-cols-3 gap-4">
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4 lg:col-span-2">
              <h3 className="text-sm text-neutral-300">Traffic (last 7 days)</h3>
              <div className="mt-4 h-56 grid place-items-center text-neutral-500">
                {/* Chart placeholder — plug in Recharts later */}
                <span className="text-sm">Chart placeholder</span>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
              <h3 className="text-sm text-neutral-300">Top Sources</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex justify-between"><span>Google</span><span className="text-neutral-400">42%</span></li>
                <li className="flex justify-between"><span>Direct</span><span className="text-neutral-400">29%</span></li>
                <li className="flex justify-between"><span>Referrals</span><span className="text-neutral-400">18%</span></li>
                <li className="flex justify-between"><span>Social</span><span className="text-neutral-400">11%</span></li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
