type Props = { label: string; value: string; delta?: string };
export default function KpiCard({ label, value, delta }: Props) {
  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
      <p className="text-xs text-neutral-400">{label}</p>
      <div className="mt-2 flex items-end gap-2">
        <span className="text-2xl font-semibold">{value}</span>
        {delta && <span className="text-xs text-emerald-400">{delta}</span>}
      </div>
    </div>
  );
}
