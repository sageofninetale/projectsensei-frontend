"use client";
import { Home, BarChart3, Settings, Layers } from "lucide-react";

const nav = [
  { label: "Overview", icon: Home },
  { label: "Analytics", icon: BarChart3 },
  { label: "Projects", icon: Layers },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-neutral-800 bg-neutral-950/60 backdrop-blur">
      <div className="h-16 px-6 flex items-center text-lg font-semibold">ProjectSensei</div>
      <nav className="px-2 py-3 space-y-1">
        {nav.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-900"
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
