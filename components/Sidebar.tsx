export default function Sidebar() {
  const items = [
    { name: "Overview" },
    { name: "Analytics" },
    { name: "Projects" },
    { name: "Settings" },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="px-4 pt-5 pb-4">
        <div className="text-lg font-semibold text-white">ProjectSensei</div>
        <p className="mt-1 text-xs text-neutral-400">Dashboard</p>
        <div className="mt-4">
          <input
            placeholder="Search…"
            className="w-full rounded-xl border border-white/10 bg-neutral-900/40 px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
        </div>
      </div>

      <nav className="px-2 space-y-1">
        {items.map((it) => (
          <button
            key={it.name}
            className="w-full text-left rounded-xl px-3 py-2 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
          >
            {it.name}
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-neutral-400">
          <div className="text-neutral-300">Usage</div>
          <div className="mt-2 h-2 w-full rounded-full bg-white/10">
            <div className="h-2 w-2/3 rounded-full bg-white/40" />
          </div>
          <div className="mt-1">67% of plan</div>
        </div>
      </div>
    </div>
  );
}
