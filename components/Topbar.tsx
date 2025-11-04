export default function Topbar() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold text-white">Overview</h1>
          <p className="text-xs text-neutral-400">Friday snapshot • UTC</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-neutral-300 hover:bg-white/5">
            Export
          </button>
          <button className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15">
            New Project
          </button>
        </div>
      </div>
    </div>
  );
}
