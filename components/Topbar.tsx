"use client";
import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between border-b border-neutral-800 px-4 md:px-6 bg-neutral-950/60 backdrop-blur">
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4 text-neutral-400" />
        <input
          placeholder="Search…"
          className="bg-transparent outline-none text-sm text-neutral-200 placeholder:text-neutral-500"
        />
      </div>
      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-neutral-400 hover:text-white cursor-pointer" />
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-500" />
      </div>
    </header>
  );
}
