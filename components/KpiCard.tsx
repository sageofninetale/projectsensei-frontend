type Props = { label: string; value: string; delta: string };

export default function KpiCard({ label, value, delta }: Props) {
  const isUp = delta.trim().startsWith("+");
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <p className="text-sm text-neutral-400">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-white">{value}</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full border ${
            isUp
              ? "border-emerald-400/30 text-emerald-300 bg-emerald-400/10"
              : "border-rose-400/30 text-rose-300 bg-rose-400/10"
          }`}
        >
          {delta}
        </span>
      </div>
    </div>
  );
}
